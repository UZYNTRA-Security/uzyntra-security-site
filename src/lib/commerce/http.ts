import { CommerceError } from "./validation";

export function json(data: unknown, status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "private, no-store" } });
}
export function errorResponse(error: unknown) {
  if (error instanceof CommerceError) return json({ error: error.message }, error.status);
  return json({ error: "The request could not be completed. Please try again." }, 500);
}
export async function readJson(request: Request): Promise<unknown> {
  if (!request.headers.get("content-type")?.startsWith("application/json")) throw new CommerceError("JSON required.", 415);
  // Bound actual bytes, not just the caller-controlled Content-Length header.
  const reader = request.body?.getReader();
  if (!reader) throw new CommerceError("Request body required.");
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > 8192) { await reader.cancel(); throw new CommerceError("Request too large.", 413); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  try { return JSON.parse(new TextDecoder().decode(bytes)); }
  catch { throw new CommerceError("Invalid JSON."); }
}
