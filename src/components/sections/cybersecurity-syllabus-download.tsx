"use client";

const ENROLL_URL = "https://forms.gle/3kRrPLjzp37dK8eh8";

const months = [
  {
    title: "Month 1 — Cyber Security Foundations & Defensive Security",
    modules: [
      { num: "01", title: "Cyber Security Fundamentals", topics: ["CIA Triad","Types of Hackers","Cyber Kill Chain","Common Threats","Malware Analysis Basics","Security Principles"], tools: [] },
      { num: "02", title: "Networking for Security", topics: ["TCP/IP","OSI Model","DNS","DHCP","HTTP/HTTPS","VPN","Firewalls","Packet Analysis"], tools: ["Wireshark","TCPDump","Nmap"] },
      { num: "03", title: "Linux & Windows Security", topics: ["Linux Commands","Windows Security","User Management","File Permissions","Services","Logs","Process Monitoring","PowerShell Basics"], tools: [] },
      { num: "04", title: "Security Hardening", topics: ["Password Policies","MFA","Endpoint Security","Disk Encryption","Patch Management","Backup Strategy"], tools: [] },
    ],
  },
  {
    title: "Month 2 — Offensive Security",
    modules: [
      { num: "05", title: "Reconnaissance", topics: ["Google Dorking","OSINT","WHOIS","DNS Enumeration","Subdomain Enumeration","Technology Fingerprinting"], tools: ["theHarvester","Amass","Subfinder","Shodan","Censys"] },
      { num: "06", title: "Vulnerability Assessment", topics: ["Vulnerability Scanning","CVE","CVSS","Risk Assessment","Misconfiguration Detection"], tools: ["Nessus Essentials","OpenVAS","Nmap NSE"] },
      { num: "07", title: "Web Security Basics", topics: ["SQL Injection","XSS","CSRF","File Upload","Authentication Issues","Session Management"], tools: ["Burp Suite Community","OWASP ZAP"] },
      { num: "08", title: "Password Security", topics: ["Password Attacks","Hashes","Dictionary Attack","Brute Force","Password Policies"], tools: ["Hashcat","John the Ripper"] },
    ],
  },
  {
    title: "Month 3 — Detection, Response & Career",
    modules: [
      { num: "09", title: "Incident Response", topics: ["Detection","Containment","Eradication","Recovery","Lessons Learned"], tools: [] },
      { num: "10", title: "Digital Forensics Basics", topics: ["Evidence Collection","Disk Imaging","Log Analysis","Memory Basics"], tools: ["Autopsy","FTK Imager"] },
      { num: "11", title: "Security Monitoring", topics: ["Log Monitoring","Threat Hunting","SIEM Basics","Alerts","IOC Detection"], tools: ["Wazuh","Splunk (Basic)","ELK Stack Overview"] },
      { num: "12", title: "Career Preparation", topics: ["Report Writing","Documentation","Resume Building","LinkedIn Profile","Bug Bounty Introduction","Freelancing Roadmap","Interview Preparation"], tools: [] },
    ],
  },
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

const allTools = [
  "Kali Linux","Wireshark","Nmap","Burp Suite","OWASP ZAP",
  "Nessus Essentials","OpenVAS","theHarvester","Amass","Subfinder",
  "Shodan","Censys","Hashcat","John the Ripper","Autopsy",
  "FTK Imager","Wazuh","Splunk","VirtualBox / VMware","Git & GitHub",
];

export function DownloadSyllabus() {
  function handlePrint() {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>UZYNTRA Security — Cyber Security Syllabus</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:Arial,Helvetica,sans-serif;background:#fff;color:#0f172a;font-size:10px;line-height:1.5}
  /* Header */
  .hdr{background:#0f172a;color:#fff;padding:24px 32px 20px}
  .hdr-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
  .logo-text{font-size:18px;font-weight:900;letter-spacing:-0.5px;color:#fff}
  .logo-text span{color:#dc2626}
  .badge{background:#dc2626;color:#fff;font-size:7px;font-weight:700;letter-spacing:1.5px;padding:4px 10px;border-radius:3px;text-transform:uppercase}
  .course-title{font-size:20px;font-weight:900;color:#fff;margin-bottom:4px}
  .course-sub{font-size:9px;color:rgba(255,255,255,0.65)}
  /* Pricing strip */
  .pricing{background:#fef2f2;border-bottom:1px solid #fecaca;padding:10px 32px;display:flex;gap:28px;flex-wrap:wrap}
  .p-item{display:flex;align-items:center;gap:6px}
  .p-dot{width:5px;height:5px;border-radius:50%;background:#dc2626;flex-shrink:0}
  .p-label{font-weight:700;color:#64748b;font-size:8px}
  .p-val{font-weight:700;color:#0f172a;font-size:8px}
  /* Body */
  .body{padding:20px 32px}
  /* Schedule */
  .sched-box{background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:14px;margin-bottom:20px}
  .sec-label{font-size:7px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#dc2626;margin-bottom:10px}
  .sched-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
  .sched-item{background:#fff;border:1px solid #e2e8f0;border-radius:4px;padding:8px}
  .sched-item-label{font-size:7px;color:#94a3b8;margin-bottom:2px}
  .sched-item-val{font-size:8.5px;font-weight:700;color:#0f172a}
  /* Month */
  .month-hdr{background:#0f172a;border-radius:5px;padding:8px 14px;margin:18px 0 10px;display:flex;align-items:center;gap:8px}
  .month-dot{width:7px;height:7px;border-radius:50%;background:#dc2626;flex-shrink:0}
  .month-title{font-size:10px;font-weight:700;color:#fff}
  /* Module */
  .mod-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
  .mod-card{border:1px solid #e2e8f0;border-radius:5px;overflow:hidden;break-inside:avoid}
  .mod-hdr{background:#f8fafc;padding:7px 10px;display:flex;align-items:center;gap:7px;border-bottom:1px solid #e2e8f0}
  .mod-num{background:#dc2626;color:#fff;font-size:7px;font-weight:700;padding:2px 6px;border-radius:3px}
  .mod-title{font-size:8.5px;font-weight:700;color:#0f172a}
  .mod-body{padding:8px 10px}
  .topics{display:flex;flex-wrap:wrap;gap:3px;margin-bottom:6px}
  .topic{background:#f1f5f9;border-radius:3px;padding:2px 6px;font-size:7px;color:#475569}
  .tools-label{font-size:7px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#dc2626;margin-bottom:4px}
  .tools{display:flex;flex-wrap:wrap;gap:3px}
  .tool{background:#fef2f2;border:1px solid #fecaca;border-radius:3px;padding:2px 6px;font-size:7px;font-weight:700;color:#dc2626}
  /* Outcomes */
  .outcomes-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px}
  .outcome-item{background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;padding:7px 8px;display:flex;gap:6px;align-items:flex-start}
  .outcome-dot{width:5px;height:5px;border-radius:50%;background:#dc2626;flex-shrink:0;margin-top:3px}
  .outcome-text{font-size:7.5px;color:#475569;line-height:1.5}
  /* Tools grid */
  .tools-grid{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
  .tool-badge{background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;padding:4px 8px;font-size:7.5px;font-weight:700;color:#0f172a;display:flex;align-items:center;gap:4px}
  .tool-badge-dot{width:4px;height:4px;border-radius:50%;background:#dc2626}
  /* Divider */
  .divider{height:1px;background:#e2e8f0;margin:16px 0}
  /* Enroll box */
  .enroll-box{background:#0f172a;border-radius:6px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;margin-top:16px}
  .enroll-title{font-size:11px;font-weight:700;color:#fff;margin-bottom:3px}
  .enroll-sub{font-size:8px;color:rgba(255,255,255,0.6)}
  .enroll-btn{background:#dc2626;color:#fff;font-size:8px;font-weight:700;padding:8px 14px;border-radius:4px;text-transform:uppercase;letter-spacing:1px}
  /* Footer */
  .footer{position:fixed;bottom:0;left:0;right:0;background:#0f172a;padding:8px 32px;display:flex;justify-content:space-between;align-items:center}
  .footer-text{font-size:7px;color:rgba(255,255,255,0.45)}
  .footer-brand{font-size:7px;font-weight:700;color:#dc2626}
  @media print{
    body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
    .footer{position:fixed;bottom:0}
    .no-break{break-inside:avoid}
  }
</style>
</head>
<body>

<div class="hdr">
  <div class="hdr-row">
    <div class="logo-text">UZYN<span>TRA</span> Security</div>
    <div class="badge">Course Syllabus</div>
  </div>
  <div class="course-title">Cyber Security</div>
  <div class="course-sub">3-Month Practical Training Programme &nbsp;·&nbsp; Foundations to Career-Ready</div>
</div>

<div class="pricing">
  <div class="p-item"><div class="p-dot"></div><span class="p-label">Duration: </span><span class="p-val">3 Months</span></div>
  <div class="p-item"><div class="p-dot"></div><span class="p-label">Fee: </span><span class="p-val">PKR 15,000 / month &nbsp;·&nbsp; PKR 45,000 total</span></div>
  <div class="p-item"><div class="p-dot"></div><span class="p-label">International: </span><span class="p-val">$199 USD</span></div>
  <div class="p-item"><div class="p-dot"></div><span class="p-label">Enroll: </span><span class="p-val">forms.gle/3kRrPLjzp37dK8eh8</span></div>
</div>

<div class="body">

  <div class="sched-box">
    <div class="sec-label">Recommended Schedule</div>
    <div class="sched-grid">
      <div class="sched-item"><div class="sched-item-label">Duration</div><div class="sched-item-val">3 Months (12 Weeks)</div></div>
      <div class="sched-item"><div class="sched-item-label">Classes</div><div class="sched-item-val">5 Days / Week</div></div>
      <div class="sched-item"><div class="sched-item-label">Class Time</div><div class="sched-item-val">2 Hours / Day</div></div>
      <div class="sched-item"><div class="sched-item-label">Self Practice</div><div class="sched-item-val">1–2 Hours / Day</div></div>
      <div class="sched-item"><div class="sched-item-label">Instructor Hours</div><div class="sched-item-val">~120 Hours</div></div>
      <div class="sched-item"><div class="sched-item-label">Total Learning</div><div class="sched-item-val">~180–220 Hours</div></div>
    </div>
  </div>

  ${months.map((month) => `
  <div class="month-hdr">
    <div class="month-dot"></div>
    <div class="month-title">${month.title}</div>
  </div>
  <div class="mod-grid">
    ${month.modules.map((mod) => `
    <div class="mod-card no-break">
      <div class="mod-hdr">
        <span class="mod-num">Module ${mod.num}</span>
        <span class="mod-title">${mod.title}</span>
      </div>
      <div class="mod-body">
        <div class="topics">
          ${mod.topics.map((t) => `<span class="topic">${t}</span>`).join("")}
        </div>
        ${mod.tools.length > 0 ? `
        <div class="tools-label">Tools</div>
        <div class="tools">
          ${mod.tools.map((t) => `<span class="tool">${t}</span>`).join("")}
        </div>` : ""}
      </div>
    </div>`).join("")}
  </div>`).join("")}

  <div class="divider"></div>

  <div class="sec-label">Tools Covered</div>
  <div class="tools-grid">
    ${allTools.map((t) => `<div class="tool-badge"><div class="tool-badge-dot"></div>${t}</div>`).join("")}
  </div>

  <div class="divider"></div>

  <div class="sec-label">Learning Outcomes</div>
  <div class="outcomes-grid">
    ${outcomes.map((o) => `
    <div class="outcome-item no-break">
      <div class="outcome-dot"></div>
      <div class="outcome-text">${o}</div>
    </div>`).join("")}
  </div>

  <div class="enroll-box">
    <div>
      <div class="enroll-title">Ready to enroll?</div>
      <div class="enroll-sub">Register via Google Form &nbsp;·&nbsp; forms.gle/3kRrPLjzp37dK8eh8</div>
    </div>
    <div class="enroll-btn">Enroll Now</div>
  </div>

</div>

<div class="footer">
  <span class="footer-text">UZYNTRA Security — Cyber Security Course Syllabus</span>
  <span class="footer-brand">uzyntra.com</span>
  <span class="footer-text">© 2025 UZYNTRA Security</span>
</div>

<script>window.onload=function(){window.print();window.onafterprint=function(){window.close();}}</script>
</body>
</html>`;

    const win = window.open("", "_blank", "width=900,height=700");
    if (!win) return;
    win.document.write(html);
    win.document.close();
  }

  return (
    <button
      onClick={handlePrint}
      className="btn-ghost-secondary inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm sm:w-auto"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      Download Syllabus PDF
    </button>
  );
}
