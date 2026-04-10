"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { budgetRanges, inquiryTypes } from "@/data/contact-options";
import { CustomSelect, type SelectGroup, type SelectOption } from "@/components/forms/custom-select";

// ── Grouped service options ───────────────────────────────────────────────────
const serviceGroups: SelectGroup[] = [
  {
    group: "Cybersecurity",
    options: [
      { label: "Cybersecurity", value: "Cybersecurity" },
      { label: "Vulnerability Assessment & Penetration Testing", value: "Vulnerability Assessment & Penetration Testing" },
      { label: "Managed Detection & Response", value: "Managed Detection & Response" },
      { label: "SOC as a Service", value: "SOC as a Service" },
      { label: "SIEM Implementation", value: "SIEM Implementation" },
      { label: "Identity & Access Management", value: "Identity & Access Management" },
      { label: "Cloud Security", value: "Cloud Security" },
      { label: "Application Security", value: "Application Security" },
      { label: "API Security", value: "API Security" },
    ],
  },
  {
    group: "Software Development",
    options: [
      { label: "Software Development", value: "Software Development" },
      { label: "Rust Development", value: "Rust Development" },
      { label: "Web Development", value: "Web Development" },
      { label: "Mobile Development", value: "Mobile Development" },
      { label: "DevOps Engineering", value: "DevOps Engineering" },
      { label: "AI Systems", value: "AI Systems" },
    ],
  },
  {
    group: "Blockchain",
    options: [
      { label: "Blockchain", value: "Blockchain" },
      { label: "Custom Blockchain Development", value: "Custom Blockchain Development" },
      { label: "Smart Contract Development", value: "Smart Contract Development" },
      { label: "Smart Contract Auditing", value: "Smart Contract Auditing" },
      { label: "dApp Development", value: "dApp Development" },
      { label: "DeFi Platforms", value: "DeFi Platforms" },
      { label: "Crypto Wallet Development", value: "Crypto Wallet Development" },
      { label: "Token Creation", value: "Token Creation" },
      { label: "CEX/DEX Development", value: "CEX/DEX Development" },
      { label: "Blockchain Consulting", value: "Blockchain Consulting" },
      { label: "Node Infrastructure", value: "Node Infrastructure" },
      { label: "Enterprise Blockchain Solutions", value: "Enterprise Blockchain Solutions" },
      { label: "BaaS", value: "BaaS" },
      { label: "Cross-chain Interoperability", value: "Cross-chain Interoperability" },
      { label: "Layer 2 Scaling", value: "Layer 2 Scaling" },
      { label: "Blockchain Security Audits", value: "Blockchain Security Audits" },
      { label: "AI + Blockchain Integration", value: "AI + Blockchain Integration" },
    ],
  },
  {
    group: "n8n Automation",
    options: [
      { label: "n8n Automation", value: "n8n Automation" },
      { label: "Workflow Automation", value: "Workflow Automation" },
      { label: "API Orchestration", value: "API Orchestration" },
      { label: "Business Process Automation", value: "Business Process Automation" },
      { label: "AI Agent Workflows", value: "AI Agent Workflows" },
      { label: "E-commerce Automation", value: "E-commerce Automation" },
      { label: "Marketing Automation", value: "Marketing Automation" },
      { label: "Self-hosted n8n Deployment", value: "Self-hosted n8n Deployment" },
      { label: "Custom n8n Node Development", value: "Custom n8n Node Development" },
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
