"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef, useState, type ComponentType } from "react";
import {
  Bot,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Download,
  Flag,
  FolderKanban,
  GraduationCap,
  Layers3,
  Loader2,
  Target,
  Users,
} from "lucide-react";
import {
  type AiCourseMonth,
  aiAssessmentPolicy,
  aiCareerOpportunities,
  aiCourseLabs,
  aiCourseMonths,
  aiCourseOutcomes,
  aiCourseProjects,
  aiCourseSchedule,
  aiCourseStats,
  aiTeachingMethodology,
} from "@/data/artificial-intelligence-course";

type IconComponent = ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
}>;

type SectionHeadingProps = {
  title: string;
  Icon: IconComponent;
};

function SectionHeading({ title, Icon }: SectionHeadingProps) {
  return (
    <div className="pdf-section-heading">
      <span className="pdf-section-icon-wrap">
        <Icon size={18} strokeWidth={2.2} aria-hidden="true" />
      </span>
      <h2>{title}</h2>
    </div>
  );
}

function PdfLogo() {
  return (
    <div className="pdf-logo-frame">
      <img
        src="/logos/uzyntra-pdf-logo.png"
        alt="UZYNTRA Security"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const fallback = event.currentTarget.nextElementSibling;
          if (fallback instanceof HTMLElement) {
            fallback.style.display = "flex";
          }
        }}
      />
      <span>UZ</span>
    </div>
  );
}

function chunkModules<T>(items: T[], size: number) {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function PdfMonth({ month, modules, partLabel }: { month: AiCourseMonth; modules: AiCourseMonth["modules"]; partLabel?: string }) {
  return (
    <section className="pdf-section pdf-month-section">
      <SectionHeading title={partLabel ?? month.label} Icon={Layers3} />
      <article className="pdf-month-card">
        <div className="pdf-month-header">
          <span>{month.label}</span>
          <h3>{month.title}</h3>
          <p>{month.description}</p>
        </div>
        <div className="pdf-module-grid">
          {modules.map((module) => (
            <div className="pdf-module-card" key={module.num}>
              <div className="pdf-module-title-row">
                <span>{module.num}</span>
                <h4>{module.title}</h4>
              </div>
              <p>{module.summary}</p>
              <p className="pdf-meta"><strong>Topics:</strong> {module.topics.join(" / ")}</p>
              {module.practical.length > 0 ? <p className="pdf-meta"><strong>Practical:</strong> {module.practical.join(" / ")}</p> : null}
              {module.projects.length > 0 ? <p className="pdf-meta"><strong>Projects:</strong> {module.projects.join(" / ")}</p> : null}
              {module.tools.length > 0 ? <p className="pdf-meta"><strong>Tools:</strong> {module.tools.join(" / ")}</p> : null}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

async function waitForPdfContent(element: HTMLElement) {
  await document.fonts.ready;

  const images = Array.from(element.querySelectorAll<HTMLImageElement>("img"));
  await Promise.all(
    images.map(
      (image) =>
        new Promise<void>((resolve) => {
          if (image.complete && image.naturalWidth > 0) {
            resolve();
            return;
          }

          image.onload = () => resolve();
          image.onerror = () => resolve();
        }),
    ),
  );

  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

export function DownloadAISyllabus() {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  async function handleDownload() {
    const element = pdfRef.current;

    if (!element || isGenerating) {
      return;
    }

    setIsGenerating(true);

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      await waitForPdfContent(element);

      const pages = Array.from(element.querySelectorAll<HTMLElement>(".pdf-page"));
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageMargin = 8;
      const printableWidth = pageWidth - pageMargin * 2;
      const printableHeight = pageHeight - pageMargin * 2;

      for (const [index, page] of pages.entries()) {
        const canvas = await html2canvas(page, {
          scale: 2,
          useCORS: true,
          allowTaint: false,
          backgroundColor: "#ffffff",
          imageTimeout: 15000,
          logging: false,
        });

        if (index > 0) {
          pdf.addPage();
        }

        const pageImage = canvas.toDataURL("image/jpeg", 0.95);
        const heightByPage = (canvas.height * printableWidth) / canvas.width;
        const fitToHeight = heightByPage > printableHeight;
        const renderedHeight = fitToHeight ? printableHeight : heightByPage;
        const renderedWidth = fitToHeight ? (canvas.width * printableHeight) / canvas.height : printableWidth;
        const x = pageMargin + (printableWidth - renderedWidth) / 2;

        pdf.addImage(pageImage, "JPEG", x, pageMargin, renderedWidth, renderedHeight, undefined, "FAST");
      }

      pdf.save("uzyntra-ai-professional-syllabus.pdf");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleDownload}
        disabled={isGenerating}
        className="btn-ghost-secondary inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {isGenerating ? (
          <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden="true" />
        ) : (
          <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
        )}
        {isGenerating ? "Preparing PDF" : "Download Syllabus"}
      </button>

      <div className="pdf-template-wrapper" aria-hidden="true">
        <div ref={pdfRef} className="pdf-document">
          <div className="pdf-page pdf-page-cover">
            <header className="pdf-cover">
              <div className="pdf-brand-row">
                <PdfLogo />
                <div>
                  <p className="pdf-brand-name">UZYNTRA Security</p>
                  <p className="pdf-brand-kicker">Professional AI Training</p>
                </div>
              </div>
              <div className="pdf-cover-grid">
                <div>
                  <p className="pdf-eyebrow">Course Syllabus</p>
                  <h1>UZYNTRA Certified Artificial Intelligence Professional</h1>
                  <p className="pdf-cover-copy">
                    A 3-month AI, machine learning, and generative AI bootcamp covering Python, ML, deep learning, NLP, computer vision, LLMs, AI agents, deployment, security, and capstone work.
                  </p>
                </div>
                <div className="pdf-cover-card">
                  <Bot size={34} strokeWidth={1.8} aria-hidden="true" />
                  <p>13 modules</p>
                  <span>120 learning hours with project-based labs and capstone development.</span>
                </div>
              </div>
            </header>

            <section className="pdf-stats-grid">
              {aiCourseStats.map((item) => (
                <div key={item.label} className="pdf-stat-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </section>

            <section className="pdf-section pdf-two-col">
              <div>
                <SectionHeading title="Course Overview" Icon={BookOpen} />
                <p>This bootcamp gives students a strong foundation in artificial intelligence while emphasizing real-world implementation through hands-on projects.</p>
                <p>Students build production-ready AI applications using modern frameworks, model workflows, LLM integrations, automation systems, deployment practices, and responsible AI principles.</p>
              </div>
              <div>
                <SectionHeading title="Target Audience" Icon={Users} />
                <ul>
                  <li>Beginners entering AI, ML, and generative AI.</li>
                  <li>Students, developers, analysts, and automation builders.</li>
                  <li>Learners preparing for AI roles, freelancing, or startup work.</li>
                </ul>
              </div>
            </section>

            <section className="pdf-section">
              <SectionHeading title="Schedule and Requirements" Icon={Target} />
              <div className="pdf-mini-grid">
                {aiCourseSchedule.map((item) => (
                  <div key={item.label} className="pdf-mini-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              <p>Students should have basic computer literacy, a laptop suitable for Python development, internet access for cloud notebooks and APIs, and a willingness to complete weekly coding exercises.</p>
            </section>
          </div>

          {aiCourseMonths.flatMap((month) => {
            const chunks = chunkModules(month.modules, 4);
            return chunks.map((modules, index) => (
              <div key={`${month.num}-${index}`} className="pdf-page">
                <PdfMonth
                  month={month}
                  modules={modules}
                  partLabel={chunks.length > 1 ? `${month.label} - Part ${index + 1}` : month.label}
                />
              </div>
            ));
          })}

          <div className="pdf-page">
            <section className="pdf-section pdf-two-col">
              <div>
                <SectionHeading title="Teaching Methodology" Icon={GraduationCap} />
                <ul>
                  {aiTeachingMethodology.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionHeading title="Learning Outcomes" Icon={CheckCircle2} />
                <ul>
                  {aiCourseOutcomes.slice(0, 7).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="pdf-section">
              <SectionHeading title="Practical Activities" Icon={Flag} />
              <div className="pdf-list-columns">
                {aiCourseLabs.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </section>
          </div>

          <div className="pdf-page">
            <section className="pdf-section pdf-two-col">
              <div>
                <SectionHeading title="Course Projects" Icon={FolderKanban} />
                <ul>
                  {aiCourseProjects.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionHeading title="Assessment" Icon={ClipboardCheck} />
                <ul>
                  {aiAssessmentPolicy.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="pdf-section">
              <SectionHeading title="Career Opportunities" Icon={Users} />
              <div className="pdf-list-columns">
                {aiCareerOpportunities.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
