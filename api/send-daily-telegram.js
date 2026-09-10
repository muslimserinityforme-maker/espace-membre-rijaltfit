// Déclenché une fois par jour par Vercel Cron (voir vercel.json). Envoie à
// chaque client Premium relié à Telegram le lien du jour de programme qui
// vient de se débloquer aujourd'hui.

function computeJourCourant(dateDebutIso) {
  const debut = new Date(dateDebutIso + 'T00:00:00Z');
  const debutUTC = Date.UTC(debut.getUTCFullYear(), debut.getUTCMonth(), debut.getUTCDate());
  const now = new Date();
  const nowUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.floor((nowUTC - debutUTC) / 86400000) + 1;
}

async function sendTelegramMessage(chatId, text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

module.exports = async (req, res) => {
  // Vercel ajoute automatiquement "Authorization: Bearer <CRON_SECRET>" aux
  // appels déclenchés par vercel.json quand la variable CRON_SECRET est
  // définie — ça évite que n'importe qui déclenche l'envoi en visitant l'URL.
  if (process.env.CRON_SECRET && req.headers['authorization'] !== `Bearer ${process.env.CRON_SECRET}`) {
    res.status(401).json({ error: 'Non autorisé.' });
    return;
  }

  if (!process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    res.status(500).json({ error: 'GOOGLE_SHEETS_WEBHOOK_URL non configurée.' });
    return;
  }

  const siteUrl = process.env.SITE_URL || `https://${req.headers.host}`;

  try {
    const listUrl = `${process.env.GOOGLE_SHEETS_WEBHOOK_URL}?action=list-active-premium`;
    const listRes = await fetch(listUrl);
    const listData = await listRes.json();
    const rows = listData.rows || [];

    let sent = 0;
    for (const row of rows) {
      const jour = computeJourCourant(row.dateDebut);
      const bloqueApresJ90 = jour > 90 && !row.accesEtendu;
      if (jour < 1 || jour > 730 || bloqueApresJ90) continue;

      const lien = `${siteUrl}/programme.html?jour=${jour}`;
      await sendTelegramMessage(row.chatId, `Jour ${jour} disponible 🔓\n${lien}`);
      sent += 1;
    }

    res.status(200).json({ ok: true, sent });
  } catch (err) {
    console.error('send-daily-telegram: erreur', err);
    res.status(500).json({ error: "Échec de l'envoi." });
  }
};
