import siteMetadata from "../../data/metadata.json";
import Link from "next/link";

export const metadata = siteMetadata["privacy-policy"] || {
  title: "Privacy Policy | ErrorFixer",
  description: "Learn how ErrorFixer collects, uses, and protects your personal data when browsing our HTTP error code diagnostic platform.",
};

export default function PrivacyPolicy() {
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
            <li className="text-foreground font-semibold" aria-current="page">Privacy Policy</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-6 sm:mb-10 border-b border-outline-variant pb-4 sm:pb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold mb-3 border border-primary/20">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Transparency & Compliance
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-2 sm:mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Last Updated: May 1, 2026 &bull; Effective Immediately
          </p>
        </div>

        {/* Quick Highlights Box */}
        <div className="bg-surface-low border border-outline-variant rounded-lg p-3 sm:p-6 mb-6 sm:mb-10 shadow-sm">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Summary of Key Practices
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 text-xs sm:text-sm text-on-surface-variant">
            <div className="bg-surface-container/60 p-2.5 sm:p-3.5 rounded-md border border-outline-variant/40">
              <strong className="text-foreground block mb-0.5">No Account Required</strong>
              <p className="text-[11px] sm:text-xs text-justify hyphens-auto">You can access all HTTP diagnostic guides without registering an account or providing financial credentials.</p>
            </div>
            <div className="bg-surface-container/60 p-2.5 sm:p-3.5 rounded-md border border-outline-variant/40">
              <strong className="text-foreground block mb-0.5">Analytics & Ads</strong>
              <p className="text-[11px] sm:text-xs text-justify hyphens-auto">We use anonymized technical analytics and third-party advertising partners to sustain free open-access tools.</p>
            </div>
            <div className="bg-surface-container/60 p-2.5 sm:p-3.5 rounded-md border border-outline-variant/40">
              <strong className="text-foreground block mb-0.5">Your Privacy Rights</strong>
              <p className="text-[11px] sm:text-xs text-justify hyphens-auto">We fully honor GDPR, CCPA, and global data rights requests promptly via our designated email contact.</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-4 sm:space-y-8 text-on-surface-variant">
          
          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">1</span>
              Introduction
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto">
              Welcome to ErrorFixer. We respect your privacy and are committed to protecting your personal data. This Privacy Policy informs you how we manage and safeguard information when you visit our website, regardless of where you access it from, and explains your statutory privacy rights under global data protection frameworks.
            </p>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">2</span>
              The Data We Collect
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto mb-3">
              We may process different categories of technical and interaction data when you browse our platform:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                <span className="flex-1 text-justify hyphens-auto">
                  <strong className="text-foreground">Usage Data:</strong> Pages viewed, HTTP error codes searched, diagnostic steps clicked, and general navigation flows.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                <span className="flex-1 text-justify hyphens-auto">
                  <strong className="text-foreground">Technical Data:</strong> Internet Protocol (IP) address, browser type and engine version, operating system, device screen resolution, and time zone setting.
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">3</span>
              How We Use Your Data
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto mb-3">
              We process technical information only under lawful bases, including legitimate interests and user consent:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-1.5 flex-shrink-0"></span>
                <span className="flex-1 text-justify hyphens-auto">To operate, optimize, and maintain high server reliability across global networks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-1.5 flex-shrink-0"></span>
                <span className="flex-1 text-justify hyphens-auto">To analyze search patterns and identify missing HTTP status code documentation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-1.5 flex-shrink-0"></span>
                <span className="flex-1 text-justify hyphens-auto">To display non-intrusive contextual advertising to fund platform operations.</span>
              </li>
            </ul>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">4</span>
              Cookies & Advertising Partners
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto">
              Our website uses standard browser cookies to retain user preferences (such as light/dark mode choices). We may also collaborate with vetted advertising partners who utilize web beacons or cookies to serve relevant technical advertisements. You can disable or modify cookie handling at any time through your browser settings without losing access to core error documentation.
            </p>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">5</span>
              Data Security & Retention
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto">
              We implement industry-grade encryption, HTTPS protocols, and server firewalls to prevent unauthorized access or interception. We do not sell, rent, or lease personal user lists to third-party brokers under any circumstances.
            </p>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">6</span>
              Your Global Privacy Rights (GDPR / CCPA)
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto mb-3">
              Depending on your regional jurisdiction, you possess specific legal rights over your personal information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <div className="p-2 sm:p-3 rounded bg-surface-container border border-outline-variant/50">
                <strong className="text-foreground block">&bull; Right to Access & Rectify</strong>
                <span className="text-[11px] sm:text-xs">Request confirmation of data held and correct inaccuracies.</span>
              </div>
              <div className="p-2 sm:p-3 rounded bg-surface-container border border-outline-variant/50">
                <strong className="text-foreground block">&bull; Right to Erasure</strong>
                <span className="text-[11px] sm:text-xs">Request immediate deletion of your technical logs and data.</span>
              </div>
              <div className="p-2 sm:p-3 rounded bg-surface-container border border-outline-variant/50">
                <strong className="text-foreground block">&bull; Right to Restrict & Object</strong>
                <span className="text-[11px] sm:text-xs">Limit how we process your interactions or opt out of analytics.</span>
              </div>
              <div className="p-2 sm:p-3 rounded bg-surface-container border border-outline-variant/50">
                <strong className="text-foreground block">&bull; Right to Data Portability</strong>
                <span className="text-[11px] sm:text-xs">Obtain a structured copy of your data in open format.</span>
              </div>
            </div>
          </section>

          <section className="bg-surface-low border border-primary/20 rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary text-white text-xs flex items-center justify-center font-mono">7</span>
              Contact Data Protection
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto mb-3">
              If you have inquiries, concerns, or requests regarding this Privacy Policy or our security measures, please reach out to our privacy team directly:
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
