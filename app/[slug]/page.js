import Link from "next/link";
import errorsData from "../../data/errors.json";
import AdBanner from "../../components/AdBanner";
import Tabs from "../../components/Tabs";
import DebugChecklist from "../../components/DebugChecklist";

export async function generateStaticParams() {
  return errorsData.map((error) => ({
    slug: error.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const error = errorsData.find((e) => e.slug === slug);
  
  if (!error) {
    return { title: 'Error Not Found' };
  }

  return {
    title: `${error.code} ${error.title} – Causes & Fix | ErrorFixer`,
    description: `Understand why the ${error.code} ${error.title} error happens and how to fix it in Node.js, React, Apache, Nginx, and more.`,
  };
}

export default async function ErrorDetailPage({ params }) {
  const { slug } = await params;
  const error = errorsData.find((e) => e.slug === slug);

  if (!error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-display font-bold text-foreground mb-4">Error Code Not Found</h1>
        <p className="text-on-surface-variant mb-8">We couldn't find the solution for this specific error.</p>
        <Link href="/" className="px-6 py-3 bg-surface-high hover:bg-surface-highest rounded-md font-semibold text-foreground transition-colors border border-outline-variant">
          Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
      {/* Header section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" className="text-sm font-semibold text-on-surface-variant hover:text-foreground transition-colors flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>
          <span className="text-on-surface-variant">/</span>
          <span className="text-sm font-mono text-tertiary">{error.category} Errors</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
          <span className="text-error-container">{error.code}</span> - {error.title}
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6 font-medium">
            {error.shortDescription}
          </p>
          
          <div className="bg-surface-container-high/50 p-6 rounded-lg border border-outline-variant text-foreground/80 leading-relaxed space-y-4">
            <p>
              The <strong>{error.code} {error.title}</strong> is an HTTP status code from the <strong>{error.category}</strong> class of errors. 
              {error.category.startsWith("4") ? " This generally means the error is on the client side, indicating that the request contains bad syntax or cannot be fulfilled." : ""}
              {error.category.startsWith("5") ? " This generally indicates a server-side error, meaning the server failed to fulfill an apparently valid request." : ""}
              {error.category.startsWith("3") ? " This indicates a redirection, meaning further action needs to be taken by the user agent in order to fulfill the request." : ""}
              {error.category.startsWith("1") ? " This represents an informational response, indicating that the request was received and understood." : ""}
              {error.category.startsWith("2") ? " This indicate that the action requested by the client was received, understood, and accepted successfully." : ""}
            </p>
            <p>
              Encountering the {error.code} status implies that {error.shortDescription.toLowerCase().endsWith('.') ? error.shortDescription.toLowerCase().slice(0, -1) : error.shortDescription.toLowerCase()}. 
              Understanding the root cause is critical for troubleshooting, as it directly guides you to the correct fix for your web application, API, or server configuration.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <AdBanner />
      </div>

      {/* Why This Happens */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-surface-high flex items-center justify-center border border-outline-variant text-primary font-mono text-sm">?</span>
          Why This Happens
        </h2>
        <div className="bg-surface-low border border-outline-variant rounded-md p-6 glass">
          <ul className="space-y-3">
            {error.causes.map((cause, idx) => (
              <li key={idx} className="flex items-start text-foreground/90">
                <svg className="w-5 h-5 text-tertiary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{cause}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fix This Error Tabs */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-primary-container flex items-center justify-center border border-outline-variant text-white font-mono text-sm">!</span>
          Fix This Error
        </h2>
        
        <Tabs solutions={error.solutions} />
      </section>

      <div className="mb-12">
        <AdBanner />
      </div>

      {/* Debug Checklist */}
      <section>
        <DebugChecklist />
      </section>
    </div>
  );
}
