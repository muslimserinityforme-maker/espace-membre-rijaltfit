// Client Supabase côté serveur uniquement (clé secrète = accès complet,
// contourne le RLS). Ne jamais importer ce fichier depuis du code exécuté
// dans le navigateur. Les fichiers/dossiers préfixés par "_" ne sont pas
// exposés comme routes par Vercel — ce module n'est donc pas accessible
// depuis l'extérieur.

const { createClient } = require('@supabase/supabase-js');

let client = null;

function getSupabase() {
  if (client) return client;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) {
    throw new Error('SUPABASE_URL / SUPABASE_SECRET_KEY non configurées.');
  }
  client = createClient(url, key, { auth: { persistSession: false } });
  return client;
}

module.exports = { getSupabase };
