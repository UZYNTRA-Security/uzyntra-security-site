import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2, ArrowRight, Shield, Clock,
  Calendar, Users, Globe, Terminal, BookOpen,
  Crosshair, Eye, Briefcase,
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

const months = [
  {
    num: "01", label: "Month 1",
    title: "Foundations & Defensive Security",
    accent: "#dc2626", lightBg: "#fef2f2", border: "#fecaca",
    icon: Shield,
    modules: [
      { num: "01", title: "Cyber Security Fundamentals", topics: ["CIA Triad","Types of Hackers","Cyber Kill Chain","Common Threats","Malware Analysis Basics","Security Principles"], tools: [] },
      { num: "02", title: "Networking for Security", topics: ["TCP/IP","OSI Model","DNS","DHCP","HTTP/HTTPS","VPN","Firewalls","Packet Analysis"], tools: ["Wireshark","TCPDump","Nmap"] },
      { num: "03", title: "Linux & Windows Security", topics: ["Linux Commands","Windows Security","User Management","File Permissions","Services","Logs","Process Monitoring","PowerShell Basics"], tools: [] },
      { num: "04", title: "Security Hardening", topics: ["Password Policies","MFA","Endpoint Security","Disk Encryption","Patch Management","Backup Strategy"], tools: [] },
    ],
  },
  {
    num: "02", label: "Month 2",
    title: "Offensive Security",
    accent: "#ea580c", lightBg: "#fff7ed", border: "#fed7aa",
    icon: Crosshair,
    modules: [
      { num: "05", title: "Reconnaissance", topics: ["Google Dorking","OSINT","WHOIS","DNS Enumeration","Subdomain Enumeration","Technology Fingerprinting"], tools: ["theHarvester","Amass","Subfinder","Shodan","Censys"] },
      { num: "06", title: "Vulnerability Assessment", topics: ["Vulnerability Scanning","CVE","CVSS","Risk Assessment","Misconfiguration Detection"], tools: ["Nessus Essentials","OpenVAS","Nmap NSE"] },
      { num: "07", title: "Web Security Basics", topics: ["SQL Injection","XSS","CSRF","File Upload","Authentication Issues","Session Management"], tools: ["Burp Suite Community","OWASP ZAP"] },
      { num: "08", title: "Password Security", topics: ["Password Attacks","Hashes","Dictionary Attack","Brute Force","Password Policies"], tools: ["Hashcat","John the Ripper"] },
    ],
  },
  {
    num: "03", label: "Month 3",
    title: "Detection, Response & Career",
    accent: "#059669", lightBg: "#f0fdf4", border: "#bbf7d0",
    icon: Eye,
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
  "Creating firewall rules",
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
  "Secure Windows and Linux systems",
  "Analyse network traffic and identify suspicious activity",
  "Discover and assess common vulnerabilities",
  "Perform basic web application security testing",
  "Use professional cybersecurity tools with confidence",
  "Respond to security incidents using industry-standard processes",
  "Write clear technical security reports",
  "Build a home cybersecurity lab for continuous practice",
  "Prepare for entry-level roles: SOC Analyst, Junior Security Analyst, Vulnerability Assessment Analyst",
];

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

      {/* ── Pricing + CTA band ── */}
      <section className="border-b border-slate-200 bg-slate-950 py-10">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Pricing pills */}
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {[
                  { label: "Duration",      value: "3 Months" },
                  { label: "Per Month",     value: "PKR 15,000" },
                  { label: "Total",         value: "PKR 45,000" },
                  { label: "International", value: "$199 USD" },
                ].map((p) => (
                  <div key={p.label} className="flex flex-col items-center rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-center">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">{p.label}</span>
                    <span className="mt-1 text-base font-extrabold text-white">{p.value}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={ENROLL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-7 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-500 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Shield className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Enroll Now
                </a>
                <DownloadSyllabus />
              </div>
            </div>

            {/* Schedule strip */}
            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {[
                { icon: Calendar, label: "Duration",        value: "3 Months" },
                { icon: Clock,    label: "Classes",          value: "5 Days/Week" },
                { icon: Clock,    label: "Class Time",       value: "2 Hrs/Day" },
                { icon: BookOpen, label: "Self Practice",    value: "1–2 Hrs/Day" },
                { icon: Users,    label: "Instructor Hrs",   value: "~120 Hrs" },
                { icon: Globe,    label: "Total Learning",   value: "~180–220 Hrs" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2.5">
                  <s.icon className="h-3.5 w-3.5 shrink-0 text-red-500" aria-hidden="true" />
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">{s.label}</p>
                    <p className="text-[11px] font-bold text-slate-200">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section id="curriculum" className="section-shell bg-slate-50/60">
        <div className="container-shell">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Curriculum</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">12 Modules · 3 Months</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Each month builds on the last — from understanding threats, to exploiting them in labs, to detecting and responding to real incidents.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {months.map((month) => (
              <div key={month.num}>
                {/* Month header */}
                <div
                  className="mb-7 flex items-center gap-4 rounded-2xl border px-6 py-4"
                  style={{ background: month.lightBg, borderColor: month.border }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ background: month.accent }}
                  >
                    <month.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: month.accent }}>{month.label}</p>
                    <h3 className="text-base font-extrabold text-slate-950">{month.title}</h3>
                  </div>
                  <div className="ml-auto hidden sm:flex items-center gap-1.5 rounded-full border px-3 py-1" style={{ borderColor: month.border }}>
                    <span className="text-[11px] font-semibold text-slate-500">4 Modules</span>
                  </div>
                </div>

                {/* Module cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {month.modules.map((mod) => (
                    <div key={mod.num} className="surface-card overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                      <div className="flex items-center gap-3 border-b border-slate-100 bg-white px-5 py-3.5">
                        <span
                          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-black text-white"
                          style={{ background: month.accent }}
                        >
                          {mod.num}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">{mod.title}</h4>
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap gap-1.5">
                          {mod.topics.map((t) => (
                            <span key={t} className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                              {t}
                            </span>
                          ))}
                        </div>
                        {mod.tools.length > 0 && (
                          <div className="mt-4 border-t border-slate-100 pt-4">
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">Tools</p>
                            <div className="flex flex-wrap gap-1.5">
                              {mod.tools.map((t) => (
                                <span key={t} className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700">
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Labs ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Hands-On</p>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">Practical Labs</h2>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Students spend the majority of class time inside real lab environments — not just watching slides.
                </p>
                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-700">Note</p>
                  <p className="mt-2 text-sm leading-6 text-amber-800">
                    Students who add <strong>1–2 hours of self-study daily</strong> will progress significantly faster than those who only attend classes.
                  </p>
                </div>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {labs.map((lab, i) => (
                  <div key={lab} className="surface-card flex items-start gap-3 p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-red-600 text-[9px] font-black text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-slate-700">{lab}</span>
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
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">Toolset</p>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">20 Industry Tools</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                The same tools used by professional security teams worldwide.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {allTools.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors duration-150 hover:border-red-500/50 hover:text-white"
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
              <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">What You Will Be Able To Do</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((o, i) => (
                <div key={o} className="surface-card flex items-start gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
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

      {/* ── Related ── */}
      <section className="section-tight bg-slate-50/60">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">What&apos;s Next</p>
            <h2 className="mt-2 text-xl font-extrabold text-slate-950">Continue Your Learning Path</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { href: "/courses/ethical-hacking",     title: "Ethical Hacking",     desc: "Hands-on offensive security and penetration testing." },
                { href: "/courses/soc-analyst",         title: "SOC Analyst",          desc: "SIEM, threat detection, and incident response." },
                { href: "/courses/penetration-testing", title: "Penetration Testing",  desc: "Advanced red team techniques and methodology." },
                { href: "/courses/digital-forensics",   title: "Digital Forensics",    desc: "Evidence collection, disk imaging, and log analysis." },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-950 group-hover:text-red-700">{c.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{c.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Start your cybersecurity career today</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              PKR 45,000 total &nbsp;·&nbsp; $199 for international students &nbsp;·&nbsp; 3 months &nbsp;·&nbsp; 5 days/week
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
