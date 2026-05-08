import Link from 'next/link';
import errorsData from '../../data/errors.json';

export default function RelatedErrors({ error }) {
  if (!error.relatedErrors || error.relatedErrors.length === 0) return null;

  // Fetch full details of related errors
  const related = error.relatedErrors
    .map(slug => errorsData.find(e => e.slug === slug))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section id="related" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-on-secondary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        Related Errors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((rel, idx) => (
          <Link 
            key={idx} 
            href={`/${rel.slug}`}
            className="bg-surface-high p-5 rounded-lg border border-outline-variant hover:border-tertiary transition-colors group relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-tertiary/5 rounded-full blur-xl group-hover:bg-tertiary/10 transition-colors pointer-events-none -mr-8 -mt-8"></div>
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <span className="text-lg font-bold text-tertiary">{rel.code}</span>
              <span className="font-semibold text-foreground truncate">{rel.title}</span>
            </div>
            <p className="text-sm text-on-surface-variant line-clamp-2 relative z-10">{rel.shortDescription}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
