import Link from "next/link";
import { ShieldCheck, Boxes, ArrowRight } from "lucide-react";

export function CTAGroup() {
  return (
    <div className="flex w-full flex-col items-center gap-3 sm:w-auto">
      {/* Primary + secondary row */}
      <div
        className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center"
        role="group"
        aria-label="Primary actions"
      >
        <Link
          href="/contact"
          className="btn-solid inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm sm:w-auto"
          style={{ boxShadow: "0 8px 20px rgba(220,38,38,0.22)" }}
        >
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          Get Security Assessment
        </Link>

        <Link
          href="/services"
          className="btn-neutral inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm sm:w-auto"
        >
          <Boxes className="h-4 w-4 shrink-0" aria-hidden="true" />
          Explore Services
        </Link>
      </div>

      {/* Tertiary text link */}
      <Link
        href="/products/uzyntra-api-firewall"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 transition-all duration-200 hover:gap-2.5 hover:text-red-600"
      >
        Explore API Firewall
        <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      </Link>
    </div>
  );
}
