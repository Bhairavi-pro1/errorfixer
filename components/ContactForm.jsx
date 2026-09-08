"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4 sm:p-6 text-center">
        <div className="w-10 h-10 rounded-full bg-green-400/20 text-green-400 mx-auto mb-2 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-sm sm:text-lg font-bold text-foreground mb-1">Thank You!</h3>
        <p className="text-xs sm:text-sm text-on-surface-variant mb-4 text-justify hyphens-auto sm:text-center">
          Your message has been received. Our technical team will review your inquiry and get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
          }}
          className="px-4 py-1.5 rounded-md bg-surface-high border border-outline-variant text-xs sm:text-sm font-medium text-foreground hover:bg-surface-highest transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        <div>
          <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Alex Developer"
            className="w-full px-3 py-2 rounded-md bg-surface-container border border-outline-variant text-xs sm:text-sm text-foreground placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full px-3 py-2 rounded-md bg-surface-container border border-outline-variant text-xs sm:text-sm text-foreground placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1">
          Subject Category
        </label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-3 py-2 rounded-md bg-surface-container border border-outline-variant text-xs sm:text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Bug Report / Error Fix Correction">Bug Report / Error Fix Correction</option>
          <option value="New HTTP Code Request">New HTTP Code Request</option>
          <option value="Partnership & Sponsorship">Partnership & Sponsorship</option>
          <option value="Privacy & Legal Request">Privacy & Legal Request</option>
        </select>
      </div>

      <div>
        <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your question, error feedback, or request..."
          className="w-full px-3 py-2 rounded-md bg-surface-container border border-outline-variant text-xs sm:text-sm text-foreground placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-primary-container text-white text-xs sm:text-sm font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
        >
          {loading ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
