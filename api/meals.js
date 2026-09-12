// Gère les repas enregistrés d'un membre : ajouter (après validation de
// l'analyse par le membre), lister ceux du jour, supprimer une entrée.
// Les photos sont stockées dans un bucket Supabase Storage privé
// ("repas-photos") — jamais accessibles publiquement, uniquement via une
// URL signée générée à la demande.

const { getSupabase } = require('./_lib/supabase');

function startOfTodayIso() {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  return d.toISOString();
}

async function handleGet(req, res, supabase) {
  const code = (req.query.code || '').toString().trim();
  if (!code) {
    res.status(400).json({ error: 'Code manquant.' });
    return;
  }

  const { data, error } = await supabase
    .from('repas')
    .select('*')
    .eq('code', code)
    .gte('created_at', startOfTodayIso())
    .order('created_at', { ascending: true });

  if (error) throw error;

  const meals = await Promise.all(
    (data || []).map(async function (m) {
      let photoUrl = null;
      if (m.photo_path) {
        const { data: signed } = await supabase.storage.from('repas-photos').createSignedUrl(m.photo_path, 3600);
        photoUrl = signed && signed.signedUrl;
      }
      return { ...m, photo_url: photoUrl };
    })
  );

  res.status(200).json({ ok: true, meals });
}

async function handlePost(req, res, supabase) {
  const body = req.body || {};
  const code = (body.code || '').toString().trim();
  const analysis = body.analysis;

  if (!code || !analysis) {
    res.status(400).json({ error: 'Données manquantes.' });
    return;
  }

  let photoPath = null;
  if (body.photoBase64) {
    photoPath = code + '/' + Date.now() + '.jpg';
    const buffer = Buffer.from(body.photoBase64, 'base64');
    const { error: uploadError } = await supabase.storage
      .from('repas-photos')
      .upload(photoPath, buffer, { contentType: body.photoMimeType || 'image/jpeg' });
    if (uploadError) {
      console.error('meals: échec upload photo', uploadError);
      photoPath = null;
    }
  }

  const { data, error } = await supabase
    .from('repas')
    .insert({
      code,
      photo_path: photoPath,
      aliments: analysis.foods || [],
      calories_min: analysis.caloriesMin || null,
      calories_max: analysis.caloriesMax || null,
      proteines_g: analysis.macros && analysis.macros.protein,
      glucides_g: analysis.macros && analysis.macros.carbs,
      lipides_g: analysis.macros && analysis.macros.fat,
      analyse_facile: analysis.facileAnalysis || null,
      conseil: analysis.advice || null,
      quantites_connues: body.quantitesConnues || null,
      methode_version: body.methodVersion || null,
      note_contexte: body.noteContexte || null,
    })
    .select()
    .single();

  if (error) throw error;
  res.status(200).json({ ok: true, meal: data });
}

async function handleDelete(req, res, supabase) {
  const body = req.body || {};
  const code = (body.code || '').toString().trim();
  const id = (body.id || '').toString().trim();
  if (!code || !id) {
    res.status(400).json({ error: 'Données manquantes.' });
    return;
  }

  const { data: meal } = await supabase.from('repas').select('photo_path').eq('id', id).eq('code', code).maybeSingle();
  if (meal && meal.photo_path) {
    await supabase.storage.from('repas-photos').remove([meal.photo_path]);
  }

  const { error } = await supabase.from('repas').delete().eq('id', id).eq('code', code);
  if (error) throw error;
  res.status(200).json({ ok: true });
}

module.exports = async (req, res) => {
  try {
    const supabase = getSupabase();
    if (req.method === 'GET') return await handleGet(req, res, supabase);
    if (req.method === 'POST') return await handlePost(req, res, supabase);
    if (req.method === 'DELETE') return await handleDelete(req, res, supabase);
    res.status(405).json({ error: 'Méthode non autorisée.' });
  } catch (err) {
    console.error('meals: erreur', err);
    res.status(500).json({ error: 'Échec de l\'opération.' });
  }
};
