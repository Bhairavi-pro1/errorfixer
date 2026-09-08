"use client";
import { useState } from "react";

export default function PlatformTabs({ error }) {
  const platforms = error.platformFixes || {};
  const platformKeys = Object.keys(platforms).filter(key => platforms[key] && platforms[key].length > 0);
  const [activePlatform, setActivePlatform] = useState(platformKeys[0] || "");

  if (platformKeys.length === 0) return null;

  return (
    <section id="platform-fixes" className="mb-6 sm:mb-10 scroll-mt-24">
      <h2 className="text-sm sm:text-lg md:text-2xl font-display font-bold text-foreground mb-2 sm:mb-4 flex items-center gap-1.5 sm:gap-2 border-b border-outline-variant pb-2">
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Platform-Specific Fixes
      </h2>
      
      <div className="w-full mt-2.5 sm:mt-5">
        <div className="mb-2.5 sm:mb-5 overflow-x-auto pb-1 sm:pb-2 scrollbar-hide">
          <div className="flex flex-nowrap md:flex-wrap gap-1 sm:gap-2">
            {platformKeys.map((tab) => (
              <button
                key={tab}
                onClick={() => setActivePlatform(tab)}
                className={`px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 border ${
                  activePlatform === tab
                    ? "bg-primary-container text-white border-primary-container shadow-[0_0_10px_rgba(79,70,229,0.3)]"
                    : "bg-surface-low text-on-surface-variant border-outline-variant hover:bg-surface-highest hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-surface-container rounded-md p-2.5 sm:p-5 glass border border-outline-variant shadow-md">
          <h4 className="text-xs sm:text-base font-display font-bold text-foreground mb-2 sm:mb-3.5">
            Resolving {error.code} on {activePlatform}
          </h4>
          <ul className="space-y-1.5 sm:space-y-3">
            {platforms[activePlatform].map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3.5 bg-surface-low rounded-md border-l-2 border-tertiary">
                <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-surface-highest text-tertiary font-mono text-[10px] sm:text-xs flex items-center justify-center mt-0.5 border border-outline-variant">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <p className="text-foreground/90 text-[11px] sm:text-sm md:text-base leading-relaxed text-justify hyphens-auto">{step}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
