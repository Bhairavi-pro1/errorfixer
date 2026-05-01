import Image from 'next/image';

export const metadata = {
  title: "About Us – ErrorFixer",
  description: "Learn more about ErrorFixer. The ultimate platform built by developers for developers to understand and resolve HTTP error codes.",
};

export default function AboutUs() {
  return (
    <div className="w-full">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            About <span className="gradient-text">ErrorFixer</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We are on a mission to simplify web development by providing instant, actionable solutions to HTTP error codes. Built for developers, by developers.
          </p>
        </div>

        <div className="space-y-12">
          {/* Our Story Section */}
          <div className="bg-surface-high border border-outline-variant rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Our Story</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Every developer has been there: you're working on a critical project, and suddenly, an obscure HTTP error code pops up. Instead of spending hours digging through forums and documentation, we asked ourselves, "What if there was a centralized, easy-to-understand resource for all HTTP errors?"
              </p>
              <p>
                That's how ErrorFixer was born. We wanted to build a platform that doesn't just tell you what an error code means in technical jargon, but actually explains <strong>why</strong> it's happening and <strong>how</strong> to fix it in real-world scenarios.
              </p>
            </div>
          </div>

          {/* What We Offer Section */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6 text-foreground text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface border border-outline-variant rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Instant Solutions</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Clear, actionable fixes for every HTTP error code. We provide step-by-step guidance to get your application running smoothly again.
                </p>
              </div>

              <div className="bg-surface border border-outline-variant rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Categorized Learning</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Easily navigate through 1xx, 2xx, 3xx, 4xx, and 5xx errors. Understand the difference between client-side mistakes and server-side failures.
                </p>
              </div>
            </div>
          </div>

          {/* Our Philosophy Section */}
          <div className="bg-surface-high border border-outline-variant rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Our Philosophy</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                We believe that development should be accessible and that debugging shouldn't be a painful process. We focus on clear explanations, practical examples, and maintaining a clean, distraction-free environment for developers to find what they need and get back to building.
              </p>
              <p>
                Our commitment is to continually update our database with the latest best practices, edge cases, and modern framework-specific solutions to ensure you always have the most relevant information at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
