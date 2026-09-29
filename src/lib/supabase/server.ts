import "server-only";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { supabaseConfig } from "./config";
import { CommerceError } from "@/lib/commerce/validation";

export async function createSessionClient() {
  const config = supabaseConfig();
  if (!config) throw new CommerceError("Accounts and checkout are not available yet. Please contact admissions.", 503);
  const cookieStore = await cookies();
  return createServerClient(config.url, config.key, {
    cookieOptions: { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" },
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll(values) {
        try { values.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); }
        catch { /* Server Components cannot set cookies. The auth proxy refreshes them. */ }
      },
    },
  });
}
export function createCatalogClient() {
  const config = supabaseConfig();
  if (!config) return null;
  return createClient(config.url, config.key, { auth: { persistSession: false, autoRefreshToken: false }, global: { fetch: (url, options) => fetch(url, { ...options, cache: "no-store" }) } });
}
