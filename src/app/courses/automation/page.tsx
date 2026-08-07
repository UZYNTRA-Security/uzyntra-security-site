import { ExclusiveProgramPage } from "@/components/sections/exclusive-program-page";
import { getCourseProgram } from "@/data/exclusive-course-catalog";
import { createProgramMetadata } from "@/lib/program-metadata";

const program = getCourseProgram("automation");

export const metadata = createProgramMetadata(program);

export default function AutomationCoursePage() {
  return <ExclusiveProgramPage program={program} />;
}
