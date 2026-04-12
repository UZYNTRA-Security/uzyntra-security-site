import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about UZYNTRA Security — a platform and services company delivering enterprise cybersecurity, secure software engineering, and blockchain systems.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero-shell py-10 sm:py-14 lg:py-20">
        <div className="container-shell relative z-10">

          {/* Page header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
              About
            </p>
            <h1 className="mt-3 text-balance text-2xl font-bold text-slate-950 sm:text-3xl lg:text-4xl">
              About UZYNTRA Security
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-[0.9375rem] leading-[1.75] text-slate-500">
              UZYNTRA Security delivers cybersecurity solutions, secure software
              engineering, and blockchain systems with enterprise-grade architecture,
              security-first thinking, and production-ready execution.
            </p>
          </div>

          {/* Content grid */}
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Left — main overview card */}
            <div className="rounded-2xl border border-red-100/60 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700">
                Company Overview
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-950 sm:text-2xl">
                A platform and services company built for modern technical environments
              </h2>
              <p className="mt-4 text-sm leading-[1.75] text-slate-500 sm:text-[0.9375rem]">
                UZYNTRA Security is positioned as more than a single-product business.
                It combines platform development and enterprise service delivery across
                cybersecurity, secure software development, and blockchain systems.
              </p>
              <p className="mt-3 text-sm leading-[1.75] text-slate-500 sm:text-[0.9375rem]">
                The ecosystem includes UZYNTRA API Firewall, UZYNTRA UI Dashboard,
                and a broader technical direction focused on secure architecture,
                resilient systems, and scalable engineering.
              </p>
            </div>

            {/* Right — three consistent info cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Mission",
                  body: "To help organizations build, protect, and scale secure digital systems through cybersecurity, software engineering, and blockchain innovation.",
                },
                {
                  title: "Positioning",
                  body: "Enterprise-focused, architecture-driven, and security-first in both product design and technical service delivery.",
                },
                {
                  title: "Core Areas",
                  body: "Cybersecurity, secure software development, API protection, modern backend systems, cloud-native engineering, and blockchain infrastructure.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-[1.75] text-slate-500">{body}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

          {/* Research credibility section */}
          {blogPosts.length > 0 && (
            <div className="mx-auto mt-8 max-w-5xl">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700">
                      Research & Insights
                    </p>
                    <h2 className="mt-2 text-lg font-bold text-slate-950 sm:text-xl">
                      Published security research
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      Technical articles and vulnerability breakdowns published by the UZYNTRA team.
                    </p>
                  </div>
                  <Link
                    href="/blog"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-red-700 transition-all duration-200 hover:gap-2.5"
                  >
                    View all research
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {blogPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={post.externalUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:bg-white hover:shadow-[0_6px_20px_rgba(220,38,38,0.08)] about-research-card"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full border border-red-100 bg-red-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-red-700">
                          {post.category}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                          {post.platform}
                        </span>
                      </div>
                      <p className="text-sm font-semibold leading-snug text-slate-950 transition-colors duration-200 group-hover:text-red-700">
                        {post.title}
                      </p>
                      <div className="mt-auto flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <BookOpen className="h-3 w-3 shrink-0" aria-hidden="true" />
                          {post.readTime}
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-500" aria-hidden="true" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
