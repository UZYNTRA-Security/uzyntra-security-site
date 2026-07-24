"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, AlertCircle, Send, GraduationCap, Briefcase } from "lucide-react";

import { budgetRanges, courseGroups, discountTypes, experienceLevels } from "@/data/contact-options";
import { CustomSelect, type SelectGroup, type SelectOption } from "@/components/forms/custom-select";

// ── Service groups ────────────────────────────────────────────────────────────
const serviceGroups: SelectGroup[] = [
  {
    group: "API & SaaS Security Testing",
    options: [
      { label: "API & SaaS Security Testing",           value: "API & SaaS Security Testing" },
      { label: "OWASP API Top 10 Testing",               value: "OWASP API Top 10 Testing" },
      { label: "Authentication & Authorization Testing", value: "Authentication & Authorization Testing" },
      { label: "SaaS Attack Surface Review",             value: "SaaS Attack Surface Review" },
      { label: "API Fuzzing & Abuse Scenarios",          value: "API Fuzzing & Abuse Scenarios" },
    ],
  },
  {
    group: "Penetration Testing & Red Teaming",
    options: [
      { label: "Penetration Testing & Red Teaming",     value: "Penetration Testing & Red Teaming" },
      { label: "Web Application Penetration Testing",   value: "Web Application Penetration Testing" },
      { label: "External & Internal Network Testing",   value: "External & Internal Network Testing" },
      { label: "Red Team Operations",                   value: "Red Team Operations" },
      { label: "Cloud Security Assessment",             value: "Cloud Security Assessment" },
    ],
  },
  {
    group: "Secure Backend & Cloud Engineering",
    options: [
      { label: "Secure Backend & Cloud Engineering",    value: "Secure Backend & Cloud Engineering" },
      { label: "Rust Backend Development",              value: "Rust Backend Development" },
      { label: "Cloud-Native Architecture",             value: "Cloud-Native Architecture" },
      { label: "DevSecOps & CI/CD Security",            value: "DevSecOps & CI/CD Security" },
    ],
  },
  {
    group: "Blockchain Security & Smart Contract Engineering",
    options: [
      { label: "Smart Contract Development",            value: "Smart Contract Development" },
      { label: "Smart Contract Security Review",        value: "Smart Contract Security Review" },
      { label: "dApp Architecture",                     value: "dApp Architecture" },
      { label: "DeFi & Protocol Engineering",           value: "DeFi & Protocol Engineering" },
    ],
  },
  {
    group: "Automation & AI Workflow Systems",
    options: [
      { label: "n8n Workflow Automation",               value: "n8n Workflow Automation" },
      { label: "AI Agent Pipelines",                    value: "AI Agent Pipelines" },
      { label: "API Orchestration",                     value: "API Orchestration" },
      { label: "Self-hosted n8n Deployment",            value: "Self-hosted n8n Deployment" },
    ],
  },
];

// ── Typed course groups for CustomSelect ─────────────────────────────────────
const courseSelectGroups: SelectGroup[] = courseGroups.map((g) => ({
  group: g.group,
  options: g.options.map((o) => ({ label: o.label, value: o.value })),
}));

const discountOptions: SelectOption[]    = discountTypes.map((d) => ({ label: d, value: d }));
const experienceOptions: SelectOption[]  = experienceLevels.map((e) => ({ label: e, value: e }));
const budgetOptions: SelectOption[]      = budgetRanges.map((b) => ({ label: b, value: b }));

const inquiryOptions: SelectOption[] = [
  { label: "Course Enrollment",         value: "Course Enrollment" },
  { label: "General Inquiry",           value: "General Inquiry" },
  { label: "Request Security Audit",    value: "Request Security Audit" },
  { label: "Book a Penetration Test",   value: "Book a Penetration Test" },
  { label: "Blockchain Security Review",value: "Blockchain Security Review" },
  { label: "Build Secure Infrastructure",value: "Build Secure Infrastructure" },
  { label: "Automate Securely",         value: "Automate Securely" },
  { label: "Product Demo",              value: "Product Demo" },
  { label: "Technical Consultation",    value: "Technical Consultation" },
  { label: "Partnership",               value: "Partnership" },
  { label: "Other",                     value: "Other" },
];

// ── Component ─────────────────────────────────────────────────────────────────
export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading]       = useState(false);
  const [status, setStatus]         = useState<null | "success" | "error">(null);

  const [inquiryValue, setInquiryValue]     = useState("");
  const [courseValue, setCourseValue]       = useState("");
  const [discountValue, setDiscountValue]   = useState("");
  const [experienceValue, setExperienceValue] = useState("");
  const [serviceValue, setServiceValue]     = useState("");
  const [budgetValue, setBudgetValue]       = useState("");

  const isCourse = inquiryValue === "Course Enrollment";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current || loading) return;
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      formRef.current.reset();
      setInquiryValue(""); setCourseValue(""); setDiscountValue("");
      setExperienceValue(""); setServiceValue(""); setBudgetValue("");
      setStatus("success");
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

      {/* Header */}
      <div className="mb-6 flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50">
          {isCourse
            ? <GraduationCap className="h-4.5 w-4.5 text-red-600" />
            : <Briefcase className="h-4.5 w-4.5 text-red-600" />
          }
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-950">
            {isCourse ? "Course Enrollment" : "Send a Message"}
          </h2>
          <p className="mt-0.5 text-sm text-slate-500">
            {isCourse
              ? "Apply for a course — discounts and scholarships available."
              : "Tell us about your project or requirements."}
          </p>
        </div>
      </div>

      {/* Status banners */}
      {status === "success" && (
        <div role="status" aria-live="polite" className="mb-5 flex items-center gap-2.5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
          {isCourse ? "Application submitted! We'll be in touch shortly." : "Message sent. We'll contact you soon."}
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
          Failed to send. Please try again or email contact@uzyntra.com
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
        <input type="hidden" name="site_url"     value={process.env.NEXT_PUBLIC_SITE_URL ?? "https://uzyntra.com"} />
        <input type="hidden" name="submitted_at" value={new Date().toISOString()} />
        <input type="hidden" name="form_type"    value={isCourse ? "course_enrollment" : "service_inquiry"} />

        {/* Name + Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-slate-900">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input id="name" name="name" type="text" required autoComplete="name"
              className="input-style" placeholder="Your full name" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-900">
              Email <span className="text-red-600">*</span>
            </label>
            <input id="email" name="email" type="email" required autoComplete="email"
              className="input-style" placeholder="you@email.com" />
          </div>
        </div>

        {/* Inquiry Type */}
        <div className="relative">
          <CustomSelect
            id="inquiry_type" name="inquiry_type"
            label="What can we help you with?" placeholder="Select inquiry type"
            items={inquiryOptions} required
            value={inquiryValue} onChange={setInquiryValue}
          />
        </div>

        {/* ── COURSE ENROLLMENT FIELDS ─────────────────────────────────── */}
        {isCourse && (
          <>
            {/* Course selector */}
            <div className="relative">
              <CustomSelect
                id="course_name" name="course_name"
                label="Which course are you interested in?" placeholder="Select a course"
                items={courseSelectGroups} required searchable
                value={courseValue} onChange={setCourseValue}
              />
            </div>

            {/* Experience + Discount */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <CustomSelect
                  id="experience_level" name="experience_level"
                  label="Your current level" placeholder="Select level"
                  items={experienceOptions}
                  value={experienceValue} onChange={setExperienceValue}
                />
              </div>
              <div className="relative">
                <CustomSelect
                  id="discount_type" name="discount_type"
                  label="Discount / Financial Aid" placeholder="Select if applicable"
                  items={discountOptions}
                  value={discountValue} onChange={setDiscountValue}
                />
              </div>
            </div>

            {/* Discount info banner */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-2">
                Available Discounts & Scholarships
              </p>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {[
                  "🕐 Early Bird — register 2+ weeks early",
                  "🎓 Scholarships — merit & need-based",
                  "💰 Need-Based Aid — income-based support",
                  "👥 Group Rate — 3+ enrollments",
                  "🎓 Student Discount — valid student ID",
                  "🔗 Referral — refer a friend, both save",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-amber-800">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2.5 text-xs text-amber-700">
                Select your discount type above and mention details in your message. We'll confirm eligibility.
              </p>
            </div>

            {/* Message */}
            <div className="grid gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-slate-900">
                Tell us about yourself <span className="text-red-600">*</span>
              </label>
              <textarea id="message" name="message" required rows={4}
                className="input-style"
                placeholder="Your background, goals, why you want this course, and any questions about discounts or scholarships." />
            </div>
          </>
        )}

        {/* ── SERVICE INQUIRY FIELDS ────────────────────────────────────── */}
        {!isCourse && (
          <>
            {/* Company */}
            <div className="grid gap-1.5">
              <label htmlFor="company" className="text-sm font-medium text-slate-900">
                Company / Organization
              </label>
              <input id="company" name="company" type="text" autoComplete="organization"
                className="input-style" placeholder="Company name (optional)" />
            </div>

            {/* Service + Budget */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <CustomSelect
                  id="service_type" name="service_type"
                  label="Service" placeholder="Select service"
                  items={serviceGroups} searchable
                  value={serviceValue} onChange={setServiceValue}
                />
              </div>
              <div className="relative">
                <CustomSelect
                  id="budget" name="budget"
                  label="Budget" placeholder="Select budget"
                  items={budgetOptions}
                  value={budgetValue} onChange={setBudgetValue}
                />
              </div>
            </div>

            {/* Message */}
            <div className="grid gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-slate-900">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea id="message" name="message" required rows={5}
                className="input-style"
                placeholder="Describe your requirements, environment, goals, or technical challenges." />
            </div>
          </>
        )}

        {/* Submit */}
        <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
          <p className="text-xs text-slate-400">
            No obligation. We respond within 24 hours.
          </p>
          <button type="submit" disabled={loading}
            className="btn-primary inline-flex shrink-0 items-center gap-2">
            <Send className="h-3.5 w-3.5" aria-hidden="true" />
            {loading ? "Sending…" : isCourse ? "Submit Application" : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
