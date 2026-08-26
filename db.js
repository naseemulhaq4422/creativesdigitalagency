const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "https://auwhkdyukmdgyanovptg.supabase.co";
const supabaseKey = process.env.SUPABASE_API_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_placeholder";

let supabase;
try {
  supabase = createClient(supabaseUrl, supabaseKey);
} catch (e) {
  supabase = {
    from: () => ({ select: () => Promise.resolve({ data: [], error: null }), insert: () => Promise.resolve({ error: null }) })
  };
}

module.exports = supabase;
