"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight, GraduationCap,
  BrainCircuit, Bot, MessageSquare, BarChart3,
  Shield, Crosshair, ScanSearch, Lock, Eye, Microscope, Code2,
  Cloud, GitMerge, Container, Server, Terminal,
  FileCode2, Globe, Smartphone, Blocks, Zap, Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ── Course data with Lucide icons & groups ────────────────────────────────────
type CourseItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  desc: string;
};

type CourseGroup = {
  label: string;
  items: CourseItem[];
};

const courseGroups: CourseGroup[] = [
  {
    label: "AI & Engineering",
    items: [
      { title: "Artificial Intelligence",  href: "/courses/artificial-intelligence",  icon: BrainCircuit,  desc: "ML, LLMs, and AI deployment for production." },
      { title: "AI Agent Development",     href: "/courses/ai-agent-development",     icon: Bot,           desc: "Autonomous agents with LangChain & multi-agent frameworks." },
      { title: "Prompt Engineering",       href: "/courses/prompt-engineering",       icon: MessageSquare, desc: "Master LLM prompting, RAG systems, and fine-tuning." },
      { title: "Data Science & Analytics", href: "/courses/data-science",             icon: BarChart3,     desc: "Pandas, ML pipelines, and data-driven insights." },
    ],
  },
  {
    label: "Security",
    items: [
      { title: "Cyber Security",      href: "/courses/cybersecurity",       icon: Shield,      desc: "Threats, defenses, NIST framework, and incident response." },
      { title: "Ethical Hacking",     href: "/courses/ethical-hacking",     icon: Crosshair,   desc: "Hands-on offensive security from recon to post-exploitation." },
      { title: "Penetration Testing", href: "/courses/penetration-testing", icon: ScanSearch,  desc: "Professional pentest methodology, CVSS scoring, and reporting." },
      { title: "API Security",        href: "/courses/api-security",        icon: Lock,        desc: "OWASP API Top 10, BOLA, auth attacks, and API hardening." },
      { title: "SOC Analyst",         href: "/courses/soc-analyst",         icon: Eye,         desc: "SIEM, threat detection, MITRE ATT&CK, and incident response." },
      { title: "Digital Forensics",   href: "/courses/digital-forensics",   icon: Microscope,  desc: "Disk, memory, and malware analysis with chain of custody." },
      { title: "Secure Coding",       href: "/courses/secure-coding",       icon: Code2,       desc: "Write secure code — OWASP Top 10 and secure SDLC." },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { title: "Cloud Computing",     href: "/courses/cloud-computing",      icon: Cloud,     desc: "AWS, Azure, and GCP from fundamentals to advanced architecture." },
      { title: "DevOps & DevSecOps",  href: "/courses/devsecops",            icon: GitMerge,  desc: "CI/CD pipelines, IaC, and security integrated into delivery." },
      { title: "Docker & Kubernetes", href: "/courses/docker-kubernetes",    icon: Container, desc: "Containerization and orchestration for production deployments." },
      { title: "AWS / Azure / GCP",   href: "/courses/aws-azure-gcp",        icon: Server,    desc: "Hands-on multi-cloud with certification-aligned labs." },
      { title: "Linux Administration",href: "/courses/linux-administration",  icon: Terminal,  desc: "Shell scripting, hardening, and server management." },
    ],
  },
  {
    label: "Development",
    items: [
      { title: "Python Programming",      href: "/courses/python-programming",     icon: FileCode2,   desc: "From basics to security tooling and automation." },
      { title: "Web Development",         href: "/courses/web-development",        icon: Globe,       desc: "Full-stack React, Next.js, and Node.js with secure coding." },
      { title: "Mobile App Development",  href: "/courses/mobile-app-development", icon: Smartphone,  desc: "React Native and Flutter with mobile security." },
      { title: "Blockchain & Web3",       href: "/courses/blockchain-web3",        icon: Blocks,      desc: "Solidity, smart contracts, DeFi, and Web3 security." },
      { title: "Automation",              href: "/courses/automation",             icon: Zap,         desc: "n8n, Make, and Zapier for business and security workflows." },
      { title: "Networking (CCNA)",       href: "/courses/networking-ccna",        icon: Network,     desc: "TCP/IP, routing, switching, and CCNA certification prep." },
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
      role="menu"
      aria-label="Courses menu"
      style={{
        position: "absolute",
        left: "50%",
        top: "calc(100% + 8px)",
        transform: open
          ? "translateX(-50%) translateY(0) scale(1)"
          : "translateX(-50%) translateY(-6px) scale(0.98)",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        zIndex: 50,
        width: "440px",
        maxWidth: "calc(100vw - 32px)",
        borderRadius: "18px",
        border: "1px solid rgba(230,230,230,0.8)",
        background: "rgba(255,255,255,0.97)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.08)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transition: "opacity 180ms cubic-bezier(.2,.8,.2,1), transform 180ms cubic-bezier(.2,.8,.2,1), visibility 180ms",
        overflow: "hidden",
      }}
    >
      {/* Top accent */}
      <div style={{
        height: "2px",
        background: "linear-gradient(90deg, #ef4444 0%, #f87171 50%, transparent 100%)",
        flexShrink: 0,
      }} />

      {/* Scrollable content */}
      <div style={{
        maxHeight: "75vh",
        overflowY: "auto",
        padding: "10px 8px",
        scrollbarWidth: "thin",
        scrollbarColor: "#e2e8f0 transparent",
      }}>
        {courseGroups.map((group, gi) => (
          <div key={group.label} style={{ marginBottom: gi < courseGroups.length - 1 ? "4px" : 0 }}>
            {/* Group label */}
            <div style={{
              padding: "6px 12px 4px",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9ca3af",
            }}>
              {group.label}
            </div>

            {/* Items */}
            {group.items.map((course) => {
              const isActive = pathname === course.href || pathname.startsWith(course.href + "/");
              const Icon = course.icon;
              return (
                <Link
                  key={course.href}
                  href={course.href}
                  role="menuitem"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "9px 12px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    border: isActive ? "1px solid #fecaca" : "1px solid transparent",
                    background: isActive ? "#fff5f5" : "transparent",
                    transition: "background 180ms ease, border-color 180ms ease, transform 180ms ease",
                    position: "relative",
                    minHeight: "52px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "#fff5f5";
                      el.style.borderColor = "#fecaca";
                      el.style.transform = "translateX(3px)";
                      const iconEl = el.querySelector<HTMLElement>("[data-icon-wrap]");
                      if (iconEl) iconEl.style.transform = "scale(1.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "transparent";
                      el.style.borderColor = "transparent";
                      el.style.transform = "translateX(0)";
                      const iconEl = el.querySelector<HTMLElement>("[data-icon-wrap]");
                      if (iconEl) iconEl.style.transform = "scale(1)";
                    }
                  }}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <span style={{
                      position: "absolute",
                      left: 0,
                      top: "8px",
                      bottom: "8px",
                      width: "3px",
                      borderRadius: "0 3px 3px 0",
                      background: "#ef4444",
                    }} />
                  )}

                  {/* Icon circle */}
                  <span
                    data-icon-wrap
                    style={{
                      flexShrink: 0,
                      width: "34px",
                      height: "34px",
                      borderRadius: "9px",
                      background: isActive ? "#fee2e2" : "#fef2f2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 180ms ease, background 180ms ease",
                    }}
                  >
                    <Icon
                      style={{
                        width: "15px",
                        height: "15px",
                        color: isActive ? "#dc2626" : "#ef4444",
                        flexShrink: 0,
                      }}
                    />
                  </span>

                  {/* Text */}
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{
                      fontSize: "13.5px",
                      fontWeight: 600,
                      color: isActive ? "#b91c1c" : "#111827",
                      lineHeight: 1.3,
                      marginBottom: "2px",
                    }}>
                      {course.title}
                    </div>
                    <div style={{
                      fontSize: "11.5px",
                      color: "#6b7280",
                      lineHeight: 1.45,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>
                      {course.desc}
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Group separator */}
            {gi < courseGroups.length - 1 && (
              <div style={{
                height: "1px",
                background: "rgba(0,0,0,0.05)",
                margin: "6px 12px",
              }} />
            )}
          </div>
        ))}

        {/* ── Cert highlight banner ─────────────────────────────────────── */}
        <div style={{
          margin: "8px 4px 4px",
          padding: "11px 14px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #fff1f2 0%, #fef9f9 100%)",
          border: "1px solid #fecaca",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <span style={{
            flexShrink: 0,
            width: "34px",
            height: "34px",
            borderRadius: "9px",
            background: "#fee2e2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <GraduationCap style={{ width: "16px", height: "16px", color: "#dc2626" }} />
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#b91c1c", marginBottom: "2px" }}>
              Certification Exam Prep Included
            </div>
            <div style={{ fontSize: "11px", color: "#6b7280", lineHeight: 1.4 }}>
              OSCP · CEH · AWS SAA · CCNA · AZ-900 · CKA and more
            </div>
          </div>
        </div>

        {/* ── View all footer ───────────────────────────────────────────── */}
        <Link
          href="/courses"
          role="menuitem"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "6px 4px 2px",
            padding: "11px 14px",
            borderRadius: "12px",
            background: "#111827",
            textDecoration: "none",
            transition: "background 180ms ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1f2937"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#111827"; }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <GraduationCap style={{ width: "15px", height: "15px", color: "#f87171", flexShrink: 0 }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#f9fafb" }}>
              Browse all 22 courses
            </span>
          </div>
          <ArrowRight style={{ width: "14px", height: "14px", color: "#9ca3af", flexShrink: 0 }} />
        </Link>
      </div>
    </div>
  );
}
