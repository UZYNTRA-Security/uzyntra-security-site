import Link from "next/link";
import { ShieldCheck, Boxes, Download } from "lucide-react";

/**
 * CTAGroup — mobile-first CTA hierarchy.
 * Primary: full-width on mobile, auto-width on sm+.
 * Secondaries: equal-split row on mobile, inline on sm+.
 */
export function CTAGroup() {
  return (
    <div
      className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center"
      role="group"
      aria-label="Primary actions"
    >
      {/* Primary */}
      <Link
        href="/services"
        className="btn-solid inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm sm:h-11 sm:w-auto"
      >
        <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
        Explore Services
      </Link>

      {/* Secondaries — share a row on mobile via flex, unwrap on sm+ via contents */}
      <div className="flex gap-2.5 sm:contents">
        <Link
          href="/products"
          className="btn-neutral inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl px-5 text-sm sm:h-11 sm:flex-none"
        >
          <Boxes className="h-4 w-4 shrink-0" aria-hidden="true" />
          View Products
        </Link>

        <Link
          href="/download"
          className="btn-stroke inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl px-5 text-sm sm:h-11 sm:flex-none"
        >
          <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
          Download
        </Link>
      </div>
    </div>
  );
}
