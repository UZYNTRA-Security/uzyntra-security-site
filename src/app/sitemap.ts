import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { publishedPosts } from "@/data/blog";

const base = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  // Only include published posts that have real external URLs
  // Blog posts are external (DEV.to) — we include /blog index but not individual slugs
  // since those pages don't exist on this domain

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // ── Blog posts (native pages — canonical on this domain) ───────────────
    {
      url: `${base}/blog/top-api-security-vulnerabilities-2026`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // ── Service pages (canonical URLs only — no redirects) ─────────────────
    {
      url: `${base}/services/api-security`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/services/penetration-testing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/services/backend-engineering`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services/blockchain-security`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services/automation-ai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // ── Products ───────────────────────────────────────────────────────────
    {
      url: `${base}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/products/uzyntra-api-firewall`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // ── Core pages ─────────────────────────────────────────────────────────
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/download`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // ── Legal ──────────────────────────────────────────────────────────────
    {
      url: `${base}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/responsible-disclosure`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
