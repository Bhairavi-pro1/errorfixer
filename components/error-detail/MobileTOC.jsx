"use client";
import { useState, useEffect } from "react";

export default function MobileTOC({ error }) {
  const [activeId, setActiveId] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sections = [
    { id: "overview", label: "Overview" },
    ...(error.symptoms && error.symptoms.length > 0 ? [{ id: "symptoms", label: "Symptoms" }] : []),
    ...(error.detailedCauses && error.detailedCauses.length > 0 ? [{ id: "causes", label: "Main Causes" }] : []),
    ...(error.stepByStepSolutions && error.stepByStepSolutions.length > 0 ? [{ id: "solutions", label: "Step-by-Step Solutions" }] : []),
    ...(error.advancedFixes && error.advancedFixes.length > 0 ? [{ id: "advanced-fixes", label: "Advanced Fixes" }] : []),
    ...(error.platformFixes && Object.keys(error.platformFixes).length > 0 ? [{ id: "platform-fixes", label: "Platform Specifics" }] : []),
    ...(error.variations && error.variations.length > 0 ? [{ id: "variations", label: "Variations" }] : []),
    ...(error.preventionTips && error.preventionTips.length > 0 ? [{ id: "prevention", label: "Prevention" }] : []),
    ...(error.realWorldScenarios && error.realWorldScenarios.length > 0 ? [{ id: "scenarios", label: "Real World Scenarios" }] : []),
    ...(error.faq && error.faq.length > 0 ? [{ id: "faq", label: "FAQ" }] : []),
    ...(error.relatedErrors && error.relatedErrors.length > 0 ? [{ id: "related", label: "Related Errors" }] : []),
    ...(error.devNotes ? [{ id: "dev-notes", label: "Dev Notes" }] : []),
    ...(error.advancedUseCases && error.advancedUseCases.length > 0 ? [{ id: "advanced-use-cases", label: "Advanced Use Cases" }] : []),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleNavClick = (id) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="lg:hidden mb-4 bg-surface-high border border-outline-variant rounded-lg p-3 sm:p-4 glass shadow-sm">
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="w-full flex items-center justify-between text-foreground font-bold font-display text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        aria-expanded={isMobileOpen}
      >
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          Table of Contents
        </span>
        <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-tertiary transition-transform duration-300 ${isMobileOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileOpen ? "max-h-[500px] mt-3 pt-3 border-t border-outline-variant" : "max-h-0"}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 py-1">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`text-xs sm:text-sm w-full text-left px-2.5 py-1.5 rounded-md transition-colors flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeId === id 
                  ? "bg-primary/10 text-primary font-bold border border-primary/20" 
                  : "text-on-surface-variant hover:bg-surface-highest hover:text-foreground"
              }`}
            >
              <span>{label}</span>
              <span className="text-[10px] text-on-surface-variant">&rarr;</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
