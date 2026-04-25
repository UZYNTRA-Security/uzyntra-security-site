import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ServerCog, Shield, Cloud, KeyRound,
  Activity, GitBranch, AlertTriangle, ArrowRight, MessageSquare,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { siteConfig } from "@/config/site";
import { softwareTechnologies } from "@/data/technologies";

const ServiceCapabilityGrid = dynamic(
  () => import("@/components/sections/service-capability-grid").then((m) => m.ServiceCapabilityGrid),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Secure Backend & Cloud Engineering Services | UZYNTRA Security",
  description:
    "Secure backend development using Rust, cloud-native architecture, API design, DevSecOps pipelines, and authentication systems built for production environments.",
  alternates: { canonical: `${siteConfig.url}/services/backend-engineering` },
  openGraph: {
    title: "Secure Backend & Cloud Engineering | UZYNTRA Security",
    description:
      "Rust backend systems, cloud-native architecture, secure API design, and DevSecOps-aligned engineering for production-grade environments.",
    url: `${siteConfig.url}/services/backend-engineering`,
  },
};

const painPoints = [
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Security Bolted On After Launch",
    body: "Systems built without security in the design phase require expensive rework — authentication flaws, insecure defaults, and missing controls discovered post-deployment.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Weak Authentication Architecture",
    body: "Homegrown auth systems, missing token rotation, insecure session management, and absent MFA enforcement create persistent account takeover risk.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Cloud Misconfiguration at Scale",
    body: "Overpermissioned IAM, unencrypted storage, missing audit logging, and insecure network policies compound as infrastructure grows.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "No Observability Under Attack",
    body: "Systems without structured logging and alerting leave teams blind during incidents — unable to detect, contain, or investigate breaches effectively.",
  },
];

const capabilities = [
  {
    title: "Rust Backend Systems",
    icon: <ServerCog className="h-5 w-5" />,
    frontDescription: "Memory-safe, high-performance backend services for security-critical workloads.",
    backDescription:
      "Rust eliminates entire classes of memory safety vulnerabilities at the language level. We build APIs, services, and system-level components where correctness and performance are non-negotiable.",
  },
  {
    title: "Secure API Architecture",
    icon: <Shield className="h-5 w-5" />,
    frontDescription: "API design with authentication, authorization, rate limiting, and input validation built in.",
    backDescription:
      "Every API we design includes proper authentication flows, role-based access control, input validation, rate limiting, and structured error handling — not as afterthoughts but as core design requirements.",
  },
  {
    title: "Cloud-Native Architecture",
    icon: <Cloud className="h-5 w-5" />,
    frontDescription: "AWS, containerized workloads, infrastructure as code, and secure cloud design patterns.",
    backDescription:
      "Cloud-native systems designed with least-privilege IAM, encrypted storage, private networking, secrets management, and audit logging — built to pass security review from day one.",
  },
  {
    title: "Authentication & Identity Systems",
    icon: <KeyRound className="h-5 w-5" />,
    frontDescription: "JWT, OAuth 2.0, OIDC, MFA, and session management implemented correctly.",
    backDescription:
      "Authentication architecture that covers token lifecycle management, refresh rotation, MFA enforcement, session invalidation, and identity provider integration — designed to resist real-world attacks.",
  },
  {
    title: "Observability & Logging",
    icon: <Activity className="h-5 w-5" />,
    frontDescription: "Structured logging, distributed tracing, alerting, and security event visibility.",
    backDescription:
      "Systems built with observability from the start — structured logs, distributed tracing, anomaly alerting, and security event capture that enables detection and investigation when incidents occur.",
  },
  {
    title: "DevSecOps & CI/CD Security",
    icon: <GitBranch className="h-5 w-5" />,
    frontDescription: "Secure pipelines with SAST, dependency scanning, secrets detection, and IaC review.",
    backDescription:
      "CI/CD pipelines hardened with static analysis, dependency vulnerability scanning, secrets detection, container image scanning, and infrastructure-as-code security checks at every stage.",
  },
];

const process = [
  { step: "01", title: "Architecture Review", body: "Threat modeling, security requirements definition, and architecture design with security controls mapped." },
  { step: "02", title: "Secure Development", body: "Implementation with security-first patterns, code review, and SAST integration throughout." },
  { step: "03", title: "Hardening", body: "Configuration hardening, secrets management, network policy, and access control implementation." },
  { step: "04", title: "Validation", body: "Security testing, penetration test coordination, and deployment readiness review." },
];

const faqs = [
  {
    q: "Why Rust for backend systems?",
    a: "Rust eliminates memory safety vulnerabilities — buffer overflows, use-after-free, and data races — at compile time. For security-critical systems handling sensitive data or high-value operations, this removes entire vulnerability classes that C, C++, and even Go cannot prevent.",
  },
  {
    q: "What does secure SDLC mean in practice?",
    a: "Secure SDLC means security is integrated at every phase — threat modeling during design, security requirements in specifications, SAST and dependency scanning in CI/CD, code review with security focus, and penetration testing before production deployment. Not a checkbox at the end.",
  },
  {
    q: "Do you work with existing codebases or only greenfield projects?",
    a: "Both. For existing systems we conduct a security architecture review, identify the highest-risk areas, and implement targeted improvements. For greenfield projects we design security in from the start.",
  },
  {
    q: "Can you integrate with our existing DevOps pipeline?",
    a: "Yes. We work with GitHub Actions, GitLab CI, CircleCI, Jenkins, and other CI/CD systems to integrate SAST, dependency scanning, secrets detection, and container scanning into your existing workflow.",
  },
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function BackendEngineeringPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Secure Backend & Cloud Engineering"
        title="Secure Backend and Cloud Engineering for Production-Grade Systems"
        description="UZYNTRA designs and builds backend systems, APIs, and cloud-native architectures with security embedded at every layer — from authentication design to deployment hardening."
      />

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Why It Matters</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
              Security retrofitted after launch costs 10× more than building it in
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
              Most backend vulnerabilities are architectural decisions made early — and expensive to fix later.
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

      <ServiceCapabilityGrid
        heading="What we build"
        intro="Secure backend systems, cloud-native architecture, and DevSecOps-aligned engineering for organizations that can't afford to cut corners."
        items={capabilities}
      />

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Process</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">How we deliver secure systems</h2>
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

      <TechnologySlider
        eyebrow="STACK"
        title="Languages, Frameworks & Infrastructure"
        items={softwareTechnologies}
        variant="compact"
      />

      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Related</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">Validate what you build</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/services/api-security-testing" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">API & SaaS Security Testing</p>
                  <p className="mt-1 text-xs text-slate-500">Test the APIs you build for exploitable vulnerabilities.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
              <Link href="/products/uzyntra-api-firewall" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">UZYNTRA API Firewall</p>
                  <p className="mt-1 text-xs text-slate-500">Runtime protection layer for the APIs you deploy.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to build secure infrastructure?</h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Talk to UZYNTRA about your backend architecture and get a clear path to production-grade security.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                Build Secure Infrastructure
              </Link>
              <Link href="/services/api-security-testing" className="btn-stroke inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                View API Security Testing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
