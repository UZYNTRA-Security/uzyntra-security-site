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
      {/* Image — brightness reduced to normalize light/dark images */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover brightness-[0.55]"
        sizes="100vw"
      />

      {/* Unified dark overlay — consistent on all images, both themes */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom vignette — subtle depth, NOT a page-color fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}
      />

      {/* Centered content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-shell w-full">
          <div className="mx-auto max-w-3xl">

            {/* Eyebrow badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-red-400" />
              {eyebrow}
            </div>

            {/* Title */}
            <h1
              className="text-balance text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)", lineHeight: 1.12 }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg"
              style={{ lineHeight: 1.65, textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}
            >
              {description}
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-500 hover:-translate-y-0.5 hover:shadow-red-600/40"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                Enroll Now
              </Link>
              <a
                href="#curriculum"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
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
