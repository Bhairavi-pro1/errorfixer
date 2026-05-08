export default function SchemaScripts({ error }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://errorfixer.com";
  const pageUrl = `${baseUrl}/${error.slug}`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `${error.code} ${error.title} - Comprehensive Troubleshooting Guide`,
    "description": error.shortDescription,
    "url": pageUrl,
    "datePublished": "2026-01-01T00:00:00Z",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "ErrorFixer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ErrorFixer",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    }
  };

  // 2. FAQ Schema
  let faqSchema = null;
  if (error.faq && error.faq.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": error.faq.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };
  }

  // 3. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${error.category} Errors`,
        "item": `${baseUrl}/?category=${error.category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${error.code} ${error.title}`,
        "item": pageUrl
      }
    ]
  };

  // 4. HowTo Schema
  let howToSchema = null;
  if (error.stepByStepSolutions && error.stepByStepSolutions.length > 0) {
    howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to fix ${error.code} ${error.title} error`,
      "description": `Step-by-step instructions to resolve the ${error.code} error.`,
      "totalTime": "PT15M",
      "step": error.stepByStepSolutions.map((step, idx) => ({
        "@type": "HowToStep",
        "position": idx + 1,
        "name": step.title,
        "text": step.description
      }))
    };
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
    </>
  );
}
