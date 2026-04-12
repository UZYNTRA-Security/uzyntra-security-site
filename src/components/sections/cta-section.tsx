import Link from "next/link";
import { Download, MessageSquare, ShieldCheck } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16 lg:py-20"
    >

      {/* Radial accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_22%)]"
      />

      {/* Grid texture — reduced to 6% */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* Centered Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Content Wrapper */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Enterprise Security Starts Here
          </div>

          {/* Heading */}
          <h2
            className="mt-5 text-pretty text-[1.6rem] font-bold leading-[1.16] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl"
          >
            Ready to Secure Your Systems?
          </h2>

          {/* Description */}
          <p
            className="mt-5 font-normal leading-[1.6]"
            style={{
              maxWidth: "650px",
              fontSize: "18px",
              textAlign: "center",
              color: "rgba(255,255,255,0.90)",
              textShadow: "0 1px 2px rgba(0,0,0,0.20)",
            }}
          >
            Partner with UZYNTRA Security to{" "}
            <strong style={{ color: "#ffffff", fontWeight: 600 }}>protect APIs</strong>,
            {" "}build resilient platforms, and deliver secure software with{" "}
            <strong style={{ color: "#60A5FA", fontWeight: 600 }}>enterprise-grade</strong>
            {" "}engineering standards.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="btn-neutral inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-7 text-sm sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-700"
            >
              <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
              Contact Us
            </Link>

            <Link
              href="/download"
              className="btn-stroke inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-7 text-sm sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-700"
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
              Download Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}