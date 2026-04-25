import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag, Shield, CheckCircle2, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";

const SLUG      = "api-authentication-security-guide";
const CANONICAL = `${siteConfig.url}/blog/${SLUG}`;
const PUBLISHED = "2026-02-12";

export const metadata: Metadata = {
  title: "API Authentication Security Guide (JWT, OAuth Risks) | UZYNTRA Security",
  description:
    "Learn how to secure API authentication, prevent JWT attacks, fix OAuth vulnerabilities, and protect against token abuse in modern SaaS and API systems.",
  keywords: [
    "API authentication security",
    "JWT security",
    "OAuth vulnerabilities",
    "token security API",
    "API auth best practices",
    "broken authentication API",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "API Authentication Security Guide (JWT, OAuth Risks) | UZYNTRA Security",
    description: "JWT attacks, OAuth vulnerabilities, token abuse — how to secure API authentication in modern systems.",
    publishedTime: PUBLISHED,
    authors: [siteConfig.url],
    tags: ["JWT Security", "OAuth", "API Authentication", "Token Security"],
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "API Authentication Security Guide", images: [siteConfig.ogImage] },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "API Authentication Security Guide (JWT, OAuth Risks)",
  description: "How to secure API authentication — JWT attacks, OAuth vulnerabilities, token abuse, and best practices for modern systems.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: {
    "@type": "Organization", name: siteConfig.name, url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/logos/uzyntra-logo-main.svg` },
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  image: siteConfig.ogImage,
  keywords: "API authentication security, JWT security, OAuth vulnerabilities, token abuse, broken authentication",
  articleSection: "API Security",
  inLanguage: "en-US",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the most common API authentication vulnerabilities?",
      acceptedAnswer: { "@type": "Answer", text: "The most common API authentication vulnerabilities are: JWT algorithm confusion (accepting 'none' algorithm), long-lived tokens without expiry, missing refresh token rotation, weak signing secrets, absent MFA on sensitive operations, and insecure OAuth redirect URI handling." },
    },
    {
      "@type": "Question",
      name: "How do JWT attacks work?",
      acceptedAnswer: { "@type": "Answer", text: "JWT attacks exploit weaknesses in token validation. The most common are: algorithm confusion (changing RS256 to HS256 or 'none'), weak secret brute-forcing, missing signature verification, and accepting expired tokens. Attackers can forge tokens and impersonate any user." },
    },
    {
      "@type": "Question",
      name: "What is the difference between authentication and authorization in APIs?",
      acceptedAnswer: { "@type": "Answer", text: "Authentication verifies who you are (valid token, correct credentials). Authorization verifies what you're allowed to do (can this user access this resource). Both must be enforced server-side on every request. Missing authorization checks cause BOLA vulnerabilities." },
    },
    {
      "@type": "Question",
      name: "How should API tokens be stored securely?",
      acceptedAnswer: { "@type": "Answer", text: "Access tokens should be stored in memory (not localStorage) to prevent XSS theft. Refresh tokens should be stored in httpOnly, Secure, SameSite=Strict cookies. Never store tokens in localStorage or sessionStorage for sensitive applications." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: "API Authentication Security Guide", item: CANONICAL },
  ],
};

const jwtAttacks = [
  {
    name: "Algorithm Confusion (none)",
    code: `// Attacker modifies header:
{ "alg": "none", "typ": "JWT" }
// Server accepts unsigned token if not validated`,
    fix: "Explicitly validate algorithm. Reject 'none'. Whitelist only expected algorithms.",
  },
  {
    name: "RS256 → HS256 Downgrade",
    code: `// Server uses RS256 (asymmetric)
// Attacker changes to HS256 (symmetric)
// Signs with the public key as the secret
// Server verifies with public key — passes`,
    fix: "Enforce algorithm server-side. Never accept algorithm from token header.",
  },
  {
    name: "Weak Secret Brute Force",
    code: `// Short or predictable JWT secret:
secret = "secret123"
// Attacker brute-forces with hashcat/jwt-cracker
// Forges tokens for any user`,
    fix: "Use cryptographically random secrets (256+ bits). Rotate secrets periodically.",
  },
];

export default function ApiAuthSecurityPage() {
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
              <span className="text-slate-600">API Authentication Security</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-700">
                <Tag className="h-3 w-3" />API Security
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400"><Clock className="h-3 w-3" />9 min read</span>
              <span className="text-xs text-slate-400">February 2026</span>
            </div>

            <h1 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              API Authentication Security Guide
              <span className="block text-red-600">(JWT Attacks, OAuth Risks, Token Best Practices)</span>
            </h1>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Authentication is the first line of defense for APIs — and one of the most
              consistently broken. Weak tokens, missing expiry, JWT algorithm confusion, and
              insecure OAuth flows give attackers a direct path to full account compromise.
              This guide covers the real attack patterns and exactly how to prevent them.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/60 px-4 py-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
              <p className="text-sm text-slate-700">
                <strong className="text-slate-950">Want to test your auth system like an attacker?</strong>{" "}
                <Link href="/services/api-security-testing" className="font-semibold text-red-700 hover:underline">
                  Start API Security Testing →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl space-y-10">

            {/* Common weaknesses */}
            <article id="weaknesses" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-950">Most Common API Authentication Weaknesses</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Long-lived access tokens that never expire — stolen tokens remain valid indefinitely",
                  "No refresh token rotation — old tokens stay valid after refresh",
                  "Weak JWT signing secrets — brute-forceable in minutes",
                  "Missing algorithm validation — accepts 'none' or unexpected algorithms",
                  "No MFA on sensitive operations — account takeover via credential stuffing",
                  "Tokens stored in localStorage — accessible to XSS attacks",
                  "OAuth redirect URI not validated — authorization code interception",
                ].map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                    <AlertTriangle className="mt-[3px] h-3.5 w-3.5 shrink-0 text-red-500" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </article>

            {/* JWT attacks */}
            <article id="jwt-attacks" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-950">JWT Attack Scenarios</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                JWTs are the most common API authentication mechanism — and the most commonly
                misconfigured. These are the three attacks testers find most often:
              </p>
              <div className="mt-4 space-y-4">
                {jwtAttacks.map((attack) => (
                  <div key={attack.name} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="text-sm font-semibold text-slate-950">{attack.name}</h3>
                    <div className="mt-3 overflow-hidden rounded-lg bg-slate-950">
                      <pre className="overflow-x-auto px-3 py-2.5 text-xs leading-5 text-green-400">
                        <code>{attack.code}</code>
                      </pre>
                    </div>
                    <div className="mt-2 flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-red-500" aria-hidden="true" />
                      <p className="text-xs leading-5 text-slate-500"><strong className="text-slate-700">Fix: </strong>{attack.fix}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* OAuth risks */}
            <article id="oauth" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-950">OAuth 2.0 Security Risks</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                OAuth is powerful but has a large attack surface. These are the most exploited OAuth vulnerabilities:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  { risk: "Open redirect URI", fix: "Validate redirect URIs against an exact allowlist — no wildcards" },
                  { risk: "Missing state parameter", fix: "Always use a cryptographically random state parameter to prevent CSRF" },
                  { risk: "Authorization code interception", fix: "Use PKCE (Proof Key for Code Exchange) for all public clients" },
                  { risk: "Token leakage in URL fragments", fix: "Use response_type=code, never response_type=token in URLs" },
                  { risk: "Overly broad scopes", fix: "Request minimum required scopes. Validate scopes server-side on every request" },
                ].map((item) => (
                  <li key={item.risk} className="rounded-lg border border-slate-100 bg-white p-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="mt-[2px] h-3.5 w-3.5 shrink-0 text-red-500" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold text-slate-800">{item.risk}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{item.fix}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            {/* Best practices */}
            <article id="best-practices" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-950">Authentication Security Best Practices</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Token Lifetime", body: "Access tokens: 15–60 minutes. Refresh tokens: 7–30 days with rotation. Never issue non-expiring tokens." },
                  { title: "Algorithm Enforcement", body: "Explicitly set and validate the signing algorithm server-side. Never accept the algorithm from the token header." },
                  { title: "Secret Strength", body: "Use cryptographically random secrets of 256+ bits. Rotate secrets on suspected compromise. Never use predictable values." },
                  { title: "Token Storage", body: "Access tokens in memory. Refresh tokens in httpOnly, Secure, SameSite=Strict cookies. Never in localStorage." },
                  { title: "MFA Enforcement", body: "Require MFA on login, sensitive operations, and privilege escalation. Use TOTP or hardware keys — not SMS." },
                  { title: "Revocation", body: "Maintain a token revocation list or use short-lived tokens. Invalidate all tokens on password change or logout." },
                ].map((bp) => (
                  <div key={bp.title} className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-2">
                      <Shield className="h-3.5 w-3.5 shrink-0 text-red-500" aria-hidden="true" />
                      <h3 className="text-xs font-bold text-slate-950">{bp.title}</h3>
                    </div>
                    <p className="mt-1.5 text-xs leading-5 text-slate-600">{bp.body}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* CTA */}
            <div className="rounded-2xl border border-red-100 bg-red-50/60 p-6">
              <h2 className="text-base font-bold text-slate-950">🚨 Want to test your auth system like an attacker?</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Our team tests JWT configuration, OAuth flows, token expiry, MFA bypass, and
                session management — the exact patterns attackers use to compromise accounts.
              </p>
              <Link href="/services/api-security-testing" className="btn-solid mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm">
                Start API Security Testing
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-950">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-4">
                {[
                  { q: "What are the most common API authentication vulnerabilities?", a: "JWT algorithm confusion, long-lived tokens without expiry, missing refresh token rotation, weak signing secrets, absent MFA, and insecure OAuth redirect URI handling." },
                  { q: "How do JWT attacks work?", a: "JWT attacks exploit weaknesses in token validation — algorithm confusion (changing RS256 to 'none'), weak secret brute-forcing, and missing signature verification. Attackers can forge tokens and impersonate any user." },
                  { q: "What is the difference between authentication and authorization in APIs?", a: "Authentication verifies who you are. Authorization verifies what you're allowed to do. Both must be enforced server-side on every request. Missing authorization checks cause BOLA vulnerabilities." },
                  { q: "How should API tokens be stored securely?", a: "Access tokens in memory. Refresh tokens in httpOnly, Secure, SameSite=Strict cookies. Never in localStorage or sessionStorage for sensitive applications." },
                ].map((faq) => (
                  <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="text-sm font-semibold text-slate-950">{faq.q}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related */}
            <div className="border-t border-slate-100 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Related reading</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "BOLA Vulnerability Explained", href: "/blog/bola-vulnerability-explained" },
                  { title: "OWASP API Top 10 Explained (2026)", href: "/blog/owasp-api-top-10-2026" },
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
