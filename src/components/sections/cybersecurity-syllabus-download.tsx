"use client";

const ENROLL_URL = "https://forms.gle/3kRrPLjzp37dK8eh8";

const months = [
  {
    label: "Month 01", title: "Foundations & Defensive Security",
    stripe: "#dc2626",
    modules: [
      { num: "01", title: "Cyber Security Fundamentals", topics: ["CIA Triad","Types of Hackers","Cyber Kill Chain","Common Threats","Malware Analysis Basics","Security Principles"], tools: [] },
      { num: "02", title: "Networking for Security", topics: ["TCP/IP","OSI Model","DNS","DHCP","HTTP/HTTPS","VPN","Firewalls","Packet Analysis"], tools: ["Wireshark","TCPDump","Nmap"] },
      { num: "03", title: "Linux & Windows Security", topics: ["Linux Commands","Windows Security","User Management","File Permissions","Services","Logs","Process Monitoring","PowerShell Basics"], tools: [] },
      { num: "04", title: "Security Hardening", topics: ["Password Policies","MFA","Endpoint Security","Disk Encryption","Patch Management","Backup Strategy"], tools: [] },
    ],
  },
  {
    label: "Month 02", title: "Offensive Security",
    stripe: "#ea580c",
    modules: [
      { num: "05", title: "Reconnaissance", topics: ["Google Dorking","OSINT","WHOIS","DNS Enumeration","Subdomain Enumeration","Technology Fingerprinting"], tools: ["theHarvester","Amass","Subfinder","Shodan","Censys"] },
      { num: "06", title: "Vulnerability Assessment", topics: ["Vulnerability Scanning","CVE","CVSS","Risk Assessment","Misconfiguration Detection"], tools: ["Nessus Essentials","OpenVAS","Nmap NSE"] },
      { num: "07", title: "Web Security Basics", topics: ["SQL Injection","XSS","CSRF","File Upload","Authentication Issues","Session Management"], tools: ["Burp Suite Community","OWASP ZAP"] },
      { num: "08", title: "Password Security", topics: ["Password Attacks","Hashes","Dictionary Attack","Brute Force","Password Policies"], tools: ["Hashcat","John the Ripper"] },
    ],
  },
  {
    label: "Month 03", title: "Detection, Response & Career",
    stripe: "#059669",
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
<title>UZYNTRA Security — Cyber Security Course Syllabus</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Arial',Helvetica,sans-serif;background:#fff;color:#0f172a;font-size:9.5px;line-height:1.55;-webkit-print-color-adjust:exact;print-color-adjust:exact}

/* ── COVER BAND (Magazine Style — Option 5) ── */
.cover{background:#dc2626;padding:32px 36px 28px;position:relative;overflow:hidden}
.cover::before{content:'';position:absolute;top:-40px;right:-40px;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,0.06)}
.cover::after{content:'';position:absolute;bottom:-30px;left:60px;width:140px;height:140px;border-radius:50%;background:rgba(0,0,0,0.08)}
.cover-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;position:relative;z-index:1}
.brand{font-size:15px;font-weight:900;color:#fff;letter-spacing:-0.3px}
.brand span{opacity:0.75}
.cover-badge{background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.35);color:#fff;font-size:7px;font-weight:700;letter-spacing:1.8px;padding:4px 10px;border-radius:2px;text-transform:uppercase}
.cover-eyebrow{font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:8px;position:relative;z-index:1}
.cover-title{font-size:26px;font-weight:900;color:#fff;line-height:1.05;letter-spacing:-0.5px;margin-bottom:6px;position:relative;z-index:1}
.cover-sub{font-size:10px;color:rgba(255,255,255,0.75);position:relative;z-index:1}

/* ── PRICING STRIP (Corporate — Option 1) ── */
.pricing-strip{background:#0f172a;padding:10px 36px;display:flex;gap:0;border-bottom:3px solid #dc2626}
.p-item{flex:1;padding:0 16px 0 0;border-right:1px solid rgba(255,255,255,0.1)}
.p-item:last-child{border-right:none}
.p-label{font-size:7px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:3px}
.p-val{font-size:9.5px;font-weight:700;color:#fff}
.p-val.red{color:#f87171}

/* ── BODY ── */
.body{padding:20px 36px 60px}

/* ── SCHEDULE BOX ── */
.sched-box{background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:14px 16px;margin-bottom:22px}
.sec-eyebrow{font-size:7px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:#dc2626;margin-bottom:10px;display:flex;align-items:center;gap:6px}
.sec-eyebrow::after{content:'';flex:1;height:1px;background:#e2e8f0}
.sched-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.sched-item{background:#fff;border:1px solid #e2e8f0;border-radius:4px;padding:8px 10px}
.sched-item-label{font-size:7px;color:#94a3b8;margin-bottom:2px;font-weight:600;letter-spacing:0.5px}
.sched-item-val{font-size:9px;font-weight:700;color:#0f172a}

/* ── MONTH HEADER ── */
.month-section{margin-bottom:18px;break-inside:avoid}
.month-hdr{display:flex;align-items:stretch;margin-bottom:10px;border-radius:5px;overflow:hidden}
.month-num-block{width:52px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px 6px;flex-shrink:0}
.month-num{font-size:20px;font-weight:900;color:#fff;line-height:1}
.month-num-label{font-size:6px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-top:2px}
.month-title-block{background:#0f172a;flex:1;padding:10px 14px;display:flex;flex-direction:column;justify-content:center}
.month-title{font-size:10.5px;font-weight:700;color:#fff;margin-bottom:2px}
.month-meta{font-size:7.5px;color:rgba(255,255,255,0.5)}

/* ── MODULE CARDS (Option 4 — Bordered with colour stripe) ── */
.mod-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.mod-card{border:1px solid #e2e8f0;border-radius:5px;overflow:hidden;break-inside:avoid;display:flex}
.mod-stripe{width:4px;flex-shrink:0}
.mod-inner{flex:1;min-width:0}
.mod-hdr{background:#f8fafc;padding:7px 10px;display:flex;align-items:center;gap:7px;border-bottom:1px solid #e2e8f0}
.mod-num{font-size:7px;font-weight:700;padding:2px 6px;border-radius:3px;color:#fff;flex-shrink:0}
.mod-title{font-size:8.5px;font-weight:700;color:#0f172a;line-height:1.3}
.mod-body{padding:8px 10px}
.topics{display:flex;flex-wrap:wrap;gap:3px;margin-bottom:5px}
.topic{background:#f1f5f9;border-radius:3px;padding:2px 5px;font-size:7px;color:#475569}
.tools-row{display:flex;flex-wrap:wrap;gap:3px;margin-top:5px}
.tools-eyebrow{font-size:6.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#dc2626;margin-bottom:3px}
.tool-pill{border-radius:3px;padding:2px 6px;font-size:7px;font-weight:700}

/* ── TOOLS GRID ── */
.tools-grid{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
.tool-badge{background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;padding:4px 8px;font-size:7.5px;font-weight:700;color:#0f172a;display:flex;align-items:center;gap:4px}
.tool-dot{width:4px;height:4px;border-radius:50%;background:#dc2626;flex-shrink:0}

/* ── OUTCOMES ── */
.outcomes-grid{display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-top:8px}
.outcome-item{background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;padding:7px 9px;display:flex;gap:7px;align-items:flex-start;break-inside:avoid}
.outcome-num{font-size:8px;font-weight:900;color:#dc2626;flex-shrink:0;width:14px;text-align:right;margin-top:1px}
.outcome-text{font-size:7.5px;color:#475569;line-height:1.5}

/* ── ENROLL BOX ── */
.enroll-box{background:#0f172a;border-radius:6px;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;margin-top:16px;gap:12px}
.enroll-left{}
.enroll-title{font-size:11px;font-weight:700;color:#fff;margin-bottom:3px}
.enroll-sub{font-size:8px;color:rgba(255,255,255,0.55)}
.enroll-btn{background:#dc2626;color:#fff;font-size:8px;font-weight:700;padding:8px 16px;border-radius:4px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;flex-shrink:0}

/* ── DIVIDER ── */
.divider{height:1px;background:#e2e8f0;margin:16px 0}

/* ── FOOTER ── */
.footer{position:fixed;bottom:0;left:0;right:0;background:#0f172a;padding:7px 36px;display:flex;justify-content:space-between;align-items:center}
.footer-l{font-size:7px;color:rgba(255,255,255,0.4)}
.footer-c{font-size:7.5px;font-weight:700;color:#dc2626}
.footer-r{font-size:7px;color:rgba(255,255,255,0.4)}

@media print{
  body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .footer{position:fixed;bottom:0}
  .no-break{break-inside:avoid}
  @page{margin:0;size:A4}
}
</style>
</head>
<body>

<!-- COVER BAND -->
<div class="cover">
  <div class="cover-top">
    <div class="brand">UZYN<span>TRA</span> Security</div>
    <div class="cover-badge">Course Syllabus 2025</div>
  </div>
  <div class="cover-eyebrow">Cyber Security Programme</div>
  <div class="cover-title">Cyber Security</div>
  <div class="cover-sub">3-Month Practical Training &nbsp;·&nbsp; Foundations to Career-Ready &nbsp;·&nbsp; 12 Modules &nbsp;·&nbsp; 20 Tools</div>
</div>

<!-- PRICING STRIP -->
<div class="pricing-strip">
  <div class="p-item"><div class="p-label">Duration</div><div class="p-val">3 Months</div></div>
  <div class="p-item"><div class="p-label">Per Month</div><div class="p-val red">PKR 15,000</div></div>
  <div class="p-item"><div class="p-label">Total Fee</div><div class="p-val red">PKR 45,000</div></div>
  <div class="p-item"><div class="p-label">International</div><div class="p-val red">$199 USD</div></div>
  <div class="p-item"><div class="p-label">Enroll</div><div class="p-val">forms.gle/3kRrPLjzp37dK8eh8</div></div>
</div>

<div class="body">

<!-- SCHEDULE -->
<div class="sched-box">
  <div class="sec-eyebrow">Recommended Schedule</div>
  <div class="sched-grid">
    <div class="sched-item"><div class="sched-item-label">Duration</div><div class="sched-item-val">3 Months · 12 Weeks</div></div>
    <div class="sched-item"><div class="sched-item-label">Classes</div><div class="sched-item-val">5 Days / Week</div></div>
    <div class="sched-item"><div class="sched-item-label">Class Time</div><div class="sched-item-val">2 Hours / Day</div></div>
    <div class="sched-item"><div class="sched-item-label">Self Practice</div><div class="sched-item-val">1–2 Hours / Day</div></div>
    <div class="sched-item"><div class="sched-item-label">Instructor Hours</div><div class="sched-item-val">~120 Hours</div></div>
    <div class="sched-item"><div class="sched-item-label">Total Learning</div><div class="sched-item-val">~180–220 Hours</div></div>
  </div>
</div>

${months.map((month) => `
<div class="month-section no-break">
  <div class="month-hdr">
    <div class="month-num-block" style="background:${month.stripe}">
      <div class="month-num">${month.label.split(" ")[1]}</div>
      <div class="month-num-label">Month</div>
    </div>
    <div class="month-title-block">
      <div class="month-title">${month.title}</div>
      <div class="month-meta">4 Modules &nbsp;·&nbsp; ${month.modules.flatMap(m => m.tools).length > 0 ? month.modules.flatMap(m => m.tools).length + " Tools" : "Concepts & Practice"}</div>
    </div>
  </div>
  <div class="mod-grid">
    ${month.modules.map((mod) => `
    <div class="mod-card no-break">
      <div class="mod-stripe" style="background:${month.stripe}"></div>
      <div class="mod-inner">
        <div class="mod-hdr">
          <span class="mod-num" style="background:${month.stripe}">M${mod.num}</span>
          <span class="mod-title">${mod.title}</span>
        </div>
        <div class="mod-body">
          <div class="topics">
            ${mod.topics.map(t => `<span class="topic">${t}</span>`).join("")}
          </div>
          ${mod.tools.length > 0 ? `
          <div class="tools-eyebrow">Tools</div>
          <div class="tools-row">
            ${mod.tools.map(t => `<span class="tool-pill" style="background:${month.stripe}18;border:1px solid ${month.stripe}40;color:${month.stripe}">${t}</span>`).join("")}
          </div>` : ""}
        </div>
      </div>
    </div>`).join("")}
  </div>
</div>`).join("")}

<div class="divider"></div>

<!-- TOOLS -->
<div class="sec-eyebrow">Tools Covered</div>
<div class="tools-grid">
  ${allTools.map(t => `<div class="tool-badge"><div class="tool-dot"></div>${t}</div>`).join("")}
</div>

<div class="divider"></div>

<!-- OUTCOMES -->
<div class="sec-eyebrow">Learning Outcomes</div>
<div class="outcomes-grid">
  ${outcomes.map((o, i) => `
  <div class="outcome-item no-break">
    <div class="outcome-num">${String(i + 1).padStart(2, "0")}</div>
    <div class="outcome-text">${o}</div>
  </div>`).join("")}
</div>

<!-- ENROLL -->
<div class="enroll-box">
  <div class="enroll-left">
    <div class="enroll-title">Ready to start your cybersecurity career?</div>
    <div class="enroll-sub">Register via Google Form &nbsp;·&nbsp; forms.gle/3kRrPLjzp37dK8eh8 &nbsp;·&nbsp; PKR 45,000 total &nbsp;·&nbsp; $199 international</div>
  </div>
  <div class="enroll-btn">Enroll Now</div>
</div>

</div>

<!-- FOOTER -->
<div class="footer">
  <span class="footer-l">UZYNTRA Security — Cyber Security Course Syllabus 2025</span>
  <span class="footer-c">uzyntra.com</span>
  <span class="footer-r">© 2025 UZYNTRA Security. All rights reserved.</span>
</div>

<script>
  window.onload = function() {
    window.print();
    window.onafterprint = function() { window.close(); };
  };
</script>
</body>
</html>`;

    const win = window.open("", "_blank", "width=960,height=760");
    if (!win) { alert("Please allow popups to download the syllabus."); return; }
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
