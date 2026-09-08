export default function ErrorOverview({ error }) {
  if (!error.overview) return null;

  return (
    <section id="overview" className="mb-6 sm:mb-10 scroll-mt-24">
      <h2 className="text-sm sm:text-lg md:text-2xl font-display font-bold text-foreground mb-2 sm:mb-4 flex items-center gap-1.5 sm:gap-2 border-b border-outline-variant pb-2">
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Overview
      </h2>
      <div className="space-y-2 sm:space-y-3.5 text-foreground/90 leading-relaxed text-[11px] sm:text-sm md:text-base">
        <div className="bg-surface-low p-2.5 sm:p-4 rounded-md border-l-2 border-primary">
          <h3 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider mb-1">What it means</h3>
          <p className="text-justify hyphens-auto">{error.overview.what}</p>
        </div>
        <div className="bg-surface-low p-2.5 sm:p-4 rounded-md border-l-2 border-tertiary">
          <h3 className="text-[10px] sm:text-xs font-bold text-tertiary uppercase tracking-wider mb-1">Why it occurs</h3>
          <p className="text-justify hyphens-auto">{error.overview.why}</p>
        </div>
        <div className="bg-surface-low p-2.5 sm:p-4 rounded-md border-l-2 border-on-secondary-container">
          <h3 className="text-[10px] sm:text-xs font-bold text-on-secondary-container uppercase tracking-wider mb-1">Where you'll see it</h3>
          <p className="text-justify hyphens-auto">{error.overview.where}</p>
        </div>
        <div className="bg-surface-low p-2.5 sm:p-4 rounded-md border-l-2 border-orange-400">
          <h3 className="text-[10px] sm:text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">Real-world impact</h3>
          <p className="text-justify hyphens-auto">{error.overview.impact}</p>
        </div>
      </div>
    </section>
  );
}
