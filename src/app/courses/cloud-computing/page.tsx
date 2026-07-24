import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cloud Computing Course | UZYNTRA Security",
  description: "AWS, Azure, and GCP training from fundamentals to advanced cloud architecture and security. Certification-aligned for 2026.",
  alternates: { canonical: `${siteConfig.url}/courses/cloud-computing` },
};

const modules = [
  { step: "01", title: "Cloud Fundamentals", body: "IaaS, PaaS, SaaS models, shared responsibility, and core cloud concepts." },
  { step: "02", title: "AWS / Azure / GCP Core", body: "Compute, storage, networking, and databases across the three major cloud platforms." },
  { step: "03", title: "Cloud Security & IAM", body: "Identity management, least privilege, encryption, and cloud security best practices." },
  { step: "04", title: "Architecture & Cost Optimization", body: "Well-architected frameworks, auto-scaling, serverless, and cost management strategies." },
];

const outcomes = [
  "Deploy and manage workloads on AWS, Azure, and GCP",
  "Design secure, scalable cloud architectures",
  "Implement IAM policies and cloud security controls",
  "Prepare for AWS Solutions Architect and Azure certifications",
  "Optimize cloud costs and resource utilization",
  "Understand multi-cloud and hybrid cloud strategies",
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function CloudComputingCourse() {
  return (
    <main id="main-content">
      <CourseHeroImage src="/images/courses/cloud-computing.webp" alt="Cloud Computing Course" />
      <PageHero
        eyebrow="Course — Cloud Computing"
        title="Cloud Computing: AWS, Azure, and GCP Mastery"
        description="From cloud fundamentals to advanced architecture — learn to deploy, secure, and optimize workloads across the three major cloud platforms with hands-on labs."
      />

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Curriculum</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">What you will learn</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m, i) => (
              <div key={m.step} className="surface-card p-5">
                <span className={`text-3xl font-bold ${stepColors[i]}`}>{m.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-slate-950">{m.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Outcomes</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">What you will be able to do</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3 surface-card p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                  <span className="text-sm text-slate-700">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Related</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">Explore related courses</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/courses/devsecops" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">DevOps & DevSecOps</p>
                  <p className="mt-1 text-xs text-slate-500">CI/CD, IaC, and security in the pipeline.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
              <Link href="/courses/docker-kubernetes" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Docker & Kubernetes</p>
                  <p className="mt-1 text-xs text-slate-500">Containerization and orchestration for cloud.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Master the cloud platforms</h2>
            <p className="mt-4 text-base leading-7 text-white/90">Enroll and get hands-on with AWS, Azure, and GCP from day one.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                Enroll Now
              </Link>
              <Link href="/courses" className="btn-stroke inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
