import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AWS / Azure / GCP Course | UZYNTRA Security",
  description: "Deep-dive into AWS, Azure, and GCP with hands-on labs and certification preparation. Multi-cloud training for 2026.",
  alternates: { canonical: `${siteConfig.url}/courses/aws-azure-gcp` },
};

const modules = [
  { step: "01", title: "AWS Deep Dive", body: "EC2, S3, Lambda, VPC, IAM, RDS, and AWS Solutions Architect certification prep." },
  { step: "02", title: "Azure Fundamentals & Beyond", body: "Azure VMs, App Service, Azure AD, Key Vault, and AZ-900 / AZ-104 prep." },
  { step: "03", title: "Google Cloud Platform", body: "GCE, GKE, Cloud Functions, BigQuery, and Google Cloud Associate Engineer prep." },
  { step: "04", title: "Multi-Cloud Strategy & Security", body: "Cross-cloud architecture, cost management, and unified security posture." },
];

const outcomes = [
  "Deploy and manage workloads on AWS, Azure, and GCP",
  "Pass AWS Solutions Architect Associate exam",
  "Pass Azure Fundamentals (AZ-900) certification",
  "Design multi-cloud architectures",
  "Implement cloud security and IAM best practices",
  "Optimize cloud costs across platforms",
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function AWSAzureGCPCourse() {
  return (
    <main id="main-content">
      <CourseHeroImage
        src="/images/courses/aws-azure-gcp.webp"
        alt="AWS Azure GCP Course"
        eyebrow="Course — AWS / Azure / GCP"
        title="AWS, Azure & GCP: Multi-Cloud Mastery"
        description="Get hands-on with all three major cloud platforms — AWS, Azure, and GCP — with certification-aligned labs and real-world architecture projects."
      />
      <section id="curriculum" className="section-tight bg-slate-50/70">
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
      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Cloud certifications that pay off</h2>
            <p className="mt-4 text-base leading-7 text-white/90">Enroll and get certified on the platforms every enterprise runs on.</p>
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
