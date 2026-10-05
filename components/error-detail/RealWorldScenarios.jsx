export default function RealWorldScenarios({ error }) {
  if (!error.realWorldScenarios || error.realWorldScenarios.length === 0) return null;

  return (
    <section id="scenarios" className="mb-6 sm:mb-10 scroll-mt-24">
      <h2 className="text-sm sm:text-lg md:text-2xl font-display font-bold text-foreground mb-2 sm:mb-4 flex items-center gap-1.5 sm:gap-2 border-b border-outline-variant pb-2">
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Real-World Scenarios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5">
        {error.realWorldScenarios.map((scenario, idx) => (
          <div key={idx} className="bg-surface-container rounded-lg p-2.5 sm:p-5 border border-outline-variant shadow-sm hover:shadow-md transition-shadow border-t-2 sm:border-t-4 border-t-tertiary">
            <h3 className="font-bold text-foreground text-xs sm:text-base mb-1 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-surface-highest text-tertiary flex items-center justify-center text-[10px] sm:text-xs font-mono border border-outline-variant flex-shrink-0">
                {idx + 1}
              </span>
              {scenario.title}
            </h3>
            <p className="text-on-surface-variant text-[11px] sm:text-sm leading-relaxed text-left">{scenario.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
