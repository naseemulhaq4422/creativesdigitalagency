const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "https://auwhkdyukmdgyanovptg.supabase.co";
const supabaseKey = process.env.SUPABASE_API_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_IgS7uHtEg3t_6HJ1wfPvew_y4cQd_yj";

const supabase = createClient(supabaseUrl, supabaseKey);

// Test the connection
if (typeof window === "undefined") {
  supabase
    .from("inquiries")
    .select("*")
    .limit(1)
    .then(({ data, error }) => {
      if (error) {
        // Fallback check on test table if inquiries doesn't exist yet
        console.log("Supabase initialized. Note:", error.message);
      } else {
        console.log("Supabase connected successfully:", data);
      }
    })
    .catch((err) => {
      console.log("Supabase initialization check:", err.message);
    });
}

module.exports = supabase;
