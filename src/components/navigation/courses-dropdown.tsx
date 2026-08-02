"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, GraduationCap } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type MegaCourseItem = {
  title: string;
  href: string;
};

type MegaCourseGroup = {
  label: string;
  items: MegaCourseItem[];
};

type MegaCourseColumn = {
  groups: MegaCourseGroup[];
};

const megaCourseColumns: MegaCourseColumn[] = [
  {
    groups: [
      {
        label: "Cyber Security",
        items: [{ title: "Cyber Security", href: "/courses/cybersecurity" }],
      },
      {
        label: "Ethical Hacking",
        items: [{ title: "Ethical Hacking", href: "/courses/ethical-hacking" }],
      },
      {
        label: "Network Security",
        items: [
          { title: "Networking (CCNA)", href: "/courses/networking-ccna" },
          { title: "Secure Coding", href: "/courses/secure-coding" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        label: "Pen Testing",
        items: [
          { title: "Penetration Testing", href: "/courses/penetration-testing" },
          { title: "API Security", href: "/courses/api-security" },
        ],
      },
      {
        label: "SOC Analyst",
        items: [{ title: "SOC Analyst", href: "/courses/soc-analyst" }],
      },
      {
        label: "Incident Handling",
        items: [{ title: "Digital Forensics", href: "/courses/digital-forensics" }],
      },
    ],
  },
  {
    groups: [
      {
        label: "AI Security and Management",
        items: [
          { title: "Artificial Intelligence", href: "/courses/artificial-intelligence" },
          { title: "AI Agent Development", href: "/courses/ai-agent-development" },
          { title: "Prompt Engineering", href: "/courses/prompt-engineering" },
          { title: "Data Science and Analytics", href: "/courses/data-science" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        label: "Cloud Security",
        items: [
          { title: "Cloud Computing", href: "/courses/cloud-computing" },
          { title: "AWS / Azure / GCP", href: "/courses/aws-azure-gcp" },
        ],
      },
      {
        label: "DevSecOps",
        items: [
          { title: "DevOps and DevSecOps", href: "/courses/devsecops" },
          { title: "Docker and Kubernetes", href: "/courses/docker-kubernetes" },
          { title: "Linux Administration", href: "/courses/linux-administration" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        label: "Development",
        items: [
          { title: "Python Programming", href: "/courses/python-programming" },
          { title: "Web Development", href: "/courses/web-development" },
          { title: "Mobile App Development", href: "/courses/mobile-app-development" },
        ],
      },
      {
        label: "Blockchain",
        items: [
          { title: "Blockchain and Web3", href: "/courses/blockchain-web3" },
          { title: "Automation", href: "/courses/automation" },
        ],
      },
    ],
  },
];

interface CoursesDropdownProps {
  open: boolean;
}

export function CoursesDropdown({ open }: CoursesDropdownProps) {
  const pathname = usePathname();

  return (
    <div
      id="menu-Courses"
      role="menu"
      aria-label="Courses menu"
      className={cn(
        "fixed left-0 right-0 top-[56px] z-50 border-y border-red-950/60 bg-[#0b0b0c] text-white shadow-[0_28px_70px_rgba(0,0,0,0.35)]",
        "transition-[opacity,transform,visibility] duration-200 [transition-timing-function:cubic-bezier(.2,.8,.2,1)]",
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"
      )}
    >
      <div className="mx-auto flex max-h-[calc(100vh-72px)] max-w-[1360px] gap-10 overflow-y-auto px-10 py-8 xl:px-14">
        <aside className="w-[210px] shrink-0 border-r border-white/10 pr-8">
          <Link href="/" className="block" aria-label="UZYNTRA Security home">
            <Image
              src={siteConfig.logos.mainDark}
              alt="UZYNTRA Security"
              width={178}
              height={46}
              className="h-auto w-[178px] object-contain object-left"
              priority
            />
          </Link>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-red-500">
            Professional Training
          </p>
          <p className="mt-3 text-sm leading-6 text-white/65">
            Practical cybersecurity, AI, cloud, and software engineering courses for job-ready skills.
          </p>
          <Link
            href="/courses"
            role="menuitem"
            className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-none bg-red-600 px-4 text-xs font-extrabold uppercase text-white transition-colors duration-200 hover:bg-white hover:text-red-600"
          >
            All Courses
            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </aside>

        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-10 gap-y-8">
          {megaCourseColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="min-w-0 space-y-6">
              {column.groups.map((group) => (
                <section key={group.label}>
                  <h3 className="mb-3 text-[15px] font-bold uppercase leading-tight text-red-600">
                    {group.label}
                  </h3>
                  <div className="space-y-3">
                    {group.items.map((course) => {
                      const isActive = pathname === course.href || pathname.startsWith(`${course.href}/`);
                      return (
                        <Link
                          key={course.href}
                          href={course.href}
                          role="menuitem"
                          className={cn(
                            "group flex items-start gap-2 text-[15px] font-semibold leading-5 text-white transition-colors duration-200",
                            "hover:text-red-500",
                            isActive && "text-red-500"
                          )}
                        >
                          <ChevronRight
                            className={cn(
                              "mt-0.5 h-3.5 w-3.5 shrink-0 text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-red-500",
                              isActive && "text-red-500"
                            )}
                            aria-hidden="true"
                          />
                          <span>{course.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
