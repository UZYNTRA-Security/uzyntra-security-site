import {
  ShieldAlert,
  Crosshair,
  ServerCog,
  Blocks,
  BrainCircuit,
} from "lucide-react";

export type ServiceItem = {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  navDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCta: string;
  metaTitle: string;
  metaDescription: string;
  icon: React.ReactNode;
};

export const services: ServiceItem[] = [
  {
    slug: "api-security",
    href: "/services/api-security",
    title: "API & SaaS Security Testing",
    shortTitle: "API Security",
    eyebrow: "Offensive Security",
    navDescription:
      "Offensive testing for APIs, SaaS platforms, authentication systems, and cloud services.",
    heroHeadline:
      "API Security Testing for SaaS Platforms That Can't Afford Breaches",
    heroSubheadline:
      "UZYNTRA identifies exploitable vulnerabilities in your APIs, authentication flows, and SaaS attack surface before adversaries do — using OWASP methodology and real-world abuse scenarios.",
    heroCta: "Request API Security Audit",
    metaTitle: "API Security Testing Services | UZYNTRA Security",
    metaDescription:
      "Offensive API security testing for SaaS platforms, authentication systems, and cloud-connected APIs. OWASP API Top 10 coverage, token abuse, BOLA, and business-logic testing.",
    icon: <ShieldAlert className="h-5 w-5" />,
  },
  {
    slug: "penetration-testing",
    href: "/services/penetration-testing",
    title: "Penetration Testing & Red Teaming",
    shortTitle: "Penetration Testing",
    eyebrow: "Red Team Operations",
    navDescription:
      "Real-world attack simulations across infrastructure, applications, and identity systems.",
    heroHeadline: "Penetration Testing That Simulates Real Adversaries",
    heroSubheadline:
      "UZYNTRA conducts structured penetration tests and red team operations across web applications, internal networks, cloud environments, and identity systems to expose exploitable weaknesses before they become incidents.",
    heroCta: "Book a Penetration Test",
    metaTitle: "Penetration Testing & Red Teaming Services | UZYNTRA Security",
    metaDescription:
      "Professional penetration testing and red team services for web applications, infrastructure, cloud, and identity systems. Vulnerability validation, privilege escalation, and adversary simulation.",
    icon: <Crosshair className="h-5 w-5" />,
  },
  {
    slug: "backend-engineering",
    href: "/services/backend-engineering",
    title: "Secure Backend & Cloud Engineering",
    shortTitle: "Backend Engineering",
    eyebrow: "Secure Engineering",
    navDescription:
      "Design and development of secure backend systems, APIs, and cloud-native architectures built with Rust and modern stacks.",
    heroHeadline:
      "Secure Backend and Cloud Engineering for Production-Grade Systems",
    heroSubheadline:
      "UZYNTRA designs and builds backend systems, APIs, and cloud-native architectures with security embedded at every layer — from authentication design to deployment hardening.",
    heroCta: "Build Secure Infrastructure",
    metaTitle: "Secure Backend & Cloud Engineering Services | UZYNTRA Security",
    metaDescription:
      "Secure backend development using Rust, cloud-native architecture, API design, DevSecOps pipelines, and authentication systems built for production environments.",
    icon: <ServerCog className="h-5 w-5" />,
  },
  {
    slug: "blockchain-security",
    href: "/services/blockchain-security",
    title: "Blockchain Security & Smart Contract Engineering",
    shortTitle: "Blockchain Security",
    eyebrow: "Web3 Engineering",
    navDescription:
      "Smart contract development, blockchain security reviews, dApp architecture, and secure Web3 system engineering.",
    heroHeadline:
      "Blockchain Security and Smart Contract Engineering for Serious Web3 Products",
    heroSubheadline:
      "UZYNTRA designs and secures smart contracts, dApps, token systems, and blockchain-integrated platforms with a security-first engineering approach.",
    heroCta: "Request Blockchain Security Review",
    metaTitle:
      "Blockchain Security & Smart Contract Engineering | UZYNTRA Security",
    metaDescription:
      "Smart contract development, blockchain security reviews, dApp architecture, wallet integration, and Web3 security engineering for production-grade blockchain products.",
    icon: <Blocks className="h-5 w-5" />,
  },
  {
    slug: "automation-ai",
    href: "/services/automation-ai",
    title: "Automation & AI Workflow Systems",
    shortTitle: "Automation & AI",
    eyebrow: "Workflow Engineering",
    navDescription:
      "n8n automation, API orchestration, AI pipelines, and self-hosted workflow systems for scalable operations.",
    heroHeadline: "Automation and AI Workflow Systems That Reduce Manual Overhead",
    heroSubheadline:
      "UZYNTRA builds production-grade automation systems using n8n, LangChain, and event-driven architecture — connecting your tools, APIs, and AI models into reliable operational workflows.",
    heroCta: "Automate Securely",
    metaTitle: "Automation & AI Workflow Systems | UZYNTRA Security",
    metaDescription:
      "n8n workflow automation, API orchestration, AI agent pipelines, and self-hosted automation systems engineered for secure, scalable business operations.",
    icon: <BrainCircuit className="h-5 w-5" />,
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
