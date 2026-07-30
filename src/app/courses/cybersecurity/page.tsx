import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Download,
  Shield,
  Crosshair,
  Eye,
  Briefcase,
  Clock,
  Calendar,
  Users,
  Globe,
  ChevronRight,
  Terminal,
  BookOpen,
} from "lucide-react";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cyber Security Course | 3 Months | UZYNTRA Security",
  description:
    "Practical 3-month Cyber Security course covering foundations, offensive security, incident response, and career preparation. PKR 45,000 total · $199 international.",
  alternates: { canonical: `${siteConfig.url}/courses/cybersecurity` },
};

// ── Data ────────────────────────────────────────────────────────────────────

const pricing = [
  { label: "Duration",       value: "3 Months" },
  { label: "Per Month",      value: "PKR 15,000" },
  { label: "Total",          value: "PKR 45,000" },
  { label: "International",  value: "$199 USD" },
];

const schedule = [
  { icon: Calendar, label: "Duration",         value: "3 Months · 12 Weeks" },
  { icon: Clock,    label: "Classes",           value: "5 Days / Week" },
  { icon: Clock,    label: "Class Time",        value: "2 Hours / Day" },
  { icon: BookOpen, label: "Self Practice",     value: "1–2 Hours / Day" },
  { icon: Users,    label: "Instructor Hours",  value: "~120 Hours" },
  { icon: Globe,    label: "Total Learning",    value: "~180–220 Hours" },
];

const months = [
  {
    num: "01",
    title: "Month 1",
    subtitle: "Cyber Security Foundations & Defensive Security",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    modules: [
      {
        num: "01", title: "Cyber Security Fundamentals",
        topics: ["CIA Triad","Types of Hackers","Cyber Kill Chain","Common Threats","Malware Analysis Basics","Security Principles"],
        tools: [],
      },
      {
        num: "02", title: "Networking for Security",
        topics: ["TCP/IP","OSI Model","DNS","DHCP","HTTP/HTTPS","VPN","Firewalls","Packet Analysis"],
        tools: ["Wireshark","TCPDump","Nmap"],
      },
      {
        num: "03", title: "Linux & Windows Security",
        topics: ["Linux Commands","Windows Security","User Management","File Permissions","Services","Logs","Process Monitoring","PowerShell Basics"],
        tools: [],
      },
      {
        num: "04", title: "Security Hardening",
        topics: ["Password Policies","MFA","Endpoint Security","Disk Encryption","Patch Management","Backup Strategy"],
        tools: [],
      },
    ],
  },
  {
    num: "02",
    title: "Month 2",
    subtitle: "Offensive Security",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    modules: [
      {
        num: "05", title: "Reconnaissance",
        topics: ["Google Dorking","OSINT","WHOIS","DNS Enumeration","Subdomain Enumeration","Technology Fingerprinting"],
        tools: ["theHarvester","Amass","Subfinder","Shodan","Censys"],
      },
      {
        num: "06", title: "Vulnerability Assessment",
        topics: ["Vulnerability Scanning","CVE","CVSS","Risk Assessment","Misconfiguration Detection"],
        tools: ["Nessus Essentials","OpenVAS","Nmap NSE"],
      },
      {
        num: "07", title: "Web Security Basics",
        topics: ["SQL Injection","XSS","CSRF","File Upload","Authentication Issues","Session Management"],
        tools: ["Burp Suite Community","OWASP ZAP"],
      },
      {
        num: "08", title: "Password Security",
        topics: ["Password Attacks","Hashes","Dictionary Attack","Brute Force","Password Policies"],
        tools: ["Hashcat","John the Ripper"],
      },
    ],
  },
  {
    num: "03",
    title: "Month 3",
    subtitle: "Detection, Response & Career",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    modules: [
      {
        num: "09", title: "Incident Response",
        topics: ["Detection","Containment","Eradication","Recovery","Lessons Learned"],
        tools: [],
      },
      {
        num: "10", title: "Digital Forensics Basics",
        topics: ["Evidence Collection","Disk Imaging","Log Analysis","Memory Basics"],
        tools: ["Autopsy","FTK Imager"],
      },
      {
        num: "11", title: "Security Monitoring",
        topics: ["Log Monitoring","Threat Hunting","SIEM Basics","Alerts","IOC Detection"],
        tools: ["Wazuh","Splunk (Basic)","ELK Stack Overview"],
      },
      {
        num: "12", title: "Career Preparation",
        topics: ["Report Writing","Documentation","Resume Building","LinkedIn Profile","Bug Bounty Introduction","Freelancing Roadmap","Interview Preparation"],
        tools: [],
      },
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
  "Prepare for entry-level roles: SOC Analyst, Junior Security Analyst, Vulnerability Assessment Analyst, IT Security Support",
];

const ENROLL_URL = "https://forms.gle/3kRrPLjzp37dK8eh8";

// ── Page ────────────────────────────────────────────────────────────────────

export default function CybersecurityCourse() {
  return (
    <main id="main-content">

      {/* Hero */}
      <CourseHeroImage
        src="/images/courses/cybersecurity.webp"
        alt="Cyber Security Course"
        eyebrow="Course — Cyber Security"
        title="Cyber Security: From Foundations to Career-Ready"
        description="A practical 3-month programme covering defensive security, offensive techniques, incident response, and career preparation — less theory, more hands-on labs."
      />

      {/* ── Pricing + Schedule ── */}
      <section className="section-tight border-b border-slate-100">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">

            {/* Pricing cards */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {pricing.map((p) => (
                <div key={p.label} className="surface-card flex flex-col items-center p-4 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">{p.label}</p>
                  <p className="mt-1.5 text-lg font-extrabold text-slate-950">{p.value}</p>
                </div>
              ))}
            </div>

            {/* Schedule grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {schedule.map((s) => (
                <div key={s.label} className="surface-card flex flex-col gap-1.5 p-4">
                  <s.icon className="h-4 w-4 text-red-600" aria-hidden="true" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">{s.label}</p>
                  <p className="text-xs font-bold text-slate-800">{s.value}</p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-7 text-sm sm:w-auto"
              >
                <Shield className="h-4 w-4 shrink-0" aria-hidden="true" />
                Enroll Now — Register via Google Form
              </a>
              <a
                href="/api/courses/cybersecurity-syllabus"
                download="UZYNTRA-CyberSecurity-Syllabus.pdf"
                className="btn-ghost-secondary inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm sm:w-auto"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                Download Syllabus PDF
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section id="curriculum" className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Curriculum</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">12 Modules · 3 Months</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Each month builds on the last — from understanding threats, to exploiting them in labs, to detecting and responding to real incidents.
            </p>
          </div>

          <div className="mt-12 space-y-14">
            {months.map((month) => (
              <div key={month.num}>
                {/* Month header */}
                <div className={`mb-6 inline-flex items-center gap-3 rounded-xl border px-5 py-3 ${month.bg} ${month.border}`}>
                  <span className={`text-2xl font-black ${month.color}`}>{month.num}</span>
                  <div>
                    <p className={`text-sm font-bold ${month.color}`}>{month.title}</p>
                    <p className="text-xs text-slate-600">{month.subtitle}</p>
                  </div>
                </div>

                {/* Module cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {month.modules.map((mod) => (
                    <div key={mod.num} className="surface-card overflow-hidden">
                      {/* Module header */}
                      <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-5 py-3">
                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-600 text-[10px] font-black text-white">
                          {mod.num}
                        </span>
                        <h3 className="text-sm font-bold text-slate-950">{mod.title}</h3>
                      </div>
                      {/* Topics */}
                      <div className="p-5">
                        <div className="flex flex-wrap gap-1.5">
                          {mod.topics.map((t) => (
                            <span key={t} className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                              {t}
                            </span>
                          ))}
                        </div>
                        {/* Tools */}
                        {mod.tools.length > 0 && (
                          <div className="mt-4">
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-red-700">Tools</p>
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
      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Hands-On</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Practical Labs</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Students spend the majority of class time inside real lab environments — not just watching slides.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {labs.map((lab) => (
                <div key={lab} className="surface-card flex items-start gap-3 p-4">
                  <Terminal className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                  <span className="text-sm text-slate-700">{lab}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Toolset</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Tools You Will Use</h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {allTools.map((t) => (
                <span key={t} className="surface-card inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold text-slate-700">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Outcomes</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">What You Will Be Able To Do</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {outcomes.map((o) => (
                <div key={o} className="surface-card flex items-start gap-3 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                  <span className="text-sm text-slate-700">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Is 2 hrs/day enough note ── */}
      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl">
            <div className="surface-card border-l-4 border-l-red-500 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-red-700">Note</p>
              <h3 className="mt-2 text-base font-bold text-slate-950">Is 2 hours/day enough?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                For beginners, <strong className="text-slate-800">2 instructor-led hours per day</strong> is a balanced choice for a 3-month programme. It provides enough time for explanation and guided labs without overwhelming students. The limiting factor is not class time but practice — students who add <strong className="text-slate-800">1–2 hours of self-study and lab work daily</strong> will progress much faster than those who only attend the classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related courses ── */}
      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Related</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">Continue Your Learning Path</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { href: "/courses/ethical-hacking",    title: "Ethical Hacking",    desc: "Hands-on offensive security and penetration testing." },
                { href: "/courses/soc-analyst",        title: "SOC Analyst",        desc: "SIEM, threat detection, and incident response." },
                { href: "/courses/penetration-testing",title: "Penetration Testing", desc: "Advanced red team techniques and methodology." },
                { href: "/courses/digital-forensics",  title: "Digital Forensics",  desc: "Evidence collection, disk imaging, and log analysis." },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">{c.title}</p>
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
      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Start your cybersecurity career today</h2>
            <p className="mt-4 text-base leading-7 text-white/85">
              PKR 45,000 total · $199 for international students · 3 months · 5 days/week
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm"
              >
                <Shield className="h-4 w-4 shrink-0" aria-hidden="true" />
                Enroll Now
              </a>
              <a
                href="/api/courses/cybersecurity-syllabus"
                download="UZYNTRA-CyberSecurity-Syllabus.pdf"
                className="btn-stroke inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                Download Syllabus
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
