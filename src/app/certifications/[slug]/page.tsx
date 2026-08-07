import { notFound } from "next/navigation";

import { ExclusiveProgramPage } from "@/components/sections/exclusive-program-page";
import { certificationPrograms, getCertificationProgram } from "@/data/exclusive-course-catalog";
import { createProgramMetadata } from "@/lib/program-metadata";

type CertificationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return certificationPrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: CertificationPageProps) {
  const { slug } = await params;
  const program = getCertificationProgram(slug);
  if (!program) return {};
  return createProgramMetadata(program);
}

export default async function CertificationPage({ params }: CertificationPageProps) {
  const { slug } = await params;
  const program = getCertificationProgram(slug);

  if (!program) notFound();

  return <ExclusiveProgramPage program={program} />;
}
