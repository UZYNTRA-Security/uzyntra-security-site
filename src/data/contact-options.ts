export const inquiryTypes = [
  "General Inquiry",
  "Course Enrollment",
  "Request Security Audit",
  "Book a Penetration Test",
  "Request Blockchain Security Review",
  "Build Secure Infrastructure",
  "Automate Securely",
  "Product Demo",
  "Technical Consultation",
  "Partnership",
  "Press / Media",
  "Other",
] as const;

export const courseList = [
  // AI & Engineering
  "Artificial Intelligence",
  "AI Agent Development",
  "Prompt Engineering",
  "Data Science & Analytics",
  // Security
  "Cyber Security",
  "Ethical Hacking",
  "Penetration Testing",
  "API Security",
  "SOC Analyst",
  "Digital Forensics",
  "Secure Coding",
  // Cloud & DevOps
  "Cloud Computing",
  "DevOps & DevSecOps",
  "Docker & Kubernetes",
  "AWS / Azure / GCP",
  "Linux Administration",
  // Development
  "Python Programming",
  "Web Development",
  "Mobile App Development",
  "Blockchain & Web3",
  "Automation (n8n, Make, Zapier)",
  "Networking (CCNA)",
] as const;

export const courseGroups = [
  {
    group: "AI & Engineering",
    options: [
      { label: "Artificial Intelligence",  value: "Artificial Intelligence" },
      { label: "AI Agent Development",     value: "AI Agent Development" },
      { label: "Prompt Engineering",       value: "Prompt Engineering" },
      { label: "Data Science & Analytics", value: "Data Science & Analytics" },
    ],
  },
  {
    group: "Security",
    options: [
      { label: "Cyber Security",      value: "Cyber Security" },
      { label: "Ethical Hacking",     value: "Ethical Hacking" },
      { label: "Penetration Testing", value: "Penetration Testing" },
      { label: "API Security",        value: "API Security" },
      { label: "SOC Analyst",         value: "SOC Analyst" },
      { label: "Digital Forensics",   value: "Digital Forensics" },
      { label: "Secure Coding",       value: "Secure Coding" },
    ],
  },
  {
    group: "Cloud & DevOps",
    options: [
      { label: "Cloud Computing",      value: "Cloud Computing" },
      { label: "DevOps & DevSecOps",   value: "DevOps & DevSecOps" },
      { label: "Docker & Kubernetes",  value: "Docker & Kubernetes" },
      { label: "AWS / Azure / GCP",    value: "AWS / Azure / GCP" },
      { label: "Linux Administration", value: "Linux Administration" },
    ],
  },
  {
    group: "Development",
    options: [
      { label: "Python Programming",        value: "Python Programming" },
      { label: "Web Development",           value: "Web Development" },
      { label: "Mobile App Development",    value: "Mobile App Development" },
      { label: "Blockchain & Web3",         value: "Blockchain & Web3" },
      { label: "Automation (n8n, Make, Zapier)", value: "Automation (n8n, Make, Zapier)" },
      { label: "Networking (CCNA)",         value: "Networking (CCNA)" },
    ],
  },
] as const;

export const discountTypes = [
  "Early Bird (Register 2+ weeks before start)",
  "Need-Based Financial Aid",
  "Scholarship Application",
  "Student Discount",
  "Group / Team Enrollment (3+ people)",
  "Referral Discount",
  "No Discount Needed",
] as const;

export const experienceLevels = [
  "Complete Beginner",
  "Some Basics",
  "Intermediate",
  "Advanced",
] as const;

export const serviceTypes = [
  "API & SaaS Security Testing",
  "OWASP API Top 10 Testing",
  "Authentication & Authorization Testing",
  "SaaS Attack Surface Review",
  "API Fuzzing & Abuse Scenarios",
  "Rate Limiting & Business Logic Testing",
  "Penetration Testing & Red Teaming",
  "Web Application Penetration Testing",
  "External & Internal Network Testing",
  "Red Team Operations",
  "Cloud Security Assessment",
  "Identity & Active Directory Testing",
  "Secure Backend & Cloud Engineering",
  "Rust Backend Development",
  "Secure API Architecture",
  "Cloud-Native Architecture",
  "Authentication & Identity Systems",
  "DevSecOps & CI/CD Security",
  "Blockchain Security & Smart Contract Engineering",
  "Smart Contract Development",
  "Smart Contract Security Review",
  "dApp Architecture",
  "Wallet & Token Systems",
  "DeFi & Protocol Engineering",
  "Blockchain Backend Integration",
  "Automation & AI Workflow Systems",
  "n8n Workflow Automation",
  "AI Agent Pipelines",
  "API Orchestration",
  "Self-hosted n8n Deployment",
  "Secure Workflow Design",
  "Legacy System Integration",
] as const;

export const budgetRanges = [
  "Not Sure Yet",
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $75,000",
  "$75,000 – $150,000",
  "$150,000+",
] as const;
