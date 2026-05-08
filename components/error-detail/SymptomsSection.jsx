export default function SymptomsSection({ error }) {
  if (!error.symptoms || error.symptoms.length === 0) return null;

  return (
    <section id="symptoms" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        Common Symptoms
      </h2>
      <div className="bg-surface-container rounded-lg p-6 border border-outline-variant">
        <p className="text-on-surface-variant mb-4">When a {error.code} error occurs, users and systems typically experience the following behaviors:</p>
        <ul className="space-y-4">
          {error.symptoms.map((symptom, idx) => (
            <li key={idx} className="flex items-start bg-surface-low p-4 rounded-md border border-outline-variant/50 hover:border-primary/30 transition-colors">
              <svg className="w-5 h-5 text-tertiary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-foreground/90 leading-relaxed">{symptom}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
