import { getCatalog } from "@/lib/commerce/catalog";
import { json } from "@/lib/commerce/http";
import { cookies, headers } from "next/headers";
import { defaultCurrency, isCurrency } from "@/lib/commerce/validation";
export async function GET() {
  const catalog = await getCatalog();
  const preference = (await cookies()).get("uzyntra-currency")?.value;
  // Use geolocation only when the deployment is known to overwrite the header.
  const country = process.env.VERCEL === "1" ? (await headers()).get("x-vercel-ip-country") : null;
  return json({ ...catalog, currency: isCurrency(preference) ? preference : defaultCurrency(country) }, catalog.available ? 200 : 503);
}
