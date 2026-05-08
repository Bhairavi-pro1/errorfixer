export default function CommunitySection() {
  return (
    <section id="community" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-on-secondary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
        Community Discussions
      </h2>
      <div className="bg-surface-container rounded-lg p-8 border border-outline-variant text-center border-dashed">
        <svg className="w-12 h-12 text-tertiary mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <h3 className="text-lg font-bold text-foreground mb-2">Have a unique solution?</h3>
        <p className="text-on-surface-variant text-sm mb-6 max-w-md mx-auto">
          Join the ErrorFixer community to share your own troubleshooting steps, scripts, and configurations that resolved this error.
        </p>
        <button className="px-6 py-2.5 rounded-full bg-primary-container text-white font-bold text-sm shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-shadow">
          Contribute a Solution
        </button>
      </div>
    </section>
  );
}
