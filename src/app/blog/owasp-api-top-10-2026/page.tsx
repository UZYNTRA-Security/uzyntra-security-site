import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag, Shield, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const SLUG      = "owasp-api-top-10-2026";
const CANONICAL = `${siteConfig.url}/blog/${SLUG}`;
const PUBLISHED = "2026-02-05";

export const metadata: Metadata = {
  title: "OWASP API Top 10 Explained (2026 Complete Guide) | UZYNTRA Security",
  description:
    "Complete breakdown of all 10 OWASP API Security Top 10 vulnerabilities with real examples, attack scenarios, and fixes for modern SaaS and API platforms.",
  keywords: [
    "OWASP API Top 10 2026",
    "API security risks",
    "OWASP API vulnerabilities",
    "API security checklist",
    "API penetration testing",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "OWASP API Top 10 Explained (2026 Complete Guide) | UZYNTRA Security",
    description: "All 10 OWASP API Security risks explained with real examples and fixes.",
    publishedTime: PUBLISHED,
    authors: [siteConfig.url],
    tags: ["OWASP", "API Security", "API Top 10", "SaaS Security"],
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "OWASP API Top 10 Explained (2026)", images: [siteConfig.ogImage] },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "OWASP API Top 10 Explained (2026 Complete Guide)",
  description: "Complete breakdown of all 10 OWASP API Security Top 10 vulnerabilities with real examples and fixes.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: {
    "@type": "Organization", name: siteConfig.name, url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/logos/uzyntra-logo-main.svg` },
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  image: siteConfig.ogImage,
  keywords: "OWASP API Top 10, API security vulnerabilities, API security testing, SaaS security",
  articleSection: "API Security",
  inLanguage: "en-US",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the OWASP API Top 10?",
      acceptedAnswer: { "@type": "Answer", text: "The OWASP API Security Top 10 is the industry-standard list of the most critical API security risks, maintained by the Open Web Application Security Project. It covers vulnerabilities like BOLA, broken authentication, and security misconfiguration that are most commonly exploited in real-world API attacks." },
    },
    {
      "@type": "Question",
      name: "What is the most common OWASP API vulnerability?",
      acceptedAnswer: { "@type": "Answer", text: "API1 — Broken Object Level Authorization (BOLA) is consistently the most exploited API vulnerability. It allows attackers to access other users' data by manipulating resource IDs, and automated scanners cannot detect it reliably." },
    },
    {
      "@type": "Question",
      name: "How do I test for OWASP API Top 10 vulnerabilities?",
      acceptedAnswer: { "@type": "Answer", text: "Testing requires a combination of automated scanning (OWASP ZAP, Burp Suite) and manual testing. BOLA and business logic vulnerabilities require manual testing with multiple test accounts. A professional API security audit covers all 10 categories systematically." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: "OWASP API Top 10 2026", item: CANONICAL },
  ],
};

const owaspItems = [
  {
    id: "api1",
    number: "API1",
    title: "Broken Object Level Authorization (BOLA)",
    severity: "Critical",
    severityColor: "bg-red-100 text-red-700",
    description: "The most exploited API vulnerability. Attackers manipulate object IDs to access other users' resources. Automated scanners cannot detect it.",
    fix: "Validate object ownership server-side on every request. Never trust client-supplied IDs.",
    link: "/blog/bola-vulnerability-explained",
    linkLabel: "Deep dive: BOLA explained →",
  },
  {
    id: "api2",
    number: "API2",
    title: "Broken Authentication",
    severity: "Critical",
    severityColor: "bg-red-100 text-red-700",
    description: "Weak tokens, missing expiry, no rotation, and absent MFA allow attackers to hijack accounts. JWT algorithm confusion is a common attack vector.",
    fix: "Short-lived JWTs, refresh token rotation, explicit algorithm validation, MFA enforcement.",
    link: "/blog/api-authentication-security-guide",
    linkLabel: "Deep dive: Auth security guide →",
  },
  {
    id: "api3",
    number: "API3",
    title: "Broken Object Property Level Authorization",
    severity: "High",
    severityColor: "bg-orange-100 text-orange-700",
    description: "APIs accept or return object properties the user shouldn't access. Mass assignment allows attackers to modify fields like 'role' or 'isAdmin'.",
    fix: "Define explicit input/output schemas. Block unexpected properties. Never bind request body directly to data models.",
    link: null,
    linkLabel: null,
  },
  {
    id: "api4",
    number: "API4",
    title: "Unrestricted Resource Consumption",
    severity: "High",
    severityColor: "bg-orange-100 text-orange-700",
    description: "No rate limits on expensive operations enables brute force, credential stuffing, enumeration, and resource exhaustion attacks.",
    fix: "Per-IP and per-user rate limits. Stricter limits on auth endpoints. Exponential backoff on failures.",
    link: null,
    linkLabel: null,
  },
  {
    id: "api5",
    number: "API5",
    title: "Broken Function Level Authorization",
    severity: "High",
    severityColor: "bg-orange-100 text-orange-700",
    description: "Admin or privileged functions accessible to regular users. Attackers discover hidden endpoints through API documentation or fuzzing.",
    fix: "Enforce role-based access control on every function. Audit all admin endpoints. Never rely on obscurity.",
    link: null,
    linkLabel: null,
  },
  {
    id: "api6",
    number: "API6",
    title: "Unrestricted Access to Sensitive Business Flows",
    severity: "High",
    severityColor: "bg-orange-100 text-orange-700",
    description: "Business flows like checkout, password reset, or account creation can be abused at scale — coupon stacking, account enumeration, inventory manipulation.",
    fix: "Implement business-logic rate limits. Add CAPTCHA on sensitive flows. Monitor for unusual usage patterns.",
    link: null,
    linkLabel: null,
  },
  {
    id: "api7",
    number: "API7",
    title: "Server Side Request Forgery (SSRF)",
    severity: "High",
    severityColor: "bg-orange-100 text-orange-700",
    description: "APIs that fetch remote resources based on user-supplied URLs can be abused to reach internal services, cloud metadata endpoints, or internal networks.",
    fix: "Validate and allowlist URLs. Block internal IP ranges. Disable unnecessary URL-fetching features.",
    link: null,
    linkLabel: null,
  },
  {
    id: "api8",
    number: "API8",
    title: "Security Misconfiguration",
    severity: "Medium",
    severityColor: "bg-yellow-100 text-yellow-700",
    description: "Default settings, open debug endpoints, verbose error messages, missing security headers, and open CORS policies create easy entry points.",
    fix: "Disable debug modes in production. Set security headers. Restrict CORS. Audit all exposed endpoints.",
    link: null,
    linkLabel: null,
  },
  {
    id: "api9",
    number: "API9",
    title: "Improper Inventory Management",
    severity: "Medium",
    severityColor: "bg-yellow-100 text-yellow-700",
    description: "Outdated API versions, undocumented endpoints, and shadow APIs expose attack surface that security teams don't know exists.",
    fix: "Maintain a complete API inventory. Deprecate old versions. Scan for undocumented endpoints regularly.",
    link: null,
    linkLabel: null,
  },
  {
    id: "api10",
    number: "API10",
    title: "Unsafe Consumption of APIs",
    severity: "Medium",
    severityColor: "bg-yellow-100 text-yellow-700",
    description: "Trusting third-party API responses without validation. Attackers compromise a third-party service to inject malicious data into your system.",
    fix: "Validate all third-party API responses. Apply the same security standards to inbound data as user input.",
    link: null,
    linkLabel: null,
  },
];

export default function OwaspApiTop10Page() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="section-tight pt-12">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">

            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-red-700 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-slate-600">OWASP API Top 10 2026</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-700">
                <Tag className="h-3 w-3" />API Security
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400"><Clock className="h-3 w-3" />12 min read</span>
              <span className="text-xs text-slate-400">February 2026</span>
            </div>

            <h1 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              OWASP API Top 10 Explained
              <span className="block text-red-600">(2026 Complete Guide With Real Examples)</span>
            </h1>

            <p className="mt-4 text-base leading-8 text-slate-600">
              The OWASP API Security Top 10 is the definitive reference for API vulnerabilities.
              Every item on this list represents a real attack pattern that has caused real breaches.
              This guide breaks down all 10 — with examples, attack scenarios, and concrete fixes.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/60 px-4 py-3">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
              <p className="text-sm text-slate-700">
                Want to know which of these affect your API?{" "}
                <Link href="/services/api-security-testing" className="font-semibold text-red-700 hover:underline">
                  Request an API Security Assessment →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">

            {/* Quick reference table */}
            <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200">
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Quick reference — all 10 risks</p>
              </div>
              <div className="divide-y divide-slate-100">
                {owaspItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 px-5 py-3">
                    <span className="w-10 shrink-0 text-[10px] font-bold text-slate-400">{item.number}</span>
                    <span className="flex-1 text-sm font-medium text-slate-700">{item.title}</span>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${item.severityColor}`}>{item.severity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Each item */}
            <div className="space-y-8">
              {owaspItems.map((item) => (
                <article key={item.id} id={item.id} className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-slate-300">{item.number}</span>
                    <h2 className="text-base font-bold text-slate-950">{item.title}</h2>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${item.severityColor}`}>{item.severity}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  <div className="mt-3 flex items-start gap-2">
                    <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-red-500" aria-hidden="true" />
                    <p className="text-xs leading-5 text-slate-500"><strong className="text-slate-700">Fix: </strong>{item.fix}</p>
                  </div>
                  {item.link && (
                    <Link href={item.link} className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:underline">
                      {item.linkLabel}
                    </Link>
                  )}
                </article>
              ))}
            </div>

            {/* Mid CTA */}
            <div className="my-10 flex flex-col items-start gap-4 rounded-2xl border border-red-100 bg-red-50/60 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-slate-950">Test your API against all 10 risks</p>
                <p className="mt-1 text-sm text-slate-500">Our team covers the full OWASP API Top 10 — including BOLA, auth bypass, and business logic abuse.</p>
              </div>
              <Link href="/services/api-security-testing" className="btn-solid inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm">
                Request API Security Audit
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-950">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-4">
                {[
                  { q: "What is the OWASP API Top 10?", a: "The OWASP API Security Top 10 is the industry-standard list of the most critical API security risks. It covers vulnerabilities like BOLA, broken authentication, and security misconfiguration that are most commonly exploited in real-world attacks." },
                  { q: "What is the most common OWASP API vulnerability?", a: "API1 — BOLA (Broken Object Level Authorization) is consistently the most exploited. It allows attackers to access other users' data by manipulating resource IDs, and automated scanners cannot detect it reliably." },
                  { q: "How do I test for OWASP API Top 10 vulnerabilities?", a: "Testing requires automated scanning (OWASP ZAP, Burp Suite) combined with manual testing. BOLA and business logic vulnerabilities require manual testing with multiple test accounts. A professional API security audit covers all 10 categories systematically." },
                ].map((faq) => (
                  <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="text-sm font-semibold text-slate-950">{faq.q}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related */}
            <div className="mt-10 border-t border-slate-100 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Related reading</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "BOLA Vulnerability Explained", href: "/blog/bola-vulnerability-explained" },
                  { title: "API Authentication Security Guide", href: "/blog/api-authentication-security-guide" },
                  { title: "API Security Testing Guide for SaaS", href: "/blog/api-security-testing-guide-saas" },
                  { title: "Top API Security Vulnerabilities in 2026", href: "/blog/top-api-security-vulnerabilities-2026" },
                ].map((r) => (
                  <Link key={r.title} href={r.href} className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 transition-all hover:border-red-100 hover:bg-red-50/40">
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
