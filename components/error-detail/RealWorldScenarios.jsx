export default function RealWorldScenarios({ error }) {
  if (!error.realWorldScenarios || error.realWorldScenarios.length === 0) return null;

  return (
    <section id="scenarios" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Real-World Scenarios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {error.realWorldScenarios.map((scenario, idx) => (
          <div key={idx} className="bg-surface-container rounded-lg p-6 border border-outline-variant shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-tertiary">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-surface-highest text-tertiary flex items-center justify-center text-xs font-mono border border-outline-variant">
                {idx + 1}
              </span>
              {scenario.title}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{scenario.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
