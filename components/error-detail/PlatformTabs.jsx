"use client";
import { useState } from "react";

export default function PlatformTabs({ error }) {
  const platforms = error.platformFixes || {};
  const platformKeys = Object.keys(platforms).filter(key => platforms[key] && platforms[key].length > 0);
  const [activePlatform, setActivePlatform] = useState(platformKeys[0] || "");

  if (platformKeys.length === 0) return null;

  return (
    <section id="platform-fixes" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Platform-Specific Fixes
      </h2>
      
      <div className="w-full mt-6">
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex flex-nowrap md:flex-wrap gap-2">
            {platformKeys.map((tab) => (
              <button
                key={tab}
                onClick={() => setActivePlatform(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 border ${
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

        <div className="bg-surface-container rounded-md p-6 glass border border-outline-variant shadow-md">
          <h4 className="text-lg font-display font-bold text-foreground mb-4">
            Resolving {error.code} on {activePlatform}
          </h4>
          <ul className="space-y-4">
            {platforms[activePlatform].map((step, idx) => (
              <li key={idx} className="flex items-start gap-4 p-4 bg-surface-low rounded-md border-l-2 border-tertiary">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-surface-highest text-tertiary font-mono text-xs flex items-center justify-center mt-0.5 border border-outline-variant">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <p className="text-foreground/90 text-sm md:text-base leading-relaxed">{step}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
