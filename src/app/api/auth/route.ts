import { createSessionClient } from "@/lib/supabase/server";
import { assertSameOrigin, CommerceError } from "@/lib/commerce/validation";
import { errorResponse, json, readJson } from "@/lib/commerce/http";

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    const input = await readJson(request) as Record<string, unknown> | null;
    if (!input || typeof input !== "object") throw new CommerceError("Invalid request.");
    const client = await createSessionClient();
    if (input.action === "signout") {
      const { error } = await client.auth.signOut();
      if (error) throw new CommerceError("Sign-out failed. Please try again.", 503);
      return json({ ok: true });
    }
    if (typeof input.email !== "string" || input.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) throw new CommerceError("Enter a valid email address.");
    const email = input.email.trim().toLowerCase();
    if (input.action === "send-code") {
      const { error } = await client.auth.signInWithOtp({ email, options: { shouldCreateUser: true } });
      if (error) throw new CommerceError("Unable to send a code. Please wait a minute and try again.", 429);
      return json({ ok: true });
    }
    if (input.action === "verify-code" && typeof input.token === "string" && /^\d{6,8}$/.test(input.token)) {
      const { error } = await client.auth.verifyOtp({ email, token: input.token, type: "email" });
      if (error) throw new CommerceError("The code is invalid or expired. Please request another code.", 401);
      return json({ ok: true });
    }
    throw new CommerceError("Invalid authentication request.");
  } catch (error) { return errorResponse(error); }
}
