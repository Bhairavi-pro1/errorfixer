"use client";

import { useState } from "react";

export default function CopyEmailButton({ email = "Bairavi.co@gmail.com" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
      <a
        href={`mailto:${email}`}
        className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-md bg-primary-container text-white text-xs sm:text-sm font-semibold hover:bg-primary transition-colors flex items-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Open Email Client</span>
      </a>

      <button
        onClick={handleCopy}
        className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-md bg-surface-high border border-outline-variant text-xs sm:text-sm font-semibold text-foreground hover:bg-surface-highest transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {copied ? (
          <>
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-emerald-400 font-bold">Email Copied!</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Copy Email Address</span>
          </>
        )}
      </button>
    </div>
  );
}
