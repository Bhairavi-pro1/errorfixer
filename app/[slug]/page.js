import Link from "next/link";
import errorsData from "../../data/errors.json";
import siteMetadata from "../../data/metadata.json";
import AdBanner from "../../components/AdBanner";
import AdSidebar from "../../components/AdSidebar";
import Tabs from "../../components/Tabs";
import DebugChecklist from "../../components/DebugChecklist";

// New Phase 2 Components
import ReadingProgressBar from "../../components/error-detail/ReadingProgressBar";
import Breadcrumbs from "../../components/error-detail/Breadcrumbs";
import QuickSummaryBox from "../../components/error-detail/QuickSummaryBox";
import ErrorOverview from "../../components/error-detail/ErrorOverview";
import SymptomsSection from "../../components/error-detail/SymptomsSection";
import CausesAccordion from "../../components/error-detail/CausesAccordion";
import StepByStepSolutions from "../../components/error-detail/StepByStepSolutions";
import AdvancedFixes from "../../components/error-detail/AdvancedFixes";
import PlatformTabs from "../../components/error-detail/PlatformTabs";
import ErrorVariations from "../../components/error-detail/ErrorVariations";
import PreventionTips from "../../components/error-detail/PreventionTips";
import RealWorldScenarios from "../../components/error-detail/RealWorldScenarios";
import FAQSection from "../../components/error-detail/FAQSection";
import RelatedErrors from "../../components/error-detail/RelatedErrors";
import DevNotes from "../../components/error-detail/DevNotes";
import AdvancedUseCases from "../../components/error-detail/AdvancedUseCases";
import ShareCopyBar from "../../components/error-detail/ShareCopyBar";
import StickyTOC from "../../components/error-detail/StickyTOC";
import SchemaScripts from "../../components/error-detail/SchemaScripts";

export async function generateStaticParams() {
  return errorsData.map((error) => ({
    slug: error.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://errorfixer.toolsofsaas.com";
  
  const error = errorsData.find((e) => e.slug === slug);
  let metadata = siteMetadata[slug] || {};

  if (!metadata.title && error) {
    metadata.title = `${error.code} ${error.title} – Causes, Fixes & Solutions | ErrorFixer`;
  }
  if (!metadata.description && error) {
    metadata.description = error.overview?.what?.substring(0, 155) || error.shortDescription;
  }
  
  if (!error && Object.keys(metadata).length === 0) {
    return { title: 'Error Not Found' };
  }

  return {
    ...metadata,
    alternates: {
      canonical: `${baseUrl}/${slug}`,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/${slug}`,
      siteName: 'ErrorFixer',
      images: [
        {
          url: `${baseUrl}/assets/brand_logo.png`,
          width: 1200,
          height: 630,
          alt: "ErrorFixer Logo"
        }
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [`${baseUrl}/assets/brand_logo.png`],
    },
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

  // Check if error has Phase 1 enriched data
  const isEnriched = !!error.overview;

  return (
    <>
      <SchemaScripts error={error} />
      <ReadingProgressBar />
      
      <div className="w-full flex justify-center px-4 bg-background">
        {/* Left Sidebar */}
        <div className="hidden xl:block w-[160px] flex-shrink-0 sticky top-24 h-[600px] mr-8 mt-12">
          <AdSidebar />
        </div>

        {/* Main Layout (Content + TOC) */}
        <div className="flex-1 max-w-6xl min-w-0 flex flex-col lg:flex-row gap-12 py-12 pb-24 relative">
          
          {/* Main Content Column */}
          <div className="flex-1 max-w-3xl min-w-0">
            <Breadcrumbs error={error} />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              <span className="text-primary">{error.code}</span> - {error.title}
            </h1>
            
            <ShareCopyBar error={error} />
            
            {isEnriched ? (
              <>
                <QuickSummaryBox error={error} />
                <ErrorOverview error={error} />
                <SymptomsSection error={error} />
                
                <div className="mb-12"><AdBanner /></div>
                
                <CausesAccordion error={error} />
                <StepByStepSolutions error={error} />
                <AdvancedFixes error={error} />
                <PlatformTabs error={error} />
                
                <div className="mb-12"><AdBanner /></div>
                
                <ErrorVariations error={error} />
                <PreventionTips error={error} />
                <RealWorldScenarios error={error} />
                <FAQSection error={error} />
                <RelatedErrors error={error} />
                <DevNotes error={error} />
                <AdvancedUseCases error={error} />
                
                <div className="mb-12"><AdBanner /></div>
              </>
            ) : (
              // Fallback for legacy layout if an error somehow wasn't enriched
              <>
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6 font-medium">
                  {error.shortDescription}
                </p>
                <div className="mb-8"><AdBanner /></div>
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
                <section className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-md bg-primary-container flex items-center justify-center border border-outline-variant text-white font-mono text-sm">!</span>
                    Fix This Error
                  </h2>
                  <Tabs solutions={error.solutions} />
                </section>
                <DebugChecklist />
              </>
            )}
          </div>

          {/* Sticky Sidebar TOC */}
          {isEnriched && (
            <StickyTOC error={error} />
          )}
        </div>

        {/* Right Sidebar */}
        <div className="hidden xl:block w-[160px] flex-shrink-0 sticky top-24 h-[600px] ml-8 mt-12">
          <AdSidebar />
        </div>
      </div>
    </>
  );
}
