// TEMPORAIRE — diagnostic des modèles Gemini. À supprimer juste après usage.
const { buildFacileMethodPrompt } = require('./_lib/facile-method');
const MODELS = ['gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-2.5-flash', 'gemini-flash-latest', 'gemini-3.7-flash'];
module.exports = async (req, res) => {
  const tiny = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=';
  const schema = { type: 'object', properties: { analyzable: { type: 'boolean' }, unclearReason: { type: 'string' }, foods: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, confidence: { type: 'string', enum: ['low', 'medium', 'high'] } }, required: ['name'] } } }, required: ['analyzable'] };
  const body = JSON.stringify({
    systemInstruction: { parts: [{ text: buildFacileMethodPrompt() }] },
    contents: [{ role: 'user', parts: [{ text: 'Analyse ce repas.' }, { inlineData: { mimeType: 'image/jpeg', data: tiny } }] }],
    generationConfig: { responseMimeType: 'application/json', responseSchema: schema },
  });
  const out = {};
  await Promise.all(MODELS.map(async (m) => {
    try {
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + m + ':generateContent?key=' + process.env.GEMINI_API_KEY, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
      const t = await r.text();
      out[m] = { status: r.status, snippet: r.ok ? 'ok' : t.slice(0, 200) };
    } catch (e) { out[m] = { threw: e.message }; }
  }));
  res.status(200).json(out);
};
