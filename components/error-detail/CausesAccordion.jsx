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
    <section id="causes" className="mb-6 sm:mb-10 scroll-mt-24">
      <h2 className="text-sm sm:text-lg md:text-2xl font-display font-bold text-foreground mb-2 sm:mb-4 flex items-center gap-1.5 sm:gap-2 border-b border-outline-variant pb-2">
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        Main Causes
      </h2>
      <p className="text-on-surface-variant mb-3 sm:mb-6 leading-relaxed text-[11px] sm:text-sm md:text-base text-justify hyphens-auto">
        Understanding why a {error.code} happens is the first step to resolving it. Here are the most common deep technical causes:
      </p>
      <div className="space-y-1.5 sm:space-y-3">
        {causes.map((cause, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="border border-outline-variant rounded-md overflow-hidden bg-surface-low transition-colors duration-200 shadow-sm">
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between px-3 py-2 sm:px-6 sm:py-3.5 text-left hover:bg-surface-high focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-2 sm:gap-3 pr-2 sm:pr-4">
                  <span className="font-semibold text-foreground text-xs sm:text-base md:text-lg">
                    {cause.title}
                  </span>
                  {cause.severity && (
                    <span className={`hidden sm:inline-flex px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold border ${getSeverityBadge(cause.severity)}`}>
                      {cause.severity}
                    </span>
                  )}
                </div>
                <svg className={`flex-shrink-0 w-3.5 h-3.5 sm:w-5 sm:h-5 text-tertiary transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="px-3 py-2.5 sm:px-6 sm:py-4 border-t border-outline-variant bg-surface-container space-y-2 sm:space-y-3.5">
                    <p className="text-on-surface-variant leading-relaxed text-[11px] sm:text-sm md:text-base text-justify hyphens-auto">{cause.explanation}</p>
                    {cause.example && (
                      <div className="bg-surface-high border-l-2 border-primary p-2 sm:p-3.5 text-[11px] sm:text-sm text-foreground/90 rounded-r-md">
                        <strong className="text-primary not-italic block mb-0.5 sm:mb-1 text-[10px] sm:text-xs">Example Scenario:</strong>
                        <span className="text-justify hyphens-auto block not-italic leading-relaxed">{cause.example}</span>
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
