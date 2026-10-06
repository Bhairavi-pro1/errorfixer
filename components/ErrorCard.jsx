import Link from "next/link";

export default function ErrorCard({ error }) {
  return (
    <Link 
      href={`/${error.slug}`}
      className="block group bg-surface-container hover:bg-surface-highest transition-all duration-300 rounded-md p-3.5 sm:p-5 md:p-6 border border-outline-variant/60 hover:border-outline-variant hover:shadow-lg relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none -mr-12 -mt-12"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="inline-flex items-center justify-center bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm text-xs sm:text-sm font-bold font-mono">
            {error.code}
          </span>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-on-surface-variant font-medium">
            {error.category}
          </span>
        </div>
        
        <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors leading-tight">
          {error.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-foreground/90 mb-3 sm:mb-5 flex-grow leading-relaxed text-left">
          {error.shortDescription}
        </p>

        <div className="mt-auto flex items-center text-xs sm:text-sm font-semibold text-tertiary group-hover:text-primary transition-colors">
          <span>Fix This</span>
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
