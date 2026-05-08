"use client";
import { useState, useEffect } from "react";

export default function StickyTOC({ error }) {
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
      { rootMargin: "-20% 0px -80% 0px" } // trigger active state closer to top
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
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-6 sticky top-16 z-30 bg-surface/90 backdrop-blur-md p-4 border-b border-outline-variant -mx-4 px-8 shadow-sm">
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between text-foreground font-bold font-display"
        >
          <span>Table of Contents</span>
          <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isMobileOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <ul className="space-y-2 pb-2">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`text-sm w-full text-left py-1 transition-colors ${
                    activeId === id ? "text-primary font-bold" : "text-on-surface-variant"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <nav className="hidden lg:block w-64 flex-shrink-0 sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide pr-4">
        <h3 className="font-display font-bold text-foreground mb-4 uppercase tracking-wider text-xs border-b border-outline-variant pb-2">Contents</h3>
        <ul className="space-y-3 border-l border-outline-variant/50 pl-4 relative">
          {sections.map(({ id, label }) => (
            <li key={id} className="relative">
              {activeId === id && (
                <div className="absolute -left-[17px] top-1 w-[2px] h-4 bg-primary rounded-r"></div>
              )}
              <button
                onClick={() => handleNavClick(id)}
                className={`text-sm w-full text-left transition-colors hover:text-foreground ${
                  activeId === id ? "text-primary font-bold" : "text-on-surface-variant hover:text-on-surface-variant/80"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
