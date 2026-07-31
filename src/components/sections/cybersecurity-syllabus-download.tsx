"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef, useState, type ComponentType } from "react";
import {
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Download,
  Flag,
  FolderKanban,
  GraduationCap,
  Layers3,
  Loader2,
  Shield,
  Target,
  Users,
} from "lucide-react";
import {
  type CybersecurityCourseMonth,
  cybersecurityAssessmentPolicy,
  cybersecurityCourseLabs,
  cybersecurityCourseMonths,
  cybersecurityCourseOutcomes,
  cybersecurityCourseProjects,
  cybersecurityCourseSchedule,
  cybersecurityCourseStats,
  cybersecurityTeachingMethodology,
} from "@/data/cybersecurity-course";

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

function PdfMonth({ month }: { month: CybersecurityCourseMonth }) {
  return (
    <section className="pdf-section pdf-month-section">
      <SectionHeading title={month.label} Icon={Layers3} />
      <article className="pdf-month-card">
        <div className="pdf-month-header">
          <span>{month.label}</span>
          <h3>{month.title}</h3>
          <p>{month.description}</p>
        </div>
        <div className="pdf-module-grid">
          {month.modules.map((module) => (
            <div className="pdf-module-card" key={module.num}>
              <div className="pdf-module-title-row">
                <span>{module.num}</span>
                <h4>{module.title}</h4>
              </div>
              <p>{module.summary}</p>
              <p className="pdf-meta"><strong>Topics:</strong> {module.topics.join(" / ")}</p>
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

export function DownloadSyllabus() {
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
        const widthByPage = printableWidth;
        const heightByPage = (canvas.height * widthByPage) / canvas.width;
        const fitToHeight = heightByPage > printableHeight;
        const renderedHeight = fitToHeight ? printableHeight : heightByPage;
        const renderedWidth = fitToHeight ? (canvas.width * printableHeight) / canvas.height : widthByPage;
        const x = pageMargin + (printableWidth - renderedWidth) / 2;

        pdf.addImage(pageImage, "JPEG", x, pageMargin, renderedWidth, renderedHeight, undefined, "FAST");
      }

      pdf.save("uzyntra-cyber-security-syllabus.pdf");
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
        className="course-download-syllabus-button inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold disabled:cursor-wait disabled:opacity-70 sm:w-auto"
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
                  <p className="pdf-brand-kicker">Professional Cybersecurity Training</p>
                </div>
              </div>
              <div className="pdf-cover-grid">
                <div>
                  <p className="pdf-eyebrow">Course Syllabus</p>
                  <h1>Cyber Security: From Foundations to Career-Ready</h1>
                  <p className="pdf-cover-copy">
                    A practical 3-month programme covering security foundations, authorized testing, monitoring, incident response, reporting, and career preparation.
                  </p>
                </div>
                <div className="pdf-cover-card">
                  <Shield size={34} strokeWidth={1.8} aria-hidden="true" />
                  <p>15 modules</p>
                  <span>120 instructor-led hours with guided labs and assessment.</span>
                </div>
              </div>
            </header>

            <section className="pdf-stats-grid">
              {cybersecurityCourseStats.map((item) => (
                <div key={item.label} className="pdf-stat-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </section>

            <section className="pdf-section pdf-two-col">
              <div>
                <SectionHeading title="Course Overview" Icon={BookOpen} />
                <p>This course introduces students to the practical foundations of defensive and offensive security. Learners build core knowledge of networks, systems, threats, vulnerabilities, monitoring, and incident handling through guided labs and real-world scenarios.</p>
                <p>The programme is designed for beginners, IT students, administrators, and developers who want a practical path into entry-level security roles.</p>
              </div>
              <div>
                <SectionHeading title="Target Audience" Icon={Users} />
                <ul>
                  <li>Beginners interested in cybersecurity.</li>
                  <li>Students, IT professionals, administrators, and developers.</li>
                  <li>Learners preparing for SOC, analyst, or ethical hacking paths.</li>
                </ul>
              </div>
            </section>

            <section className="pdf-section">
              <SectionHeading title="Schedule and Requirements" Icon={Target} />
              <div className="pdf-mini-grid">
                {cybersecurityCourseSchedule.map((item) => (
                  <div key={item.label} className="pdf-mini-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              <p>Students should have basic computer literacy, a laptop capable of running virtual machines, at least 8 GB RAM, and around 80-100 GB of free storage.</p>
            </section>
          </div>

          {cybersecurityCourseMonths.map((month) => (
            <div key={month.num} className="pdf-page">
              <PdfMonth month={month} />
            </div>
          ))}

          <div className="pdf-page">
            <section className="pdf-section pdf-two-col">
              <div>
                <SectionHeading title="Teaching Methodology" Icon={GraduationCap} />
                <ul>
                  {cybersecurityTeachingMethodology.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionHeading title="Learning Outcomes" Icon={CheckCircle2} />
                <ul>
                  {cybersecurityCourseOutcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="pdf-section">
              <SectionHeading title="Practical Activities" Icon={Flag} />
              <div className="pdf-list-columns">
                {cybersecurityCourseLabs.map((item) => (
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
                  {cybersecurityCourseProjects.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionHeading title="Assessment" Icon={ClipboardCheck} />
                <ul>
                  {cybersecurityAssessmentPolicy.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
