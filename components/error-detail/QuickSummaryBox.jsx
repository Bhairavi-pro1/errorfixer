export default function QuickSummaryBox({ error }) {
  const getSeverityColor = (sev) => {
    switch (sev?.toLowerCase()) {
      case 'low': return 'text-green-400 border-green-400/20 bg-green-400/5';
      case 'medium': return 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5';
      case 'high': return 'text-orange-400 border-orange-400/20 bg-orange-400/5';
      case 'critical': return 'text-red-400 border-red-400/20 bg-red-400/5';
      default: return 'text-tertiary border-tertiary/20 bg-tertiary/5';
    }
  };

  return (
    <div className="bg-surface-high border border-outline-variant rounded-lg p-6 glass mb-12 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
      <h3 className="text-sm font-display font-bold text-foreground uppercase tracking-wider mb-4 border-b border-outline-variant pb-2 flex items-center gap-2">
        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Quick Summary
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        <div>
          <span className="text-xs text-on-surface-variant uppercase tracking-wider block mb-1">Error Type</span>
          <span className="font-semibold text-foreground flex items-center gap-1 text-sm md:text-base">
            {error.errorType || `${error.category} Class`}
          </span>
        </div>
        <div>
          <span className="text-xs text-on-surface-variant uppercase tracking-wider block mb-1">Severity</span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold border ${getSeverityColor(error.severity)}`}>
            {error.severity || "Medium"}
          </span>
        </div>
        <div>
          <span className="text-xs text-on-surface-variant uppercase tracking-wider block mb-1">Difficulty</span>
          <span className="font-semibold text-foreground text-sm md:text-base">{error.difficultyLevel || "Medium"}</span>
        </div>
        <div>
          <span className="text-xs text-on-surface-variant uppercase tracking-wider block mb-1">Estimated Fix Time</span>
          <span className="font-semibold text-foreground text-sm md:text-base">{error.estimatedFixTime || "15 mins"}</span>
        </div>
        <div>
          <span className="text-xs text-on-surface-variant uppercase tracking-wider block mb-1">Recoverable</span>
          <span className="font-semibold text-foreground text-sm md:text-base">{error.isRecoverable !== false ? "Yes" : "No"}</span>
        </div>
        <div>
          <span className="text-xs text-on-surface-variant uppercase tracking-wider block mb-1">Affected Platforms</span>
          <span className="font-semibold text-foreground text-sm truncate block" title={error.affectedPlatforms?.join(', ')}>
            {error.affectedPlatforms?.join(', ') || "All"}
          </span>
        </div>
      </div>
    </div>
  );
}
