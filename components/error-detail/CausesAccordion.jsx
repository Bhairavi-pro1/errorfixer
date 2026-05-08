"use client";
import { useState } from "react";

export default function CausesAccordion({ error }) {
  const causes = error.detailedCauses || [];
  const [openIdx, setOpenIdx] = useState(0); // Open first by default

  if (causes.length === 0) return null;

  const getSeverityBadge = (sev) => {
    switch (sev?.toLowerCase()) {
      case 'low': return 'text-green-400 border-green-400/20 bg-green-400/5';
      case 'medium': return 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5';
      case 'high': return 'text-orange-400 border-orange-400/20 bg-orange-400/5';
      case 'critical': return 'text-red-400 border-red-400/20 bg-red-400/5';
      default: return 'text-tertiary border-tertiary/20 bg-tertiary/5';
    }
  };

  return (
    <section id="causes" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        Main Causes
      </h2>
      <p className="text-on-surface-variant mb-6 leading-relaxed">
        Understanding why a {error.code} happens is the first step to resolving it. Here are the most common deep technical causes:
      </p>
      <div className="space-y-3">
        {causes.map((cause, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="border border-outline-variant rounded-md overflow-hidden bg-surface-low transition-colors duration-200 shadow-sm">
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface-high focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 pr-4">
                  <span className="font-semibold text-foreground text-base md:text-lg">
                    {cause.title}
                  </span>
                  {cause.severity && (
                    <span className={`hidden sm:inline-flex px-2 py-0.5 rounded text-xs font-bold border ${getSeverityBadge(cause.severity)}`}>
                      {cause.severity}
                    </span>
                  )}
                </div>
                <svg className={`flex-shrink-0 w-5 h-5 text-tertiary transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="px-6 py-5 border-t border-outline-variant bg-surface-container space-y-4">
                    <p className="text-on-surface-variant leading-relaxed text-base">{cause.explanation}</p>
                    {cause.example && (
                      <div className="bg-surface-high border-l-2 border-primary p-4 text-sm text-foreground/90 italic rounded-r-md">
                        <strong className="text-primary not-italic block mb-1">Example Scenario:</strong>
                        {cause.example}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
