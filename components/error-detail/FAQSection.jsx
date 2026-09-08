"use client";
import { useState } from "react";

export default function FAQSection({ error }) {
  const [openIdx, setOpenIdx] = useState(null);
  
  if (!error.faq || error.faq.length === 0) return null;

  return (
    <section id="faq" className="mb-6 sm:mb-10 scroll-mt-24">
      <h2 className="text-sm sm:text-lg md:text-2xl font-display font-bold text-foreground mb-2 sm:mb-4 flex items-center gap-1.5 sm:gap-2 border-b border-outline-variant pb-2">
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-tertiary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Frequently Asked Questions
      </h2>
      <div className="space-y-1.5 sm:space-y-3" itemScope itemType="https://schema.org/FAQPage">
        {error.faq.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div 
              key={idx} 
              className="border border-outline-variant rounded-md overflow-hidden bg-surface-low shadow-sm"
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between px-3 py-2 sm:px-6 sm:py-3.5 text-left hover:bg-surface-high focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-foreground text-xs sm:text-sm md:text-base pr-2 sm:pr-4" itemProp="name">{item.q}</span>
                <svg className={`flex-shrink-0 w-3.5 h-3.5 sm:w-5 sm:h-5 text-tertiary transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                itemScope 
                itemProp="acceptedAnswer" 
                itemType="https://schema.org/Answer"
              >
                <div className="overflow-hidden">
                  <div className="px-3 py-2.5 sm:px-6 sm:py-4 border-t border-outline-variant bg-surface-container">
                    <p className="text-on-surface-variant leading-relaxed text-[11px] sm:text-sm md:text-base text-justify hyphens-auto" itemProp="text">
                      {item.a}
                    </p>
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
