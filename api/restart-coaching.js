// « Je redémarre » : remet la date de début du membre à aujourd'hui dans la
// Google Sheet (via Apps Script) pour relancer son accompagnement à zéro.
// L'éligibilité (6 mois écoulés, accès actif) est revérifiée côté Apps Script,
// jamais côté navigateur. Même pattern que verify-code.js (rate limit simple).

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 10;
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

  if (isRateLimited(getClientIp(req))) {
    res.status(429).json({ error: 'Trop de tentatives. Réessaie dans une heure.' });
    return;
  }

  const code = ((req.body && req.body.code) || '').toString().trim();
  if (!code) {
    res.status(400).json({ error: 'Code manquant.' });
    return;
  }

  if (!process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    console.error('restart-coaching: GOOGLE_SHEETS_WEBHOOK_URL non configurée.');
    res.status(500).json({ error: 'Redémarrage indisponible pour le moment.' });
    return;
  }

  try {
    const sheetRes = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'restart-coaching', code }),
    });
    const data = await sheetRes.json();

    if (data && data.ok === true) {
      res.status(200).json({ ok: true, dateDebut: data.dateDebut || null });
    } else {
      res.status(200).json({ ok: false, error: (data && data.error) || 'Redémarrage impossible.' });
    }
  } catch (err) {
    console.error('restart-coaching: échec', err);
    res.status(502).json({ error: 'Redémarrage impossible pour le moment.' });
  }
};
