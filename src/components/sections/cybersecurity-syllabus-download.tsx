"use client";

import { jsPDF } from "jspdf";

const ENROLL_URL = "https://forms.gle/3kRrPLjzp37dK8eh8";

const courseModules = [
  {
    month: "Month 1: Security Foundations and System Defense",
    modules: [
      {
        title: "Module 1: Introduction to Cyber Security",
        summary: "Introduces the meaning and importance of cybersecurity, common threat actors, security domains, the CIA triad, authentication, authorization, attack surfaces, and legal ethics.",
        topics: ["Cybersecurity domains", "Types of hackers", "CIA triad", "Authentication and authorization", "Security policies and controls", "Attack vectors and legal responsibilities"],
        tools: [],
      },
      {
        title: "Module 2: Networking for Cyber Security",
        summary: "Builds a practical understanding of OSI and TCP/IP, IP addressing, MAC addresses, ports and protocols, DNS, DHCP, FTP, SSH, HTTP, HTTPS, VPNs, firewalls, and network traffic analysis.",
        topics: ["OSI and TCP/IP", "IP addressing and subnetting", "Ports and protocols", "TCP and UDP", "DNS, DHCP, FTP, SSH, HTTP and HTTPS", "Routers, switches, firewalls, VPNs and proxies"],
        tools: ["Wireshark", "TCPDump", "Nmap", "Netcat"],
      },
      {
        title: "Module 3: Linux Fundamentals for Security",
        summary: "Covers Linux installation, system navigation, files and directories, users and groups, file permissions, processes, packages, networking commands, logs, Bash basics, and hardening fundamentals.",
        topics: ["Linux navigation", "Users and groups", "File permissions", "Processes and services", "Package management", "Log files and Bash fundamentals"],
        tools: [],
      },
      {
        title: "Module 4: Windows Security Fundamentals",
        summary: "Explains Windows users and permissions, NTFS file permissions, services, Defender, Firewall, Event Viewer, PowerShell basics, local security policy, patching, and hardening.",
        topics: ["Windows users and permissions", "NTFS permissions", "Windows services and processes", "Windows Defender and Firewall", "Event Viewer and PowerShell basics"],
        tools: [],
      },
    ],
  },
  {
    month: "Month 2: Security Testing and Vulnerability Assessment",
    modules: [
      {
        title: "Module 5: Cybersecurity Lab Development",
        summary: "Guides students to build a controlled virtual lab using VirtualBox or VMware, Kali Linux, Windows and Ubuntu virtual machines, Metasploitable, OWASP Juice Shop, and DVWA.",
        topics: ["VirtualBox or VMware", "Kali Linux", "Windows and Ubuntu lab systems", "Network isolation", "Snapshots", "Safe testing practices"],
        tools: ["VirtualBox / VMware", "Kali Linux", "Metasploitable", "OWASP Juice Shop", "DVWA"],
      },
      {
        title: "Module 6: Reconnaissance and OSINT",
        summary: "Introduces passive and active reconnaissance, search-engine research, Google dorking, WHOIS analysis, DNS enumeration, subdomain discovery, technology fingerprinting, metadata analysis, and social engineering awareness.",
        topics: ["Passive and active reconnaissance", "Google dorking", "WHOIS analysis", "DNS enumeration", "Subdomain discovery", "Technology fingerprinting"],
        tools: ["theHarvester", "Amass", "Subfinder", "Shodan", "Censys", "Maltego Community Edition"],
      },
      {
        title: "Module 7: Network Scanning and Enumeration",
        summary: "Teaches host discovery, port scanning, service detection, OS detection, banner grabbing, network mapping, Nmap scripting, and basic service enumeration.",
        topics: ["Host discovery", "Port scanning", "Service detection", "Operating-system detection", "Banner grabbing", "Interpreting scan results"],
        tools: ["Nmap"],
      },
      {
        title: "Module 8: Vulnerability Assessment",
        summary: "Explains the difference between vulnerability assessment and penetration testing, CVE and CVSS, severity, false positives, patch verification, misconfiguration, risk prioritization, and remediation recommendations.",
        topics: ["CVE and CVSS", "Vulnerability severity", "False positives and false negatives", "Patch verification", "Risk prioritization", "Remediation recommendations"],
        tools: ["Nessus Essentials", "Greenbone / OpenVAS", "Nmap NSE", "Nikto", "Lynis"],
      },
      {
        title: "Module 9: Web Application Security Fundamentals",
        summary: "Covers HTTP requests and responses, headers, cookies, sessions, authentication, authorization, input validation, SQL injection, XSS, broken access control, file uploads, and OWASP Top 10 overview.",
        topics: ["HTTP requests and responses", "Headers, cookies, sessions and tokens", "SQL injection fundamentals", "Cross-site scripting", "Broken access control", "OWASP Top 10 overview"],
        tools: ["Burp Suite Community Edition", "OWASP ZAP", "Browser developer tools", "Postman basics"],
      },
    ],
  },
  {
    month: "Month 3: Security Monitoring, Incident Response and Professional Skills",
    modules: [
      {
        title: "Module 10: Password and Authentication Security",
        summary: "Discusses password storage, hashing, salting, weak-password risks, brute-force concepts, MFA, password policies, password managers, account lockout, and credential protection.",
        topics: ["Password storage", "Hashing and salting", "Weak-password risks", "Multi-factor authentication", "Password managers", "Credential protection"],
        tools: ["Hashcat", "John the Ripper", "Hydra overview"],
      },
      {
        title: "Module 11: Security Monitoring and SIEM",
        summary: "Introduces security logs, Windows event logs, Linux authentication logs, indicators of compromise, alert triage, false-positive analysis, SIEM fundamentals, dashboards, and basic threat hunting.",
        topics: ["Security logs", "Windows event logs", "Linux authentication logs", "Indicators of compromise", "Alert triage", "Basic threat hunting"],
        tools: ["Wazuh", "Splunk", "Elastic Stack overview", "Sysmon"],
      },
      {
        title: "Module 12: Incident Response",
        summary: "Teaches the incident response lifecycle: preparation, identification, containment, eradication, recovery, and lessons learned, with practical investigation and reporting steps.",
        topics: ["Preparation", "Identification", "Containment", "Eradication", "Recovery", "Lessons learned"],
        tools: [],
      },
      {
        title: "Module 13: Digital Forensics Fundamentals",
        summary: "Covers digital evidence, chain of custody, disk imaging, file-system artifacts, deleted-file recovery concepts, browser history, metadata, log correlation, and documentation.",
        topics: ["Digital evidence", "Chain of custody", "Disk imaging", "Deleted-file recovery concepts", "Browser history", "Memory forensics overview"],
        tools: ["Autopsy", "FTK Imager", "ExifTool", "Volatility overview"],
      },
      {
        title: "Module 14: Security Architecture and Frameworks",
        summary: "Explains defense in depth, zero trust, network segmentation, least privilege, secure backups, endpoint protection, IAM, and major frameworks such as NIST, CIS Controls, and ISO 27001.",
        topics: ["Defense in depth", "Zero trust", "Network segmentation", "Least privilege", "Secure backups", "NIST Cybersecurity Framework"],
        tools: [],
      },
      {
        title: "Module 15: Reporting and Career Development",
        summary: "Develops technical reporting, executive summaries, vulnerability descriptions, remediation guidance, professional communication, resume and LinkedIn preparation, and career planning.",
        topics: ["Technical report structure", "Executive summaries", "Risk ratings and evidence", "Resume and LinkedIn preparation", "Certification pathways", "Interview preparation"],
        tools: [],
      },
    ],
  },
];

const teachingMethodology = [
  "20% conceptual explanation",
  "60% guided practical labs",
  "20% projects, assessments and reporting",
];

const practicalActivities = [
  "Create a virtual cybersecurity laboratory",
  "Analyze packets using Wireshark",
  "Scan a controlled network using Nmap",
  "Identify running services",
  "Review Linux and Windows logs",
  "Harden a Linux system",
  "Configure firewall rules",
  "Perform a vulnerability scan",
  "Analyze a vulnerable web application",
  "Identify suspicious authentication attempts",
  "Investigate a simulated compromised account",
  "Recover basic digital evidence",
  "Create an incident response checklist",
  "Write a vulnerability assessment report",
];

const courseProjects = [
  "Secure System Build: harden Windows or Linux systems, remove unnecessary services, apply updates, configure permissions, enable firewall protection, implement password policies, and review logs.",
  "Vulnerability Assessment: assess an authorized lab environment and produce an asset inventory, service findings, vulnerabilities, risk classifications, evidence, and recommendations.",
  "Final Project: respond to a simulated incident by identifying suspicious activity, collecting evidence, determining the attack path, containing the affected system, and presenting a professional incident report.",
];

const assessmentPolicy = [
  "Final Examination: practical lab assessment plus a theory examination covering the full curriculum.",
  "Passing Criteria: complete labs and assignments, achieve the minimum passing score, pass both exams, and follow academic integrity and ethical conduct policies.",
  "Examination Attempts: first attempt included in the course fee; one free re-attempt is available.",
  "Additional Re-attempt Fee: USD $10 per additional attempt or equivalent in PKR.",
  "Certification: students who pass both examinations and complete all requirements receive a verified UZYNTRA Security Course Completion Certificate.",
];

const learningOutcomes = {
  knowledge: [
    "The CIA triad and core security principles",
    "Common cyber threats and attack methods",
    "Network protocols and security controls",
    "The cybersecurity attack lifecycle",
    "Vulnerability management concepts",
    "Authentication, authorization, and access control",
    "Basic web application security risks",
    "Security monitoring and incident response processes",
    "Risk assessment and security reporting",
    "Legal and ethical boundaries of cybersecurity testing",
  ],
  practical: [
    "Build and configure a basic cybersecurity laboratory",
    "Use Kali Linux and security-focused tools",
    "Scan networks and identify active systems",
    "Analyze ports, services, and network traffic",
    "Perform basic vulnerability assessments",
    "Identify common system and application misconfigurations",
    "Secure Linux and Windows environments",
    "Analyze logs and security alerts",
    "Detect basic indicators of compromise",
    "Test intentionally vulnerable web applications",
    "Investigate simulated security incidents",
    "Create professional security assessment reports",
  ],
  career: [
    "Junior Cybersecurity Analyst",
    "SOC Analyst Level 1",
    "IT Security Support Specialist",
    "Junior Vulnerability Analyst",
    "Security Operations Intern",
    "Network Security Assistant",
    "Junior Incident Response Analyst",
    "Cybersecurity Trainee",
  ],
};

export function DownloadSyllabus() {
  async function handleDownload() {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 36;
    const contentWidth = pageWidth - margin * 2;
    let y = margin;

    const addSectionHeading = (text: string, icon: string) => {
      if (y > pageHeight - 90) {
        doc.addPage();
        y = margin;
      }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(15);
      doc.setTextColor(220, 38, 38);
      doc.text(`${icon} ${text}`, margin, y);
      y += 20;
      doc.setDrawColor(226, 232, 240);
      doc.line(margin, y, pageWidth - margin, y);
      y += 10;
    };

    const addJustifiedParagraph = (text: string, size = 10, color = [15, 23, 42]) => {
      const lines = doc.splitTextToSize(text, contentWidth);
      if (y + lines.length * (size + 2) > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.setFont("helvetica", "normal");
      doc.setFontSize(size);
      doc.setTextColor(color[0], color[1], color[2]);
      doc.text(lines, margin, y, { align: "justify" });
      y += lines.length * (size + 2) + 8;
    };

    const addBulletPoints = (items: string[]) => {
      items.forEach((item) => {
        const lines = doc.splitTextToSize(`• ${item}`, contentWidth - 10);
        if (y + lines.length * 11 > pageHeight - margin) {
          doc.addPage();
          y = margin;
        }
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(51, 65, 85);
        doc.text(lines, margin + 6, y, { align: "justify" });
        y += lines.length * 11 + 4;
      });
    };

    const addTwoColumnList = (items: string[], colWidth: number) => {
      const rows = Math.ceil(items.length / 2);
      const leftItems = items.slice(0, rows);
      const rightItems = items.slice(rows);
      const startY = y;
      leftItems.forEach((item, index) => {
        const lines = doc.splitTextToSize(`• ${item}`, colWidth - 10);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.2);
        doc.setTextColor(51, 65, 85);
        doc.text(lines, margin, startY + index * 16, { align: "justify" });
      });
      rightItems.forEach((item, index) => {
        const lines = doc.splitTextToSize(`• ${item}`, colWidth - 10);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.2);
        doc.setTextColor(51, 65, 85);
        doc.text(lines, margin + colWidth + 10, startY + index * 16, { align: "justify" });
      });
      y += rows * 16 + 10;
    };

    doc.setFillColor(248, 250, 252);
    doc.rect(0, 0, pageWidth, 120, "F");
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, 118, pageWidth - margin, 118);
    doc.setFillColor(220, 38, 38);
    doc.roundedRect(margin, 18, 44, 24, 3, 3, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("UZ", margin + 16, 34);
    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Cyber Security Course Syllabus", margin + 110, 38);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("3-Month Practical Training • Foundations to Career-Ready • 12 Modules", margin + 110, 58);
    doc.setFontSize(9);
    doc.text("Practical labs, assessments, reporting, and career preparation", margin + 110, 76);

    y = 150;
    addSectionHeading("Course Overview", "🛡️");
    addJustifiedParagraph("This three-month Cyber Security course introduces students to the practical foundations of defensive and offensive security. Students learn how cyberattacks occur, how attackers identify weaknesses, and how security professionals protect networks, systems, applications, and organizational data.");
    addJustifiedParagraph("The course emphasizes hands-on labs, security tools, realistic scenarios, reporting, and problem-solving rather than excessive theory. It is designed for beginners as well as IT students and professionals who want a practical path into security roles.");
    addJustifiedParagraph("Recommended duration: 3 months • Teaching weeks: 12 • Classes: 5 days per week • Class duration: 2 hours per day • Instructor-led training: approximately 120 hours • Self-practice: 1–2 hours daily • Total learning commitment: 180–220 hours.");

    addSectionHeading("Course Objectives", "🎯");
    addBulletPoints([
      "Develop a strong practical foundation in cybersecurity and prepare students to identify, assess, prevent, detect, and respond to common cyber threats.",
      "Understand both the attacker’s methodology and the defender’s responsibilities while using security tools safely and responsibly.",
      "Prepare professional vulnerability and incident reports and build a strong base for advanced certifications and cybersecurity careers.",
    ]);

    addSectionHeading("Target Audience & Prerequisites", "👥");
    addBulletPoints([
      "Beginners interested in cybersecurity, school and university students, IT students and professionals, network and system administrators, and developers interested in secure development.",
      "No advanced experience is required. Basic computer knowledge is recommended.",
      "Students should have basic computer literacy, a laptop capable of running virtual machines, at least 8 GB RAM, and about 80–100 GB of free storage.",
    ]);

    addSectionHeading("Learning Outcomes", "📘");
    addJustifiedParagraph("Knowledge outcomes: students will understand the CIA triad, common threats, network protocols, attack lifecycles, vulnerability management, authentication, access control, web application risks, monitoring, incident response, and legal ethics.");
    addJustifiedParagraph("Practical outcomes: students will build a lab, use Kali Linux and security tools, scan networks, identify vulnerabilities, secure operating systems, analyze logs, detect indicators of compromise, and create professional reports.");
    addJustifiedParagraph("Career outcomes: students will gain foundational preparation for roles such as Junior Cybersecurity Analyst, SOC Analyst Level 1, IT Security Support Specialist, Junior Vulnerability Analyst, Security Operations Intern, and Junior Incident Response Analyst.");

    addSectionHeading("Course Modules", "📚");
    courseModules.forEach((group) => {
      if (y > pageHeight - 130) {
        doc.addPage();
        y = margin;
      }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(15, 23, 42);
      doc.text(`${group.month}`, margin, y);
      y += 16;
      group.modules.forEach((mod) => {
        const heading = `${mod.title}`;
        const lines = doc.splitTextToSize(`${heading} — ${mod.summary}`, contentWidth - 24);
        if (y + lines.length * 10 + 26 > pageHeight - margin) {
          doc.addPage();
          y = margin;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(220, 38, 38);
        doc.text(heading, margin + 8, y);
        y += 12;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.2);
        doc.setTextColor(51, 65, 85);
        doc.text(lines, margin + 8, y, { align: "justify" });
        y += lines.length * 10 + 6;
        if (mod.topics.length > 0) {
          const topicLines = doc.splitTextToSize(`Topics: ${mod.topics.join(" • ")}`, contentWidth - 24);
          if (y + topicLines.length * 8 > pageHeight - margin) {
            doc.addPage();
            y = margin;
          }
          doc.setFont("helvetica", "italic");
          doc.setFontSize(8.3);
          doc.setTextColor(71, 85, 105);
          doc.text(topicLines, margin + 8, y, { align: "justify" });
          y += topicLines.length * 8 + 6;
        }
        if (mod.tools.length > 0) {
          const toolLines = doc.splitTextToSize(`Tools: ${mod.tools.join(" • ")}`, contentWidth - 24);
          if (y + toolLines.length * 8 > pageHeight - margin) {
            doc.addPage();
            y = margin;
          }
          doc.setFont("helvetica", "bold");
          doc.setFontSize(8.2);
          doc.setTextColor(15, 23, 42);
          doc.text(toolLines, margin + 8, y, { align: "justify" });
          y += toolLines.length * 8 + 8;
        }
      });
      y += 8;
    });

    addSectionHeading("Teaching Methodology", "🧪");
    addBulletPoints(teachingMethodology);

    addSectionHeading("Practical Activities", "⚙️");
    addBulletPoints(practicalActivities);

    addSectionHeading("Course Projects", "🧭");
    addBulletPoints(courseProjects);

    addSectionHeading("Assessment & Certification Policy", "✅");
    addBulletPoints(assessmentPolicy);

    addSectionHeading("Expected Final Outcome", "🏁");
    addJustifiedParagraph("By the end of the programme, students should be able to independently set up a basic security lab, examine network and system activity, identify common vulnerabilities, secure operating systems, analyze logs, respond to basic incidents, and prepare professional technical reports.");
    addJustifiedParagraph("Students will leave with practical cybersecurity experience, a completed home lab, multiple lab reports, a vulnerability assessment report, a final incident response project, basic portfolio material, and a roadmap for advanced learning and certifications.");

    doc.save("uzyntra-cyber-security-syllabus.pdf");
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="btn-ghost-secondary inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm sm:w-auto"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download Syllabus PDF
    </button>
  );
}
