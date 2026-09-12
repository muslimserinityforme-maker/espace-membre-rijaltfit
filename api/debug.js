const dns = require('dns').promises;

module.exports = async (req, res) => {
  const out = {
    supabaseUrlFull: JSON.stringify(process.env.SUPABASE_URL),
    supabaseUrlLength: (process.env.SUPABASE_URL || '').length,
    secretKeyPrefix: (process.env.SUPABASE_SECRET_KEY || '').slice(0, 12),
  };

  try {
    const host = new URL(process.env.SUPABASE_URL).host;
    out.host = host;
    out.dnsLookup = await dns.lookup(host).catch((e) => ({ dnsError: e.message }));
  } catch (e) {
    out.dnsLookupSetupError = e.message;
  }

  try {
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, { auth: { persistSession: false } });
    const { data, error } = await supabase.from('nutrition_profiles').select('*').limit(1);
    out.queryOk = !error;
    out.queryError = error ? JSON.stringify(error) : null;
    out.queryDataLength = data ? data.length : null;
  } catch (e) {
    out.queryThrew = e.message;
  }

  res.status(200).json(out);
};
