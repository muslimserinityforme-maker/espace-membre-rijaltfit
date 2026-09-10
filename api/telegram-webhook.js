// Reçoit les mises à jour du bot Telegram (webhook, voir README pour la mise
// en route). Le client tape "/start SON-CODE" dans le bot pour relier son
// compte Telegram à son code d'accès Premium — le bot enregistre alors son
// chat_id dans la Google Sheet (colonne TelegramChatId), ce qui permet
// ensuite d'envoyer les rappels quotidiens (api/send-daily-telegram.js).

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
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const update = req.body || {};
  const message = update.message;

  if (!message || !message.text) {
    res.status(200).json({ ok: true });
    return;
  }

  const chatId = message.chat.id;
  const text = message.text.trim();

  if (text.toLowerCase().startsWith('/start')) {
    const code = text.slice(6).trim();

    if (!code) {
      await sendTelegramMessage(chatId, "Salam ! Envoie-moi ton code d'accès Rijal Fit pour activer tes rappels quotidiens (ex : /start RIJAL-XXXXXX).");
      res.status(200).json({ ok: true });
      return;
    }

    if (!process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      console.error('telegram-webhook: GOOGLE_SHEETS_WEBHOOK_URL non configurée.');
      res.status(200).json({ ok: true });
      return;
    }

    try {
      const verifyUrl = `${process.env.GOOGLE_SHEETS_WEBHOOK_URL}?code=${encodeURIComponent(code)}`;
      const verifyRes = await fetch(verifyUrl);
      const verifyData = await verifyRes.json();

      if (!verifyData.valid || (verifyData.formule || '').toLowerCase() !== 'premium') {
        await sendTelegramMessage(chatId, "Ce code n'est pas reconnu comme un accès Premium. Vérifie-le ou contacte Matthieu.");
        res.status(200).json({ ok: true });
        return;
      }

      const linkRes = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'link-telegram', code, chatId: String(chatId) }),
      });
      const linkData = await linkRes.json();

      if (linkData.ok) {
        await sendTelegramMessage(chatId, "C'est activé ! Tu recevras ici le lien du jour dès qu'il se débloque. Qu'Allah facilite ton chemin.");
      } else {
        await sendTelegramMessage(chatId, 'Une erreur est survenue, réessaie dans un instant.');
      }
    } catch (err) {
      console.error('telegram-webhook: erreur', err);
      await sendTelegramMessage(chatId, 'Une erreur est survenue, réessaie dans un instant.');
    }

    res.status(200).json({ ok: true });
    return;
  }

  res.status(200).json({ ok: true });
};
