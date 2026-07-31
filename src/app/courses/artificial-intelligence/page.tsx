import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BookOpen,
  BrainCircuit,
  Calendar,
  CheckCircle2,
  Clock,
  Cpu,
  GraduationCap,
  MessageSquare,
  Rocket,
  Terminal,
  Users,
} from "lucide-react";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { DownloadAISyllabus } from "@/components/sections/artificial-intelligence-syllabus-download";
import {
  aiAssessmentPolicy,
  aiCareerOpportunities,
  aiCourseHighlights,
  aiCourseLabs,
  aiCourseMonths,
  aiCourseOutcomes,
  aiCourseProjects,
  aiCourseSchedule,
  aiCourseStats,
  aiCourseTools,
} from "@/data/artificial-intelligence-course";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Artificial Intelligence Course | UCAIP | UZYNTRA Security",
  description:
    "UZYNTRA Certified Artificial Intelligence Professional (UCAIP): a 3-month AI, machine learning, and generative AI bootcamp with hands-on labs, AI agents, deployment, and capstone projects.",
  alternates: { canonical: `${siteConfig.url}/courses/artificial-intelligence` },
};

const ENROLL_URL = "/contact";

const monthStyles = [
  {
    icon: BrainCircuit,
    accentClass: "text-red-600",
    bgClass: "bg-red-600",
    connectorColor: "bg-red-500",
    badgeBg: "bg-red-600",
    topicClass: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: Cpu,
    accentClass: "text-orange-600",
    bgClass: "bg-orange-600",
    connectorColor: "bg-orange-500",
    badgeBg: "bg-orange-600",
    topicClass: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    icon: Bot,
    accentClass: "text-emerald-600",
    bgClass: "bg-emerald-600",
    connectorColor: "bg-emerald-500",
    badgeBg: "bg-emerald-600",
    topicClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
] as const;

const scheduleIcons = [Calendar, Clock, BookOpen, Users];
const moduleCount = aiCourseMonths.reduce((total, month) => total + month.modules.length, 0);

export default function AICourse() {
  return (
    <main id="main-content">
      <CourseHeroImage
        src="/images/courses/artificial-intelligence.webp"
        alt="Artificial Intelligence Course"
        eyebrow="Course - Artificial Intelligence"
        title="Artificial Intelligence: From Foundations to Production"
        description="UZYNTRA Certified Artificial Intelligence Professional (UCAIP): a practical 3-month AI, ML, and generative AI bootcamp with labs, agents, deployment, and capstone work."
      />

      <section className="section-shell course-shell-muted">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-14">
            <aside className="space-y-4 lg:sticky lg:top-24">
              <div className="surface-card-strong course-enroll-card p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-red-600">Enroll</p>
                <h2 className="mt-3 text-xl font-extrabold leading-tight text-slate-950 sm:text-2xl">AI Professional Course</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  3 months, 13 modules, 120 hours, practical AI labs, deployment, and capstone assessment.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2.5 xl:grid-cols-2">
                  {aiCourseStats.map((item) => (
                    <div key={item.label} className="course-sidebar-stat min-w-0 rounded-lg border p-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">{item.label}</p>
                      <p className="mt-1 break-words text-[13px] font-extrabold leading-tight text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-2.5">
                  <Link
                    href={ENROLL_URL}
                    className="btn-solid inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold"
                  >
                    <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Enroll Now
                  </Link>
                  <DownloadAISyllabus />
                </div>
              </div>

              <div className="surface-card course-enroll-card p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-600">Schedule</p>
                <div className="mt-4 space-y-3">
                  {aiCourseSchedule.map((item, index) => {
                    const Icon = scheduleIcons[index];
                    return (
                      <div key={item.label} className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-100">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">{item.label}</span>
                          <span className="block text-sm font-bold text-slate-800">{item.value}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="min-w-0 space-y-10">
              <section className="surface-card p-7 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Course Overview</p>
                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-slate-950 sm:text-4xl">
                  Project-based AI training for real product and automation work.
                </h2>
                <div className="mt-5 max-w-[780px] space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    Artificial Intelligence is changing how teams analyze data, automate workflows, build software, and deliver customer experiences. This bootcamp gives students a practical path through AI foundations, machine learning, deep learning, LLMs, agents, deployment, and responsible AI.
                  </p>
                  <p>
                    The curriculum is designed around real implementation. Students build a portfolio of practical AI applications and finish with a capstone project suitable for employment, freelancing, or entrepreneurship.
                  </p>
                </div>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {aiCourseHighlights.map((item) => (
                    <div key={item} className="course-soft-pill flex items-start gap-2 rounded-lg px-3 py-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="curriculum" className="scroll-mt-24">
                <div className="mb-7 flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Curriculum</p>
                    <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                      {moduleCount} modules across 3 months
                    </h2>
                    <p className="mt-3 max-w-[760px] text-sm leading-7 text-slate-500">
                      The programme moves from AI foundations and ML into deep learning, NLP, vision, LLMs, agents, deployment, responsible AI, and capstone delivery.
                    </p>
                  </div>
                  <span className="course-module-count-badge inline-flex min-w-[112px] items-center justify-center whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-bold">
                    120 learning hours
                  </span>
                </div>

                <div className="space-y-8">
                  {aiCourseMonths.map((month, index) => {
                    const style = monthStyles[index];
                    const Icon = style.icon;
                    return (
                      <article key={month.num} className="surface-card overflow-hidden">
                        <div className="flex flex-col gap-4 border-b border-slate-100 bg-slate-50/80 p-5 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex gap-4">
                            <span className={`inline-flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl text-white shadow-sm ${style.bgClass}`}>
                              <Icon className="h-5 w-5" aria-hidden="true" />
                              <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wider">{month.label}</span>
                            </span>
                            <div>
                              <h3 className={`text-xl font-extrabold ${style.accentClass}`}>{month.title}</h3>
                              <p className="mt-2 max-w-[760px] text-sm leading-7 text-slate-600">{month.description}</p>
                            </div>
                          </div>
                          <span className="course-module-count-badge inline-flex min-w-[94px] items-center justify-center whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-bold">
                            {month.modules.length} modules
                          </span>
                        </div>

                        <div className="grid gap-0 divide-y divide-slate-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
                          {month.modules.map((module) => (
                            <div key={module.num} className="p-5">
                              <div className="flex items-start gap-3">
                                <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white ${style.badgeBg}`}>
                                  {module.num}
                                </span>
                                <div className="min-w-0">
                                  <h4 className="text-lg font-extrabold text-slate-950">{module.title}</h4>
                                  <p className="mt-2 max-w-[700px] text-sm leading-7 text-slate-600">{module.summary}</p>
                                </div>
                              </div>
                              <div className="mt-4 flex flex-wrap gap-1.5">
                                {module.topics.map((topic) => (
                                  <span key={topic} className={`rounded-md border px-2 py-1 text-[11px] font-semibold ${style.topicClass}`}>
                                    {topic}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-4 space-y-3 border-t border-slate-100 pt-3">
                                {module.practical.length > 0 ? (
                                  <div>
                                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">Practical</p>
                                    <p className="text-xs leading-6 text-slate-500">{module.practical.join(" / ")}</p>
                                  </div>
                                ) : null}
                                {module.projects.length > 0 ? (
                                  <div>
                                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">Projects</p>
                                    <p className="text-xs leading-6 text-slate-500">{module.projects.join(" / ")}</p>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
                <div className="lg:sticky lg:top-24">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Hands-On</p>
                  <h2 className="mt-2 text-2xl font-extrabold text-slate-950">Practical Projects</h2>
                  <p className="mt-4 max-w-[520px] text-sm leading-7 text-slate-500">
                    Students build more than 15 practical projects, from ML predictors and chatbots to AI agents, automation systems, SaaS deployment, and the final capstone.
                  </p>
                  <div className="course-note-card mt-6 rounded-xl p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">Practice Note</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--course-muted)]">
                      Expect weekly coding exercises, mini projects, code reviews, and portfolio-building assignments.
                    </p>
                  </div>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {aiCourseLabs.map((lab, index) => (
                    <div key={lab} className="surface-card flex items-start gap-3 p-4 transition-all duration-200 hover:-translate-y-0.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-600 text-[10px] font-black text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-6 text-slate-700">{lab}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="surface-card p-7 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Toolset</p>
                    <h2 className="mt-2 text-2xl font-extrabold text-slate-950">AI libraries, agent frameworks and deployment tools</h2>
                  </div>
                  <Terminal className="h-7 w-7 text-red-600" aria-hidden="true" />
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {aiCourseTools.map((tool) => (
                    <span key={tool} className="course-tool-chip inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-150 hover:border-red-500/60 hover:bg-red-50/80 hover:text-red-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" aria-hidden="true" />
                      {tool}
                    </span>
                  ))}
                </div>
              </section>

              <section className="grid gap-5 lg:grid-cols-2">
                <div className="surface-card p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Outcomes</p>
                  <h2 className="mt-2 text-2xl font-extrabold text-slate-950">What you will be able to do</h2>
                  <div className="mt-5 space-y-3">
                    {aiCourseOutcomes.map((outcome, index) => (
                      <div key={outcome} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[10px] font-black text-red-600 ring-1 ring-red-200">
                          {index + 1}
                        </span>
                        <span className="text-sm leading-6 text-slate-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="surface-card p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Assessment</p>
                  <h2 className="mt-2 text-2xl font-extrabold text-slate-950">UCAIP certification path</h2>
                  <ul className="mt-5 space-y-3">
                    {aiAssessmentPolicy.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="surface-card p-7 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Course Projects</p>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-950">Portfolio-ready AI project work</h2>
                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  {aiCourseProjects.map((project, index) => (
                    <div key={project} className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">Track {index + 1}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{project}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="surface-card p-7 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Career Paths</p>
                    <h2 className="mt-2 text-2xl font-extrabold text-slate-950">Roles this course prepares you for</h2>
                  </div>
                  <GraduationCap className="h-7 w-7 text-red-600" aria-hidden="true" />
                </div>
                <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {aiCareerOpportunities.map((role) => (
                    <div key={role} className="course-soft-pill rounded-lg px-3 py-2.5 text-sm font-semibold">
                      {role}
                    </div>
                  ))}
                </div>
              </section>

              <section className="surface-card overflow-hidden">
                <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">Frequently Asked</p>
                  <h3 className="mt-1 text-lg font-extrabold text-slate-950">Is this course practical enough for beginners?</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="max-w-[760px] text-sm leading-7 text-slate-600">
                    Yes. The programme starts with Python, AI concepts, data handling, mathematics, and ML foundations before moving into LLMs, agents, deployment, and capstone work. The methodology is 20% theory and 80% hands-on practical labs.
                  </p>
                </div>
              </section>

              <section className="section-tight rounded-2xl bg-gradient-to-br from-red-800 via-red-700 to-red-600 px-6 py-10 text-white sm:px-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">Start Your AI Career</p>
                    <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">Ready to enroll?</h2>
                    <p className="mt-3 max-w-[680px] text-sm leading-7 text-white/80">
                      3 months. 120 learning hours. AI, ML, generative AI, agents, deployment, and capstone portfolio work.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                    <Link href={ENROLL_URL} className="btn-neutral inline-flex h-12 items-center justify-center gap-2 rounded-xl px-8 text-sm font-semibold">
                      <Rocket className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Enroll Now
                    </Link>
                    <DownloadAISyllabus />
                  </div>
                </div>
              </section>

              <section className="section-tight pt-0">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">What&apos;s Next</p>
                    <h2 className="mt-1 text-xl font-extrabold text-slate-950">Continue your learning path</h2>
                  </div>
                  <Link href="/courses" className="hidden items-center gap-1.5 text-sm font-semibold text-red-600 transition-all duration-200 hover:gap-2.5 sm:flex">
                    All Courses
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { href: "/courses/ai-agent-development", title: "AI Agent Development", desc: "Autonomous AI agents and workflows." },
                    { href: "/courses/prompt-engineering", title: "Prompt Engineering", desc: "LLM prompting and structured outputs." },
                    { href: "/courses/data-science", title: "Data Science", desc: "Analytics, models, and data workflows." },
                    { href: "/courses/automation", title: "Automation", desc: "Workflow systems and AI automation." },
                  ].map((course) => (
                    <Link key={course.href} href={course.href} className="surface-card group flex flex-col gap-2 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-sm">
                      <p className="text-sm font-bold text-slate-950 group-hover:text-red-700">{course.title}</p>
                      <p className="text-xs text-slate-500">{course.desc}</p>
                      <ArrowRight className="mt-auto h-3.5 w-3.5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
