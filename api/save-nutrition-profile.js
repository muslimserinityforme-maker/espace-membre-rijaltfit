// Enregistre le profil nutritionnel du membre (calculé côté client par
// nutrition-protocol.js) dans Supabase, indexé par son code d'accès. Ce
// profil sera ensuite relu côté serveur (jamais depuis le navigateur) par
// api/analyze-meal.js — on ne fait jamais confiance à des calories/macros
// envoyées directement par le client au moment de l'analyse.

const { getSupabase } = require('./_lib/supabase');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Méthode non autorisée.' });
    return;
  }

  const body = req.body || {};
  const code = (body.code || '').toString().trim();
  if (!code) {
    res.status(400).json({ error: 'Code manquant.' });
    return;
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('nutrition_profiles').upsert({
      code,
      age: body.age || null,
      poids: body.poids || null,
      taille: body.taille || null,
      taux_masse_grasse: body.tauxMasseGrasse || null,
      protocol_id: body.protocolId || null,
      objectif_id: body.objectifId || null,
      niveau_activite: body.niveauActivite || null,
      calories_jour: body.caloriesJour || null,
      proteines_g: body.proteinesG || null,
      glucides_g: body.glucidesG || null,
      lipides_g: body.lipidesG || null,
      updated_at: new Date().toISOString(),
    });

    if (error) throw error;
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('save-nutrition-profile: erreur', err);
    res.status(500).json({ error: "Échec de l'enregistrement." });
  }
};
