import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://auwhkdyukmdgyanovptg.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_placeholder";

export const createClient = (cookieStore?: Awaited<ReturnType<typeof cookies>>) => {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
      return {
        from: () => ({
          select: () => Promise.resolve({ data: [], error: null }),
          insert: () => Promise.resolve({ error: null }),
        }),
        auth: { getUser: () => Promise.resolve({ data: { user: null }, error: null }) },
      } as any;
    }

    return createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll() {
          return cookieStore ? cookieStore.getAll() : [];
        },
        setAll(cookiesToSet) {
          try {
            if (cookieStore) {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              );
            }
          } catch {
            // Ignored in SSR rendering
          }
        },
      },
    });
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
