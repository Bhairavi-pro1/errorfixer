import Link from "next/link";

export default function ErrorCard({ error }) {
  return (
    <Link 
      href={`/${error.slug}`}
      className="block group bg-surface-container hover:bg-surface-highest transition-all duration-300 rounded-md p-6 border border-transparent hover:border-outline-variant hover:shadow-lg relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none -mr-16 -mt-16"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center justify-center bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-sm text-sm font-bold font-mono">
            {error.code}
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">
            {error.category}
          </span>
        </div>
        
        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {error.title}
        </h3>
        
        <p className="text-sm text-foreground/80 mb-6 flex-grow leading-relaxed">
          {error.shortDescription}
        </p>

        <div className="mt-auto flex items-center text-sm font-semibold text-tertiary group-hover:text-primary transition-colors">
          <span>Fix This</span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
