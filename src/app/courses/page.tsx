import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BrainCircuit, Shield, Cloud, GitMerge, Code2, Globe, Smartphone,
  BarChart3, Blocks, Zap, MessageSquare, Bot, Crosshair, ShieldAlert,
  Lock, Terminal, Container, Server, Network, Eye, Search, ArrowRight,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Courses | UZYNTRA Security",
  description:
    "Industry-relevant courses in cybersecurity, AI, cloud, DevSecOps, blockchain, automation, and more — built for 2026 job market demands.",
  alternates: { canonical: `${siteConfig.url}/courses` },
  openGraph: {
    title: "Courses | UZYNTRA Security",
    description:
      "High-income, industry-relevant skills training in cybersecurity, AI, cloud computing, DevSecOps, blockchain, and automation.",
    url: `${siteConfig.url}/courses`,
  },
};

const courses = [
  {
    title: "Artificial Intelligence",
    href: "/courses/artificial-intelligence",
    image: "/images/courses/artificial-intelligence.webp",
    icon: <BrainCircuit className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "Machine learning, deep learning, neural networks, and real-world AI application development.",
    highlights: ["ML Fundamentals", "Neural Networks", "LLMs & GPT", "AI Deployment"],
  },
  {
    title: "Cyber Security",
    href: "/courses/cybersecurity",
    image: "/images/courses/cybersecurity.webp",
    icon: <Shield className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "Comprehensive cybersecurity training covering threats, defenses, and industry frameworks.",
    highlights: ["Threat Modeling", "NIST Framework", "Incident Response", "Security Architecture"],
  },
  {
    title: "Cloud Computing",
    href: "/courses/cloud-computing",
    image: "/images/courses/cloud-computing.webp",
    icon: <Cloud className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "AWS, Azure, and GCP fundamentals through advanced cloud architecture and security.",
    highlights: ["AWS / Azure / GCP", "Cloud Architecture", "IAM & Security", "Cost Optimization"],
  },
  {
    title: "DevOps & DevSecOps",
    href: "/courses/devsecops",
    image: "/images/courses/devsecops.webp",
    icon: <GitMerge className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "CI/CD pipelines, infrastructure as code, and security integrated into every stage of delivery.",
    highlights: ["CI/CD Pipelines", "Terraform & IaC", "SAST/DAST", "Container Security"],
  },
  {
    title: "Python Programming",
    href: "/courses/python-programming",
    image: "/images/courses/python-programming.webp",
    icon: <Code2 className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "Python from fundamentals to advanced scripting, automation, and security tooling.",
    highlights: ["Core Python", "Scripting & Automation", "Security Tools", "APIs & Libraries"],
  },
  {
    title: "Web Development",
    href: "/courses/web-development",
    image: "/images/courses/web-development.webp",
    icon: <Globe className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐ Demand",
    description: "Full-stack web development with modern frameworks, secure coding practices, and deployment.",
    highlights: ["React / Next.js", "Node.js & APIs", "Secure Coding", "Deployment & CI/CD"],
  },
  {
    title: "Mobile App Development",
    href: "/courses/mobile-app-development",
    image: "/images/courses/mobile-app-development.webp",
    icon: <Smartphone className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐ Demand",
    description: "Build production-ready mobile apps for iOS and Android with security-first architecture.",
    highlights: ["React Native", "Flutter", "Mobile Security", "App Store Deployment"],
  },
  {
    title: "Data Science & Analytics",
    href: "/courses/data-science",
    image: "/images/courses/data-science.webp",
    icon: <BarChart3 className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐ Demand",
    description: "Data analysis, visualization, statistical modeling, and machine learning pipelines.",
    highlights: ["Pandas & NumPy", "Data Visualization", "Statistical Modeling", "ML Pipelines"],
  },
  {
    title: "Blockchain & Web3",
    href: "/courses/blockchain-web3",
    image: "/images/courses/blockchain-web3.webp",
    icon: <Blocks className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐ Demand",
    description: "Smart contract development, DeFi protocols, dApp engineering, and Web3 security.",
    highlights: ["Solidity", "Smart Contracts", "DeFi & dApps", "Web3 Security"],
  },
  {
    title: "Automation (n8n, Make, Zapier)",
    href: "/courses/automation",
    image: "/images/courses/automation.webp",
    icon: <Zap className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "No-code and low-code automation workflows using n8n, Make, and Zapier for business operations.",
    highlights: ["n8n Workflows", "Make Scenarios", "Zapier Automation", "API Integration"],
  },
  {
    title: "Prompt Engineering",
    href: "/courses/prompt-engineering",
    image: "/images/courses/prompt-engineering.webp",
    icon: <MessageSquare className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐ Demand",
    description: "Master prompt design, chain-of-thought reasoning, and LLM optimization for production use.",
    highlights: ["Prompt Design", "Chain-of-Thought", "RAG Systems", "LLM Fine-tuning"],
  },
  {
    title: "AI Agent Development",
    href: "/courses/ai-agent-development",
    image: "/images/courses/ai-agent-development.webp",
    icon: <Bot className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "Build autonomous AI agents using LangChain, LlamaIndex, and multi-agent orchestration frameworks.",
    highlights: ["LangChain", "LlamaIndex", "Multi-Agent Systems", "Tool Use & Memory"],
  },
  {
    title: "Ethical Hacking",
    href: "/courses/ethical-hacking",
    image: "/images/courses/ethical-hacking.webp",
    icon: <Crosshair className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "Hands-on ethical hacking techniques covering reconnaissance, exploitation, and post-exploitation.",
    highlights: ["Recon & OSINT", "Exploitation", "Post-Exploitation", "Report Writing"],
  },
  {
    title: "Penetration Testing",
    href: "/courses/penetration-testing",
    image: "/images/courses/penetration-testing.webp",
    icon: <ShieldAlert className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "Structured penetration testing methodology for web apps, networks, and cloud environments.",
    highlights: ["Web App Testing", "Network Pentesting", "Cloud Pentesting", "CVSS & Reporting"],
  },
  {
    title: "API Security",
    href: "/courses/api-security",
    image: "/images/courses/api-security.webp",
    icon: <Lock className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "OWASP API Top 10, authentication attacks, BOLA, and API security testing methodology.",
    highlights: ["OWASP API Top 10", "BOLA & Auth Bypass", "Token Security", "API Fuzzing"],
  },
  {
    title: "Secure Coding",
    href: "/courses/secure-coding",
    image: "/images/courses/secure-coding.webp",
    icon: <Code2 className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "Write secure code from day one — input validation, OWASP Top 10, and secure SDLC practices.",
    highlights: ["Input Validation", "OWASP Top 10", "Secure SDLC", "Code Review"],
  },
  {
    title: "Linux Administration",
    href: "/courses/linux-administration",
    image: "/images/courses/linux-administration.webp",
    icon: <Terminal className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐ Demand",
    description: "Linux system administration, shell scripting, hardening, and server management.",
    highlights: ["Shell Scripting", "System Hardening", "User Management", "Service Configuration"],
  },
  {
    title: "Docker & Kubernetes",
    href: "/courses/docker-kubernetes",
    image: "/images/courses/docker-kubernetes.webp",
    icon: <Container className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "Containerization with Docker and orchestration with Kubernetes for production deployments.",
    highlights: ["Docker Fundamentals", "Kubernetes Clusters", "Helm Charts", "Container Security"],
  },
  {
    title: "AWS / Azure / GCP",
    href: "/courses/aws-azure-gcp",
    image: "/images/courses/aws-azure-gcp.webp",
    icon: <Server className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "Deep-dive into the three major cloud platforms with hands-on labs and certification prep.",
    highlights: ["AWS Solutions Architect", "Azure Fundamentals", "GCP Associate", "Multi-Cloud Strategy"],
  },
  {
    title: "Networking (CCNA)",
    href: "/courses/networking-ccna",
    image: "/images/courses/networking-ccna.webp",
    icon: <Network className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐ Demand",
    description: "Networking fundamentals, routing, switching, and CCNA certification preparation.",
    highlights: ["TCP/IP & OSI", "Routing & Switching", "VLANs & VPNs", "CCNA Prep"],
  },
  {
    title: "SOC Analyst",
    href: "/courses/soc-analyst",
    image: "/images/courses/soc-analyst.webp",
    icon: <Eye className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐⭐ Demand",
    description: "Security Operations Center analyst training — SIEM, threat detection, and incident response.",
    highlights: ["SIEM & Log Analysis", "Threat Detection", "Incident Response", "Threat Intelligence"],
  },
  {
    title: "Digital Forensics",
    href: "/courses/digital-forensics",
    image: "/images/courses/digital-forensics.webp",
    icon: <Search className="h-6 w-6 text-red-600" aria-hidden="true" />,
    eyebrow: "⭐⭐⭐⭐ Demand",
    description: "Digital forensics investigation, evidence collection, malware analysis, and chain of custody.",
    highlights: ["Disk Forensics", "Memory Analysis", "Malware Analysis", "Chain of Custody"],
  },
];

export default function CoursesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Courses"
        title="High-Income Skills for the 2026 Job Market"
        description="UZYNTRA Security offers industry-relevant training in cybersecurity, AI, cloud, DevSecOps, blockchain, and automation — skills that align with real market demand and our security-first brand."
      />

      <section className="section-tight">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="surface-card-strong group flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(220,38,38,0.10)]"
              >
                {/* Course image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={course.image}
                    alt={`${course.title} course`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  {/* Eyebrow badge over image */}
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-red-700 backdrop-blur-sm">
                    {course.eyebrow}
                  </span>
                </div>

                <div className="flex flex-col gap-4 p-5">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50">
                      {course.icon}
                    </div>
                    <h2 className="text-base font-semibold leading-snug text-slate-950">
                      {course.title}
                    </h2>
                  </div>

                  <p className="text-sm leading-6 text-slate-600">{course.description}</p>

                <ul className="grid grid-cols-2 gap-1.5">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                  <div className="mt-auto">
                    <Link
                      href={course.href}
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-all duration-200 hover:gap-3"
                    >
                      View Course
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to level up your skills?</h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Enroll in industry-relevant courses built around real-world security and engineering demands.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                Enroll Now
              </Link>
              <Link href="/services" className="btn-stroke inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
