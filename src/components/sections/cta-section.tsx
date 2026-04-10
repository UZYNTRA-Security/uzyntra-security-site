import Link from "next/link";
import { Download, MessageSquare, ShieldCheck } from "lucide-react";

export function CTASection() {
  return (
    <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-500 py-14 text-white sm:py-16 lg:py-20">
      {/* Radial accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]"
      />
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            Enterprise Security Starts Here
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-balance text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Secure Your Systems?
          </h2>

          {/* Description — solid opacity, no /85 fraction */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-red-100 sm:text-base sm:leading-8">
            Partner with UZYNTRA Security to protect APIs, build resilient platforms,
            and deliver secure software with enterprise-grade engineering standards.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">

            <Link
              href="/contact"
              className="btn-neutral inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-xl px-7 text-sm active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600"
            >
              <MessageSquare className="h-4 w-4 shrink-0" />
              Contact Us
            </Link>

            <Link
              href="/download"
              className="btn-stroke inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-xl px-7 text-sm active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600"
            >
              <Download className="h-4 w-4 shrink-0" />
              Download Now
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
