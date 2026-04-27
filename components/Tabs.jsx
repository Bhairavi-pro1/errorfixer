"use client";

import { useState } from "react";

export default function Tabs({ solutions }) {
  const availableTabs = Object.keys(solutions).filter(key => solutions[key] && solutions[key].length > 0);
  const [activeTab, setActiveTab] = useState(availableTabs[0] || "");

  if (availableTabs.length === 0) return null;

  const capitalize = (str) => {
    if (str.toLowerCase() === 'nodejs') return 'Node.js';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="w-full mt-8">
      {/* Tab Headers / Filter UI */}
      <div className="mb-8">
        <h3 className="text-sm font-display font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          Where did you face this error?
        </h3>
        <div className="flex flex-wrap gap-2">
          {availableTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === tab
                  ? "bg-primary-container text-white border-primary-container shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                  : "bg-surface-low text-on-surface-variant border-outline-variant hover:bg-surface-highest hover:text-foreground hover:border-surface-highest"
              }`}
            >
              {capitalize(tab)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-surface-container rounded-md p-6 glass border border-outline-variant shadow-lg">
        <h4 className="text-lg font-display font-bold text-foreground mb-4">
          Solutions for {capitalize(activeTab)}
        </h4>
        <ul className="space-y-4">
          {solutions[activeTab].map((step, idx) => (
            <li key={idx} className="flex items-start gap-4 p-4 bg-surface-low rounded-md accent-strip">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-surface-highest text-tertiary font-mono text-xs flex items-center justify-center mt-0.5 border border-outline-variant">
                {idx + 1}
              </span>
              <div className="flex-1">
                <p className="text-foreground text-sm md:text-base">{step}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
