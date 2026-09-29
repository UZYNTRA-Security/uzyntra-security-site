import "server-only";
import { createSessionClient } from "@/lib/supabase/server";
import { CommerceError } from "./validation";

export async function requireCustomer() {
  const db = await createSessionClient();
  const { data: { user }, error } = await db.auth.getUser();
  if (error || !user || !user.email_confirmed_at) throw new CommerceError("Please sign in with a verified email address.", 401);
  return { db, user };
}
export async function requireAdmin() {
  const session = await requireCustomer();
  const { data, error } = await session.db.from("user_roles").select("role").eq("user_id", session.user.id).single();
  if (error || data?.role !== "admin") throw new CommerceError("Administrator access required.", 403);
  return session;
}
