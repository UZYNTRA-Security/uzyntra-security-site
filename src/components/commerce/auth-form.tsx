"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function AuthForm({ next }: { next: string }) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  async function submit(event: React.FormEvent) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const response = await fetch("/api/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: sent ? "verify-code" : "send-code", email, token }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      if (sent) { router.replace(next); router.refresh(); }
      else { setSent(true); setMessage("Check your email for a sign-in code. It also verifies a new account."); }
    } catch (error) { setMessage(error instanceof Error ? error.message : "Please try again."); }
    finally { setBusy(false); }
  }
  return <form onSubmit={submit} className="surface-card max-w-lg space-y-5 p-6">
    <p>Sign in or create an account with your email address.</p>
    <label className="block space-y-2"><span>Email address</span><input className="w-full rounded-lg border border-slate-400 bg-transparent p-3" type="email" autoComplete="email" required maxLength={254} value={email} disabled={sent || busy} onChange={event => setEmail(event.target.value)} /></label>
    {sent && <label className="block space-y-2"><span>Email code</span><input className="w-full rounded-lg border border-slate-400 bg-transparent p-3" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6,8}" minLength={6} maxLength={8} required value={token} onChange={event => setToken(event.target.value)} /></label>}
    <p role="status" className="text-sm">{message}</p>
    <div className="flex flex-wrap gap-3"><Button disabled={busy}>{busy ? "Please wait…" : sent ? "Verify and sign in" : "Send sign-in code"}</Button>
    {sent && <Button type="button" variant="outline" disabled={busy} onClick={() => { setSent(false); setToken(""); setMessage(""); }}>Use another email / resend</Button>}</div>
  </form>;
}
export function SignOutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  return <div><Button variant="outline" disabled={busy} onClick={async () => {
    setBusy(true);
    try {
      const response = await fetch("/api/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "signout" }) });
      if (!response.ok) throw new Error("Unable to sign out. Please try again.");
      router.replace("/auth"); router.refresh();
    } catch { setMessage("Unable to sign out. Please try again."); }
    finally { setBusy(false); }
  }}>Sign out</Button><p role="status">{message}</p></div>;
}
