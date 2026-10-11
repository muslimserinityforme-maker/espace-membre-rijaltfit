// TEMPORAIRE — diagnostic Gemini. À supprimer juste après usage.
const { buildFacileMethodPrompt } = require('./_lib/facile-method');

module.exports = async (req, res) => {
  const key = process.env.GEMINI_API_KEY;
  const tiny = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=';
  const schema = {
    type: 'object',
    properties: {
      analyzable: { type: 'boolean' },
      unclearReason: { type: 'string' },
      foods: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, estimatedQuantity: { type: 'number' }, unit: { type: 'string' }, confidence: { type: 'string', enum: ['low', 'medium', 'high'] } }, required: ['name'] } },
      caloriesMin: { type: 'number' }, caloriesMax: { type: 'number' },
      macros: { type: 'object', properties: { protein: { type: 'number' }, carbs: { type: 'number' }, fat: { type: 'number' } } },
      facileAnalysis: { type: 'object', properties: { protein: { type: 'string' }, carbs: { type: 'string' }, vegetables: { type: 'string' }, fat: { type: 'string' } } },
      advice: { type: 'string' },
    },
    required: ['analyzable'],
  };
  const out = {};
  try {
    const prompt = buildFacileMethodPrompt();
    out.promptLength = prompt.length;
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=' + key, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: prompt + '\n\nAnalyse le repas. Si l\'image est floue, analyzable=false.' }] },
        contents: [{ role: 'user', parts: [{ text: 'Profil du membre : objectif perte de graisse, 2000 kcal.' }, { inlineData: { mimeType: 'image/jpeg', data: tiny } }] }],
        generationConfig: { responseMimeType: 'application/json', responseSchema: schema },
      }),
    });
    out.status = r.status;
    const txt = await r.text();
    try {
      const j = JSON.parse(txt);
      const c = j.candidates && j.candidates[0];
      out.finishReason = c && c.finishReason;
      out.parts = c && c.content && c.content.parts && c.content.parts.map((p) => ({ keys: Object.keys(p), text: (p.text || '').slice(0, 300) }));
      out.promptFeedback = j.promptFeedback;
      out.error = j.error;
      out.usage = j.usageMetadata;
    } catch (e) {
      out.rawBody = txt.slice(0, 800);
    }
  } catch (e) {
    out.threw = e.message;
  }
  res.status(200).json(out);
};
