import { ExclusiveProgramPage } from "@/components/sections/exclusive-program-page";
import { getCourseProgram } from "@/data/exclusive-course-catalog";
import { createProgramMetadata } from "@/lib/program-metadata";

const program = getCourseProgram("blockchain-web3");

export const metadata = createProgramMetadata(program);

export default function BlockchainWeb3CoursePage() {
  return <ExclusiveProgramPage program={program} />;
}
