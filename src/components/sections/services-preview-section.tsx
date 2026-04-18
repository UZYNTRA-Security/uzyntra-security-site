import Link from "next/link";
import { ShieldAlert, Crosshair, ServerCog, Blocks, BrainCircuit } from "lucide-react";

import { FlipInfoCard } from "@/components/ui/flip-info-card";

const items = [
  {
    title: "API & SaaS Security Testing",
    href: "/services/api-security",
    icon: <ShieldAlert className="h-5 w-5" />,
    frontDescription: "OWASP API Top 10, BOLA, token abuse, auth bypass, and SaaS attack surface testing.",
    backDescription:
      "Offensive API security testing for SaaS platforms, authentication systems, and cloud-connected APIs — identifying exploitable vulnerabilities before adversaries do.",
  },
  {
    title: "Penetration Testing & Red Teaming",
    href: "/services/penetration-testing",
    icon: <Crosshair className="h-5 w-5" />,
    frontDescription: "Web app, infrastructure, cloud, and identity attack simulations with real adversary TTPs.",
    backDescription:
      "Structured penetration tests and red team operations that expose exploitable weaknesses across applications, networks, cloud environments, and identity systems.",
  },
  {
    title: "Blockchain Security & Smart Contract Engineering",
    href: "/services/blockchain-security",
    icon: <Blocks className="h-5 w-5" />,
    frontDescription: "Smart contract development, security reviews, dApp architecture, and Web3 engineering.",
    backDescription:
      "Security-first blockchain engineering covering smart contracts, token systems, dApp architecture, wallet integration, and contract risk analysis for production Web3 products.",
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
            Security, engineering, and automation
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            High-intent technical services built for organizations that take security and engineering seriously.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 xl:gap-6">
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

        <div className="mt-8 flex justify-center">
          <Link
            href="/services"
            className="btn-stroke inline-flex h-11 items-center gap-2 rounded-xl px-6 text-sm"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
