import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag, Shield, CheckCircle2, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";

const SLUG         = "api-security-testing-guide-saas";
const CANONICAL    = `${siteConfig.url}/blog/${SLUG}`;
const PUBLISHED    = "2026-01-22";
const MODIFIED     = "2026-01-22";

export const metadata: Metadata = {
  title: "API Security Testing Guide for SaaS Startups | UZYNTRA Security",
  description:
    "A practical guide to API security testing for SaaS teams — covering BOLA, authentication testing, OWASP API Top 10, and how to build a repeatable security process without a dedicated security team.",
  keywords: [
    "API security testing SaaS",
    "SaaS security audit",
    "API penetration testing",
    "OWASP API Top 10 testing",
    "BOLA testing",
    "authentication security testing",
    "API security checklist",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "API Security Testing Guide for SaaS Startups | UZYNTRA Security",
    description:
      "How SaaS teams can test API security without a dedicated security team — BOLA, auth testing, OWASP coverage, and a repeatable process.",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: [siteConfig.url],
    tags: ["API Security", "SaaS Security", "OWASP", "Penetration Testing"],
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Security Testing Guide for SaaS Startups",
    description:
      "BOLA, auth testing, OWASP API Top 10 — a practical security testing guide for SaaS engineering teams.",
    images: [siteConfig.ogImage],
  },
};

// ── JSON-LD schemas ───────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "API Security Testing Guide for SaaS Startups",
  description:
    "A practical guide to API security testing for SaaS teams covering BOLA, authentication testing, OWASP API Top 10, and building a repeatable security process.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/logos/uzyntra-logo-main.svg` },
  },
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  image: siteConfig.ogImage,
  keywords: "API security testing, SaaS security audit, OWASP API Top 10, BOLA testing",
  articleSection: "API Security",
  wordCount: 1600,
  inLanguage: "en-US",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is API security testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "API security testing is the process of identifying vulnerabilities in your API endpoints — including broken authorization, authentication flaws, injection vulnerabilities, and business logic abuse — before attackers exploit them.",
      },
    },
    {
      "@type": "Question",
      name: "How often should SaaS companies test their APIs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SaaS companies should run API security tests at minimum before every major release, after significant architecture changes, and at least annually as a full engagement. High-risk platforms handling payments or PII should test quarterly.",
      },
    },
    {
      "@type": "Question",
      name: "What is BOLA and why is it dangerous for SaaS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BOLA (Broken Object Level Authorization) is the most common API vulnerability. It allows attackers to access other users' data by manipulating resource IDs in API requests. For SaaS platforms, this means one tenant can access another tenant's data — a critical breach.",
      },
    },
    {
      "@type": "Question",
      name: "Can we do API security testing without a dedicated security team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SaaS teams can start with automated tools like OWASP ZAP and Burp Suite Community for basic coverage, combined with a professional API security audit from a specialist firm for deeper testing of business logic and authentication flows.",
      },
    },
    {
      "@type": "Question",
      name: "What does an API security audit include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professional API security audit covers OWASP API Top 10 testing, authentication and authorization review, business logic abuse scenarios, rate limiting analysis, data exposure testing, and a detailed report with CVSS scores and remediation guidance.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: "API Security Testing Guide for SaaS", item: CANONICAL },
  ],
};

// ── Content data ──────────────────────────────────────────────────────────────
const sections = [
  {
    id: "why-saas-apis-are-different",
    title: "Why SaaS APIs Are a Different Attack Surface",
    content: `SaaS APIs are not just web APIs. They carry multi-tenant data, handle billing flows, expose admin endpoints, and often integrate with dozens of third-party services. Each of these creates attack surface that standard web application testing misses.

The most dangerous SaaS-specific risks are:`,
    bullets: [
      "Tenant isolation failures — one customer accessing another's data",
      "Admin API exposure — internal management endpoints reachable externally",
      "Webhook abuse — attackers forging inbound webhook payloads",
      "OAuth misconfiguration — token leakage through redirect URI manipulation",
      "Third-party integration risks — insecure data passed to external services",
    ],
  },
  {
    id: "owasp-api-top-10",
    title: "OWASP API Top 10: What SaaS Teams Must Test",
    content: `The OWASP API Security Top 10 is the industry standard for API vulnerability classification. For SaaS platforms, five categories are especially critical:`,
    bullets: [
      "API1 — BOLA: Object-level authorization missing on resource endpoints",
      "API2 — Broken Authentication: Weak tokens, missing MFA, insecure refresh flows",
      "API3 — Broken Object Property Level Authorization: Returning or accepting fields users shouldn't access",
      "API4 — Unrestricted Resource Consumption: No rate limits on expensive operations",
      "API8 — Security Misconfiguration: Debug endpoints, verbose errors, open CORS",
    ],
  },
  {
    id: "bola-testing",
    title: "How to Test for BOLA in Your SaaS API",
    content: `BOLA is the most exploited API vulnerability and the most common cause of SaaS data breaches. Testing for it requires more than automated scanning — it requires understanding your data model.`,
    bullets: [
      "Create two test accounts in the same tenant",
      "Capture a request that accesses a resource owned by Account A",
      "Replay the request authenticated as Account B",
      "If Account B receives Account A's data — you have BOLA",
      "Repeat across all resource types: users, projects, files, invoices, settings",
    ],
    note: "Automated scanners cannot detect BOLA reliably. It requires manual testing with knowledge of your object relationships.",
  },
  {
    id: "authentication-testing",
    title: "Authentication Security Testing for SaaS",
    content: `Authentication flaws are the second most common API vulnerability. SaaS platforms typically have complex auth flows — OAuth, API keys, JWTs, session tokens — each with its own failure modes.`,
    bullets: [
      "JWT algorithm confusion: test with alg:none and RS256→HS256 downgrade",
      "Token expiry: verify short-lived tokens actually expire server-side",
      "Refresh token rotation: confirm old tokens are invalidated after refresh",
      "API key scope: verify keys cannot access endpoints beyond their intended scope",
      "Password reset flows: test for token reuse, predictable tokens, and race conditions",
    ],
  },
  {
    id: "rate-limiting",
    title: "Rate Limiting and Business Logic Testing",
    content: `Rate limiting gaps are consistently underestimated. Without proper controls, your API is open to credential stuffing, enumeration, and resource exhaustion. Business logic abuse goes further — exploiting the intended functionality in unintended ways.`,
    bullets: [
      "Test login endpoints: attempt 1000 requests — does the API block or slow down?",
      "Test password reset: can you enumerate valid emails through response differences?",
      "Test pricing logic: can you manipulate quantity or coupon fields to reduce charges?",
      "Test workflow steps: can you skip step 2 of a multi-step process by calling step 3 directly?",
      "Test resource limits: can you exceed plan limits by making concurrent requests?",
    ],
  },
  {
    id: "testing-process",
    title: "Building a Repeatable API Security Testing Process",
    content: `Security testing should not be a one-time event. SaaS teams need a repeatable process that fits their release cadence without requiring a full-time security engineer.`,
    bullets: [
      "Pre-release: run automated scans with OWASP ZAP or Burp Suite on every staging deployment",
      "Quarterly: manual review of new endpoints and changed authentication flows",
      "Annually: full professional API security audit covering OWASP API Top 10",
      "Post-incident: targeted testing after any security event or significant architecture change",
      "Continuous: monitor API logs for anomalous patterns — unusual IDs, high error rates, off-hours access",
    ],
  },
];

const faqs = [
  {
    q: "What is API security testing?",
    a: "API security testing is the process of identifying vulnerabilities in your API endpoints — including broken authorization, authentication flaws, injection vulnerabilities, and business logic abuse — before attackers exploit them.",
  },
  {
    q: "How often should SaaS companies test their APIs?",
    a: "At minimum before every major release and after significant architecture changes. High-risk platforms handling payments or PII should run a professional audit quarterly.",
  },
  {
    q: "What is BOLA and why is it dangerous for SaaS?",
    a: "BOLA (Broken Object Level Authorization) allows attackers to access other users' data by manipulating resource IDs. For SaaS, this means one tenant can access another's data — a critical breach that automated scanners miss.",
  },
  {
    q: "Can we do API security testing without a dedicated security team?",
    a: "Yes. Start with automated tools like OWASP ZAP for basic coverage, then engage a specialist firm for deeper testing of business logic and authentication flows.",
  },
  {
    q: "What does a professional API security audit include?",
    a: "OWASP API Top 10 testing, authentication and authorization review, business logic abuse scenarios, rate limiting analysis, data exposure testing, and a detailed report with CVSS scores and remediation guidance.",
  },
];

export default function ApiSecurityTestingGuideSaaS() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Header ── */}
      <section className="section-tight pt-12">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">

            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-red-700 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-slate-600">API Security Testing Guide</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-700">
                <Tag className="h-3 w-3" aria-hidden="true" />
                API Security
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="h-3 w-3" aria-hidden="true" />
                10 min read
              </span>
              <span className="text-xs text-slate-400">January 2026</span>
            </div>

            <h1 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              API Security Testing Guide for SaaS Startups
              <span className="block text-red-600">A Practical Breakdown for Engineering Teams</span>
            </h1>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Most SaaS breaches are not caused by sophisticated zero-days. They happen because
              an API endpoint was missing an authorization check, a token never expired, or a
              rate limit was never implemented. This guide gives SaaS engineering teams a
              practical framework for finding and fixing these issues — with or without a
              dedicated security team.
            </p>

            {/* Inline CTA — above the fold */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-red-100 bg-red-50/60 px-4 py-3">
              <Shield className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
              <p className="text-sm text-slate-700">
                Want a professional audit instead?{" "}
                <Link href="/services/api-security-testing" className="font-semibold text-red-700 hover:underline">
                  Request an API Security Assessment →
                </Link>
              </p>
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
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">In this guide</p>
              <ol className="space-y-1.5">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-red-700">
                      <span className="text-[10px] font-bold text-slate-400">0{i + 1}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-red-700">
                    <span className="text-[10px] font-bold text-slate-400">07</span>
                    Frequently Asked Questions
                  </a>
                </li>
              </ol>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-20">
                  <h2 className="text-xl font-bold text-slate-950">{s.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 whitespace-pre-line">{s.content}</p>
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                        <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {"note" in s && s.note && (
                    <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/60 px-4 py-3">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                      <p className="text-sm text-amber-800">{s.note}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Mid-article CTA */}
            <div className="my-12 flex flex-col items-start gap-4 rounded-2xl border border-red-100 bg-red-50/60 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-slate-950">Skip the manual process</p>
                <p className="mt-1 text-sm text-slate-500">
                  Our team runs the full OWASP API Top 10 test suite — including BOLA, auth bypass, and business logic abuse — and delivers a prioritized report.
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

            {/* FAQ */}
            <section id="faq" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-950">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="text-sm font-semibold text-slate-950">{faq.q}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion + bottom CTA */}
            <div className="mt-12 rounded-2xl border border-red-100 bg-red-50/60 p-6">
              <h2 className="text-lg font-bold text-slate-950">Start Testing Before Attackers Do</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                API security testing is not a one-time checkbox. It is an ongoing process that
                should be embedded into your release cycle. The SaaS platforms that get breached
                are not the ones that tested and failed — they are the ones that never tested at all.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Start with the BOLA and authentication tests in this guide. Then engage a
                professional team for full OWASP API Top 10 coverage before your next major release.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-slate-950">Ready for a professional API security audit?</p>
                <p className="mt-1 text-sm text-slate-500">
                  Full OWASP API Top 10 coverage, BOLA testing, auth review, and a prioritized remediation report.
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

            {/* Related */}
            <div className="mt-10 border-t border-slate-100 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Related reading</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Top API Security Vulnerabilities in 2026", href: "/blog/top-api-security-vulnerabilities-2026" },
                  { title: "Penetration Testing & Red Teaming Services", href: "/services/penetration-testing" },
                ].map((r) => (
                  <Link
                    key={r.title}
                    href={r.href}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 transition-all hover:border-red-100 hover:bg-red-50/40"
                  >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-red-700">{r.title}</span>
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
