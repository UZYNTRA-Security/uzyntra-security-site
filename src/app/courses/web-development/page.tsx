import { ExclusiveProgramPage } from "@/components/sections/exclusive-program-page";
import { getCourseProgram } from "@/data/exclusive-course-catalog";
import { createProgramMetadata } from "@/lib/program-metadata";

const program = getCourseProgram("web-development");

export const metadata = createProgramMetadata(program);

export default function WebDevelopmentCoursePage() {
  return <ExclusiveProgramPage program={program} />;
}
