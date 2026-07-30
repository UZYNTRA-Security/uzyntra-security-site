import { NextResponse } from "next/server";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
  Image as PDFImage,
} from "@react-pdf/renderer";
import path from "path";
import fs from "fs";
import React from "react";

// ── Colours (light mode, branded) ──────────────────────────────────────────
const C = {
  red:        "#DC2626",
  redLight:   "#FEE2E2",
  redMid:     "#FCA5A5",
  navy:       "#0F172A",
  slate800:   "#1E293B",
  slate600:   "#475569",
  slate400:   "#94A3B8",
  slate100:   "#F1F5F9",
  slate50:    "#F8FAFC",
  white:      "#FFFFFF",
  border:     "#E2E8F0",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: C.white,
    fontFamily: "Helvetica",
    paddingTop: 0,
    paddingBottom: 40,
    paddingHorizontal: 0,
  },
  // ── Header band ──
  header: {
    backgroundColor: C.navy,
    paddingHorizontal: 40,
    paddingTop: 28,
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  logo: { width: 140, height: 32 },
  headerBadge: {
    backgroundColor: C.red,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  headerBadgeText: {
    color: C.white,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
  },
  courseTitle: {
    color: C.white,
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.2,
    marginBottom: 6,
  },
  courseSubtitle: {
    color: "rgba(255,255,255,0.70)",
    fontSize: 10,
    lineHeight: 1.5,
  },
  // ── Pricing strip ──
  pricingStrip: {
    backgroundColor: C.redLight,
    borderBottomWidth: 1,
    borderBottomColor: C.redMid,
    paddingHorizontal: 40,
    paddingVertical: 12,
    flexDirection: "row",
    gap: 24,
    flexWrap: "wrap",
  },
  pricingItem: { flexDirection: "row", alignItems: "center", gap: 6 },
  pricingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.red,
  },
  pricingLabel: { color: C.slate600, fontSize: 8.5, fontFamily: "Helvetica-Bold" },
  pricingValue: { color: C.navy, fontSize: 8.5, fontFamily: "Helvetica-Bold" },
  // ── Body ──
  body: { paddingHorizontal: 40, paddingTop: 24 },
  // ── Schedule box ──
  scheduleBox: {
    backgroundColor: C.slate50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: C.border,
    padding: 16,
    marginBottom: 24,
  },
  scheduleTitle: {
    color: C.red,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  scheduleGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  scheduleItem: {
    width: "30%",
    backgroundColor: C.white,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: C.border,
    padding: 8,
  },
  scheduleItemLabel: { color: C.slate400, fontSize: 7.5, marginBottom: 2 },
  scheduleItemValue: { color: C.navy, fontSize: 8.5, fontFamily: "Helvetica-Bold" },
  // ── Month header ──
  monthHeader: {
    backgroundColor: C.navy,
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 12,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  monthDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: C.red },
  monthTitle: { color: C.white, fontSize: 11, fontFamily: "Helvetica-Bold" },
  monthSub: { color: "rgba(255,255,255,0.60)", fontSize: 8.5, marginLeft: "auto" },
  // ── Module card ──
  moduleCard: {
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 6,
    marginBottom: 10,
    overflow: "hidden",
  },
  moduleHeader: {
    backgroundColor: C.slate50,
    paddingHorizontal: 12,
    paddingVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  moduleNum: {
    backgroundColor: C.red,
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
    color: C.white,
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
  },
  moduleTitle: { color: C.navy, fontSize: 9.5, fontFamily: "Helvetica-Bold" },
  moduleBody: { paddingHorizontal: 12, paddingVertical: 8 },
  topicsRow: { flexDirection: "row", flexWrap: "wrap", gap: 4, marginBottom: 6 },
  topicPill: {
    backgroundColor: C.slate100,
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  topicText: { color: C.slate600, fontSize: 7.5 },
  toolsLabel: {
    color: C.red,
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    marginTop: 4,
    marginBottom: 4,
  },
  toolsRow: { flexDirection: "row", flexWrap: "wrap", gap: 4 },
  toolPill: {
    backgroundColor: C.redLight,
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: C.redMid,
  },
  toolText: { color: C.red, fontSize: 7.5, fontFamily: "Helvetica-Bold" },
  // ── Section heading ──
  sectionHeading: {
    color: C.red,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    marginBottom: 10,
    marginTop: 20,
  },
  // ── Outcomes ──
  outcomesGrid: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  outcomeItem: {
    width: "47%",
    flexDirection: "row",
    gap: 6,
    alignItems: "flex-start",
    backgroundColor: C.slate50,
    borderRadius: 5,
    padding: 7,
    borderWidth: 1,
    borderColor: C.border,
  },
  outcomeDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: C.red,
    marginTop: 3,
    flexShrink: 0,
  },
  outcomeText: { color: C.slate600, fontSize: 8, lineHeight: 1.5, flex: 1 },
  // ── Tools grid ──
  toolsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 5 },
  toolGridPill: {
    backgroundColor: C.slate50,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: C.border,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  toolGridDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: C.red },
  toolGridText: { color: C.navy, fontSize: 8, fontFamily: "Helvetica-Bold" },
  // ── Footer ──
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: C.navy,
    paddingHorizontal: 40,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: { color: "rgba(255,255,255,0.50)", fontSize: 7.5 },
  footerBrand: { color: C.red, fontSize: 7.5, fontFamily: "Helvetica-Bold" },
  // ── Divider ──
  divider: { height: 1, backgroundColor: C.border, marginVertical: 12 },
});

// ── Data ───────────────────────────────────────────────────────────────────

const schedule = [
  { label: "Duration",        value: "3 Months (12 Weeks)" },
  { label: "Classes",         value: "5 Days / Week" },
  { label: "Class Time",      value: "2 Hours / Day" },
  { label: "Self Practice",   value: "1–2 Hours / Day" },
  { label: "Instructor Hrs",  value: "~120 Hours" },
  { label: "Total Learning",  value: "~180–220 Hours" },
];

const months = [
  {
    title: "Month 1",
    sub: "Cyber Security Foundations & Defensive Security",
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
    title: "Month 2",
    sub: "Offensive Security",
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
    title: "Month 3",
    sub: "Detection, Response & Career",
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

// ── PDF Document ───────────────────────────────────────────────────────────

function Footer({ pageNum }: { pageNum: number }) {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>UZYNTRA Security — Cyber Security Course Syllabus</Text>
      <Text style={styles.footerBrand}>uzyntra.com</Text>
      <Text style={styles.footerText}>Page {pageNum}</Text>
    </View>
  );
}

function SyllabusPDF({ logoBase64 }: { logoBase64: string }) {
  return (
    <Document
      title="UZYNTRA Security — Cyber Security Course Syllabus"
      author="UZYNTRA Security"
      subject="Cyber Security 3-Month Course Outline"
    >
      {/* ── Page 1: Header + Schedule + Month 1 ── */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <PDFImage style={styles.logo} src={logoBase64} />
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>COURSE SYLLABUS</Text>
            </View>
          </View>
          <Text style={styles.courseTitle}>Cyber Security</Text>
          <Text style={styles.courseSubtitle}>
            3-Month Practical Training Programme · Foundations to Career-Ready
          </Text>
        </View>

        {/* Pricing strip */}
        <View style={styles.pricingStrip}>
          {[
            { label: "Duration:",    value: "3 Months" },
            { label: "Fee:",         value: "PKR 15,000 / month  ·  PKR 45,000 total" },
            { label: "International:", value: "$199 USD" },
            { label: "Enroll:",      value: "forms.gle/3kRrPLjzp37dK8eh8" },
          ].map((p) => (
            <View key={p.label} style={styles.pricingItem}>
              <View style={styles.pricingDot} />
              <Text style={styles.pricingLabel}>{p.label} </Text>
              <Text style={styles.pricingValue}>{p.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.body}>
          {/* Schedule */}
          <View style={styles.scheduleBox}>
            <Text style={styles.scheduleTitle}>RECOMMENDED SCHEDULE</Text>
            <View style={styles.scheduleGrid}>
              {schedule.map((s) => (
                <View key={s.label} style={styles.scheduleItem}>
                  <Text style={styles.scheduleItemLabel}>{s.label}</Text>
                  <Text style={styles.scheduleItemValue}>{s.value}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Month 1 */}
          {months.slice(0, 1).map((month) => (
            <View key={month.title}>
              <View style={styles.monthHeader}>
                <View style={styles.monthDot} />
                <Text style={styles.monthTitle}>{month.title}</Text>
                <Text style={styles.monthSub}>{month.sub}</Text>
              </View>
              {month.modules.map((mod) => (
                <View key={mod.num} style={styles.moduleCard}>
                  <View style={styles.moduleHeader}>
                    <Text style={styles.moduleNum}>Module {mod.num}</Text>
                    <Text style={styles.moduleTitle}>{mod.title}</Text>
                  </View>
                  <View style={styles.moduleBody}>
                    <View style={styles.topicsRow}>
                      {mod.topics.map((t) => (
                        <View key={t} style={styles.topicPill}>
                          <Text style={styles.topicText}>{t}</Text>
                        </View>
                      ))}
                    </View>
                    {mod.tools.length > 0 && (
                      <>
                        <Text style={styles.toolsLabel}>TOOLS</Text>
                        <View style={styles.toolsRow}>
                          {mod.tools.map((t) => (
                            <View key={t} style={styles.toolPill}>
                              <Text style={styles.toolText}>{t}</Text>
                            </View>
                          ))}
                        </View>
                      </>
                    )}
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
        <Footer pageNum={1} />
      </Page>

      {/* ── Page 2: Month 2 + Month 3 ── */}
      <Page size="A4" style={styles.page}>
        <View style={styles.body}>
          {months.slice(1).map((month) => (
            <View key={month.title}>
              <View style={styles.monthHeader}>
                <View style={styles.monthDot} />
                <Text style={styles.monthTitle}>{month.title}</Text>
                <Text style={styles.monthSub}>{month.sub}</Text>
              </View>
              {month.modules.map((mod) => (
                <View key={mod.num} style={styles.moduleCard}>
                  <View style={styles.moduleHeader}>
                    <Text style={styles.moduleNum}>Module {mod.num}</Text>
                    <Text style={styles.moduleTitle}>{mod.title}</Text>
                  </View>
                  <View style={styles.moduleBody}>
                    <View style={styles.topicsRow}>
                      {mod.topics.map((t) => (
                        <View key={t} style={styles.topicPill}>
                          <Text style={styles.topicText}>{t}</Text>
                        </View>
                      ))}
                    </View>
                    {mod.tools.length > 0 && (
                      <>
                        <Text style={styles.toolsLabel}>TOOLS</Text>
                        <View style={styles.toolsRow}>
                          {mod.tools.map((t) => (
                            <View key={t} style={styles.toolPill}>
                              <Text style={styles.toolText}>{t}</Text>
                            </View>
                          ))}
                        </View>
                      </>
                    )}
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
        <Footer pageNum={2} />
      </Page>

      {/* ── Page 3: Tools + Outcomes ── */}
      <Page size="A4" style={styles.page}>
        <View style={styles.body}>
          <Text style={styles.sectionHeading}>TOOLS COVERED</Text>
          <View style={styles.toolsGrid}>
            {allTools.map((t) => (
              <View key={t} style={styles.toolGridPill}>
                <View style={styles.toolGridDot} />
                <Text style={styles.toolGridText}>{t}</Text>
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionHeading}>LEARNING OUTCOMES</Text>
          <View style={styles.outcomesGrid}>
            {outcomes.map((o) => (
              <View key={o} style={styles.outcomeItem}>
                <View style={styles.outcomeDot} />
                <Text style={styles.outcomeText}>{o}</Text>
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          {/* Enroll CTA box */}
          <View style={{
            backgroundColor: C.navy,
            borderRadius: 8,
            padding: 20,
            marginTop: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <View>
              <Text style={{ color: C.white, fontSize: 12, fontFamily: "Helvetica-Bold", marginBottom: 4 }}>
                Ready to enroll?
              </Text>
              <Text style={{ color: "rgba(255,255,255,0.65)", fontSize: 8.5 }}>
                Register via Google Form · forms.gle/3kRrPLjzp37dK8eh8
              </Text>
            </View>
            <View style={{ backgroundColor: C.red, borderRadius: 5, paddingHorizontal: 14, paddingVertical: 8 }}>
              <Text style={{ color: C.white, fontSize: 9, fontFamily: "Helvetica-Bold" }}>ENROLL NOW</Text>
            </View>
          </View>
        </View>
        <Footer pageNum={3} />
      </Page>
    </Document>
  );
}

// ── Route handler ──────────────────────────────────────────────────────────

export async function GET() {
  try {
    const logoPath = path.join(process.cwd(), "public", "logos", "uzyntra-logo-main-dark.webp");
    const logoBuffer = fs.readFileSync(logoPath);
    const logoBase64 = `data:image/webp;base64,${logoBuffer.toString("base64")}`;

    const buffer = await renderToBuffer(
      React.createElement(SyllabusPDF, { logoBase64 }) as React.ReactElement<import("@react-pdf/renderer").DocumentProps>
    );

    return new NextResponse(buffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="UZYNTRA-CyberSecurity-Syllabus.pdf"',
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (err) {
    console.error("PDF generation error:", err);
    return new NextResponse("Failed to generate PDF", { status: 500 });
  }
}
