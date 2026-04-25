import type { Metadata } from "next";
import {
  Workflow,
  ArrowLeftRight,
  Plug,
  Building2,
  BrainCircuit,
  ShoppingCart,
  Megaphone,
  DatabaseBackup,
  Webhook,
  Server,
  PuzzleIcon,
  RefreshCcw,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { ServiceCapabilityGrid } from "@/components/sections/service-capability-grid";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { n8nTechnologies } from "@/data/technologies";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "n8n Automation & Workflow Engineering",
  description:
    "UZYNTRA Security delivers custom n8n workflow automation, API orchestration, AI agent pipelines, and self-hosted deployment services for modern business operations.",
  alternates: { canonical: "/services/automation-ai" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "n8n Automation & Workflow Engineering | UZYNTRA Security",
    description:
      "Custom workflow automation, cross-platform integrations, AI agent pipelines, and self-hosted n8n deployment for enterprise and operational environments.",
    url: `${siteConfig.url}/services/automation-ai`,
  },
};

const items = [
  {
    title: "Workflow Automation",
    icon: <Workflow className="h-5 w-5" />,
    frontDescription:
      "Custom n8n workflow design and development for repeatable, reliable business process automation.",
    backDescription:
      "Built for organizations that need structured automation across internal systems, external APIs, and operational pipelines — with maintainability and production reliability as core requirements.",
  },
  {
    title: "Data Sync & Migration",
    icon: <ArrowLeftRight className="h-5 w-5" />,
    frontDescription:
      "Cross-platform data synchronization, transformation pipelines, and structured migration workflows.",
    backDescription:
      "Supports organizations moving data between systems, maintaining consistency across platforms, and building reliable ETL pipelines with audit trails and error handling.",
  },
  {
    title: "API Orchestration",
    icon: <Plug className="h-5 w-5" />,
    frontDescription:
      "Multi-service API integration and orchestration across internal and third-party platforms.",
    backDescription:
      "Designed for environments where multiple APIs must coordinate reliably — covering authentication, rate limiting, retry logic, response mapping, and structured error management.",
  },
  {
    title: "Business Process Automation",
    icon: <Building2 className="h-5 w-5" />,
    frontDescription:
      "Internal tool and operational workflow automation across CRM, ERP, HR, and support systems.",
    backDescription:
      "Reduces manual overhead in business operations by automating approval flows, data entry, notifications, reporting, and cross-system record management.",
  },
  {
    title: "AI Agent Workflows",
    icon: <BrainCircuit className="h-5 w-5" />,
    frontDescription:
      "LLM-powered automation pipelines and AI agent workflows using LangChain and modern inference APIs.",
    backDescription:
      "Integrates large language models and AI agents into operational workflows — covering document processing, intelligent routing, summarization, classification, and decision automation.",
  },
  {
    title: "E-commerce Automation",
    icon: <ShoppingCart className="h-5 w-5" />,
    frontDescription:
      "Order, payment, and fulfillment automation across Shopify, WooCommerce, Stripe, and related platforms.",
    backDescription:
      "Automates e-commerce operations including order processing, inventory sync, payment reconciliation, customer notifications, and cross-platform data consistency.",
  },
  {
    title: "Marketing Automation",
    icon: <Megaphone className="h-5 w-5" />,
    frontDescription:
      "Lead management, campaign, and CRM automation across Mailchimp, HubSpot, and marketing platforms.",
    backDescription:
      "Connects marketing tools to operational systems — automating lead capture, segmentation, nurture sequences, CRM updates, and campaign reporting pipelines.",
  },
  {
    title: "Backup & Reporting",
    icon: <DatabaseBackup className="h-5 w-5" />,
    frontDescription:
      "Scheduled data backup workflows and automated reporting pipelines across systems and databases.",
    backDescription:
      "Ensures data resilience and operational visibility through scheduled exports, structured backups, automated report generation, and delivery to stakeholders or storage systems.",
  },
  {
    title: "Webhooks & Event Automation",
    icon: <Webhook className="h-5 w-5" />,
    frontDescription:
      "Real-time webhook processing and event-driven automation for responsive operational systems.",
    backDescription:
      "Handles inbound webhook events from any platform, triggering structured workflows in real time — with validation, transformation, routing, and reliable downstream execution.",
  },
  {
    title: "Self-hosted n8n Deployment",
    icon: <Server className="h-5 w-5" />,
    frontDescription:
      "Production-grade self-hosted n8n setup on Docker, cloud infrastructure, or private environments.",
    backDescription:
      "Covers full deployment, configuration, security hardening, credential management, scaling, and ongoing operational support for self-hosted n8n environments.",
  },
  {
    title: "Custom n8n Nodes",
    icon: <PuzzleIcon className="h-5 w-5" />,
    frontDescription:
      "Purpose-built custom n8n nodes for proprietary systems, internal APIs, and specialized integrations.",
    backDescription:
      "Extends n8n's native capabilities with custom-developed nodes that integrate internal platforms, legacy systems, or specialized third-party services not covered by existing connectors.",
  },
  {
    title: "Legacy System Integration",
    icon: <RefreshCcw className="h-5 w-5" />,
    frontDescription:
      "Workflow-based integration and modernization bridges for legacy systems and older infrastructure.",
    backDescription:
      "Connects legacy platforms to modern tooling through structured automation layers — enabling data flow, process continuity, and incremental modernization without full system replacement.",
  },
];

export default function N8nAutomationPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="n8n Automation"
        title="Automate workflows, integrations, and operational systems with n8n"
        description="UZYNTRA Security builds custom n8n automation systems across API orchestration, business process automation, AI agent pipelines, and self-hosted deployment — engineered for reliability and operational scale."
      />

      <TechnologySlider
        eyebrow="AUTOMATION STACK"
        title="Platforms and Tools We Automate With"
        items={n8nTechnologies}
        variant="compact"
      />

      <ServiceCapabilityGrid
        heading="What we automate"
        intro="End-to-end workflow automation and integration engineering across modern platforms, internal systems, and AI-enabled pipelines."
        items={items}
      />
    </main>
  );
}
