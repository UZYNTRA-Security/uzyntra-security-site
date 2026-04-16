import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Tag, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { blogPosts, publishedPosts } from "@/data/blog";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Security Research & Insights | UZYNTRA Security",
  description:
    "Technical security research, API vulnerability breakdowns, penetration testing insights, and engineering articles from the UZYNTRA Security team.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Security Research & Insights | UZYNTRA Security",
    description:
      "Technical security research and engineering insights from UZYNTRA Security — covering API security, penetration testing, blockchain, and secure engineering.",
    url: `${siteConfig.url}/blog`,
  },
};

const platformColors: Record<string, string> = {
  DEV:      "bg-slate-950 text-white",
  Medium:   "bg-slate-700 text-white",
  Hashnode: "bg-blue-700 text-white",
  Substack: "bg-orange-700 text-white",
  UZYNTRA:  "bg-red-600 text-white",
};

export default function BlogPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Research & Insights"
        title="Security research and technical insights from UZYNTRA"
        description="In-depth breakdowns of API vulnerabilities, penetration testing techniques, blockchain security, and secure engineering — written for practitioners, not marketers."
      />

      <section className="section-tight">
        <div className="container-shell">

          {/* Published posts — full cards */}
          {publishedPosts.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {publishedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="blog-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_12px_40px_rgba(220,38,38,0.10)]"
                >
                  <div className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-red-600 to-red-400 transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="blog-card-badge inline-flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-700">
                        <Tag className="h-3 w-3 shrink-0" aria-hidden="true" />
                        {post.category}
                      </span>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${platformColors[post.platform] ?? "bg-slate-200 text-slate-700"}`}>
                        {post.platform}
                      </span>
                    </div>
                    <h2 className="blog-card-title text-base font-bold leading-snug text-slate-950 transition-colors duration-200 group-hover:text-red-700">
                      {post.title}
                    </h2>
                    <p className="blog-card-excerpt flex-1 text-sm leading-7 text-slate-500">
                      {post.excerpt}
                    </p>
                    <div className="blog-card-border flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <div className="blog-card-meta flex items-center gap-3 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <BookOpen className="h-3 w-3 shrink-0" aria-hidden="true" />
                          {post.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Tag className="h-3 w-3 shrink-0" aria-hidden="true" />
                          {post.tag}
                        </span>
                      </div>
                      <span className="blog-card-meta text-xs text-slate-500">{post.date}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <Link
                        href={post.externalUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="blog-card-link inline-flex items-center gap-1.5 text-sm font-semibold text-red-700 transition-all duration-200 hover:gap-2"
                        aria-label={`Read ${post.title} on ${post.platform}`}
                      >
                        Read on {post.platform}
                        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </Link>
                      <Link
                        href={post.serviceLink}
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-all duration-200 hover:text-red-700"
                      >
                        {post.cta}
                        <ArrowRight className="h-3 w-3 shrink-0" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Unpublished posts — lightweight list, no excerpt, minimal DOM */}
          {blogPosts.filter((p) => !p.published).length > 0 && (
            <div className="mt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Coming Soon</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.filter((p) => !p.published).map((post) => (
                  <div
                    key={post.slug}
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3"
                  >
                    <div className="min-w-0">
                      <span className="blog-card-badge mb-1 inline-flex items-center gap-1 rounded-full border border-red-100 bg-red-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-red-700">
                        {post.category}
                      </span>
                      <p className="truncate text-sm font-medium text-slate-700">{post.title}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-400">
                      Soon
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {blogPosts.length === 0 && (
            <div className="mx-auto max-w-md py-20 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-slate-300" aria-hidden="true" />
              <p className="mt-4 text-sm text-slate-500">
                Research articles are published on DEV.to and linked here as they go live.
              </p>
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <Link
              href="https://dev.to/uzyntra"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-stroke inline-flex h-11 items-center gap-2 rounded-xl px-6 text-sm"
            >
              View all posts on DEV.to
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
