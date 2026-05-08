export default function ErrorOverview({ error }) {
  if (!error.overview) return null;

  return (
    <section id="overview" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Overview
      </h2>
      <div className="space-y-6 text-foreground/90 leading-relaxed text-base md:text-lg">
        <div className="bg-surface-low p-5 rounded-md border-l-2 border-primary">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">What it means</h3>
          <p>{error.overview.what}</p>
        </div>
        <div className="bg-surface-low p-5 rounded-md border-l-2 border-tertiary">
          <h3 className="text-sm font-bold text-tertiary uppercase tracking-wider mb-2">Why it occurs</h3>
          <p>{error.overview.why}</p>
        </div>
        <div className="bg-surface-low p-5 rounded-md border-l-2 border-on-secondary-container">
          <h3 className="text-sm font-bold text-on-secondary-container uppercase tracking-wider mb-2">Where you'll see it</h3>
          <p>{error.overview.where}</p>
        </div>
        <div className="bg-surface-low p-5 rounded-md border-l-2 border-orange-400">
          <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-2">Real-world impact</h3>
          <p>{error.overview.impact}</p>
        </div>
      </div>
    </section>
  );
}
