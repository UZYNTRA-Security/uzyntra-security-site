import Link from "next/link";
import { ShieldCheck, Boxes, ArrowRight } from "lucide-react";

export function CTAGroup() {
  return (
    <div
      className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center"
      role="group"
      aria-label="Primary actions"
    >
      {/* Primary — urgency CTA */}
      <Link
        href="/contact"
        className="btn-solid inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm sm:h-11 sm:w-auto"
      >
        <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
        Get Security Assessment in 24 Hours
      </Link>

      {/* Secondaries */}
      <div className="flex gap-2.5 sm:contents">
        <Link
          href="/services"
          className="btn-neutral inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl px-5 text-sm sm:h-11 sm:flex-none"
        >
          <Boxes className="h-4 w-4 shrink-0" aria-hidden="true" />
          Explore Services
        </Link>

        <Link
          href="/products/uzyntra-api-firewall"
          className="btn-stroke inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl px-5 text-sm sm:h-11 sm:flex-none"
        >
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          API Firewall
        </Link>
      </div>
    </div>
  );
}
