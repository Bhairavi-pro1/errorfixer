"use client";
import { useState } from "react";

export default function FAQSection({ error }) {
  const [openIdx, setOpenIdx] = useState(null);
  
  if (!error.faq || error.faq.length === 0) return null;

  return (
    <section id="faq" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Frequently Asked Questions
      </h2>
      <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
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
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface-high focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-foreground text-base md:text-lg" itemProp="name">{item.q}</span>
                <svg className={`flex-shrink-0 w-5 h-5 text-tertiary transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
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
                  <div className="px-6 py-5 border-t border-outline-variant bg-surface-container">
                    <p className="text-on-surface-variant leading-relaxed text-sm md:text-base" itemProp="text">
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
