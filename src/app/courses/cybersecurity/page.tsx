import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2, ArrowRight, Shield, Clock,
  Calendar, Users, Globe, Terminal, BookOpen,
  Crosshair, Eye, Wrench,
} from "lucide-react";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { DownloadSyllabus } from "@/components/sections/cybersecurity-syllabus-download";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cyber Security Course | 3 Months | UZYNTRA Security",
  description:
    "Practical 3-month Cyber Security course. Foundations, offensive security, incident response, and career prep. PKR 45,000 total · $199 international.",
  alternates: { canonical: `${siteConfig.url}/courses/cybersecurity` },
};

const ENROLL_URL = "https://forms.gle/3kRrPLjzp37dK8eh8";

// ── Data ─────────────────────────────────────────────────────────────────────

const months = [
  {
    num: "01",
    label: "Month 1",
    title: "Foundations & Defensive Security",
    description: "Build the bedrock — understand how attacks work, how networks operate, and how to harden systems before you ever touch an offensive tool.",
    icon: Shield,
    accentClass: "text-red-600",
    bgClass: "bg-red-600",
    lightBg: "bg-red-50",
    border: "border-red-200",
    connectorColor: "bg-red-500",
    badgeBg: "bg-red-600",
    topicBg: "bg-red-50 text-red-700 border border-red-200",
    modules: [
      { num: "01", title: "Cyber Security Fundamentals", topics: ["CIA Triad","Types of Hackers","Cyber Kill Chain","Common Threats","Malware Analysis Basics","Security Principles"], tools: [] },
      { num: "02", title: "Networking for Security", topics: ["TCP/IP","OSI Model","DNS","DHCP","HTTP/HTTPS","VPN","Firewalls","Packet Analysis"], tools: ["Wireshark","TCPDump","Nmap"] },
      { num: "03", title: "Linux & Windows Security", topics: ["Linux Commands","Windows Security","User Management","File Permissions","Services","Logs","Process Monitoring","PowerShell Basics"], tools: [] },
      { num: "04", title: "Security Hardening", topics: ["Password Policies","MFA","Endpoint Security","Disk Encryption","Patch Management","Backup Strategy"], tools: [] },
    ],
  },
  {
    num: "02",
    label: "Month 2",
    title: "Offensive Security",
    description: "Switch to the attacker's perspective. Learn reconnaissance, vulnerability discovery, web exploitation, and password attacks using real tools.",
    icon: Crosshair,
    accentClass: "text-orange-600",
    bgClass: "bg-orange-600",
    lightBg: "bg-orange-50",
    border: "border-orange-200",
    connectorColor: "bg-orange-500",
    badgeBg: "bg-orange-600",
    topicBg: "bg-orange-50 text-orange-700 border border-orange-200",
    modules: [
      { num: "05", title: "Reconnaissance", topics: ["Google Dorking","OSINT","WHOIS","DNS Enumeration","Subdomain Enumeration","Technology Fingerprinting"], tools: ["theHarvester","Amass","Subfinder","Shodan","Censys"] },
      { num: "06", title: "Vulnerability Assessment", topics: ["Vulnerability Scanning","CVE","CVSS","Risk Assessment","Misconfiguration Detection"], tools: ["Nessus Essentials","OpenVAS","Nmap NSE"] },
      { num: "07", title: "Web Security Basics", topics: ["SQL Injection","XSS","CSRF","File Upload","Authentication Issues","Session Management"], tools: ["Burp Suite Community","OWASP ZAP"] },
      { num: "08", title: "Password Security", topics: ["Password Attacks","Hashes","Dictionary Attack","Brute Force","Password Policies"], tools: ["Hashcat","John the Ripper"] },
    ],
  },
  {
    num: "03",
    label: "Month 3",
    title: "Detection, Response & Career",
    description: "Close the loop — learn how defenders detect attacks, respond to incidents, and how to position yourself for your first security role.",
    icon: Eye,
    accentClass: "text-emerald-600",
    bgClass: "bg-emerald-600",
    lightBg: "bg-emerald-50",
    border: "border-emerald-200",
    connectorColor: "bg-emerald-500",
    badgeBg: "bg-emerald-600",
    topicBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    modules: [
      { num: "09", title: "Incident Response", topics: ["Detection","Containment","Eradication","Recovery","Lessons Learned"], tools: [] },
      { num: "10", title: "Digital Forensics Basics", topics: ["Evidence Collection","Disk Imaging","Log Analysis","Memory Basics"], tools: ["Autopsy","FTK Imager"] },
      { num: "11", title: "Security Monitoring", topics: ["Log Monitoring","Threat Hunting","SIEM Basics","Alerts","IOC Detection"], tools: ["Wazuh","Splunk (Basic)","ELK Stack Overview"] },
      { num: "12", title: "Career Preparation", topics: ["Report Writing","Documentation","Resume Building","LinkedIn Profile","Bug Bounty Introduction","Freelancing Roadmap","Interview Preparation"], tools: [] },
    ],
  },
];

const labs = [
  "Scanning a network with Nmap",
  "Detecting vulnerabilities with Nessus",
  "Capturing network packets with Wireshark",
  "Securing Windows & Linux systems",
  "Creating and testing firewall rules",
  "Basic malware investigation",
  "Investigating security logs",
  "Performing web security testing",
  "Writing a professional security report",
  "Responding to a simulated cyber attack",
];

const allTools = [
  "Kali Linux","Wireshark","Nmap","Burp Suite","OWASP ZAP",
  "Nessus Essentials","OpenVAS","theHarvester","Amass","Subfinder",
  "Shodan","Censys","Hashcat","John the Ripper","Autopsy",
  "FTK Imager","Wazuh","Splunk","VirtualBox / VMware","Git & GitHub",
];

const outcomes = [
  "Understand modern cyber threats and security principles",
  "Secure Windows and Linux systems against common attacks",
  "Analyse network traffic and identify suspicious activity",
  "Discover and assess common vulnerabilities",
  "Perform basic web application security testing",
  "Use professional cybersecurity tools with confidence",
  "Respond to security incidents using industry-standard processes",
  "Write clear, actionable technical security reports",
  "Build a home cybersecurity lab for continuous practice",
  "Prepare for entry-level roles: SOC Analyst, Junior Security Analyst, Vulnerability Assessment Analyst",
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CybersecurityCourse() {
  return (
    <main id="main-content">

      {/* ── Hero ── */}
      <CourseHeroImage
        src="/images/courses/cybersecurity.webp"
        alt="Cyber Security Course"
        eyebrow="Course — Cyber Security"
        title="Cyber Security: From Foundations to Career-Ready"
        description="A practical 3-month programme — less theory, more hands-on labs. Defensive security, offensive techniques, incident response, and career preparation."
      />

      {/* ── Pricing + CTA ── */}
      <section className="border-b border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-900">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">

            {/* Top row: pricing + CTAs */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* Pricing */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Duration",      value: "3 Months",   highlight: false },
                  { label: "Per Month",     value: "PKR 15,000", highlight: true  },
                  { label: "Total",         value: "PKR 45,000", highlight: true  },
                  { label: "International", value: "$199 USD",   highlight: true  },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="surface-card flex min-w-[100px] flex-col items-center px-5 py-3.5 text-center"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {p.label}
                    </span>
                    <span className={`mt-1 text-[15px] font-extrabold ${p.highlight ? "text-red-600" : "text-slate-950"}`}>
                      {p.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={ENROLL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid inline-flex h-11 items-center justify-center gap-2 rounded-xl px-7 text-sm"
                >
                  <Shield className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Enroll Now
                </a>
                <DownloadSyllabus />
              </div>
            </div>

            {/* Schedule strip */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {[
                { icon: Calendar, label: "Duration",       value: "3 Months" },
                { icon: Clock,    label: "Classes",         value: "5 Days/Week" },
                { icon: Clock,    label: "Class Time",      value: "2 Hrs/Day" },
                { icon: BookOpen, label: "Self Practice",   value: "1–2 Hrs/Day" },
                { icon: Users,    label: "Instructor Hrs",  value: "~120 Hours" },
                { icon: Globe,    label: "Total Learning",  value: "~180–220 Hrs" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="surface-card flex items-center gap-2.5 px-3 py-2.5"
                >
                  <s.icon className="h-3.5 w-3.5 shrink-0 text-red-600" aria-hidden="true" />
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">{s.label}</p>
                    <p className="text-[11px] font-bold text-slate-800">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Curriculum — Timeline ── */}
      <section id="curriculum" className="section-shell bg-slate-50/60">
        <div className="container-shell">

          {/* Section heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Curriculum</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              12 Modules across 3 Months
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Each month builds on the last — from understanding threats, to exploiting them in labs, to detecting and responding to real incidents.
            </p>
          </div>

          {/* Timeline */}
          <div className="mx-auto mt-16 max-w-5xl">
            {months.map((month, mIdx) => (
              <div key={month.num} className="relative flex gap-6 sm:gap-10">

                {/* ── Left column: number + connector ── */}
                <div className="flex flex-col items-center">
                  {/* Month circle */}
                  <div className={`relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl text-white shadow-lg ${month.bgClass}`}>
                    <month.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wider opacity-80">
                      {month.label}
                    </span>
                  </div>
                  {/* Connector line — hidden on last item */}
                  {mIdx < months.length - 1 && (
                    <div className={`mt-2 w-0.5 flex-1 ${month.connectorColor} opacity-30`} />
                  )}
                </div>

                {/* ── Right column: content ── */}
                <div className={`pb-16 flex-1 ${mIdx === months.length - 1 ? "pb-0" : ""}`}>

                  {/* Month header */}
                  <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <h3 className={`text-xl font-extrabold ${month.accentClass}`}>
                      {month.title}
                    </h3>
                    <span className="hidden h-px flex-1 self-center bg-slate-200 sm:block" />
                    <span className="text-xs font-semibold text-slate-400">4 Modules</span>
                  </div>
                  <p className="mb-6 max-w-xl text-sm leading-7 text-slate-500">
                    {month.description}
                  </p>

                  {/* Module cards — 2 col */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {month.modules.map((mod) => (
                      <div
                        key={mod.num}
                        className="surface-card overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        {/* Card header */}
                        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
                          <span className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-black text-white ${month.badgeBg}`}>
                            {mod.num}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900">{mod.title}</h4>
                        </div>

                        {/* Topics */}
                        <div className="p-4">
                          <div className="flex flex-wrap gap-1.5">
                            {mod.topics.map((t) => (
                              <span
                                key={t}
                                className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Tools */}
                          {mod.tools.length > 0 && (
                            <div className="mt-3 border-t border-slate-100 pt-3">
                              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-red-600">
                                Tools
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {mod.tools.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded-md border border-red-200 bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-700"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Labs ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:items-start">

              {/* Left — heading + note */}
              <div className="lg:sticky lg:top-24">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Hands-On</p>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                  Practical Labs
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Students spend the majority of class time inside real lab environments — not just watching slides.
                </p>
                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700">
                    Pro Tip
                  </p>
                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Students who add{" "}
                    <strong>1–2 hours of self-study daily</strong> progress
                    significantly faster than those who only attend classes.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <Terminal className="h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">10 Lab Exercises</p>
                    <p className="text-xs text-slate-500">Real tools, real environments</p>
                  </div>
                </div>
              </div>

              {/* Right — lab list */}
              <div className="grid gap-2.5 sm:grid-cols-2">
                {labs.map((lab, i) => (
                  <div
                    key={lab}
                    className="surface-card flex items-start gap-3 p-4 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-red-600 text-[10px] font-black text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-slate-700">{lab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section-shell bg-slate-950">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">Toolset</p>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                20 Industry-Standard Tools
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                The same tools used by professional security teams worldwide.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {allTools.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-all duration-150 hover:border-red-500/60 hover:bg-slate-700 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Outcomes</p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                What You Will Be Able To Do
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                After completing the course, you will have the skills and confidence to step into your first security role.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((o, i) => (
                <div
                  key={o}
                  className="surface-card flex items-start gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[10px] font-black text-red-600 ring-1 ring-red-200">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-6 text-slate-700">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Is 2 hrs enough ── */}
      <section className="section-tight bg-slate-50/60">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl">
            <div className="surface-card overflow-hidden">
              <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">
                  Frequently Asked
                </p>
                <h3 className="mt-1 text-base font-extrabold text-slate-950">
                  Is 2 hours/day enough?
                </h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm leading-7 text-slate-600">
                  For beginners,{" "}
                  <strong className="font-semibold text-slate-800">
                    2 instructor-led hours per day
                  </strong>{" "}
                  is a balanced choice for a 3-month programme. It provides enough
                  time for explanation and guided labs without overwhelming students.
                  The limiting factor is not class time but practice — students who
                  add{" "}
                  <strong className="font-semibold text-slate-800">
                    1–2 hours of self-study and lab work daily
                  </strong>{" "}
                  will progress much faster than those who only attend the classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                  What&apos;s Next
                </p>
                <h2 className="mt-1 text-xl font-extrabold text-slate-950">
                  Continue Your Learning Path
                </h2>
              </div>
              <Link
                href="/courses"
                className="hidden items-center gap-1.5 text-sm font-semibold text-red-600 transition-all duration-200 hover:gap-2.5 sm:flex"
              >
                All Courses
                <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: "/courses/ethical-hacking",     title: "Ethical Hacking",     desc: "Offensive security techniques." },
                { href: "/courses/soc-analyst",         title: "SOC Analyst",          desc: "SIEM, detection, response." },
                { href: "/courses/penetration-testing", title: "Penetration Testing",  desc: "Advanced red team methods." },
                { href: "/courses/digital-forensics",   title: "Digital Forensics",    desc: "Evidence & log analysis." },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="surface-card group flex flex-col gap-2 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-sm"
                >
                  <p className="text-sm font-bold text-slate-950 group-hover:text-red-700">
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500">{c.desc}</p>
                  <ArrowRight className="mt-auto h-3.5 w-3.5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_22%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:32px_32px]"
        />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              <Shield className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Start Your Cybersecurity Career
            </div>
            <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Ready to enroll?
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              PKR 45,000 total &nbsp;·&nbsp; $199 for international students
              &nbsp;·&nbsp; 3 months &nbsp;·&nbsp; 5 days/week
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-8 text-sm font-semibold"
              >
                <Shield className="h-4 w-4 shrink-0" aria-hidden="true" />
                Enroll Now
              </a>
              <DownloadSyllabus />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
