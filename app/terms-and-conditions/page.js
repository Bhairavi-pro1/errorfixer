import siteMetadata from "../../data/metadata.json";
import Link from "next/link";

export const metadata = siteMetadata["terms-and-conditions"] || {
  title: "Terms and Conditions | ErrorFixer",
  description: "Read the complete terms and conditions for using ErrorFixer's HTTP status code and diagnostic database.",
};

export default function TermsAndConditions() {
  return (
    <div className="w-full bg-background min-h-screen py-6 sm:py-12">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
          <ol className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-on-surface-variant">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li><span className="text-outline-variant">/</span></li>
            <li className="text-foreground font-semibold" aria-current="page">Terms & Conditions</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-6 sm:mb-10 border-b border-outline-variant pb-4 sm:pb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold mb-3 border border-primary/20">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Terms of Service
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-2 sm:mb-4">
            Terms and <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Last Updated: May 1, 2026 &bull; Agreement for Platform Use
          </p>
        </div>

        {/* Quick Highlights Box */}
        <div className="bg-surface-low border border-outline-variant rounded-lg p-3 sm:p-6 mb-6 sm:mb-10 shadow-sm">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Overview of Terms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 text-xs sm:text-sm text-on-surface-variant">
            <div className="bg-surface-container/60 p-2.5 sm:p-3.5 rounded-md border border-outline-variant/40">
              <strong className="text-foreground block mb-0.5">Educational Purpose</strong>
              <p className="text-[11px] sm:text-xs text-justify hyphens-auto">All code samples, diagnostic commands, and server configurations are provided for technical reference.</p>
            </div>
            <div className="bg-surface-container/60 p-2.5 sm:p-3.5 rounded-md border border-outline-variant/40">
              <strong className="text-foreground block mb-0.5">Fair Usage</strong>
              <p className="text-[11px] sm:text-xs text-justify hyphens-auto">You may freely use our guides and solutions for building, debugging, and maintaining software applications.</p>
            </div>
            <div className="bg-surface-container/60 p-2.5 sm:p-3.5 rounded-md border border-outline-variant/40">
              <strong className="text-foreground block mb-0.5">No Warranty</strong>
              <p className="text-[11px] sm:text-xs text-justify hyphens-auto">Content is provided on an "as-is" basis; always test configuration changes in sandbox staging environments first.</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-4 sm:space-y-8 text-on-surface-variant">
          
          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">1</span>
              Acceptance of Terms
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto">
              By accessing and using ErrorFixer ("the Website"), you acknowledge and agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of the platform immediately.
            </p>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">2</span>
              Description of Service & Scope
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto">
              ErrorFixer provides software engineers, web developers, sysadmins, and students with educational documentation, troubleshooting checklists, and architectural best practices covering standard and non-standard HTTP response status codes. The service is provided on an "as-is" and "as-available" basis.
            </p>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">3</span>
              Third-Party Integrations & Advertising
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto mb-3">
              To keep our diagnostic guides 100% free and publicly accessible, ErrorFixer integrates third-party analytics and advertising services:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-1.5 flex-shrink-0"></span>
                <span className="flex-1 text-justify hyphens-auto">
                  <strong className="text-foreground">Analytics Partners:</strong> Tools such as Google Analytics help evaluate site reliability and popular error documentation trends.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-1.5 flex-shrink-0"></span>
                <span className="flex-1 text-justify hyphens-auto">
                  <strong className="text-foreground">Ad Networks:</strong> Contextual advertisement providers may deliver sponsored links or banners according to our Privacy Policy.
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">4</span>
              Intellectual Property Rights
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto">
              All proprietary brand graphics, custom descriptions, diagrams, and site design are the intellectual property of ErrorFixer. Standard IETF/RFC specification excerpts and generic code patterns remain governed by their respective public and open-source licenses.
            </p>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">5</span>
              Limitation of Liability
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto">
              Under no circumstances shall ErrorFixer or its contributors be held liable for any direct, indirect, incidental, special, or consequential damages resulting from system downtime, data loss, or server misconfiguration arising out of applying troubleshooting recommendations found on this website. Always verify configuration changes in controlled testing environments.
            </p>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">6</span>
              Changes to These Terms
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto">
              We reserve the right to revise and amend these Terms and Conditions at any time. Material updates will be reflected with an updated revision date at the top of this page.
            </p>
          </section>

          <section className="bg-surface-low border border-primary/20 rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary text-white text-xs flex items-center justify-center font-mono">7</span>
              Legal & Support Inquiries
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto mb-3">
              For any questions regarding these Terms and Conditions or to submit a legal notice, contact our team:
            </p>
            <div className="inline-flex items-center gap-2 p-2.5 sm:p-3 rounded-md bg-surface-container border border-outline-variant">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:Bairavi.co@gmail.com" className="text-xs sm:text-sm font-semibold text-primary hover:underline">
                Bairavi.co@gmail.com
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
