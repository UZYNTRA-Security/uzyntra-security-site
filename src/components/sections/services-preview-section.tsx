"use client";

import Link from "next/link";
import { ShieldAlert, Crosshair, Blocks, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { FlipInfoCard } from "@/components/ui/flip-info-card";

const items = [
  {
    title: "API & SaaS Security Testing",
    href: "/services/api-security",
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
    href: "/services/penetration-testing",
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
    href: "/services/blockchain-security",
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

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardIn = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" as const } },
};

export function ServicesPreviewSection() {
  return (
    <section className="section-tight py-20">
      {/* Fix 3: max-w-6xl tighter container */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

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

        {/* Staggered card entrance */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid grid-cols-1 items-stretch gap-8 md:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={cardIn} className="h-full">
              <FlipInfoCard
                title={item.title}
                icon={item.icon}
                frontDescription={item.frontDescription}
                backDescription={item.backDescription}
                backBullets={item.backBullets}
                href={item.href}
                hrefLabel={item.hrefLabel}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Fix 8: mt-16 | Fix 9: updated microcopy | Fix 5: primary CTA hierarchy */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-slate-400">
            Trusted by SaaS, fintech, and high-risk platforms handling real-world threats.
          </p>
          {/* Fix 5: ONE primary action, clearly dominant */}
          <Link
            href="/services"
            className="btn-solid inline-flex h-11 items-center gap-2 rounded-xl px-7 text-sm"
          >
            Explore All Capabilities
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
}
