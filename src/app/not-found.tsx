import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  Home,
  ArrowLeft,
  Search,
  Terminal,
  Wifi,
} from "lucide-react";

import { ThemedLogo } from "@/components/ui/themed-logo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "404 — Page Not Found | UZYNTRA Security",
  description: "The page you are looking for does not exist or has been moved.",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { label: "Home",     href: siteConfig.nav.home,     icon: Home       },
  { label: "Services", href: siteConfig.nav.services,  icon: ShieldAlert },
  { label: "Products", href: siteConfig.nav.products,  icon: Terminal   },
  { label: "Contact",  href: siteConfig.nav.contact,   icon: Wifi       },
] as const;

export default function NotFound() {
  return (
    /*
     * flex-1 + flex + items-center + justify-center:
     * fills the space between SiteHeader and SiteFooter from the layout,
     * then centers the card both vertically and horizontally within that space.
     */
    <main
      className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-12 sm:py-16"
      aria-labelledby="not-found-heading"
    >
      {/* ── Decorative grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.032]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.22) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,0.22) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Red radial glow — centered behind card ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(220,38,38,0.08) 0%,transparent 68%)",
        }}
      />

      {/* ── Card ── */}
      <div className="surface-card-strong relative z-10 mx-auto w-full max-w-[480px] overflow-hidden px-6 py-8 text-center sm:px-10 sm:py-12">

        {/* Top accent bar */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px] rounded-t-[1.5rem]"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(220,38,38,0.7) 40%,rgba(220,38,38,0.9) 50%,rgba(220,38,38,0.7) 60%,transparent)",
          }}
        />

        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" aria-label="UZYNTRA Security home">
            <ThemedLogo width={148} height={34} priority />
          </Link>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50" />

        {/* Shield icon + 404 */}
        <div className="mt-6 flex items-center justify-center gap-2.5">
          <div className="not-found-icon-badge flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 ring-1 ring-red-100">
            <ShieldAlert className="h-6 w-6 text-red-600" aria-hidden="true" />
          </div>
          <span
            className="font-mono text-[3.75rem] font-black leading-none tracking-tighter text-slate-950 sm:text-[4.5rem]"
            aria-hidden="true"
          >
            404
          </span>
        </div>

        {/* Heading */}
        <h1
          id="not-found-heading"
          className="mt-3.5 text-[1.125rem] font-bold tracking-[-0.025em] text-slate-950 sm:text-xl"
        >
          Page Not Found
        </h1>

        {/* Body */}
        <p className="mx-auto mt-2.5 max-w-[34ch] text-[0.8125rem] leading-[1.75] text-slate-500 sm:text-sm">
          The resource you requested could not be located. It may have been
          moved, removed, or the URL may be incorrect.
        </p>

        {/* Terminal block */}
        <div className="not-found-terminal mt-5 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left font-mono text-[0.7rem] leading-[1.8] text-slate-500 sm:text-[0.75rem]">
          <div>
            <span className="select-none text-red-600">$ </span>
            <span className="text-slate-700">GET</span>
            <span className="text-slate-400"> /unknown-path</span>
          </div>
          <div>
            <span className="select-none text-slate-400">→ </span>
            <span className="font-semibold text-red-600">404 Not Found</span>
            <span className="ml-2 text-slate-400">— access denied</span>
          </div>
          <div className="mt-0.5 flex items-center gap-1">
            <span className="select-none text-red-600">$ </span>
            <span className="inline-block h-[0.85em] w-[0.5em] animate-pulse bg-red-400 opacity-80" aria-hidden="true" />
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="btn-solid inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm"
          >
            <Home className="h-4 w-4 shrink-0" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href={siteConfig.nav.contact}
            className="btn-neutral inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            Report Issue
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-7 border-t border-slate-100 pt-5">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Quick Navigation
          </p>
          <div className="grid grid-cols-4 gap-2">
            {QUICK_LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="group flex flex-col items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2 py-3 text-[0.6875rem] font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:text-red-700 hover:shadow-[0_4px_12px_rgba(220,38,38,0.10)] sm:text-[0.75rem]"
              >
                <Icon
                  className="h-4 w-4 text-slate-400 transition-colors duration-200 group-hover:text-red-600"
                  aria-hidden="true"
                />
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Search hint */}
        <p className="mt-5 flex flex-wrap items-center justify-center gap-1 text-[0.6875rem] text-slate-400 sm:text-[0.75rem]">
          <Search className="h-3 w-3 shrink-0" aria-hidden="true" />
          Looking for something?{" "}
          <Link
            href={siteConfig.nav.contact}
            className="font-medium text-red-700 underline-offset-2 hover:underline"
          >
            Contact us
          </Link>
        </p>
      </div>

      {/* Copyright */}
      <p className="relative z-10 mt-6 text-[0.6875rem] text-slate-400">
        © {new Date().getFullYear()} {siteConfig.legalName}
      </p>
    </main>
  );
}
