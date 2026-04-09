"use client";

import { useState } from "react";
import { inquiryTypes, serviceTypes, budgetRanges } from "@/data/contact-options";

type FormState = {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  serviceType: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  inquiryType: "",
  serviceType: "",
  budget: "",
  message: "",
};

const fieldClass =
  "rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-300 w-full";

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Contact form submission payload:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData(initialState);
  }

  return (
    <div className="surface-card-strong p-6 sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
          Inquiry Form
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-950 sm:text-3xl">
          Tell us about your requirements
        </h2>
        <p className="mt-3 text-slate-600">
          Share your project scope, technical needs, or business goals. This form is
          frontend-ready and structured for future backend/API integration.
        </p>
      </div>

      {submitted && (
        <div
          className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
          role="status"
          aria-live="polite"
        >
          Your inquiry has been prepared successfully. Connect this form to your backend
          or email service in a later phase to enable live submissions.
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-900">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              className={fieldClass}
              placeholder="Your full name"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={fieldClass}
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="company" className="text-sm font-medium text-slate-900">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={formData.company}
              onChange={(e) => updateField("company", e.target.value)}
              className={fieldClass}
              placeholder="Company or organization"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="inquiryType" className="text-sm font-medium text-slate-900">
              Inquiry Type
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              required
              value={formData.inquiryType}
              onChange={(e) => updateField("inquiryType", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select inquiry type</option>
              {inquiryTypes.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="serviceType" className="text-sm font-medium text-slate-900">
              Service Type
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={(e) => updateField("serviceType", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select service type</option>
              {serviceTypes.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="budget" className="text-sm font-medium text-slate-900">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={(e) => updateField("budget", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={7}
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
            className={fieldClass}
            placeholder="Describe your requirements, environment, goals, timeline, or technical challenges."
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-slate-500">
            By submitting this form, you acknowledge that the message is informational
            and does not create a legal or contractual obligation.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
}
