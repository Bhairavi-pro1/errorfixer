import siteMetadata from "../../data/metadata.json";
import Link from "next/link";
import Image from "next/image";

export const metadata = siteMetadata["about-us"] || {
  title: "About Us | ErrorFixer",
  description: "Learn about ErrorFixer's mission to make HTTP error code diagnostics fast, clear, and actionable for developers worldwide.",
};

export default function AboutUs() {
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
            <li className="text-foreground font-semibold" aria-current="page">About Us</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Built For Developers, By Developers
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3 sm:mb-5 tracking-tight">
            About <span className="gradient-text">ErrorFixer</span>
          </h1>
          <p className="text-xs sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-center">
            We are on a mission to eliminate developer frustration by providing instant, deep, and actionable solutions to every HTTP status code and server response anomaly.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-12">
          <div className="bg-surface-low border border-outline-variant rounded-lg p-3 sm:p-5 text-center shadow-sm">
            <span className="text-lg sm:text-3xl font-display font-bold text-primary block mb-0.5 sm:mb-1">60+</span>
            <span className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider font-medium">HTTP Codes</span>
          </div>
          <div className="bg-surface-low border border-outline-variant rounded-lg p-3 sm:p-5 text-center shadow-sm">
            <span className="text-lg sm:text-3xl font-display font-bold text-tertiary block mb-0.5 sm:mb-1">100%</span>
            <span className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider font-medium">Free & Open</span>
          </div>
          <div className="bg-surface-low border border-outline-variant rounded-lg p-3 sm:p-5 text-center shadow-sm">
            <span className="text-lg sm:text-3xl font-display font-bold text-emerald-400 block mb-0.5 sm:mb-1">0</span>
            <span className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider font-medium">Sign-ups Required</span>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-10">
          
          {/* Our Story */}
          <div className="bg-surface-low border border-outline-variant rounded-lg sm:rounded-xl p-3.5 sm:p-8 shadow-sm">
            <h2 className="text-sm sm:text-xl font-display font-bold mb-2 sm:mb-4 text-foreground flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Our Story
            </h2>
            <div className="space-y-2.5 sm:space-y-4 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              <p className="text-left">
                Every developer has experienced the roadblock: a sudden <code>502 Bad Gateway</code>, an obscure <code>422 Unprocessable Content</code>, or a baffling <code>100 Continue</code> handshake failure during production deploys. Rather than forcing engineers to sift through fragmented forum posts and dry specification manuals, we created a single, authoritative diagnostic manual.
              </p>
              <p className="text-left">
                ErrorFixer was engineered to bridge the gap between academic RFC specifications and practical daily debugging. We break down the exact root cause, demonstrate server-side fixes (Node.js, Python, Nginx, Apache, Go), and provide real-world architectural solutions you can implement in minutes.
              </p>
            </div>
          </div>

          {/* Core Offerings */}
          <div>
            <h2 className="text-sm sm:text-xl font-display font-bold mb-3 sm:mb-6 text-foreground text-center">
              What Sets ErrorFixer Apart
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
              <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm hover:border-primary/40 transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2.5 sm:mb-4 border border-primary/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-foreground mb-1 sm:mb-2">Step-by-Step Fixes</h3>
                <p className="text-on-surface-variant text-[11px] sm:text-sm leading-relaxed text-left">
                  Ordered, sequential diagnostic steps that pinpoint client bugs, proxy misconfigurations, or backend timeout issues immediately.
                </p>
              </div>

              <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm hover:border-tertiary/40 transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-tertiary/10 flex items-center justify-center mb-2.5 sm:mb-4 border border-tertiary/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-foreground mb-1 sm:mb-2">Platform-Specific Solutions</h3>
                <p className="text-on-surface-variant text-[11px] sm:text-sm leading-relaxed text-left">
                  Ready-to-copy code snippets and middleware configurations tailored for Express, Django, FastAPI, Nginx, and cloud microservices.
                </p>
              </div>

              <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm hover:border-emerald-400/40 transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center mb-2.5 sm:mb-4 border border-emerald-400/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-foreground mb-1 sm:mb-2">Prevention & Architecture</h3>
                <p className="text-on-surface-variant text-[11px] sm:text-sm leading-relaxed text-left">
                  Proactive strategies to bulletproof your infrastructure against cascading failures, rate-limit thrashing, and connection leaks.
                </p>
              </div>

              <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-6 shadow-sm hover:border-yellow-400/40 transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center mb-2.5 sm:mb-4 border border-yellow-400/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-foreground mb-1 sm:mb-2">Official RFC Context</h3>
                <p className="text-on-surface-variant text-[11px] sm:text-sm leading-relaxed text-left">
                  Cross-referenced with IETF standards (RFC 7231, RFC 9110) to ensure compliance with modern protocol specifications.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Feedback */}
          <div className="bg-surface-low border border-primary/20 rounded-lg p-3.5 sm:p-6 shadow-sm text-center">
            <h2 className="text-xs sm:text-lg font-display font-bold text-foreground mb-1.5 sm:mb-2">
              Have Suggestions or Found an Edge Case?
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mb-4 max-w-xl mx-auto leading-relaxed text-center">
              Our documentation grows through community contributions and real developer experiences. Drop us an email anytime.
            </p>
            <div className="inline-flex items-center gap-2 p-2 sm:p-2.5 rounded-md bg-surface-container border border-outline-variant">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:Bairavi.co@gmail.com" className="text-xs sm:text-sm font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                Bairavi.co@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
