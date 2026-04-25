import Link from "next/link";
import { ShieldAlert, Crosshair, Blocks } from "lucide-react";

import { FlipInfoCard } from "@/components/ui/flip-info-card";

const items = [
  {
    title: "API & SaaS Security Testing",
    href: "/services/cybersecurity",
    icon: <ShieldAlert className="h-5 w-5" />,
    frontDescription: "OWASP API Top 10, BOLA, token abuse, auth bypass, and SaaS attack surface testing.",
    backDescription: "Offensive API security testing for SaaS platforms, authentication systems, and cloud-connected APIs.",
    backBullets: [
      "OWASP API Top 10 full coverage",
      "BOLA & auth bypass exploitation",
      "Token abuse & session attacks",
      "SaaS attack surface mapping",
    ],
    hrefLabel: "Start API Security Audit",
  },
  {
    title: "Penetration Testing & Red Teaming",
    href: "/services/cybersecurity",
    icon: <Crosshair className="h-5 w-5" />,
    frontDescription: "Web app, infrastructure, cloud, and identity attack simulations with real adversary TTPs.",
    backDescription: "Structured penetration tests and red team operations exposing exploitable weaknesses.",
    backBullets: [
      "Application & API testing",
      "Network & cloud attack simulation",
      "Identity & auth exploitation",
      "Real adversary TTP coverage",
    ],
    hrefLabel: "See Attack Paths",
  },
  {
    title: "Blockchain Security & Smart Contracts",
    href: "/services/blockchain",
    icon: <Blocks className="h-5 w-5" />,
    frontDescription: "Smart contract development, security reviews, dApp architecture, and Web3 engineering.",
    backDescription: "Security-first blockchain engineering covering smart contracts, token systems, and dApp architecture.",
    backBullets: [
      "Smart contract security review",
      "Reentrancy & access control audit",
      "dApp architecture hardening",
      "Token & wallet risk analysis",
    ],
    hrefLabel: "Scan Smart Contracts",
  },
];

export function ServicesPreviewSection() {
  return (
    // Fix 8: py-20 section padding
    <section className="section-tight py-20">
      <div className="container-shell">

        {/* Fix 9: larger subtitle */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
            Services
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Security, engineering, and automation
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-500 md:text-lg">
            High-intent technical services built for organizations that take security seriously.
          </p>
        </div>

        {/* Fix 3 + 8: items-stretch, gap-8 */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {items.map((item) => (
            <FlipInfoCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              frontDescription={item.frontDescription}
              backDescription={item.backDescription}
              backBullets={item.backBullets}
              href={item.href}
              hrefLabel={item.hrefLabel}
            />
          ))}
        </div>

        {/* Fix 10: trust line + stronger bottom CTA */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-xs text-slate-400">
            Used by startups, fintech teams, and high-risk platforms.
          </p>
          <Link
            href="/services"
            className="btn-stroke inline-flex h-11 items-center gap-2 rounded-xl px-6 text-sm"
          >
            Explore All Capabilities
          </Link>
        </div>

      </div>
    </section>
  );
}
