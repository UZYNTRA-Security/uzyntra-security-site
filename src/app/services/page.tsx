import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, Crosshair, ServerCog, Blocks, BrainCircuit, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Security, Engineering & Automation Services | UZYNTRA Security",
  description:
    "API security testing, penetration testing, secure backend engineering, blockchain security, and automation systems — delivered by UZYNTRA Security.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: "Services | UZYNTRA Security",
    description:
      "High-intent technical services across offensive security, secure engineering, blockchain, and automation for organizations that can't afford to cut corners.",
    url: `${siteConfig.url}/services`,
  },
};

const services = [
  {
    title: "API & SaaS Security Testing",
    href: "/services/api-security",
    icon: <ShieldAlert className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "Offensive Security",
    description:
      "Offensive testing for APIs, SaaS platforms, authentication systems, and cloud services to identify critical vulnerabilities before attackers do.",
    highlights: ["OWASP API Top 10", "BOLA & Auth Bypass", "Token Abuse", "Business Logic Testing"],
    cta: "Request API Security Audit",
  },
  {
    title: "Penetration Testing & Red Teaming",
    href: "/services/penetration-testing",
    icon: <Crosshair className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "Red Team Operations",
    description:
      "Real-world attack simulations across infrastructure, applications, and identity systems to expose exploitable weaknesses.",
    highlights: ["Web App Testing", "Infrastructure Pentesting", "Red Team Simulation", "Cloud Exposure"],
    cta: "Book a Penetration Test",
  },
  {
    title: "Secure Backend & Cloud Engineering",
    href: "/services/backend-engineering",
    icon: <ServerCog className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "Secure Engineering",
    description:
      "Design and development of secure backend systems, APIs, and cloud-native architectures built with Rust and modern stacks.",
    highlights: ["Rust Backend Systems", "Cloud-Native Architecture", "Secure SDLC", "DevSecOps"],
    cta: "Build Secure Infrastructure",
  },
  {
    title: "Blockchain Security & Smart Contract Engineering",
    href: "/services/blockchain-security",
    icon: <Blocks className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "Web3 Engineering",
    description:
      "Smart contract development, blockchain security reviews, dApp architecture, wallet integration, and secure Web3 system engineering.",
    highlights: ["Smart Contract Audits", "dApp Architecture", "Token Systems", "Reentrancy & Logic Review"],
    cta: "Request Blockchain Security Review",
  },
  {
    title: "Automation & AI Workflow Systems",
    href: "/services/automation-ai",
    icon: <BrainCircuit className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "Workflow Engineering",
    description:
      "n8n automation, API orchestration, AI pipelines, and self-hosted workflow systems for scalable operations.",
    highlights: ["n8n Workflows", "AI Agent Pipelines", "API Orchestration", "Self-hosted Deployment"],
    cta: "Automate Securely",
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Services"
        title="Technical services built for organizations that take security seriously"
        description="UZYNTRA Security delivers offensive security testing, secure engineering, blockchain development, and automation systems — with no generic wording and no junior delivery."
      />

      <section className="section-tight">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="surface-card-strong group flex flex-col gap-5 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(220,38,38,0.10)]"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-red-700">
                      {service.eyebrow}
                    </p>
                    <h2 className="mt-1 text-base font-semibold leading-snug text-slate-950">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-600">{service.description}</p>

                <ul className="grid grid-cols-2 gap-1.5">
                  {service.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    href={service.href}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-all duration-200 hover:gap-3"
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
