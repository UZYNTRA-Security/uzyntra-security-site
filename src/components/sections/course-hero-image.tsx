import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, BookOpen, MessageSquare } from "lucide-react";

interface CourseHeroImageProps {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}

export function CourseHeroImage({ src, alt, eyebrow, title, description }: CourseHeroImageProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(480px, 55vw, 580px)" }}>

      {/* Image — brightness normalizes mixed light/dark images, focal point at 35% */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover brightness-[0.55]"
        style={{ objectPosition: "center 35%" }}
        sizes="100vw"
      />

      {/* Primary overlay — stronger gradient for text contrast on both themes */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(rgba(5,8,15,0.68), rgba(5,8,15,0.62))",
        }}
      />

      {/* Bottom vignette — subtle depth */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.60), transparent)" }}
      />

      {/* Content — sits just below navbar, ~40px tighter than before */}
      <div
        className="absolute inset-0 flex items-start"
        style={{ paddingTop: "calc(var(--header-height) + 2rem)" }}
      >
        <div className="container-shell w-full">
          <div className="mx-auto max-w-[760px]">

            {/* Eyebrow badge — slightly more opaque bg */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.18] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-red-400" />
              {eyebrow}
            </div>

            {/* Title — stronger shadow for light theme readability */}
            <h1
              className="text-balance text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.55), 0 4px 32px rgba(0,0,0,0.45)",
                lineHeight: 1.12,
              }}
            >
              {title}
            </h1>

            {/* Description — brighter, more readable */}
            <p
              className="mt-4 text-base sm:text-lg"
              style={{
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.65,
                textShadow: "0 1px 10px rgba(0,0,0,0.5)",
                maxWidth: "640px",
              }}
            >
              {description}
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-500 hover:-translate-y-0.5"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                Enroll Now
              </Link>
              <a
                href="#curriculum"
                className="inline-flex h-11 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
                style={{ border: "1px solid rgba(255,255,255,0.38)", background: "rgba(255,255,255,0.10)" }}
              >
                <BookOpen className="h-4 w-4 shrink-0" />
                View Curriculum
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
