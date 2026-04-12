import Link from "next/link";
import { ArrowUpRight, ArrowRight, BookOpen, Tag } from "lucide-react";

import { featuredPosts } from "@/data/blog";

export function InsightsSection() {
  if (featuredPosts.length === 0) return null;

  return (
    <section className="section-tight">
      <div className="container-shell">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
              Research & Insights
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              Latest from UZYNTRA
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              Technical security research and engineering insights published by the team.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-red-700 transition-all duration-200 hover:gap-2.5"
          >
            View all research
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="insights-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_10px_32px_rgba(220,38,38,0.09)]"
            >
              {/* Hover accent bar */}
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-red-600 to-red-400 transition-transform duration-300 group-hover:scale-x-100"
              />

              {/* Category badge */}
              <span className="insights-badge inline-flex w-fit items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-700">
                <Tag className="h-3 w-3 shrink-0" aria-hidden="true" />
                {post.category}
              </span>

              {/* Title */}
              <h3 className="insights-title mt-3 text-sm font-bold leading-snug text-slate-950 transition-colors duration-200 group-hover:text-red-700">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="insights-excerpt mt-2 flex-1 text-xs leading-6 text-slate-500 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-4 insights-border">
                {/* text-slate-500 (#64748b) passes WCAG AA 4.5:1 on white */}
                <span className="insights-meta flex items-center gap-1 text-xs text-slate-500">
                  <BookOpen className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {post.readTime}
                </span>

                <Link
                  href={post.externalUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 transition-all duration-200 hover:gap-2 insights-link"
                  aria-label={`Read ${post.title} on ${post.platform}`}
                >
                  Read on {post.platform}
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
