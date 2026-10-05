"use client";

import Link from "next/link";
import ErrorCard from "./ErrorCard";
import AdBanner from "./AdBanner";
import AdBannerMobile from "./AdBannerMobile";
import HomeSEOContent from "./HomeSEOContent";

const CATEGORIES = ["1xx", "2xx", "3xx", "4xx", "5xx"];

export default function HomePageContent({ errors }) {
  // chunking for Ad implementation (every 6 cards)
  const chunks = [];
  for (let i = 0; i < errors.length; i += 6) {
    chunks.push(errors.slice(i, i + 6));
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-6 sm:pt-14 pb-4 sm:pb-10 px-3 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-surface-high border border-outline-variant text-tertiary text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
          <span>Range: 100–511</span>
          <span>•</span>
          <span>{errors.length} Status Codes</span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-foreground mb-2.5 sm:mb-5 tracking-tight">
          Fix HTTP Errors <span className="gradient-text">Instantly</span>
        </h1>
        <p className="text-xs sm:text-base md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-3 sm:mb-6 leading-relaxed text-center">
          Stop guessing what went wrong. Search your error code, understand the cause, and copy-paste real-world solutions tailored to your tech stack.
        </p>
      </section>

      {/* Category Switcher Tabs */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-5 sm:mb-10">
        <div className="bg-surface-high border border-outline-variant p-2 sm:p-4 rounded-md glass shadow-xl">
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            <Link
              href="/"
              className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-md text-[11px] sm:text-sm font-mono font-bold transition-all duration-300 border bg-surface-highest text-tertiary border-tertiary shadow-[0_0_10px_rgba(76,215,246,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              All Categories
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat}`}
                className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-md text-[11px] sm:text-sm font-mono font-bold transition-all duration-300 border bg-surface text-on-surface-variant border-outline-variant hover:bg-surface-highest hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {cat} Codes
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 sm:mb-10">
        <div className="hidden md:block">
          <AdBanner />
        </div>
        <div className="block md:hidden">
          <AdBannerMobile />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-12 sm:pb-24">
        {/* Error Cards Grid */}
        <div className="space-y-4 sm:space-y-10">
          {chunks.map((chunk, chunkIdx) => (
            <div key={chunkIdx} className="space-y-4 sm:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 md:gap-6">
                {chunk.map((err) => (
                  <ErrorCard key={err.code} error={err} />
                ))}
              </div>
              {chunkIdx < chunks.length - 1 && (
                <div className="w-full">
                  <div className="hidden md:block">
                    <AdBanner />
                  </div>
                  <div className="block md:hidden">
                    <AdBannerMobile />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <HomeSEOContent />
    </div>
  );
}
