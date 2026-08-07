import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import type { ExclusiveProgram } from "@/data/exclusive-course-catalog";

export function createProgramMetadata(program: ExclusiveProgram): Metadata {
  const title =
    program.kind === "course"
      ? `${program.title} Course | ${program.code} | UZYNTRA Security`
      : `${program.title} | ${program.code} Certification | UZYNTRA Security`;

  const description = `${program.summary} ${program.duration}. ${program.code}.`;
  const url = `${siteConfig.url}${program.href}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: program.image,
          width: 1200,
          height: 630,
          alt: `${program.title} ${program.code}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: program.image, alt: `${program.title} ${program.code}` }],
    },
  };
}
