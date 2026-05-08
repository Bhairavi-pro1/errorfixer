import Link from 'next/link';

export default function ErrorVariations({ error }) {
  if (!error.variations || error.variations.length === 0) return null;

  return (
    <section id="variations" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        Common Variations & Aliases
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {error.variations.map((variation, idx) => (
          <Link 
            key={idx} 
            href={`/${variation.slug}`}
            className="bg-surface-container p-4 rounded-md border border-outline-variant hover:border-primary/50 transition-colors group flex items-center justify-between"
          >
            <span className="text-foreground/90 font-medium group-hover:text-primary transition-colors">{variation.name}</span>
            <svg className="w-4 h-4 text-outline-variant group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
