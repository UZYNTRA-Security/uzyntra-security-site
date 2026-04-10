import Link from "next/link";
import { ShieldCheck, Code2, Blocks, Workflow } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { FlipInfoCard } from "@/components/ui/flip-info-card";

const items = [
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    icon: <ShieldCheck className="h-5 w-5" />,
    frontDescription: "Security assessments, cloud security, detection operations, and API defense.",
    backDescription:
      "Enterprise cybersecurity services across VAPT, MDR, SOCaaS, SIEM, IAM, cloud hardening, and risk reduction for modern attack surfaces.",
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    icon: <Code2 className="h-5 w-5" />,
    frontDescription: "Secure engineering across web, backend, mobile, DevOps, data, and AI systems.",
    backDescription:
      "Architecture-driven software delivery for modern businesses that require secure systems, reliability, and long-term technical scalability.",
  },
  {
    title: "Blockchain",
    href: "/services/blockchain",
    icon: <Blocks className="h-5 w-5" />,
    frontDescription: "Blockchain product engineering, smart contracts, infrastructure, and audits.",
    backDescription:
      "Supports blockchain adoption through secure implementation, token systems, dApps, interoperability, infrastructure, and enterprise-focused delivery.",
  },
  {
    title: "n8n Automation",
    href: "/services/n8n-automation",
    icon: <Workflow className="h-5 w-5" />,
    frontDescription: "Workflow automation, API orchestration, AI pipelines, and self-hosted n8n deployment.",
    backDescription:
      "Custom n8n automation across business processes, cross-platform integrations, AI agent workflows, and production-grade self-hosted deployment.",
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Services"
        title="Enterprise services across security, software engineering, and blockchain"
        description="UZYNTRA Security combines product-led security thinking with architecture-driven technical service delivery."
      />

      <section className="section-tight">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <Link key={item.title} href={item.href} className="block">
                <FlipInfoCard
                  title={item.title}
                  icon={item.icon}
                  frontDescription={item.frontDescription}
                  backDescription={item.backDescription}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
