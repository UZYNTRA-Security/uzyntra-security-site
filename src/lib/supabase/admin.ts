import "server-only";
import { createClient } from "@supabase/supabase-js";
import { supabaseConfig } from "./config";
export function createAdminClient() {
  const config = supabaseConfig();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!config || !key) return null;
  return createClient(config.url,key,{auth:{persistSession:false,autoRefreshToken:false}});
}
