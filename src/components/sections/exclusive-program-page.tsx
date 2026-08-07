import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Bot,
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
  MessageSquare,
  PackageOpen,
  Search,
  ServerCog,
  ShieldCheck,
  Target,
  Terminal,
  User,
  UserCog,
  Users,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { OffensiveAICourseTabs } from "@/components/offensive-ai/course-tabs";
import type { ExclusiveProgram } from "@/data/exclusive-course-catalog";

type ExclusiveProgramPageProps = {
  program: ExclusiveProgram;
};

const ENROLL_URL = "/contact";

const audienceChips = [
  { label: "For Individual", icon: User },
  { label: "For Corporate", icon: Users },
  { label: "For Government", icon: Flag },
] as const;

const featureHighlights = [
  { title: "Flexible Learning Duration", icon: Clock3, tone: "text-rose-400 border-rose-400/35 bg-rose-500/10" },
  { title: "Instructor-led Practical Labs", icon: UserCog, tone: "text-emerald-400 border-emerald-400/35 bg-emerald-500/10" },
  { title: "Verified UZYNTRA Credential", icon: ClipboardCheck, tone: "text-amber-400 border-amber-400/35 bg-amber-500/10" },
] as const;

const deliveryModes = ["In-Person", "Live Instructor Led", "OnDemand", "Onsite"] as const;

const labFormats = [
  { title: "Guided Practical Labs", icon: ServerCog },
  { title: "Local Setup Support", icon: Laptop },
  { title: "Cloud-hosted Scenarios", icon: Cloud },
  { title: "Project Templates", icon: PackageOpen },
  { title: "Tool-based Exercises", icon: Zap },
  { title: "Capstone Assessment", icon: ClipboardCheck },
] as const;

const domainIcons = [Target, Search, ShieldCheck, Code2, Bot, Cloud, FileText, Terminal, Layers3, BookOpenCheck] as const;

const instructorSkills = [
  "API Security",
  "Red Teaming",
  "Secure Engineering",
  "AI Automation",
  "Cloud Security",
] as const;

function getInvestmentLabel(program: ExclusiveProgram) {
  if (program.pricePkr && program.priceUsd) return `${program.pricePkr} / ${program.priceUsd}`;
  return program.priceUsd ?? program.pricePkr ?? "Contact admissions";
}

function getStats(program: ExclusiveProgram, moduleCount: number) {
  return [
    { label: "Domains", value: String(program.domains.length) },
    { label: "Modules", value: String(moduleCount) },
    { label: "Duration", value: program.duration },
    { label: program.kind === "course" ? "Program Fee" : "Credential", value: getInvestmentLabel(program), oldValue: program.oldPriceUsd },
  ];
}

export function ExclusiveProgramPage({ program }: ExclusiveProgramPageProps) {
  const moduleCount = program.domains.reduce((total, domain) => total + domain.modules.length, 0);
  const stats = getStats(program, moduleCount);
  const kicker = program.kind === "course" ? "UZYNTRA Professional Course" : "UZYNTRA Exclusive Certification";
  const certificationLabel = program.kind === "course" ? "Course Certification" : "Certification Path";

  return (
    <main id="main-content" className="offensive-ai-page bg-[#0b0b0c] text-white">
      <section className="offensive-ai-hero relative isolate min-h-[calc(100vh-56px)] overflow-hidden bg-[#080809]">
        <Image
          src={program.image}
          alt={`${program.title} training lab`}
          fill
          priority
          className="offensive-ai-hero-media object-cover opacity-35 grayscale-[0.2]"
          sizes="100vw"
        />
        <div className="offensive-ai-hero-red-overlay absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.92)_32%,rgba(22,5,7,0.78)_68%,rgba(127,29,29,0.58)_100%)]" aria-hidden="true" />
        <div className="offensive-ai-hero-grid-overlay absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-45" aria-hidden="true" />
        <div className="offensive-ai-hero-bottom-fade absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0b0c] to-transparent" aria-hidden="true" />

        <div className="container-shell relative z-10 flex min-h-[calc(100vh-56px)] flex-col justify-center py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.74fr)] lg:items-center">
            <div className="max-w-3xl">
              <p className="offensive-ai-kicker inline-flex border-b-2 border-red-600 pb-2 text-xs font-black uppercase tracking-[0.18em]">
                {kicker}
              </p>
              <h1 className="offensive-ai-hero-title mt-8 max-w-[820px] text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="offensive-ai-title-line">
                  <span>{program.title}</span>
                  <span className="offensive-ai-typewriter">{program.code}</span>
                </span>
                <span className="block">{program.shortTitle}</span>
              </h1>
              <p className="offensive-ai-description mt-7 max-w-[760px] text-base leading-8 sm:text-lg">
                {program.description}
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
                <Link href={ENROLL_URL} className="offensive-ai-hero-primary btn-solid inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold">
                  <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Enquire Now
                </Link>
                <a href="#curriculum" className="offensive-ai-hero-secondary course-download-syllabus-button inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold">
                  <Layers3 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  View Modules
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[470px] lg:mr-0">
              <div className="offensive-ai-hero-lab-frame rounded-[26px] border border-white/20 bg-white/8 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-md">
                <div className="offensive-ai-hero-lab-card rounded-[18px] border border-white/10 bg-[#111114] p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-400">{program.category}</p>
                      <h2 className="mt-1 text-xl font-black text-white">{program.labTitle}</h2>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 shadow-[0_0_28px_rgba(239,31,36,0.45)]">
                      <GraduationCap className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-5 space-y-3 font-mono text-xs text-white/74">
                    {program.labCommands.map((command) => (
                      <p key={command}><span className="text-red-400">{program.code.toLowerCase()}</span> {command}</p>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {stats.map((item) => (
                      <div key={item.label} className="offensive-ai-hero-stat-card rounded-xl border border-white/10 bg-white/[0.06] p-3">
                        <p className="text-[9px] font-black uppercase tracking-[0.14em] text-white/45">{item.label}</p>
                        {"oldValue" in item && item.oldValue ? (
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
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">Who Is This For?</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Built for learners and teams moving from interest to proof.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">
                {program.summary}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {program.audience.map((item) => (
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
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Lab Format and Access</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68">
              Each page follows the exclusive UZYNTRA course format: guided labs, project evidence, practical tools, assessment milestones, and a final credential path.
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
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">{certificationLabel}</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              {program.domains.length} domains, {moduleCount} practical modules
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72">
              This exclusive-format page turns the poster syllabus into a structured path with clear domains, lab work, projects, outcomes, tools, pricing, and certification expectations.
            </p>
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
                {program.domains.map(({ title, modules }, index) => {
                  const Icon = domainIcons[index % domainIcons.length];
                  return (
                    <details key={title} className="offensive-ai-domain">
                      <summary className="offensive-ai-domain-summary">
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="offensive-ai-domain-icon">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="min-w-0 text-balance text-base font-black sm:text-xl">
                            Domain {String(index + 1).padStart(2, "0")} : {title}
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
                  );
                })}
              </div>

              <section className="rounded-lg border border-white/18 bg-white/[0.055] p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">Tools</p>
                <h2 className="mt-3 text-2xl font-black text-white">Toolset covered</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {program.tools.map((tool) => (
                    <span key={tool} className="rounded-sm border border-white/16 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-white/82">
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
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
                  UZYNTRA programmes are designed around practical labs, real-world scenarios, verified outcomes, and career positioning for modern security, AI, cloud, and engineering roles.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {instructorSkills.map((skill) => (
                    <span key={skill} className="rounded-sm border border-white/16 bg-white/[0.06] px-3 py-1 text-[11px] font-bold text-white/82">
                      {skill}
                    </span>
                  ))}
                </div>
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">{program.code}</p>
                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Ready to enroll?</h2>
                <p className="mt-3 max-w-[680px] text-sm leading-7 text-white/82">
                  Investment: {program.oldPriceUsd ? <span className="offensive-ai-old-price line-through">{program.oldPriceUsd}</span> : null}{" "}
                  <strong className="text-lg font-black text-white">{getInvestmentLabel(program)}</strong>. Training includes practical labs, course material, project work, and verified assessment.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Link href={ENROLL_URL} className="offensive-ai-pricing-btn offensive-ai-pricing-primary inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-sm font-bold">
                  <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Enquire Now
                </Link>
                <Link href="/courses" className="offensive-ai-pricing-btn offensive-ai-pricing-secondary inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-sm font-bold">
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
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Outcomes</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">What you will be able to do</h2>
              <div className="mt-5 space-y-3">
                {program.outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Included</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Resources and support</h2>
              <div className="mt-5 space-y-3">
                {program.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Projects</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Portfolio-ready work</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {program.projects.map((project, index) => (
                <div key={project} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-red-600">Project {index + 1}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{project}</p>
                </div>
              ))}
            </div>
          </div>

          {program.related.length > 0 ? (
            <section className="mt-10">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">What&apos;s Next</p>
                  <h2 className="mt-1 text-xl font-black text-slate-950">Continue your learning path</h2>
                </div>
                <Link href="/courses" className="hidden items-center gap-1.5 text-sm font-semibold text-red-600 transition-all duration-200 hover:gap-2.5 sm:flex">
                  All Courses
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {program.related.map((related) => (
                  <Link key={related.href} href={related.href} className="surface-card group flex flex-col gap-2 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-sm">
                    <p className="text-sm font-bold text-slate-950 group-hover:text-red-700">{related.title}</p>
                    <p className="line-clamp-3 text-xs text-slate-500">{related.desc}</p>
                    <ArrowRight className="mt-auto h-3.5 w-3.5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}
