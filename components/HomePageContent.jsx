"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ErrorCard from "./ErrorCard";
import AdBanner from "./AdBanner";
import HomeSEOContent from "./HomeSEOContent";

const CATEGORIES = ["All", "1xx", "2xx", "3xx", "4xx", "5xx"];

export default function HomePageContent({ errors }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setActiveCategory(categoryParam);
      // scroll to filter section
      const el = document.getElementById("category-filters");
      if (el) {
        // give the DOM and Next.js shallow routing a moment to settle
        setTimeout(() => {
          // Use window.scrollTo for a more consistent smooth effect, 
          // accounting for the sticky header (~80px offset)
          const yOffset = -90; 
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 150);
      }
    }
  }, [categoryParam]);

  // Filtering Logic
  const filteredErrors = errors.filter((err) => {
    // Category filter
    if (activeCategory !== "All" && err.category !== activeCategory) {
      return false;
    }
    return true;
  });

  // chunking for Ad implementation (every 6 cards)
  const chunks = [];
  for (let i = 0; i < filteredErrors.length; i += 6) {
    chunks.push(filteredErrors.slice(i, i + 6));
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 tracking-tight">
          Fix HTTP Errors <span className="gradient-text">Instantly</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed">
          Stop guessing what went wrong. Search your error code, understand the cause, and copy-paste real-world solutions tailored to your tech stack.
        </p>
      </section>

      <div className="mb-12">
         <AdBanner />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Interactive Filters Area */}
        <div id="category-filters" className="bg-surface-high border border-outline-variant p-6 rounded-md mb-12 glass shadow-xl relative z-10 scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Category Filters */}
            <div className="flex-1 max-w-2xl">
              <h3 className="text-sm font-display font-bold text-foreground uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter by Category
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-md text-sm font-mono font-bold transition-all duration-300 border ${
                      activeCategory === cat
                        ? "bg-surface-highest text-tertiary border-tertiary shadow-[0_0_10px_rgba(76,215,246,0.2)]"
                        : "bg-surface text-on-surface-variant border-outline-variant hover:bg-surface-highest hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Error Cards Grid */}
        {filteredErrors.length === 0 ? (
          <div className="text-center py-20 bg-surface-low border border-dashed border-outline-variant rounded-md">
             <p className="text-on-surface-variant text-lg">No errors found for the selected filters.</p>
             <button 
               onClick={() => setActiveCategory("All")}
               className="mt-4 px-6 py-2 bg-primary-container text-white rounded-md font-semibold hover:bg-primary-container/80 transition-colors"
             >
               Clear Filters
             </button>
          </div>
        ) : (
          <div className="space-y-12">
            {chunks.map((chunk, chunkIdx) => (
              <div key={chunkIdx} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chunk.map((err) => (
                    <ErrorCard key={err.code} error={err} />
                  ))}
                </div>
                {/* Insert Ad Banner after every chunk (except the very last one if we don't want to, but requirement says "between cards") */}
                {chunkIdx < chunks.length - 1 && (
                  <div className="w-full">
                    <AdBanner />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <HomeSEOContent />
    </div>
  );
}
