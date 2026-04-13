import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert, Bug, KeyRound, Layers, AlertTriangle,
  CheckCircle2, ArrowRight, MessageSquare,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { ServiceCapabilityGrid } from "@/components/sections/service-capability-grid";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { CTASection } from "@/components/sections/cta-section";
import { siteConfig } from "@/config/site";
import { cybersecurityTechnologies } from "@/data/technologies";

export const metadata: Metadata = {
  title: "API Security Testing Services | UZYNTRA Security",
  description:
    "Offensive API security testing for SaaS platforms, authentication systems, and cloud-connected APIs. OWASP API Top 10 coverage, token abuse, BOLA, and business-logic testing.",
  alternates: { canonical: `${siteConfig.url}/services/api-security` },
  openGraph: {
    title: "API Security Testing Services | UZYNTRA Security",
    description:
      "Offensive API security testing for SaaS, authentication systems, and cloud-connected platforms. OWASP API Top 10, BOLA, token abuse, and business-logic abuse scenarios.",
    url: `${siteConfig.url}/services/api-security`,
  },
};

const painPoints = [
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Broken Object Level Authorization",
    body: "Attackers access other users' data by manipulating resource IDs in API requests — the most common critical API vulnerability.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Authentication & Token Weaknesses",
    body: "Weak JWT signing, missing token expiry, insecure refresh flows, and predictable session identifiers expose entire user bases.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Business Logic Abuse",
    body: "Rate-limit bypass, price manipulation, workflow skipping, and privilege escalation through legitimate API endpoints.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Excessive Data Exposure",
    body: "APIs returning full object payloads and relying on the client to filter — leaking PII, internal fields, and sensitive metadata.",
  },
];

const capabilities = [
  {
    title: "OWASP API Top 10 Coverage",
    icon: <ShieldAlert className="h-5 w-5" />,
    frontDescription: "Full coverage of the OWASP API Security Top 10 across all tested endpoints.",
    backDescription:
      "Systematic testing against BOLA, broken authentication, excessive data exposure, lack of resource limiting, SSRF, security misconfiguration, and injection vulnerabilities in API contexts.",
  },
  {
    title: "Authentication & Authorization Testing",
    icon: <KeyRound className="h-5 w-5" />,
    frontDescription: "JWT attacks, OAuth flow abuse, session fixation, and privilege escalation testing.",
    backDescription:
      "Tests authentication mechanisms for token forgery, algorithm confusion, missing validation, insecure storage, and authorization bypass across user roles and resource boundaries.",
  },
  {
    title: "SaaS Attack Surface Review",
    icon: <Layers className="h-5 w-5" />,
    frontDescription: "Tenant isolation, multi-tenancy bypass, and cross-account data access testing.",
    backDescription:
      "Evaluates SaaS-specific risks including tenant boundary violations, shared resource exposure, admin API abuse, and account takeover paths through the application layer.",
  },
  {
    title: "API Fuzzing & Abuse Scenarios",
    icon: <Bug className="h-5 w-5" />,
    frontDescription: "Custom fuzzing, parameter tampering, and real-world abuse scenario simulation.",
    backDescription:
      "Uses custom tooling and manual techniques to discover undocumented endpoints, parameter pollution, mass assignment, and injection vulnerabilities not caught by automated scanners.",
  },
  {
    title: "Rate Limiting & Business Logic",
    icon: <AlertTriangle className="h-5 w-5" />,
    frontDescription: "Rate-limit bypass, workflow abuse, and business logic exploitation testing.",
    backDescription:
      "Tests for missing or bypassable rate controls, price manipulation, coupon stacking, workflow skipping, and other business-logic vulnerabilities that scanners cannot detect.",
  },
  {
    title: "Remediation & Reporting",
    icon: <CheckCircle2 className="h-5 w-5" />,
    frontDescription: "Detailed findings report with CVSS scores, reproduction steps, and fix guidance.",
    backDescription:
      "Every finding includes a severity rating, reproduction steps, business impact assessment, and concrete remediation guidance — written for both security teams and developers.",
  },
];

const process = [
  { step: "01", title: "Reconnaissance", body: "API discovery, endpoint enumeration, documentation review, and attack surface mapping." },
  { step: "02", title: "Authentication Analysis", body: "Token inspection, OAuth flow review, session management testing, and auth bypass attempts." },
  { step: "03", title: "Exploitation", body: "BOLA, BFLA, injection, business logic abuse, and chained vulnerability exploitation." },
  { step: "04", title: "Reporting", body: "Prioritized findings with CVSS scores, reproduction steps, business impact, and remediation guidance." },
];

const faqs = [
  {
    q: "What is OWASP API Top 10 testing?",
    a: "The OWASP API Security Top 10 is the industry standard list of the most critical API security risks. Our testing covers all 10 categories including BOLA, broken authentication, excessive data exposure, and injection — using both automated tooling and manual exploitation techniques.",
  },
  {
    q: "How is API security testing different from a web application pentest?",
    a: "API security testing focuses specifically on the API layer — REST, GraphQL, gRPC, and WebSocket endpoints — with techniques tailored to API-specific vulnerabilities like BOLA, mass assignment, and token abuse that standard web app tests often miss.",
  },
  {
    q: "Do you test GraphQL and gRPC APIs?",
    a: "Yes. We test REST, GraphQL, gRPC, and WebSocket APIs. GraphQL testing includes introspection abuse, query depth attacks, and batching exploitation. gRPC testing covers reflection abuse and insecure service exposure.",
  },
  {
    q: "What do we receive at the end of the engagement?",
    a: "A detailed report with an executive summary, full technical findings with CVSS scores, reproduction steps, business impact analysis, and prioritized remediation guidance. We also offer a debrief call to walk through findings with your team.",
  },
];

const stepColors = ["text-red-500", "text-orange-500", "text-violet-500", "text-emerald-500"] as const;

export default function ApiSecurityPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="API & SaaS Security Testing"
        title="API Security Testing for SaaS Platforms That Can't Afford Breaches"
        description="UZYNTRA identifies exploitable vulnerabilities in your APIs, authentication flows, and SaaS attack surface before adversaries do — using OWASP methodology and real-world abuse scenarios."
      />

      {/* Pain Points */}
      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Why It Matters</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
              API vulnerabilities are the leading cause of SaaS breaches
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
              Most SaaS platforms expose critical data through API flaws that automated scanners never catch.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((p) => (
              <div key={p.title} className="surface-card p-5">
                <div className="mb-3">{p.icon}</div>
                <h3 className="text-sm font-semibold text-slate-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <ServiceCapabilityGrid
        heading="What we test"
        intro="Comprehensive API security testing across authentication, authorization, business logic, and the full OWASP API Top 10."
        items={capabilities}
      />

      {/* Process */}
      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Methodology</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">How we run an API security engagement</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="surface-card p-5">
                <span className={`text-3xl font-bold ${stepColors[i]}`}>{p.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-slate-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <TechnologySlider
        eyebrow="TOOLING"
        title="Tools & Methodology"
        items={cybersecurityTechnologies}
        variant="compact"
      />

      {/* Internal links */}
      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Related</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">Strengthen your full security posture</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/services/penetration-testing" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Penetration Testing & Red Teaming</p>
                  <p className="mt-1 text-xs text-slate-500">Full-scope adversary simulation beyond the API layer.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
              <Link href="/products/uzyntra-api-firewall" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">UZYNTRA API Firewall</p>
                  <p className="mt-1 text-xs text-slate-500">Runtime API protection after the security test is complete.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">FAQ</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Common questions</h2>
            <div className="mt-8 grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="surface-card p-5">
                  <h3 className="text-sm font-semibold text-slate-950">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to test your API security?</h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Request a scoped API security audit and get a clear picture of your exposure before attackers do.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                Request API Security Audit
              </Link>
              <Link href="/services/penetration-testing" className="btn-stroke inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                View Penetration Testing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
