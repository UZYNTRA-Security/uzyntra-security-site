export type CybersecurityCourseModule = {
  num: string;
  title: string;
  summary: string;
  topics: string[];
  tools: string[];
};

export type CybersecurityCourseMonth = {
  num: string;
  label: string;
  title: string;
  description: string;
  modules: CybersecurityCourseModule[];
};

export const cybersecurityCourseMonths: CybersecurityCourseMonth[] = [
  {
    num: "01",
    label: "Month 1",
    title: "Security Foundations and System Defense",
    description: "Build the practical baseline: security principles, networking, operating systems, lab setup, and hardening before moving into offensive testing.",
    modules: [
      { num: "01", title: "Introduction to Cyber Security", summary: "Introduces cybersecurity domains, threat actors, the CIA triad, authentication, authorization, attack surfaces, security controls, and legal ethics.", topics: ["Cybersecurity domains", "Types of hackers", "CIA triad", "Authentication and authorization", "Security policies", "Legal responsibilities"], tools: [] },
      { num: "02", title: "Networking for Cyber Security", summary: "Builds a working understanding of OSI, TCP/IP, addressing, ports, protocols, DNS, DHCP, HTTP, HTTPS, VPNs, firewalls, and packet analysis.", topics: ["OSI and TCP/IP", "IP addressing", "Ports and protocols", "TCP and UDP", "DNS and DHCP", "VPNs and proxies"], tools: ["Wireshark", "TCPDump", "Nmap", "Netcat"] },
      { num: "03", title: "Linux Fundamentals for Security", summary: "Covers Linux navigation, users and groups, permissions, processes, services, package management, networking commands, logs, and Bash basics.", topics: ["Linux navigation", "Users and groups", "File permissions", "Processes and services", "Package management", "Log files"], tools: [] },
      { num: "04", title: "Windows Security Fundamentals", summary: "Explains Windows users, NTFS permissions, services, Defender, Firewall, Event Viewer, PowerShell basics, local policy, patching, and hardening.", topics: ["Windows users", "NTFS permissions", "Services and processes", "Windows Defender", "Event Viewer", "PowerShell basics"], tools: [] },
      { num: "05", title: "Cybersecurity Lab Development", summary: "Guides students through a controlled virtual lab with Kali Linux, Windows, Ubuntu, intentionally vulnerable targets, snapshots, and safe test networks.", topics: ["VirtualBox or VMware", "Kali Linux", "Windows and Ubuntu VMs", "Network isolation", "Snapshots", "Safe testing"], tools: ["VirtualBox / VMware", "Kali Linux", "Metasploitable", "OWASP Juice Shop", "DVWA"] },
    ],
  },
  {
    num: "02",
    label: "Month 2",
    title: "Security Testing and Vulnerability Assessment",
    description: "Switch to the attacker's view inside authorized labs: reconnaissance, enumeration, vulnerability assessment, web testing, and credential security.",
    modules: [
      { num: "06", title: "Reconnaissance and OSINT", summary: "Introduces passive and active reconnaissance, search research, Google dorking, WHOIS, DNS enumeration, subdomains, fingerprinting, metadata, and social engineering awareness.", topics: ["Passive reconnaissance", "Google dorking", "WHOIS analysis", "DNS enumeration", "Subdomain discovery", "Technology fingerprinting"], tools: ["theHarvester", "Amass", "Subfinder", "Shodan", "Censys", "Maltego CE"] },
      { num: "07", title: "Network Scanning and Enumeration", summary: "Teaches host discovery, port scanning, service detection, OS detection, banner grabbing, network mapping, scripting, and interpreting scan results.", topics: ["Host discovery", "Port scanning", "Service detection", "OS detection", "Banner grabbing", "Scan interpretation"], tools: ["Nmap"] },
      { num: "08", title: "Vulnerability Assessment", summary: "Explains vulnerability assessment vs penetration testing, CVE, CVSS, severity, false positives, patch verification, risk prioritization, and remediation.", topics: ["CVE and CVSS", "Severity", "False positives", "Patch verification", "Risk prioritization", "Remediation"], tools: ["Nessus Essentials", "Greenbone / OpenVAS", "Nmap NSE", "Nikto", "Lynis"] },
      { num: "09", title: "Web Application Security Fundamentals", summary: "Covers HTTP, headers, cookies, sessions, authentication, authorization, input validation, SQL injection, XSS, broken access control, uploads, and OWASP Top 10.", topics: ["HTTP requests", "Headers and cookies", "Sessions and tokens", "SQL injection", "Cross-site scripting", "Broken access control"], tools: ["Burp Suite Community", "OWASP ZAP", "Browser DevTools", "Postman"] },
      { num: "10", title: "Password and Authentication Security", summary: "Discusses password storage, hashing, salting, weak passwords, brute-force concepts, MFA, policies, password managers, account lockout, and credential protection.", topics: ["Password storage", "Hashing and salting", "Weak-password risks", "MFA", "Account lockout", "Credential protection"], tools: ["Hashcat", "John the Ripper", "Hydra overview"] },
    ],
  },
  {
    num: "03",
    label: "Month 3",
    title: "Security Monitoring, Response and Career Skills",
    description: "Close the loop with detection, incident response, digital forensics, architecture, reporting, and career preparation for entry-level security work.",
    modules: [
      { num: "11", title: "Security Monitoring and SIEM", summary: "Introduces security logs, Windows and Linux authentication logs, indicators of compromise, alert triage, false positives, SIEM dashboards, and basic threat hunting.", topics: ["Security logs", "Windows events", "Linux auth logs", "Indicators of compromise", "Alert triage", "Threat hunting"], tools: ["Wazuh", "Splunk", "Elastic Stack overview", "Sysmon"] },
      { num: "12", title: "Incident Response", summary: "Teaches the incident response lifecycle: preparation, identification, containment, eradication, recovery, lessons learned, investigation, and reporting.", topics: ["Preparation", "Identification", "Containment", "Eradication", "Recovery", "Lessons learned"], tools: [] },
      { num: "13", title: "Digital Forensics Fundamentals", summary: "Covers evidence handling, chain of custody, disk imaging, file-system artifacts, deleted-file recovery concepts, browser history, metadata, and log correlation.", topics: ["Digital evidence", "Chain of custody", "Disk imaging", "Deleted-file recovery", "Browser artifacts", "Memory forensics overview"], tools: ["Autopsy", "FTK Imager", "ExifTool", "Volatility overview"] },
      { num: "14", title: "Security Architecture and Frameworks", summary: "Explains defense in depth, zero trust, segmentation, least privilege, backups, endpoint protection, IAM, NIST, CIS Controls, and ISO 27001.", topics: ["Defense in depth", "Zero trust", "Segmentation", "Least privilege", "Secure backups", "NIST CSF"], tools: [] },
      { num: "15", title: "Reporting and Career Development", summary: "Develops technical reporting, executive summaries, vulnerability descriptions, remediation guidance, professional communication, resume preparation, and career planning.", topics: ["Report structure", "Executive summaries", "Evidence", "Resume preparation", "Certification pathways", "Interview preparation"], tools: [] },
    ],
  },
];

export const cybersecurityCourseStats = [
  { label: "Duration", value: "3 Months" },
  { label: "Per Month", value: "PKR 15,000" },
  { label: "Total", value: "PKR 45,000" },
  { label: "International", value: "$199 USD" },
];

export const cybersecurityCourseSchedule = [
  { label: "Teaching Weeks", value: "12 Weeks" },
  { label: "Classes", value: "5 Days/Week" },
  { label: "Class Time", value: "2 Hrs/Day" },
  { label: "Self Practice", value: "1-2 Hrs/Day" },
];

export const cybersecurityCourseLabs = [
  "Build a virtual cybersecurity laboratory",
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

export const cybersecurityCourseTools = [
  "Kali Linux", "Wireshark", "Nmap", "Burp Suite", "OWASP ZAP",
  "Nessus Essentials", "OpenVAS", "theHarvester", "Amass", "Subfinder",
  "Shodan", "Censys", "Hashcat", "John the Ripper", "Autopsy",
  "FTK Imager", "Wazuh", "Splunk", "VirtualBox / VMware", "Git & GitHub",
];

export const cybersecurityCourseOutcomes = [
  "Understand modern cyber threats and security principles",
  "Secure Windows and Linux systems against common attacks",
  "Analyze network traffic and identify suspicious activity",
  "Discover and assess common vulnerabilities",
  "Perform basic web application security testing",
  "Use professional cybersecurity tools with confidence",
  "Respond to security incidents using industry-standard processes",
  "Write clear, actionable technical security reports",
  "Build a home cybersecurity lab for continuous practice",
  "Prepare for entry-level roles: SOC Analyst, Junior Security Analyst, Vulnerability Assessment Analyst",
];

export const cybersecurityTeachingMethodology = [
  "20% conceptual explanation",
  "60% guided practical labs",
  "20% projects, assessments and reporting",
];

export const cybersecurityCourseProjects = [
  "Secure System Build: harden Windows or Linux systems, remove unnecessary services, apply updates, configure permissions, enable firewall protection, implement password policies, and review logs.",
  "Vulnerability Assessment: assess an authorized lab environment and produce an asset inventory, service findings, vulnerabilities, risk classifications, evidence, and recommendations.",
  "Final Project: respond to a simulated incident by identifying suspicious activity, collecting evidence, determining the attack path, containing the affected system, and presenting a professional incident report.",
];

export const cybersecurityAssessmentPolicy = [
  "Final Examination: practical lab assessment plus a theory examination covering the full curriculum.",
  "Passing Criteria: complete labs and assignments, achieve the minimum passing score, pass both exams, and follow academic integrity and ethical conduct policies.",
  "Examination Attempts: first attempt included in the course fee; one free re-attempt is available.",
  "Additional Re-attempt Fee: USD $10 per additional attempt or equivalent in PKR.",
  "Certification: students who pass both examinations and complete all requirements receive a verified UZYNTRA Security Course Completion Certificate.",
];
