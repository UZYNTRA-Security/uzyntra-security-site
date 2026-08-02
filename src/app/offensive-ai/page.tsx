import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Cloud,
  Code2,
  FileText,
  Flag,
  GraduationCap,
  Laptop,
  Layers3,
  Lock,
  PackageOpen,
  MessageSquare,
  Search,
  ServerCog,
  ShieldAlert,
  ShieldCheck,
  Target,
  Apple,
  User,
  UserCog,
  Users,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { OffensiveAIModuleIntro } from "@/components/offensive-ai/module-intro";
import { OffensiveAICourseTabs } from "@/components/offensive-ai/course-tabs";

export const metadata: Metadata = {
  title: "Offensive AI Certified Web Pentester | UZYNTRA Security",
  description:
    "UZYNTRA Offensive AI Certified Web Pentester training blends web application penetration testing with GPT agents, automation labs, reporting, and AI red-team workflows.",
  alternates: { canonical: `${siteConfig.url}/offensive-ai` },
  openGraph: {
    title: "Offensive AI Certified Web Pentester | UZYNTRA Security",
    description:
      "Hands-on offensive cybersecurity certification covering AI-powered reconnaissance, exploitation, API testing, reporting, GPT agent development, and LLM adversarial testing.",
    url: `${siteConfig.url}/offensive-ai`,
  },
};

type DomainIcon = typeof BrainCircuit;

type DomainModule = {
  title: string;
  body: string;
};

type Domain = {
  number: string;
  title: string;
  icon: DomainIcon;
  modules: DomainModule[];
};

const ENROLL_URL = "/contact";

const stats = [
  { label: "Domains", value: "10" },
  { label: "Modules", value: "42" },
  { label: "Format", value: "Labs + Capstone" },
  { label: "Program Fee", value: "$400 USD", oldValue: "$799 USD" },
] as const;

const audienceChips = [
  { label: "For Individual", icon: User },
  { label: "For Corporate", icon: Users },
  { label: "For Government", icon: Flag },
] as const;

const whoFor = [
  "Security professionals and analysts who want AI-assisted web and API testing workflows.",
  "Network and system administrators moving into offensive security and red-team support.",
  "Developers who want to understand exploit chains, secure coding gaps, and agentic patch suggestions.",
  "Students, hobbyists, and ethical hacking learners ready for a deeper practical certification track.",
  "Corporate and government teams that need modern AI-powered security testing capability.",
] as const;

const featureHighlights = [
  { title: "Flexible Learning Duration", icon: Clock3, tone: "text-rose-400 border-rose-400/35 bg-rose-500/10" },
  { title: "Train under Chief Information Security Officer", icon: UserCog, tone: "text-emerald-400 border-emerald-400/35 bg-emerald-500/10" },
  { title: "Detailed Hands-on Labs", icon: ServerCog, tone: "text-amber-400 border-amber-400/35 bg-amber-500/10" },
] as const;

const deliveryModes = ["In-Person", "Live Instructor Led", "OnDemand", "Onsite"] as const;

const instructorSkills = [
  "API Security",
  "Red Teaming",
  "Rust Backend",
  "Offensive Tooling",
  "Threat Detection",
] as const;

const labFormats = [
  { title: "Cloud-hosted Labs", icon: Cloud },
  { title: "Local Setup VMs", icon: Laptop },
  { title: "Apple Silicon Macs", icon: Apple },
  { title: "Agent Pack Download", icon: PackageOpen },
  { title: "Burp Suite + GPT Plugin Labs", icon: Zap },
  { title: "Capstone Project", icon: ClipboardCheck },
] as const;

const domains: Domain[] = [
  {
    number: "01",
    title: "Foundations of Agentic Pentesting",
    icon: BrainCircuit,
    modules: [
      { title: "Introduction to AI in Cybersecurity", body: "Understand how AI changes modern security testing workflows and offensive automation." },
      { title: "Agentic Frameworks for Security", body: "Explore LangChain, AutoGPT, LLM agents, and how they support pentesting tasks." },
      { title: "Setting Up Your Agentic Pentest Lab", body: "Install Burp Suite, LangChain, GPT SDKs, and proxy routing for controlled labs." },
    ],
  },
  {
    number: "02",
    title: "AI-Powered Reconnaissance",
    icon: Search,
    modules: [
      { title: "Subdomain Enumeration with GPT + DNS APIs", body: "Combine GPT with Subfinder, FFUF, and DNS data for intelligent target expansion." },
      { title: "AI-driven URL & Parameter Discovery", body: "Use ParamSpider and Gau wrapped with GPT logic to prioritize useful attack surfaces." },
      { title: "Screenshot & Tech Stack Fingerprinting with Agents", body: "Analyze visuals and technology clues using Gowitness, WhatWeb, and agent reasoning." },
    ],
  },
  {
    number: "03",
    title: "Exploitation via Agents",
    icon: ShieldAlert,
    modules: [
      { title: "Automated Broken Access Control Discovery", body: "Use GPT chains to simulate IDOR and access-control test paths." },
      { title: "Rate Limiting & OTP Bypass", body: "Generate Turbo Intruder workflows and test bypass logic in authorized labs." },
      { title: "XSS Detection with GPT-Powered Payload Mutator", body: "Generate, mutate, and test XSS payloads against realistic application behavior." },
      { title: "SQLi Detection & Exploitation with AI", body: "Use AI-assisted SQLMap guidance and payload reasoning for injection testing." },
    ],
  },
  {
    number: "04",
    title: "Authentication & Session Exploits",
    icon: Lock,
    modules: [
      { title: "Login Brute-force using AI Wordlists", body: "Generate smarter usernames and password candidates from OSINT context." },
      { title: "Token & JWT Manipulation via AI", body: "Analyze weak algorithms, predictable tokens, and unsafe session assumptions." },
      { title: "Captcha Detection & Bypass using GPT-4 Vision", body: "Study vision-assisted detection patterns in controlled ethical lab environments." },
    ],
  },
  {
    number: "05",
    title: "API Pentesting with GPT Agents",
    icon: ShieldCheck,
    modules: [
      { title: "AI-assisted API Mapping and Swagger Inference", body: "Map endpoints from documentation, traffic, and inferred dynamic behavior." },
      { title: "Broken Object Level Authorization Agent", body: "Auto-sequence object access tests to detect BOLA and authorization gaps." },
      { title: "SSRF & Redirect Exploitation with GPT Chains", body: "Test SSRF, cloud metadata access, and redirect chains in lab targets." },
    ],
  },
  {
    number: "06",
    title: "Post Exploitation and AI Reporting",
    icon: FileText,
    modules: [
      { title: "Automated Report Generation with GPT", body: "Convert scanner output, Burp evidence, and notes into report-ready structure." },
      { title: "Narrative-Based Executive Summary using LLMs", body: "Translate technical findings into CISO and manager-level risk narratives." },
      { title: "Agentic Patch Suggestions for Secure Coding", body: "Generate remediation guidance based on the flaws discovered during testing." },
    ],
  },
  {
    number: "07",
    title: "GPT Agent Development",
    icon: Bot,
    modules: [
      { title: "Building Your Own Pentest GPT Agent", body: "Create a custom agent that automates repeatable web pentest tasks." },
      { title: "Multi-Agent Collaboration for Full Pentest Flow", body: "Coordinate recon, exploitation, validation, and reporting agents." },
      { title: "Pentesting with AutoGPT and LangGraph", body: "Build autonomous testing chains with state, memory, and tool orchestration." },
    ],
  },
  {
    number: "08",
    title: "Advanced Agentic Attacks",
    icon: Code2,
    modules: [
      { title: "WAF Bypass & Evasion using GPT", body: "Craft payload variants for common protection layers in authorized exercises." },
      { title: "Advanced SSRF with Internal Enumeration", body: "Discover internal hosts and services through chained SSRF lab scenarios." },
      { title: "CSP, CORS, Referrer Policy Misconfig Detection", body: "Detect policy weaknesses and reason about realistic exploitation paths." },
      { title: "Advanced Fuzzing Agent", body: "Build adaptive fuzzers that learn from response behavior." },
      { title: "Business Logic Exploitation with GPT", body: "Test discount abuse, price manipulation, and privilege escalation logic." },
      { title: "CI/CD Pipeline Misconfig Analysis via GPT", body: "Scan workflows, Dockerfiles, and pipeline definitions for secrets and unsafe patterns." },
      { title: "GraphQL Pentesting with GPT", body: "Automate introspection, query generation, and injection discovery." },
      { title: "Multi-Model Agent Deployment", body: "Compare task behavior across GPT-4, Claude, Gemini, and other model workflows." },
    ],
  },
  {
    number: "09",
    title: "AI Red Team & Adversarial Testing",
    icon: Target,
    modules: [
      { title: "Red Team Automation with Agents", body: "Automate OSINT, endpoint testing, and red-team planning workflows." },
      { title: "AI-Powered Social Engineering Simulation", body: "Simulate phishing and deception scenarios for awareness and defense." },
      { title: "Self-Updating Agent with Feedback Loops", body: "Design an agent that learns from failed attempts and improves future tasks." },
      { title: "Memory-Augmented Agents", body: "Store reconnaissance in vector memory and retrieve context across sessions." },
      { title: "GPT Workflow Generator Agent", body: "Feed a target profile and produce a structured tools-and-payload workflow." },
      { title: "Source Code Analysis Agent", body: "Scan codebases for secrets, backdoors, and vulnerable implementation patterns." },
    ],
  },
  {
    number: "10",
    title: "AI vs AI: LLM Adversarial Testing",
    icon: Layers3,
    modules: [
      { title: "Prompt Injection & Jailbreak Attacks", body: "Test GPT-powered systems against injection and policy-bypass attempts." },
      { title: "Payload Mutation Engine", body: "Create polymorphic payloads that continuously alter input and output structure." },
      { title: "Adversarial AI API Testing", body: "Red-team OpenAI, Anthropic, Claude, and similar AI API integrations." },
      { title: "DOM & Browser Exploitation with GPT Vision", body: "Use rendered browser context and screenshots to detect source/sink issues." },
      { title: "Mobile & Hybrid App Webview Pentesting", body: "Analyze hybrid webviews, APIs, and mobile-web attack surfaces." },
      { title: "AI Agent War Room", body: "Simulate real-time red-versus-blue GPT-powered offense and defense flows." },
    ],
  },
];

const requirements = [
  "Basic computer and operating system knowledge.",
  "Interest in cybersecurity, ethical hacking, and AI automation.",
  "64-bit Intel i5/i7 4th generation or newer, 8 GB RAM, and 300 GB free storage.",
  "Administrator access, Wi-Fi, and Windows, Linux, or macOS.",
] as const;

const bonuses = [
  "AI prompt library for pentesting.",
  "GPT agent toolkit with LangChain templates.",
  "Resume templates, official badge, and training completion letter.",
  "Private community access, recordings, courseware PDF, and PPT resources.",
] as const;

export default function OffensiveAIPage() {
  const moduleCount = domains.reduce((total, domain) => total + domain.modules.length, 0);

  return (
    <main id="main-content" className="offensive-ai-page bg-[#0b0b0c] text-white">
      <section className="offensive-ai-hero relative isolate min-h-[calc(100vh-56px)] overflow-hidden bg-[#080809]">
        <Image
          src="/images/courses/penetration-testing.webp"
          alt="Offensive AI web pentesting lab"
          fill
          priority
          className="object-cover opacity-35 grayscale-[0.2]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.92)_32%,rgba(22,5,7,0.78)_68%,rgba(127,29,29,0.58)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-45" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0b0c] to-transparent" aria-hidden="true" />

        <div className="container-shell relative z-10 flex min-h-[calc(100vh-56px)] flex-col justify-center py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.74fr)] lg:items-center">
            <div className="max-w-3xl">
              <p className="offensive-ai-kicker inline-flex border-b-2 border-red-600 pb-2 text-xs font-black uppercase tracking-[0.18em]">
                UZYNTRA Exclusive Certification
              </p>
              <h1 className="offensive-ai-hero-title mt-8 max-w-[760px] text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="offensive-ai-title-line">
                  <span>Offensive</span>
                  <span className="offensive-ai-typewriter">AI</span>
                </span>
                <span className="block">Certified Web Pentester</span>
              </h1>
              <p className="offensive-ai-description mt-7 max-w-[760px] text-base leading-8 sm:text-lg">
                Gain mastery in offensive cybersecurity by combining proven web pentesting practices with cutting-edge AI automation. Develop the skills to identify, exploit, and remediate vulnerabilities across modern digital infrastructures.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                {audienceChips.map(({ label, icon: Icon }, index) => (
                  <div key={label} className="flex items-center gap-3 text-sm font-semibold text-white sm:text-base">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.8} aria-hidden="true" />
                    <span>{label}</span>
                    {index < audienceChips.length - 1 ? <span className="hidden h-8 w-px bg-white/30 sm:block" aria-hidden="true" /> : null}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href={ENROLL_URL} className="btn-solid inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold">
                  <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Enquire Now
                </Link>
                <a href="#curriculum" className="course-download-syllabus-button inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold">
                  <Layers3 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  View Modules
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[470px] lg:mr-0">
              <div className="rounded-[26px] border border-white/20 bg-white/8 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-md">
                <div className="rounded-[18px] border border-white/10 bg-[#111114] p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-400">Agentic Lab</p>
                      <h2 className="mt-1 text-xl font-black text-white">Burp + GPT Attack Flow</h2>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 shadow-[0_0_28px_rgba(239,31,36,0.45)]">
                      <Bot className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-5 space-y-3 font-mono text-xs text-white/74">
                    <p><span className="text-red-400">agent.recon</span> --target api.lab.local</p>
                    <p><span className="text-red-400">burp.gpt</span> mutate-xss --context reflected</p>
                    <p><span className="text-red-400">report.ai</span> build executive-summary</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {stats.map((item) => (
                      <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                        <p className="text-[9px] font-black uppercase tracking-[0.14em] text-white/45">{item.label}</p>
                                                {"oldValue" in item ? (
                          <p className="mt-1 flex flex-wrap items-baseline gap-2 text-white">
                            <span className="text-xs font-bold text-white/45 line-through">{item.oldValue}</span>
                            <strong className="text-base font-black text-white">{item.value}</strong>
                          </p>
                        ) : (
                          <p className="mt-1 text-sm font-black text-white">{item.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0c] py-14 sm:py-18">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">Who Is This Course For?</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Built for people and teams going beyond ordinary web pentesting.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">
                This exclusive track is for learners who want hands-on offensive AI, not just theory. It is suitable for individual career growth, corporate training, and government capability building.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {whoFor.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/76 transition-all duration-200 hover:border-red-500/50 hover:bg-red-950/20">
                  <CheckCircle2 className="mb-3 h-4 w-4 text-red-500" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="offensive-ai-course-details bg-[#050505] py-14 sm:py-18">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">Hands-on Access</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Lab Format & Access</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68">
              Learners work through cloud labs, local VMs, agent packs, Burp Suite workflows, Apple Silicon-friendly setup notes, and a capstone built around realistic AI-assisted pentesting scenarios.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {labFormats.map(({ title, icon: Icon }) => (
                <div key={title} className="offensive-ai-lab-card rounded-lg border border-white/18 bg-white/[0.055] p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-red-500/55 hover:bg-red-950/20 hover:shadow-[0_18px_42px_rgba(239,68,68,0.14)]">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center text-white">
                    <Icon className="h-9 w-9" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-sm font-black text-white">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OffensiveAICourseTabs />

      <section id="curriculum" className="offensive-ai-modules bg-[#050505] py-10 sm:py-12">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">Certification Modules</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">10 domains, {moduleCount} in-depth modules</h2>
            <OffensiveAIModuleIntro moduleCount={moduleCount} />
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="min-w-0 space-y-6">
              <div className="offensive-ai-feature-strip grid overflow-hidden rounded-lg border border-white/20 bg-white/[0.055] sm:grid-cols-3">
                {featureHighlights.map(({ title, icon: Icon, tone }) => (
                  <div key={title} className="offensive-ai-feature-card flex min-h-[126px] flex-col items-center justify-center gap-3 p-5 text-center">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${tone}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="max-w-[220px] text-sm font-black leading-tight text-white">{title}</span>
                  </div>
                ))}
              </div>

              <div className="offensive-ai-domain-list rounded-lg border border-white/18 bg-[#181819] p-4 sm:p-8">
                {domains.map(({ number, title, modules, icon: Icon }) => (
                  <details key={number} className="offensive-ai-domain">
                    <summary className="offensive-ai-domain-summary">
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="offensive-ai-domain-icon">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 text-balance text-base font-black sm:text-xl">
                          Domain{number} : {title}
                        </span>
                      </span>
                      <ChevronDown className="offensive-ai-domain-chevron h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                    </summary>
                    <div className="offensive-ai-domain-body">
                      {modules.map((module) => (
                        <div key={module.title} className="offensive-ai-module-row">
                          <h3>{module.title}</h3>
                          <p>{module.body}</p>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <aside className="offensive-ai-instructor-card h-fit self-start rounded-lg border border-white/18 bg-white/[0.055] p-6 lg:sticky lg:top-36">
              <h2 className="text-2xl font-black text-white">Course Delivery</h2>
              <ul className="mt-5 space-y-3">
                {deliveryModes.map((mode) => (
                  <li key={mode} className="text-base font-semibold leading-6 text-white/88">
                    {mode}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/12 pt-8">
                <h2 className="text-2xl font-black text-white">Instructor</h2>
                <div className="mt-5 flex items-center gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-sm border border-white/18 bg-white/10">
                    <Image src="/images/Founder.webp" alt="Muhammad Usama" fill className="object-cover" sizes="96px" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-black text-white">Muhammad Usama</h3>
                    <p className="mt-1 text-sm font-semibold text-white/80">Founder @ UZYNTRA</p>
                    <div className="mt-4 flex gap-2">
                      <a href="https://www.linkedin.com/in/usamamatrix" target="_blank" rel="noreferrer" aria-label="Muhammad Usama on LinkedIn" className="offensive-ai-social-link offensive-ai-linkedin-link inline-flex h-9 w-9 items-center justify-center rounded-sm bg-white text-[#0a66c2] transition-transform duration-200 hover:-translate-y-0.5">
                        <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
                      </a>
                      <a href={siteConfig.founderLinks.github} target="_blank" rel="noreferrer" aria-label="Muhammad Usama on GitHub" className="offensive-ai-social-link offensive-ai-github-link inline-flex h-9 w-9 items-center justify-center rounded-sm bg-white text-slate-950 transition-transform duration-200 hover:-translate-y-0.5">
                        <FaGithub className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-white/78">
                  Muhammad Usama is the founder of UZYNTRA, an API Security Engineer, Rust Backend Developer, Cyber Security Consultant, and Red Team Specialist focused on practical offensive security, adversary simulation, and high-performance security systems.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {instructorSkills.map((skill) => (
                    <span key={skill} className="rounded-sm border border-white/16 bg-white/[0.06] px-3 py-1 text-[11px] font-bold text-white/82">
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-6 text-white/58">
                  Certifications include CEH v11 and v12, OSCP, ISO/IEC 27001 Lead Auditor, and Certified Chief Information Security Officer (C|CISO).
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="offensive-ai-light-section bg-white py-10 text-slate-950 sm:py-12">
        <div className="container-shell">
          <div id="course-pricing" className="scroll-mt-28 rounded-2xl bg-gradient-to-br from-red-800 via-red-700 to-red-600 p-7 text-white sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">Build Offensive AI Skill</p>
                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Ready to enroll?</h2>
                <p className="mt-3 max-w-[680px] text-sm leading-7 text-white/82">
                  Total program fee: <span className="text-white/55 line-through">$799 USD</span> <strong className="text-lg font-black text-white">$400 USD</strong>. Training includes course material, hands-on labs, capstone project, and certification assessment.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Link href={ENROLL_URL} className="btn-neutral inline-flex h-12 items-center justify-center gap-2 rounded-xl px-8 text-sm font-semibold">
                  <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Enquire Now
                </Link>
                <Link href="/courses" className="btn-stroke inline-flex h-12 items-center justify-center gap-2 rounded-xl px-8 text-sm font-semibold">
                  View All Courses
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="eligibility" className="offensive-ai-light-section bg-white py-10 text-slate-950 sm:py-12">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Requirements</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Recommended setup</h2>
              <div className="mt-5 space-y-3">
                {requirements.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Laptop className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Bonuses</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Included resources</h2>
              <div className="mt-5 space-y-3">
                {bonuses.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
