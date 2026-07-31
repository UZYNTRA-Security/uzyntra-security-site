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

      {/* Diagonal overlay — left side darker (text area), right side lighter (image shows) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,8,16,0.72) 0%, rgba(4,8,16,0.55) 55%, rgba(4,8,16,0.35) 100%)",
        }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex items-start"
        style={{ paddingTop: "calc(var(--header-height) + 2rem)" }}
      >
        <div className="container-shell w-full">
          <div className="mx-auto max-w-[760px]">

            {/* Eyebrow badge */}
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.12)", color: "#f8fafc" }}
            >
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-red-400" />
              {eyebrow}
            </div>

            {/* Title — explicit #f8fafc, never inherits dark theme overrides */}
            <h1
              className="text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl"
              style={{
                color: "#f8fafc",
                textShadow: "0 2px 16px rgba(0,0,0,0.45)",
                lineHeight: 1.05,
                maxWidth: "760px",
              }}
            >
              {title}
            </h1>

            {/* Description — explicit color, normal weight */}
            <p
              className="mt-4 text-base sm:text-lg"
              style={{
                color: "rgba(255,255,255,0.82)",
                fontWeight: 400,
                lineHeight: 1.65,
                textShadow: "0 1px 10px rgba(0,0,0,0.4)",
                maxWidth: "640px",
              }}
            >
              {description}
            </p>

            {/* CTA buttons */}
            <div className="course-hero-actions mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="course-hero-primary inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-6 text-sm font-semibold text-white shadow-lg transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                Enroll Now
              </Link>
              <a
                href="#curriculum"
                className="course-hero-secondary inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold backdrop-blur-sm transition-all duration-200"
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
