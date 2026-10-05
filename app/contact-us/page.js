import siteMetadata from "../../data/metadata.json";
import Link from "next/link";
import CopyEmailButton from "../../components/CopyEmailButton";

export const metadata = siteMetadata["contact-us"] || {
  title: "Contact Us | ErrorFixer",
  description: "Get in touch with the ErrorFixer team directly via email for inquiries, error corrections, and feedback.",
};

export default function ContactUs() {
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
            <li className="text-foreground font-semibold" aria-current="page">Contact Us</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Direct Developer Support
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-2 sm:mb-4 tracking-tight">
            Contact <span className="gradient-text">ErrorFixer</span>
          </h1>
          <p className="text-xs sm:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed text-center">
            We value direct, unhindered communication. Connect with our engineering and editorial team directly via our official email address.
          </p>
        </div>

        {/* Primary Direct Contact Hero Box */}
        <div className="bg-surface-low border border-primary/30 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-6 sm:mb-10 shadow-lg relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
          
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 text-primary mx-auto mb-3 sm:mb-4 flex items-center justify-center border border-primary/20 shadow-inner">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-sm sm:text-xl font-display font-bold text-foreground mb-1">
            Official Email Address
          </h2>
          <p className="text-[11px] sm:text-sm text-on-surface-variant mb-4 max-w-md mx-auto">
            Click below to open your default email app or copy our address directly to your clipboard.
          </p>

          <div className="inline-block bg-surface-container border border-outline-variant rounded-lg px-4 sm:px-6 py-2.5 sm:py-3 mb-5 shadow-sm">
            <span className="text-sm sm:text-xl font-mono font-bold text-primary tracking-wide">
              Bairavi.co@gmail.com
            </span>
          </div>

          <CopyEmailButton email="Bairavi.co@gmail.com" />
        </div>

        {/* Highlights & Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-5 text-center shadow-sm">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-tertiary/10 text-tertiary mx-auto mb-2 sm:mb-3 flex items-center justify-center border border-tertiary/20">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider block font-semibold mb-0.5">Response Time</span>
            <span className="text-xs sm:text-sm font-bold text-foreground">Under 24 Hours</span>
            <p className="text-[10px] sm:text-xs text-on-surface-variant mt-1 text-center">Every technical email is reviewed by active software maintainers.</p>
          </div>

          <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-5 text-center shadow-sm">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-400/10 text-emerald-400 mx-auto mb-2 sm:mb-3 flex items-center justify-center border border-emerald-400/20">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider block font-semibold mb-0.5">Availability</span>
            <span className="text-xs sm:text-sm font-bold text-foreground">Mon &ndash; Fri Global</span>
            <p className="text-[10px] sm:text-xs text-on-surface-variant mt-1 text-center">Worldwide coverage across standard UTC development time zones.</p>
          </div>

          <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-5 text-center shadow-sm">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary mx-auto mb-2 sm:mb-3 flex items-center justify-center border border-primary/20">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider block font-semibold mb-0.5">Direct Collaboration</span>
            <span className="text-xs sm:text-sm font-bold text-foreground">Open Submissions</span>
            <p className="text-[10px] sm:text-xs text-on-surface-variant mt-1 text-center">Send code corrections, new RFC links, or API case studies.</p>
          </div>
        </div>

        {/* How We Can Help Grid */}
        <div className="mb-6 sm:mb-10">
          <h2 className="text-sm sm:text-xl font-display font-bold text-foreground mb-3 sm:mb-5 text-center">
            What You Can Contact Us About
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-mono">1</span>
                <h3 className="font-semibold text-xs sm:text-base text-foreground">Fix Corrections & Updates</h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed text-left">
                Noticed a newer syntax for Node.js, Python, or Nginx? Let us know and we'll update the live troubleshooting guide to help fellow developers.
              </p>
            </div>

            <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded bg-tertiary/10 text-tertiary flex items-center justify-center text-xs font-bold font-mono">2</span>
                <h3 className="font-semibold text-xs sm:text-base text-foreground">New HTTP Code Requests</h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed text-left">
                Encountering an unlisted experimental status code or custom cloud provider error? Share the specification and we'll add comprehensive documentation.
              </p>
            </div>

            <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded bg-emerald-400/10 text-emerald-400 flex items-center justify-center text-xs font-bold font-mono">3</span>
                <h3 className="font-semibold text-xs sm:text-base text-foreground">Partnerships & Tools</h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed text-left">
                Interested in sponsoring diagnostic content or featuring an API testing tool? We welcome constructive developer tooling partnerships.
              </p>
            </div>

            <div className="bg-surface-low border border-outline-variant rounded-lg p-3.5 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded bg-orange-400/10 text-orange-400 flex items-center justify-center text-xs font-bold font-mono">4</span>
                <h3 className="font-semibold text-xs sm:text-base text-foreground">General Inquiries & Feedback</h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed text-left">
                Have UX feedback, dark mode display questions, or site usability suggestions? Send your thoughts directly to our inbox.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
