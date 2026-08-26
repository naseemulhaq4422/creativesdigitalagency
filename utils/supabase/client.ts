import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://auwhkdyukmdgyanovptg.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_placeholder";

export const createClient = () => {
  try {
    return createBrowserClient(supabaseUrl, supabaseKey);
  } catch (e) {
    return {
      from: () => ({
        select: () => Promise.resolve({ data: [], error: null }),
        insert: () => Promise.resolve({ error: null }),
      }),
      auth: { getUser: () => Promise.resolve({ data: { user: null }, error: null }) },
    } as any;
  }
};
