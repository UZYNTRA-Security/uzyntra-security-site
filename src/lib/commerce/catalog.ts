import "server-only";
import { cache } from "react";
import { createCatalogClient } from "@/lib/supabase/server";
import type { Offering } from "./types";

export const getCatalog = cache(async (): Promise<{ offerings: Offering[]; available: boolean }> => {
  const db = createCatalogClient();
  if (!db) return { offerings: [], available: false };
  const { data, error } = await db.from("offerings").select("id,slug,title,type,prices(id,currency,amount,region)").eq("active", true).order("title");
  if (error) return { offerings: [], available: false };
  return { offerings: data as Offering[], available: true };
});
