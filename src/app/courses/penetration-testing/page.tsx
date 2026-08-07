import { ExclusiveProgramPage } from "@/components/sections/exclusive-program-page";
import { getCourseProgram } from "@/data/exclusive-course-catalog";
import { createProgramMetadata } from "@/lib/program-metadata";

const program = getCourseProgram("penetration-testing");

export const metadata = createProgramMetadata(program);

export default function PenetrationTestingCoursePage() {
  return <ExclusiveProgramPage program={program} />;
}
