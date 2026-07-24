import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Docker & Kubernetes Course | UZYNTRA Security",
  description: "Containerization with Docker and orchestration with Kubernetes. Container security, Helm charts, and production deployments.",
  alternates: { canonical: `${siteConfig.url}/courses/docker-kubernetes` },
};

const modules = [
  { step: "01", title: "Docker Fundamentals", body: "Images, containers, Dockerfiles, volumes, networking, and Docker Compose." },
  { step: "02", title: "Kubernetes Core", body: "Pods, deployments, services, ingress, ConfigMaps, and cluster management." },
  { step: "03", title: "Helm & GitOps", body: "Helm charts, Kustomize, ArgoCD, and GitOps deployment workflows." },
  { step: "04", title: "Container Security", body: "Image scanning, RBAC, network policies, secrets management, and runtime security." },
];

const outcomes = [
  "Build and manage Docker containers and images",
  "Deploy and scale applications on Kubernetes",
  "Write and manage Helm charts",
  "Implement container security best practices",
  "Set up CI/CD pipelines with container workflows",
  "Manage Kubernetes RBAC and network policies",
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function DockerKubernetesCourse() {
  return (
    <main id="main-content">
      <CourseHeroImage src="/images/courses/docker-kubernetes.webp" alt="Docker and Kubernetes Course" />
      <PageHero
        eyebrow="Course — Docker & Kubernetes"
        title="Docker & Kubernetes: Containers to Production Clusters"
        description="Master containerization with Docker and orchestration with Kubernetes — from building images to securing and scaling production workloads."
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
                  <p className="mt-1 text-xs text-slate-500">CI/CD pipelines and security in delivery.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
              <Link href="/courses/cloud-computing" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Cloud Computing</p>
                  <p className="mt-1 text-xs text-slate-500">Deploy containers on AWS, Azure, and GCP.</p>
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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Containers are the new standard</h2>
            <p className="mt-4 text-base leading-7 text-white/90">Enroll and master Docker and Kubernetes for production deployments.</p>
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
