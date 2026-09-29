import { AuthForm } from "@/components/commerce/auth-form";
import { CommerceShell, Unavailable } from "@/components/commerce/shell";
import { supabaseConfig } from "@/lib/supabase/config";
import { safeReturnPath } from "@/lib/commerce/validation";
export const metadata = { title: "Sign in", robots: { index: false, follow: false } };
export default async function AuthPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  return <CommerceShell title="Your UZYNTRA account">{supabaseConfig() ? <AuthForm next={safeReturnPath(next)} /> : <Unavailable />}</CommerceShell>;
}
