import Image from "next/image";

interface CourseHeroImageProps {
  src: string;
  alt: string;
}

export function CourseHeroImage({ src, alt }: CourseHeroImageProps) {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900" style={{ height: "340px" }}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover opacity-85 transition-transform duration-700 hover:scale-[1.02]"
        sizes="100vw"
      />
      {/* Gradient overlay — fades into page background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
      {/* Bottom fade into white page */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
