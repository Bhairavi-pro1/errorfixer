import siteMetadata from "../../data/metadata.json";
import Link from "next/link";

export const metadata = siteMetadata["affiliate-disclosure"] || {
  title: "Affiliate Disclosure | ErrorFixer",
  description: "Read ErrorFixer's affiliate disclosure and monetization transparency statement.",
};

export default function AffiliateDisclosure() {
  return (
    <div className="w-full bg-background min-h-screen py-6 sm:py-12">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
          <ol className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-on-surface-variant">
            <li>
              <Link href="/" className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded">Home</Link>
            </li>
            <li><span className="text-outline-variant">/</span></li>
            <li className="text-foreground font-semibold" aria-current="page">Affiliate Disclosure</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-6 sm:mb-10 border-b border-outline-variant pb-4 sm:pb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold mb-3 border border-primary/20">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Monetization & Transparency
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-2 sm:mb-4">
            Affiliate <span className="gradient-text">Disclosure</span>
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Last Updated: May 1, 2026 &bull; FTC Compliance & Transparency Notice
          </p>
        </div>

        {/* Highlight Card */}
        <div className="bg-surface-low border border-outline-variant rounded-lg p-3 sm:p-6 mb-6 sm:mb-10 shadow-sm">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Our Commitment to Readers
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed text-left">
            ErrorFixer is committed to providing 100% free, objective, and unbiased troubleshooting documentation. We maintain strict editorial independence. If we ever recommend a tool, host, or diagnostic software, our review is guided purely by engineering merit and technical efficacy.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-4 sm:space-y-8 text-on-surface-variant">
          
          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">1</span>
              Affiliate Links & Referral Commissions
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-left">
              Some links on ErrorFixer may be affiliate tracking links. This means that if you click on a referral link and choose to purchase a software subscription, hosting plan, or developer tool, ErrorFixer may receive a small referral commission at <strong>absolutely zero additional cost to you</strong>. In many cases, these links may provide you with discounted introductory pricing.
            </p>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">2</span>
              Editorial Independence & Objective Standards
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-left">
              We do not accept paid placements to artificially promote inferior technical solutions or endorse tools that we have not thoroughly evaluated. Our primary mission is to solve your HTTP errors as fast and reliably as possible.
            </p>
          </section>

          <section className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-mono">3</span>
              Third-Party Purchases & Warranties
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-left">
              Any products, services, or tools purchased through third-party links are subject to the vendor's own terms of service, privacy policy, and refund terms. ErrorFixer is not responsible for warranty fulfillment, billing disputes, or service interruptions provided by third-party vendors.
            </p>
          </section>

          <section className="bg-surface-low border border-primary/20 rounded-lg p-3.5 sm:p-6 shadow-sm">
            <h2 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 text-foreground flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary text-white text-xs flex items-center justify-center font-mono">4</span>
              Questions About Our Disclosures
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-left mb-3">
              If you have any questions regarding our affiliate relationships or want to verify an external recommendation, please contact us:
            </p>
            <div className="inline-flex items-center gap-2 p-2.5 sm:p-3 rounded-md bg-surface-container border border-outline-variant">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:Bairavi.co@gmail.com" className="text-xs sm:text-sm font-semibold text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded">
                Bairavi.co@gmail.com
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
