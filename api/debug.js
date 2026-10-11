// TEMPORAIRE — diagnostic Gemini. À supprimer juste après usage.
module.exports = async (req, res) => {
  const key = process.env.GEMINI_API_KEY;
  const out = { keyPresent: !!key };
  try {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=' + key, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: 'Réponds juste: ok' }] }] }),
    });
    out.currentModel = { status: r.status, body: (await r.text()).slice(0, 600) };
  } catch (e) {
    out.currentModel = { threw: e.message };
  }
  try {
    const m = await fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200&key=' + key);
    const j = await m.json();
    out.models = (j.models || [])
      .filter((x) => (x.supportedGenerationMethods || []).includes('generateContent') && /flash/i.test(x.name))
      .map((x) => x.name.replace('models/', ''));
    if (!j.models) out.modelsRaw = JSON.stringify(j).slice(0, 300);
  } catch (e) {
    out.modelsThrew = e.message;
  }
  res.status(200).json(out);
};
