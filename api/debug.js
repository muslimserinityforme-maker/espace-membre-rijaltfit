// Endpoint de diagnostic temporaire — à supprimer une fois le problème
// Supabase résolu. Ne contient aucun secret dans sa réponse (juste des
// booléens de présence + le message d'erreur technique).

module.exports = async (req, res) => {
  const report = {
    hasSupabaseUrl: !!process.env.SUPABASE_URL,
    hasSupabaseSecretKey: !!process.env.SUPABASE_SECRET_KEY,
    supabaseUrlFull: JSON.stringify(process.env.SUPABASE_URL || ''),
    supabaseUrlLength: (process.env.SUPABASE_URL || '').length,
    secretKeyPrefix: (process.env.SUPABASE_SECRET_KEY || '').slice(0, 12),
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
  };

  try {
    const dns = require('dns').promises;
    const host = (process.env.SUPABASE_URL || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
    report.dnsLookup = await dns.lookup(host).catch(function (e) { return { dnsError: String(e && e.message) }; });
    report.dnsLookupGoogle = await dns.lookup('google.com').catch(function (e) { return { dnsError: String(e && e.message) }; });
    report.dnsLookupSupabaseCo = await dns.lookup('supabase.co').catch(function (e) { return { dnsError: String(e && e.message) }; });
  } catch (e) {
    report.dnsCheckThrew = String(e && e.message);
  }

  try {
    const fetchRes = await fetch('https://' + (process.env.SUPABASE_URL || '').replace(/^https?:\/\//, '') + '/rest/v1/', {
      headers: { apikey: process.env.SUPABASE_SECRET_KEY || '' },
    });
    report.directFetchStatus = fetchRes.status;
  } catch (e) {
    report.directFetchError = String(e && e.message);
  }

  try {
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, { auth: { persistSession: false } });
    const { data, error } = await supabase.from('nutrition_profiles').select('code').limit(1);
    report.queryError = error ? { message: error.message, code: error.code, details: error.details, hint: error.hint } : null;
    report.queryData = data;
  } catch (err) {
    report.thrownError = String(err && err.message);
  }

  res.status(200).json(report);
};
