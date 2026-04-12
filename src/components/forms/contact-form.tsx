"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { budgetRanges, inquiryTypes } from "@/data/contact-options";
import { CustomSelect, type SelectGroup, type SelectOption } from "@/components/forms/custom-select";

// ── Grouped service options ───────────────────────────────────────────────────
const serviceGroups: SelectGroup[] = [
  {
    group: "API & SaaS Security Testing",
    options: [
      { label: "API & SaaS Security Testing", value: "API & SaaS Security Testing" },
      { label: "OWASP API Top 10 Testing", value: "OWASP API Top 10 Testing" },
      { label: "Authentication & Authorization Testing", value: "Authentication & Authorization Testing" },
      { label: "SaaS Attack Surface Review", value: "SaaS Attack Surface Review" },
      { label: "API Fuzzing & Abuse Scenarios", value: "API Fuzzing & Abuse Scenarios" },
      { label: "Rate Limiting & Business Logic Testing", value: "Rate Limiting & Business Logic Testing" },
    ],
  },
  {
    group: "Penetration Testing & Red Teaming",
    options: [
      { label: "Penetration Testing & Red Teaming", value: "Penetration Testing & Red Teaming" },
      { label: "Web Application Penetration Testing", value: "Web Application Penetration Testing" },
      { label: "External & Internal Network Testing", value: "External & Internal Network Testing" },
      { label: "Red Team Operations", value: "Red Team Operations" },
      { label: "Cloud Security Assessment", value: "Cloud Security Assessment" },
      { label: "Identity & Active Directory Testing", value: "Identity & Active Directory Testing" },
    ],
  },
  {
    group: "Secure Backend & Cloud Engineering",
    options: [
      { label: "Secure Backend & Cloud Engineering", value: "Secure Backend & Cloud Engineering" },
      { label: "Rust Backend Development", value: "Rust Backend Development" },
      { label: "Secure API Architecture", value: "Secure API Architecture" },
      { label: "Cloud-Native Architecture", value: "Cloud-Native Architecture" },
      { label: "Authentication & Identity Systems", value: "Authentication & Identity Systems" },
      { label: "DevSecOps & CI/CD Security", value: "DevSecOps & CI/CD Security" },
    ],
  },
  {
    group: "Blockchain Security & Smart Contract Engineering",
    options: [
      { label: "Blockchain Security & Smart Contract Engineering", value: "Blockchain Security & Smart Contract Engineering" },
      { label: "Smart Contract Development", value: "Smart Contract Development" },
      { label: "Smart Contract Security Review", value: "Smart Contract Security Review" },
      { label: "dApp Architecture", value: "dApp Architecture" },
      { label: "Wallet & Token Systems", value: "Wallet & Token Systems" },
      { label: "DeFi & Protocol Engineering", value: "DeFi & Protocol Engineering" },
      { label: "Blockchain Backend Integration", value: "Blockchain Backend Integration" },
    ],
  },
  {
    group: "Automation & AI Workflow Systems",
    options: [
      { label: "Automation & AI Workflow Systems", value: "Automation & AI Workflow Systems" },
      { label: "n8n Workflow Automation", value: "n8n Workflow Automation" },
      { label: "AI Agent Pipelines", value: "AI Agent Pipelines" },
      { label: "API Orchestration", value: "API Orchestration" },
      { label: "Self-hosted n8n Deployment", value: "Self-hosted n8n Deployment" },
      { label: "Secure Workflow Design", value: "Secure Workflow Design" },
      { label: "Legacy System Integration", value: "Legacy System Integration" },
    ],
  },
];

const inquiryOptions: SelectOption[] = inquiryTypes.map((t) => ({ label: t, value: t }));
const budgetOptions: SelectOption[]  = budgetRanges.map((b) => ({ label: b, value: b }));

// ── Component ─────────────────────────────────────────────────────────────────
export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState<null | "success" | "error">(null);

  const [inquiryValue, setInquiryValue]   = useState("");
  const [serviceValue, setServiceValue]   = useState("");
  const [budgetValue,  setBudgetValue]    = useState("");

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
      setInquiryValue("");
      setServiceValue("");
      setBudgetValue("");
      setStatus("success");
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="surface-card-strong rounded-2xl p-6 shadow-lg sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
          Contact UZYNTRA
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-950 sm:text-3xl">
          Tell us about your requirements
        </h2>
        <p className="mt-3 text-slate-600">
          Security audits, API protection, or enterprise consulting — we&apos;re ready.
        </p>
      </div>

      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
        >
          ✅ Message sent successfully. We&apos;ll contact you soon.
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          ❌ Failed to send message. Please try again.
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5">
        {/* Hidden metadata */}
        <input type="hidden" name="site_url" value={process.env.NEXT_PUBLIC_SITE_URL ?? "https://uzyntra.com"} />
        <input type="hidden" name="submitted_at" value={new Date().toISOString()} />

        {/* Name + Email */}
        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-900">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name" name="name" type="text" required autoComplete="name"
              className="input-style" placeholder="Your full name"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-900">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email" name="email" type="email" required autoComplete="email"
              className="input-style" placeholder="you@company.com"
            />
          </div>
        </div>

        {/* Company + Inquiry Type */}
        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="company" className="text-sm font-medium text-slate-900">
              Company
            </label>
            <input
              id="company" name="company" type="text" autoComplete="organization"
              className="input-style" placeholder="Company name"
            />
          </div>

          {/* Inquiry dropdown */}
          <div className="relative">
            <CustomSelect
              id="inquiry_type"
              name="inquiry_type"
              label="Inquiry Type"
              placeholder="Select type"
              items={inquiryOptions}
              required
              value={inquiryValue}
              onChange={setInquiryValue}
            />
          </div>
        </div>

        {/* Service + Budget */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Service dropdown — grouped + searchable */}
          <div className="relative">
            <CustomSelect
              id="service_type"
              name="service_type"
              label="Service"
              placeholder="Select service"
              items={serviceGroups}
              required
              searchable
              value={serviceValue}
              onChange={setServiceValue}
            />
          </div>

          {/* Budget dropdown */}
          <div className="relative">
            <CustomSelect
              id="budget"
              name="budget"
              label="Budget"
              placeholder="Select budget"
              items={budgetOptions}
              value={budgetValue}
              onChange={setBudgetValue}
            />
          </div>
        </div>

        {/* Message */}
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-900">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message" name="message" required rows={6}
            className="input-style"
            placeholder="Explain your security requirements, goals, or technical challenges."
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-slate-500">
            By submitting, you acknowledge this is informational and creates no legal obligation.
          </p>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-auto shrink-0 self-start sm:self-auto"
          >
            {loading ? "Sending…" : "Submit Inquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
