import type { Metadata } from "next";
import Link from "next/link";
import {
  Crosshair, Globe, Network, Cloud, UserX,
  ShieldOff, CheckCircle2, AlertTriangle, ArrowRight, MessageSquare,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { ServiceCapabilityGrid } from "@/components/sections/service-capability-grid";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { siteConfig } from "@/config/site";
import { cybersecurityTechnologies } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Penetration Testing & Red Teaming Services | UZYNTRA Security",
  description:
    "Professional penetration testing and red team services for web applications, infrastructure, cloud, and identity systems. Vulnerability validation, privilege escalation, and adversary simulation.",
  alternates: { canonical: `${siteConfig.url}/services/penetration-testing` },
  openGraph: {
    title: "Penetration Testing & Red Teaming | UZYNTRA Security",
    description:
      "Real-world attack simulations across web applications, infrastructure, cloud environments, and identity systems. Structured pentests that expose exploitable weaknesses.",
    url: `${siteConfig.url}/services/penetration-testing`,
  },
};

const painPoints = [
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Unvalidated Vulnerability Findings",
    body: "Scanner output without manual exploitation leaves you guessing which findings are real, exploitable risks versus false positives.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Privilege Escalation Paths",
    body: "Low-severity findings chained together create critical attack paths that automated tools never connect — only manual red team work surfaces them.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Cloud Misconfiguration Exposure",
    body: "Overpermissioned IAM roles, public S3 buckets, and exposed metadata services create lateral movement paths attackers actively exploit.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Identity Attack Paths",
    body: "Weak MFA enforcement, password spray exposure, and Kerberoastable accounts give attackers persistent access through the identity layer.",
  },
];

const capabilities = [
  {
    title: "Web Application Penetration Testing",
    icon: <Globe className="h-5 w-5" />,
    frontDescription: "Full-scope web app testing covering OWASP Top 10, business logic, and authentication.",
    backDescription:
      "Manual exploitation of injection flaws, broken access controls, IDOR, SSRF, deserialization, and authentication weaknesses across web applications and their underlying APIs.",
  },
  {
    title: "External & Internal Network Testing",
    icon: <Network className="h-5 w-5" />,
    frontDescription: "External attack surface enumeration and internal network lateral movement testing.",
    backDescription:
      "External testing covers exposed services, misconfigured systems, and perimeter weaknesses. Internal testing simulates a compromised endpoint and maps lateral movement paths to critical assets.",
  },
  {
    title: "Red Team Operations",
    icon: <Crosshair className="h-5 w-5" />,
    frontDescription: "Full adversary simulation using real-world TTPs mapped to MITRE ATT&CK.",
    backDescription:
      "Objective-based red team engagements that simulate targeted threat actors — covering initial access, persistence, lateral movement, privilege escalation, and data exfiltration.",
  },
  {
    title: "Cloud Security Assessment",
    icon: <Cloud className="h-5 w-5" />,
    frontDescription: "AWS, Azure, and GCP misconfiguration review, IAM analysis, and exploitation testing.",
    backDescription:
      "Identifies overpermissioned roles, exposed storage, metadata service abuse, container escape paths, and cloud-native attack vectors across major cloud providers.",
  },
  {
    title: "Identity & Active Directory Testing",
    icon: <UserX className="h-5 w-5" />,
    frontDescription: "Kerberoasting, AS-REP roasting, password spray, and AD privilege escalation.",
    backDescription:
      "Tests Active Directory and identity infrastructure for exploitable misconfigurations, delegation abuse, ACL weaknesses, and attack paths to domain compromise.",
  },
  {
    title: "Vulnerability Validation & Reporting",
    icon: <CheckCircle2 className="h-5 w-5" />,
    frontDescription: "Exploited findings with CVSS scores, attack chains, and prioritized remediation.",
    backDescription:
      "Every finding is manually validated and exploited where safe to do so. Reports include attack narratives, business impact, CVSS scores, and actionable remediation guidance.",
  },
];

const process = [
  { step: "01", title: "Scoping & Recon", body: "Define targets, rules of engagement, and conduct passive and active reconnaissance." },
  { step: "02", title: "Exploitation", body: "Manual exploitation of discovered vulnerabilities, chaining findings into attack paths." },
  { step: "03", title: "Post-Exploitation", body: "Privilege escalation, lateral movement, persistence, and objective achievement." },
  { step: "04", title: "Reporting & Debrief", body: "Prioritized report with attack narratives, CVSS scores, and remediation guidance." },
];

const faqs = [
  {
    q: "What is the difference between a vulnerability assessment and a penetration test?",
    a: "A vulnerability assessment identifies and lists potential weaknesses using automated scanning. A penetration test goes further — manually exploiting those weaknesses to validate which ones are real, exploitable risks and demonstrating the actual business impact of a successful attack.",
  },
  {
    q: "What is red teaming and how is it different from pentesting?",
    a: "Penetration testing is typically scoped to specific systems or applications. Red teaming is an objective-based adversary simulation — the goal is to achieve a specific outcome (e.g., access to financial data) using any available attack path, mimicking how a real threat actor operates.",
  },
  {
    q: "How long does a penetration test take?",
    a: "Scope determines duration. A focused web application test typically takes 5–10 days. A full-scope external and internal network test runs 2–4 weeks. Red team engagements are typically 4–8 weeks depending on objectives and environment complexity.",
  },
  {
    q: "Will the test disrupt our production systems?",
    a: "We define rules of engagement before any testing begins. Destructive actions are explicitly excluded unless agreed upon. All testing is conducted with care to avoid service disruption, and we coordinate timing with your team.",
  },
];

export default function PenetrationTestingPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Penetration Testing & Red Teaming"
        title="Penetration Testing That Simulates Real Adversaries"
        description="UZYNTRA conducts structured penetration tests and red team operations across web applications, internal networks, cloud environments, and identity systems to expose exploitable weaknesses before they become incidents."
      />

      {/* Pain Points */}
      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Why It Matters</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
              Scanners find vulnerabilities. Attackers find attack paths.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
              Real breaches happen through chained weaknesses that automated tools never connect.
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
        heading="What we test"
        intro="Full-scope penetration testing and red team operations across web applications, networks, cloud, and identity infrastructure."
        items={capabilities}
      />

      {/* Process */}
      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Methodology</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">How we run a penetration test</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="surface-card p-5">
                <span className="text-3xl font-bold text-red-100">{p.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-slate-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologySlider
        eyebrow="TOOLING"
        title="Tools & Frameworks"
        items={cybersecurityTechnologies}
        variant="compact"
      />

      {/* Internal links */}
      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Related</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">Extend your security coverage</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/services/api-security" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">API & SaaS Security Testing</p>
                  <p className="mt-1 text-xs text-slate-500">Dedicated API-layer offensive testing.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
              <Link href="/products/uzyntra-api-firewall" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">UZYNTRA API Firewall</p>
                  <p className="mt-1 text-xs text-slate-500">Runtime protection after the pentest is complete.</p>
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

      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to test your defenses?</h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Book a scoped penetration test and find out what a real attacker would find in your environment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                Book a Penetration Test
              </Link>
              <Link href="/services/api-security" className="btn-stroke inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                View API Security Testing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
