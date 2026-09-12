module.exports = async (req, res) => {
  const tinyJpeg = '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
  const schema = {
    type: 'object',
    properties: {
      analyzable: { type: 'boolean' },
      foods: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' } }, required: ['name'] } },
    },
    required: ['analyzable'],
  };
  try {
    const geminiRes = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=' + process.env.GEMINI_API_KEY,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { role: 'system', parts: [{ text: 'Tu renvoies uniquement le JSON demande.' }] },
          contents: [{ role: 'user', parts: [{ text: 'Analyse cette image.' }, { inlineData: { mimeType: 'image/jpeg', data: tinyJpeg } }] }],
          generationConfig: { responseMimeType: 'application/json', responseSchema: schema },
        }),
      }
    );
    res.status(200).json({ status: geminiRes.status, body: (await geminiRes.text()).slice(0, 1500) });
  } catch (e) {
    res.status(200).json({ threw: e.message });
  }
};
