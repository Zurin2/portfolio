import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Minimal server-side client for anonymous public reads (public-read RLS tables).
// No auth, no cookies, no @supabase/ssr needed for this portfolio.
export function getSupabasePublic(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}
