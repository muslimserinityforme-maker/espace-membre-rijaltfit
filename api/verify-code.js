// Vérifie un code d'accès côté serveur (jamais de liste de codes exposée au
// navigateur) en interrogeant la Google Sheet via le webhook Apps Script.
// Même pattern que bilan-sens-rijalfit/api/log-lead.js (rate limit basique,
// pas de dépendance externe). Renvoie aussi la formule (Starter/Premium) et
// l'état du Programme jour par jour (dateDebut/accesEtendu) pour que le
// navigateur sache quoi débloquer.

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 20;
const rateLimitStore = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) return String(forwarded).split(',')[0].trim();
  return (req.socket && req.socket.remoteAddress) || 'unknown';
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Méthode non autorisée.' });
    return;
  }

  const clientIp = getClientIp(req);
  if (isRateLimited(clientIp)) {
    res.status(429).json({ error: 'Trop de tentatives. Réessaie dans une heure.' });
    return;
  }

  const code = ((req.body && req.body.code) || '').toString().trim();
  if (!code) {
    res.status(400).json({ error: 'Code manquant.' });
    return;
  }

  if (!process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    console.error('verify-code: GOOGLE_SHEETS_WEBHOOK_URL non configurée.');
    res.status(500).json({ error: 'Vérification indisponible pour le moment.' });
    return;
  }

  try {
    const url = `${process.env.GOOGLE_SHEETS_WEBHOOK_URL}?code=${encodeURIComponent(code)}`;
    const sheetRes = await fetch(url);
    const data = await sheetRes.json();

    if (data && data.valid === true) {
      res.status(200).json({
        valid: true,
        origin: data.origin || null,
        formule: data.formule || 'Starter',
        dateDebut: data.dateDebut || null,
        accesEtendu: !!data.accesEtendu,
      });
    } else {
      res.status(200).json({ valid: false });
    }
  } catch (err) {
    console.error('verify-code: échec vérification Google Sheets', err);
    res.status(502).json({ error: 'Vérification impossible pour le moment.' });
  }
};
