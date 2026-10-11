// TEMPORAIRE — mesure des latences Gemini. À supprimer juste après usage.
const { buildFacileMethodPrompt } = require('./_lib/facile-method');
const MODELS = ['gemini-3.8-flash', 'gemini-3.7-flash', 'gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-3.1-flash-lite', 'gemini-3.5-flash-lite'];
module.exports = async (req, res) => {
  const photo = (req.body || {}).photoBase64;
  if (!photo) { res.status(400).json({ error: 'photoBase64 manquant' }); return; }
  const schema = {
    type: 'object',
    properties: {
      analyzable: { type: 'boolean' }, unclearReason: { type: 'string' },
      foods: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, estimatedQuantity: { type: 'number' }, unit: { type: 'string' }, confidence: { type: 'string', enum: ['low', 'medium', 'high'] } }, required: ['name'] } },
      caloriesMin: { type: 'number' }, caloriesMax: { type: 'number' },
      macros: { type: 'object', properties: { protein: { type: 'number' }, carbs: { type: 'number' }, fat: { type: 'number' } } },
      facileAnalysis: { type: 'object', properties: { protein: { type: 'string' }, carbs: { type: 'string' }, vegetables: { type: 'string' }, fat: { type: 'string' } } },
      advice: { type: 'string' },
    },
    required: ['analyzable'],
  };
  const body = JSON.stringify({
    systemInstruction: { parts: [{ text: buildFacileMethodPrompt() + '\n\nAnalyse le repas du membre selon F.A.C.I.L.E. et donne un conseil personnalisé.' }] },
    contents: [{ role: 'user', parts: [{ text: 'Profil : objectif perte de graisse, 2082 kcal/jour.' }, { inlineData: { mimeType: 'image/jpeg', data: photo } }] }],
    generationConfig: { responseMimeType: 'application/json', responseSchema: schema },
  });
  const out = {};
  await Promise.all(MODELS.map(async (m) => {
    const t0 = Date.now();
    try {
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + m + ':generateContent?key=' + process.env.GEMINI_API_KEY, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, signal: AbortSignal.timeout(28000) });
      const t = await r.text();
      out[m] = { status: r.status, ms: Date.now() - t0, snippet: r.ok ? 'ok ' + t.length + 'B' : t.slice(0, 120) };
    } catch (e) { out[m] = { threw: e.message, ms: Date.now() - t0 }; }
  }));
  res.status(200).json(out);
};
