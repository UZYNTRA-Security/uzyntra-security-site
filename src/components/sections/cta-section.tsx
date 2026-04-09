import Link from "next/link";
import { Download, MessageSquare, ShieldCheck } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-500 py-16 text-white sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_24%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-sm sm:px-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            Enterprise Security Starts Here
          </div>

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)] sm:text-5xl lg:text-6xl">
            Ready to Secure Your Systems?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-lg sm:leading-8">
            Partner with UZYNTRA Security to protect APIs, build resilient platforms,
            and deliver secure software with enterprise-grade engineering standards.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] min-w-[220px] items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-black"
            >
              <MessageSquare className="h-4 w-4" />
              Contact Us
            </Link>

            <Link
              href="/download"
              className="inline-flex min-h-[52px] min-w-[220px] items-center justify-center gap-2 rounded-2xl border border-white/75 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/12"
            >
              <Download className="h-4 w-4" />
              Download Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
