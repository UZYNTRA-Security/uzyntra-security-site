import { ShieldCheck, Radar, Cloud, LockKeyhole, Activity, Bug } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { ServiceCapabilityGrid } from "@/components/sections/service-capability-grid";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { cybersecurityTechnologies } from "@/data/technologies";

const items = [
  {
    title: "VAPT",
    icon: <Bug className="h-5 w-5" />,
    frontDescription:
      "Comprehensive vulnerability assessment and penetration testing across web, mobile, API, and network layers.",
    backDescription:
      "Designed for organizations that need validated risk discovery, attack surface analysis, exploit verification, and practical remediation guidance across modern environments.",
  },
  {
    title: "MDR",
    icon: <Activity className="h-5 w-5" />,
    frontDescription:
      "Managed detection and response with continuous threat monitoring and containment workflows.",
    backDescription:
      "Supports security operations with improved visibility, faster triage, incident response coordination, and operational resilience across infrastructure and application environments.",
  },
  {
    title: "SOC as a Service",
    icon: <Radar className="h-5 w-5" />,
    frontDescription:
      "24/7 security operations center support for monitoring, alerting, and incident response.",
    backDescription:
      "Built for organizations seeking operational detection maturity, security telemetry handling, event analysis, and stronger defensive response capability without building everything in-house.",
  },
  {
    title: "SIEM",
    icon: <Activity className="h-5 w-5" />,
    frontDescription:
      "Centralized logging, event correlation, and security analytics across systems.",
    backDescription:
      "Improves observability, detection logic, and investigation workflows through structured telemetry, cross-source visibility, and operational event normalization.",
  },
  {
    title: "IAM",
    icon: <LockKeyhole className="h-5 w-5" />,
    frontDescription:
      "Identity and access management with role-based controls and zero-trust-aligned access design.",
    backDescription:
      "Supports access governance, least-privilege architecture, stronger authentication strategy, and identity-centric protection across enterprise systems.",
  },
  {
    title: "Cloud Security",
    icon: <Cloud className="h-5 w-5" />,
    frontDescription:
      "Cloud architecture security, posture hardening, configuration review, and protection strategy.",
    backDescription:
      "Focused on secure cloud adoption, misconfiguration reduction, policy alignment, and resilience across modern cloud-native workloads and infrastructure.",
  },
];

export default function CybersecurityPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Cybersecurity"
        title="Protect, detect, and respond with enterprise-grade security capability"
        description="UZYNTRA Security delivers practical cybersecurity services across applications, infrastructure, identity, cloud, and detection operations for modern organizations."
      />

      <TechnologySlider
        eyebrow="SECURITY TOOLING"
        title="Platforms and Tools We Work With"
        items={cybersecurityTechnologies}
        variant="compact"
      />

      <ServiceCapabilityGrid
        heading="What we cover"
        intro="A full spectrum of cybersecurity services designed to reduce risk, improve visibility, and strengthen operational response."
        items={items}
      />
    </main>
  );
}
