import Image from "next/image";
import { ShieldCheck } from "lucide-react";

interface CourseHeroImageProps {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}

export function CourseHeroImage({ src, alt, eyebrow, title, description }: CourseHeroImageProps) {
  return (
    <section
      className="course-hero relative w-full overflow-hidden"
      style={{ height: "clamp(420px, 52vw, 560px)" }}
    >
      {/* Full-bleed image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Top-down dark scrim — keeps text legible on both themes */}
      <div className="course-hero-scrim absolute inset-0" />
      {/* Bottom fade — blends into the page background color per theme */}
      <div className="course-hero-fade absolute inset-x-0 bottom-0 h-48" />

      {/* Text — pinned to bottom of image */}
      <div className="absolute inset-x-0 bottom-0 container-shell pb-10 sm:pb-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            {eyebrow}
          </div>
          <h1
            className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
          >
            {title}
          </h1>
          <p
            className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
