import { ServerCog, Globe, Smartphone, Workflow, BrainCircuit, Database } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { ServiceCapabilityGrid } from "@/components/sections/service-capability-grid";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { softwareTechnologies } from "@/data/technologies";

const items = [
  {
    title: "Rust Backend",
    icon: <ServerCog className="h-5 w-5" />,
    frontDescription:
      "High-performance, memory-safe backend systems for security-critical and latency-sensitive workloads.",
    backDescription:
      "Ideal for systems that require strong reliability, modern API design, concurrency control, low-level performance, and security-focused backend engineering.",
  },
  {
    title: "Web Applications",
    icon: <Globe className="h-5 w-5" />,
    frontDescription:
      "Full-stack web platforms using modern frameworks with secure architecture and production-grade delivery.",
    backDescription:
      "Focused on scalable UI systems, backend integration, operational maintainability, and business-ready application delivery for serious environments.",
  },
  {
    title: "Mobile Apps",
    icon: <Smartphone className="h-5 w-5" />,
    frontDescription:
      "Cross-platform and native mobile application development with secure data handling.",
    backDescription:
      "Supports enterprise workflows, field operations, customer-facing products, and security-aware mobile delivery with long-term maintainability.",
  },
  {
    title: "DevOps & CI/CD",
    icon: <Workflow className="h-5 w-5" />,
    frontDescription:
      "Automated pipelines, infrastructure as code, deployment orchestration, and workflow hardening.",
    backDescription:
      "Improves release confidence, operational consistency, deployment repeatability, and engineering efficiency across teams and environments.",
  },
  {
    title: "AI Systems",
    icon: <BrainCircuit className="h-5 w-5" />,
    frontDescription:
      "AI-integrated applications, automation systems, intelligent workflows, and modern inference pipelines.",
    backDescription:
      "Designed for organizations that want practical AI integration into products, analytics, operations, or workflow automation with production discipline.",
  },
  {
    title: "Data & API Platforms",
    icon: <Database className="h-5 w-5" />,
    frontDescription:
      "Modern APIs, backend services, data pipelines, and platform-oriented system integration.",
    backDescription:
      "Supports platform growth through secure API architecture, reliable service boundaries, structured data movement, and long-term extensibility.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Software Development"
        title="Build secure, scalable, and production-ready digital systems"
        description="UZYNTRA Security delivers engineering services across backend systems, web platforms, mobile applications, DevOps, and AI-enabled software solutions."
      />

      <TechnologySlider
        eyebrow="OUR MAJOR STACKS"
        title="Languages, Frameworks & Infrastructure"
        items={softwareTechnologies}
        variant="compact"
      />

      <ServiceCapabilityGrid
        heading="What we build"
        intro="End-to-end software engineering across the modern stack, with security, architecture quality, and production readiness at the core."
        items={items}
      />
    </main>
  );
}
