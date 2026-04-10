import { ShieldCheck, Code2, Blocks } from "lucide-react";

import { FlipInfoCard } from "@/components/ui/flip-info-card";

const items = [
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    icon: <ShieldCheck className="h-5 w-5" />,
    frontDescription: "VAPT, MDR, SOCaaS, SIEM, IAM, cloud security, and API protection.",
    backDescription:
      "Security services designed for enterprises that need practical risk reduction, visibility, architecture review, and modern defensive capability across cloud, identity, infrastructure, and applications.",
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    icon: <Code2 className="h-5 w-5" />,
    frontDescription: "Web, mobile, Rust backend systems, DevOps pipelines, and AI solutions.",
    backDescription:
      "Secure software engineering focused on production architecture, backend reliability, modern frameworks, cloud readiness, API systems, and scalable delivery for real business environments.",
  },
  {
    title: "Blockchain",
    href: "/services/blockchain",
    icon: <Blocks className="h-5 w-5" />,
    frontDescription: "Smart contracts, dApps, wallets, DeFi, enterprise blockchain, and infrastructure.",
    backDescription:
      "Blockchain solutions covering custom chains, smart contracts, token systems, wallet development, interoperability, infrastructure, and enterprise adoption strategy with security in mind.",
  },
];

export function ServicesPreviewSection() {
  return (
    <section className="section-tight">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
            Services
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
            Core service areas
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            The primary capabilities that define the UZYNTRA Security platform and services model.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <FlipInfoCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              frontDescription={item.frontDescription}
              backDescription={item.backDescription}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
