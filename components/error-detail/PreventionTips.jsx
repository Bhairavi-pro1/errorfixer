export default function PreventionTips({ error }) {
  if (!error.preventionTips || error.preventionTips.length === 0) return null;

  return (
    <section id="prevention" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Prevention Strategies
      </h2>
      <div className="bg-surface-low rounded-lg p-6 border border-green-400/20 shadow-sm">
        <ul className="space-y-4">
          {error.preventionTips.map((tip, idx) => (
            <li key={idx} className="flex items-start">
              <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-foreground/90 leading-relaxed text-sm md:text-base">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
