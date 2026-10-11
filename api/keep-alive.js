// Déclenché une fois par jour par Vercel Cron (voir vercel.json). Fait une
// lecture minuscule sur Supabase pour que le projet gratuit ne soit jamais
// mis en pause pour inactivité (pause automatique après 7 jours sans activité).

const { getSupabase } = require('./_lib/supabase');

module.exports = async (req, res) => {
  if (process.env.CRON_SECRET && req.headers['authorization'] !== `Bearer ${process.env.CRON_SECRET}`) {
    res.status(401).json({ error: 'Non autorisé.' });
    return;
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('nutrition_profiles').select('code').limit(1);
    if (error) throw error;
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('keep-alive: erreur Supabase', err);
    res.status(500).json({ ok: false });
  }
};
