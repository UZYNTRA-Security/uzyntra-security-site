import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Shield, Clock, Tag } from "lucide-react";
import { siteConfig } from "@/config/site";

const PUBLISHED_DATE = "2026-01-15";
const MODIFIED_DATE  = "2026-01-15";
const SLUG           = "top-api-security-vulnerabilities-2026";
const CANONICAL      = `${siteConfig.url}/blog/${SLUG}`;
const EXTERNAL_URL   = "https://dev.to/uzyntra/top-api-security-vulnerabilities-in-2026-real-world-breakdown-e9g";

export const metadata: Metadata = {
  title: "Top API Security Vulnerabilities in 2026 | UZYNTRA Security",
  description:
    "Learn the most critical API security vulnerabilities in 2026 including BOLA, broken authentication, and data exposure. Real-world examples and fixes.",
  keywords: [
    "API security vulnerabilities 2026",
    "BOLA vulnerability",
    "OWASP API Top 10",
    "broken authentication API",
    "API security testing",
    "SaaS security audit",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Top API Security Vulnerabilities in 2026 | UZYNTRA Security",
    description:
      "The most critical API security vulnerabilities in 2026 — BOLA, broken authentication, excessive data exposure, and how to fix them.",
    publishedTime: PUBLISHED_DATE,
    modifiedTime:  MODIFIED_DATE,
    authors: [siteConfig.url],
    tags: ["API Security", "OWASP", "BOLA", "Penetration Testing"],
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top API Security Vulnerabilities in 2026",
    description:
      "BOLA, broken auth, excessive data exposure — the API vulnerabilities attackers exploit most in 2026.",
    images: [siteConfig.ogImage],
  },
};

// ── JSON-LD Article schema ────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Top API Security Vulnerabilities in 2026 (Real-World Breakdown)",
  description:
    "A technical breakdown of the most exploited API vulnerabilities in 2026 — covering BOLA, authentication flaws, business logic abuse, and real-world attack patterns.",
  author: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/logos/uzyntra-logo-main.svg` },
  },
  datePublished: PUBLISHED_DATE,
  dateModified:  MODIFIED_DATE,
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  image: siteConfig.ogImage,
  keywords: "API security, BOLA, OWASP API Top 10, broken authentication, SaaS security",
  articleSection: "API Security",
  inLanguage: "en-US",
};

// ── Breadcrumb schema ─────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog",  item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: "Top API Security Vulnerabilities in 2026", item: CANONICAL },
  ],
};

// ── Article sections ──────────────────────────────────────────────────────────
const vulnerabilities = [
  {
    id: "bola",
    number: "01",
    title: "Broken Object Level Authorization (BOLA)",
    badge: "Most Exploited",
    badgeColor: "bg-red-100 text-red-700",
    intro:
      "BOLA remains the most exploited API vulnerability. Attackers manipulate object IDs in requests to access other users' data — and most APIs have no server-side ownership check.",
    example: "GET /api/user/123  →  GET /api/user/124",
    exampleLabel: "Attacker changes ID to access another user's account",
    fixes: [
      "Validate object ownership on every request — never trust client-supplied IDs",
      "Use indirect references (UUIDs) instead of sequential integers",
      "Implement row-level authorization at the data layer",
      "Log and alert on authorization failures",
    ],
  },
  {
    id: "broken-auth",
    number: "02",
    title: "Broken Authentication",
    badge: "Critical",
    badgeColor: "bg-orange-100 text-orange-700",
    intro:
      "Weak token handling and session management allow attackers to hijack accounts. Long-lived tokens, missing rotation, and absent MFA are the most common root causes.",
    example: "Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyIjoiYWRtaW4ifQ.",
    exampleLabel: "JWT with 'none' algorithm — no signature verification",
    fixes: [
      "Use short-lived JWTs (15–60 min) with refresh token rotation",
      "Validate algorithm explicitly — reject 'none' and unexpected algorithms",
      "Enforce MFA on sensitive operations",
      "Invalidate tokens server-side on logout",
    ],
  },
  {
    id: "data-exposure",
    number: "03",
    title: "Excessive Data Exposure",
    badge: "High",
    badgeColor: "bg-yellow-100 text-yellow-700",
    intro:
      "APIs often return full database objects and rely on the client to filter. Attackers inspect raw responses to extract PII, internal IDs, and sensitive fields never meant to be visible.",
    example: `{ "id": 1, "email": "user@co.com", "password_hash": "...", "ssn": "...", "internal_notes": "..." }`,
    exampleLabel: "API returns full user object including sensitive fields",
    fixes: [
      "Define explicit response schemas — never return raw ORM objects",
      "Filter responses server-side before sending",
      "Audit all API responses for sensitive field leakage",
      "Use API gateway response transformation to strip internal fields",
    ],
  },
  {
    id: "rate-limiting",
    number: "04",
    title: "Lack of Rate Limiting",
    badge: "High",
    badgeColor: "bg-yellow-100 text-yellow-700",
    intro:
      "Without rate limits, APIs are open to brute force, credential stuffing, enumeration, and resource exhaustion. Most APIs have no per-user or per-IP throttling on sensitive endpoints.",
    example: "POST /api/auth/login  ×  10,000 requests in 60 seconds",
    exampleLabel: "Credential stuffing — no rate limit on login endpoint",
    fixes: [
      "Implement per-IP and per-user rate limits on all endpoints",
      "Apply stricter limits on authentication and sensitive operations",
      "Add exponential backoff and account lockout after repeated failures",
      "Use anomaly detection to flag unusual request patterns",
    ],
  },
  {
    id: "misconfiguration",
    number: "05",
    title: "Security Misconfiguration",
    badge: "Medium",
    badgeColor: "bg-slate-100 text-slate-700",
    intro:
      "Default settings, open debug endpoints, verbose error messages, and missing security headers create easy entry points. Misconfiguration is the most preventable vulnerability class.",
    example: "GET /api/debug/config  →  200 OK  { db_password: '...', secret_key: '...' }",
    exampleLabel: "Debug endpoint exposed in production",
    fixes: [
      "Disable debug modes and verbose error responses in production",
      "Audit all exposed endpoints — remove or protect internal routes",
      "Set security headers: CORS, CSP, HSTS, X-Content-Type-Options",
      "Run automated misconfiguration scans before every deployment",
    ],
  },
];

export default function ApiVulnerabilitiesArticle() {
  return (
    <main id="main-content">
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Article header ── */}
      <section className="section-tight pt-12">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-red-700 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-slate-600">API Vulnerabilities 2026</span>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-700">
                <Tag className="h-3 w-3" aria-hidden="true" />
                API Security
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="h-3 w-3" aria-hidden="true" />
                8 min read
              </span>
              <span className="text-xs text-slate-400">January 2026</span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Top API Security Vulnerabilities in 2026
              <span className="block text-red-600">(Real-World Breakdown)</span>
            </h1>

            {/* Intro */}
            <p className="mt-4 text-base leading-8 text-slate-600">
              APIs power modern applications — but they are also one of the most exploited attack
              surfaces today. In 2026, most API breaches are not caused by advanced zero-days.
              They happen because of simple, overlooked security gaps that automated scanners miss.
            </p>

            {/* External link */}
            <div className="mt-5 flex items-center gap-3">
              <Link
                href={EXTERNAL_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-700 hover:underline"
              >
                Also published on DEV.to
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">

            {/* TOC */}
            <div className="mb-10 rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                In this article
              </p>
              <ol className="space-y-1.5">
                {vulnerabilities.map((v) => (
                  <li key={v.id}>
                    <a
                      href={`#${v.id}`}
                      className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-red-700"
                    >
                      <span className="text-[10px] font-bold text-slate-400">{v.number}</span>
                      {v.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Vulnerability sections */}
            <div className="space-y-12">
              {vulnerabilities.map((v) => (
                <article key={v.id} id={v.id} className="scroll-mt-20">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-slate-300">{v.number}</span>
                    <h2 className="text-xl font-bold text-slate-950">{v.title}</h2>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${v.badgeColor}`}>
                      {v.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600">{v.intro}</p>

                  {/* Code example */}
                  <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-950">
                    <div className="border-b border-slate-800 px-4 py-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Example
                      </span>
                    </div>
                    <pre className="overflow-x-auto px-4 py-3 text-xs leading-6 text-green-400">
                      <code>{v.example}</code>
                    </pre>
                    <div className="border-t border-slate-800 px-4 py-2">
                      <span className="text-[10px] text-slate-500">{v.exampleLabel}</span>
                    </div>
                  </div>

                  {/* Fixes */}
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-red-600">
                      How to fix it
                    </p>
                    <ul className="space-y-2">
                      {v.fixes.map((fix) => (
                        <li key={fix} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                          <Shield className="mt-[3px] h-3.5 w-3.5 shrink-0 text-red-500" aria-hidden="true" />
                          {fix}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            {/* Conclusion */}
            <div className="mt-12 rounded-2xl border border-red-100 bg-red-50/60 p-6">
              <h2 className="text-lg font-bold text-slate-950">Final Thoughts</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                API security is no longer optional. It is a critical layer in modern application
                security. If your APIs are exposed, they are being tested — either by you or by
                attackers. The vulnerabilities above are not theoretical. They are the exact
                patterns exploited in real breaches every week.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Start with a professional API security assessment to identify real risks before
                attackers do.
              </p>
            </div>

            {/* Internal CTA — Fix 5 from the brief */}
            <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-slate-950">
                  Ready to test your API security?
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Our team covers the full OWASP API Top 10 — including BOLA, auth bypass, and business logic abuse.
                </p>
              </div>
              <Link
                href="/services/api-security-testing"
                className="btn-solid inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
              >
                Request API Security Audit
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>

            {/* Related posts */}
            <div className="mt-10 border-t border-slate-100 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Related reading
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "API Security Testing Guide for SaaS Startups", href: "/blog" },
                  { title: "Red Team vs Penetration Testing: What's the Difference?", href: "/blog" },
                ].map((r) => (
                  <Link
                    key={r.title}
                    href={r.href}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 transition-all hover:border-red-100 hover:bg-red-50/40"
                  >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-red-700">
                      {r.title}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-red-500" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
