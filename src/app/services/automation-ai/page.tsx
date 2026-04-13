import type { Metadata } from "next";
import Link from "next/link";
import {
  BrainCircuit, Workflow, Plug, Server,
  RefreshCcw, Shield, AlertTriangle, ArrowRight, MessageSquare,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { ServiceCapabilityGrid } from "@/components/sections/service-capability-grid";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { siteConfig } from "@/config/site";
import { n8nTechnologies } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Automation & AI Workflow Systems | UZYNTRA Security",
  description:
    "n8n workflow automation, API orchestration, AI agent pipelines, and self-hosted automation systems engineered for secure, scalable business operations.",
  alternates: { canonical: `${siteConfig.url}/services/automation-ai` },
  openGraph: {
    title: "Automation & AI Workflow Systems | UZYNTRA Security",
    description:
      "n8n automation, API orchestration, AI pipelines, and self-hosted workflow systems for scalable, secure business operations.",
    url: `${siteConfig.url}/services/automation-ai`,
  },
};

const painPoints = [
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Manual Processes at Scale",
    body: "Teams spending hours on repetitive data entry, report generation, and cross-system updates that should be automated — creating bottlenecks and error-prone operations.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Disconnected Tool Stacks",
    body: "CRM, ERP, support, and finance systems that don't talk to each other — requiring manual data transfer, duplicate entry, and constant reconciliation.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Insecure Automation Credentials",
    body: "Automation workflows with hardcoded API keys, shared credentials, and no secrets management — creating security exposure across every connected system.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Cloud Vendor Lock-in",
    body: "Automation platforms that store your workflows, credentials, and data on third-party infrastructure — with no control over data residency, access, or availability.",
  },
];

const capabilities = [
  {
    title: "n8n Workflow Automation",
    icon: <Workflow className="h-5 w-5" />,
    frontDescription: "Custom n8n workflows for business processes, integrations, and operational automation.",
    backDescription:
      "Production-grade n8n workflows built with error handling, retry logic, conditional branching, and structured logging — designed for reliability, not just functionality.",
  },
  {
    title: "AI Agent Pipelines",
    icon: <BrainCircuit className="h-5 w-5" />,
    frontDescription: "LangChain-powered AI workflows for document processing, classification, and decision automation.",
    backDescription:
      "AI agent workflows that integrate LLMs into operational processes — document analysis, intelligent routing, summarization, classification, and decision support using LangChain and modern inference APIs.",
  },
  {
    title: "API Orchestration",
    icon: <Plug className="h-5 w-5" />,
    frontDescription: "Multi-service API integration with authentication, rate limiting, and error management.",
    backDescription:
      "Complex API orchestration across internal and third-party services — covering OAuth flows, rate limit handling, retry logic, response transformation, and structured error management.",
  },
  {
    title: "Self-hosted n8n Deployment",
    icon: <Server className="h-5 w-5" />,
    frontDescription: "Production n8n deployment on Docker, cloud infrastructure, or private environments.",
    backDescription:
      "Full self-hosted n8n setup including Docker deployment, PostgreSQL configuration, credential encryption, reverse proxy setup, SSL, backup strategy, and security hardening.",
  },
  {
    title: "Secure Workflow Design",
    icon: <Shield className="h-5 w-5" />,
    frontDescription: "Secrets management, credential isolation, and access control for automation systems.",
    backDescription:
      "Automation workflows designed with security in mind — proper secrets management, credential isolation, least-privilege API access, audit logging, and input validation to prevent injection through workflow inputs.",
  },
  {
    title: "Legacy System Integration",
    icon: <RefreshCcw className="h-5 w-5" />,
    frontDescription: "Automation bridges for legacy systems, older APIs, and non-standard data formats.",
    backDescription:
      "Connects legacy platforms to modern tooling through structured automation layers — enabling data flow, process continuity, and incremental modernization without full system replacement.",
  },
];

const process = [
  { step: "01", title: "Process Mapping", body: "Document current workflows, identify automation candidates, and define integration requirements." },
  { step: "02", title: "Architecture Design", body: "Design workflow structure, data flows, error handling, and security controls before building." },
  { step: "03", title: "Build & Test", body: "Workflow development with unit testing, error scenario validation, and integration testing." },
  { step: "04", title: "Deploy & Monitor", body: "Production deployment with monitoring, alerting, and documentation for ongoing operation." },
];

const faqs = [
  {
    q: "Why n8n over Zapier or Make?",
    a: "n8n can be self-hosted, giving you full control over your data, credentials, and workflow logic. It supports custom code nodes, complex branching, and enterprise-grade deployment patterns that cloud-only platforms cannot match. For organizations with security or data residency requirements, self-hosted n8n is the only viable option.",
  },
  {
    q: "What AI models do you integrate with?",
    a: "We integrate with OpenAI, Anthropic, Google Gemini, and self-hosted models via Ollama. For organizations with data privacy requirements, we prioritize self-hosted inference using Ollama with models like Llama 3, Mistral, and Qwen — keeping sensitive data off third-party AI infrastructure.",
  },
  {
    q: "How do you handle credentials and secrets in automation workflows?",
    a: "n8n has a built-in credential store with encryption at rest. For production deployments we configure proper encryption keys, restrict credential access by workflow, implement least-privilege API scopes, and integrate with external secrets managers where required. Hardcoded credentials in workflow nodes are never acceptable.",
  },
  {
    q: "Can you automate workflows that involve sensitive data?",
    a: "Yes, with appropriate controls. We design workflows with data minimization in mind — only passing the fields required for each step, implementing access controls on workflow execution, logging without sensitive data exposure, and ensuring data doesn't persist in workflow execution history beyond what's necessary.",
  },
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function AutomationAiPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Automation & AI Workflow Systems"
        title="Automation and AI Workflow Systems That Reduce Manual Overhead"
        description="UZYNTRA builds production-grade automation systems using n8n, LangChain, and event-driven architecture — connecting your tools, APIs, and AI models into reliable operational workflows."
      />

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Why It Matters</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
              Manual operations don't scale — and insecure automation creates new risk
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
              Automation built without security controls trades one problem for another.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((p) => (
              <div key={p.title} className="surface-card p-5">
                <div className="mb-3">{p.icon}</div>
                <h3 className="text-sm font-semibold text-slate-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCapabilityGrid
        heading="What we automate"
        intro="End-to-end workflow automation and AI pipeline engineering — built for reliability, security, and operational scale."
        items={capabilities}
      />

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Process</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">How we deliver automation systems</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="surface-card p-5">
                <span className={`text-3xl font-bold ${stepColors[i]}`}>{p.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-slate-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologySlider
        eyebrow="AUTOMATION STACK"
        title="Platforms & Tools We Automate With"
        items={n8nTechnologies}
        variant="compact"
      />

      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Related</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">Connect automation to your security stack</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/services/backend-engineering" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Secure Backend Engineering</p>
                  <p className="mt-1 text-xs text-slate-500">Backend APIs and systems that your automation connects to.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Talk to UZYNTRA</p>
                  <p className="mt-1 text-xs text-slate-500">Discuss your automation requirements directly.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">FAQ</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Common questions</h2>
            <div className="mt-8 grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="surface-card p-5">
                  <h3 className="text-sm font-semibold text-slate-950">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to automate securely?</h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Talk to UZYNTRA about your automation requirements and get a clear path to reliable, secure workflow systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                Automate Securely
              </Link>
              <Link href="/services/backend-engineering" className="btn-stroke inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                View Backend Engineering
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
