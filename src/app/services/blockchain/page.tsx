import type { Metadata } from "next";
import { Blocks, FileCode2, Wallet, Landmark, Network, Shield } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { ServiceCapabilityGrid } from "@/components/sections/service-capability-grid";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { blockchainTechnologies } from "@/data/technologies";

export const metadata: Metadata = {
  alternates: { canonical: "/services/blockchain-security" },
  robots: { index: false, follow: true },
};

const items = [
  {
    title: "Custom Blockchain Development",
    icon: <Blocks className="h-5 w-5" />,
    frontDescription:
      "Public and permissioned blockchain systems tailored to organizational requirements.",
    backDescription:
      "Supports enterprises exploring blockchain architecture, internal networks, industry-specific platforms, and controlled distributed system design.",
  },
  {
    title: "Smart Contracts",
    icon: <FileCode2 className="h-5 w-5" />,
    frontDescription:
      "Smart contract development, review, and security-focused implementation for decentralized systems.",
    backDescription:
      "Focused on logic integrity, contract correctness, architectural clarity, and dependable blockchain execution paths.",
  },
  {
    title: "Wallet & Token Systems",
    icon: <Wallet className="h-5 w-5" />,
    frontDescription:
      "Crypto wallets, token models, asset interaction layers, and user-facing blockchain flows.",
    backDescription:
      "Designed for organizations building tokenized products, NFT utilities, user wallets, or controlled blockchain-based transaction experiences.",
  },
  {
    title: "dApps & DeFi Platforms",
    icon: <Landmark className="h-5 w-5" />,
    frontDescription:
      "Decentralized applications and finance-oriented blockchain products with structured delivery.",
    backDescription:
      "Supports product development for blockchain-native services, financial flows, user interaction layers, and protocol-connected application logic.",
  },
  {
    title: "Node Infrastructure",
    icon: <Network className="h-5 w-5" />,
    frontDescription:
      "Node deployment, blockchain infrastructure, integration layers, and backend connectivity.",
    backDescription:
      "Covers operational blockchain infrastructure, chain communication layers, reliability planning, and enterprise deployment considerations.",
  },
  {
    title: "Blockchain Security Audits",
    icon: <Shield className="h-5 w-5" />,
    frontDescription:
      "Security review for blockchain logic, contract design, integration risks, and deployment posture.",
    backDescription:
      "Aims to reduce blockchain-related implementation risk through structured review, security analysis, and architecture-level validation.",
  },
];

export default function BlockchainPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Blockchain"
        title="Enterprise blockchain engineering with product, infrastructure, and security depth"
        description="UZYNTRA Security delivers blockchain services across smart contracts, dApps, token systems, node infrastructure, and enterprise adoption strategy."
      />

      <TechnologySlider
        eyebrow="BLOCKCHAIN ECOSYSTEM"
        title="Protocols, Frameworks, and Infrastructure We Build With"
        items={blockchainTechnologies}
        variant="compact"
      />

      <ServiceCapabilityGrid
        heading="What we build in blockchain"
        intro="From infrastructure and protocols to applications and security review, UZYNTRA supports blockchain delivery with enterprise discipline."
        items={items}
      />
    </main>
  );
}
