export default function SchemaScripts({ error }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://errorfixer.toolsofsaas.com";
  const pageUrl = `${baseUrl}/${error.slug}`;
  const logoUrl = `${baseUrl}/assets/brand_logo.png`;

  // 1. TechArticle Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${pageUrl}#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    },
    "headline": `How to Fix HTTP ${error.code} (${error.title}) in Nginx, Node.js, React & Apache`,
    "description": error.shortDescription || `Complete developer troubleshooting guide for HTTP ${error.code} ${error.title}.`,
    "image": logoUrl,
    "url": pageUrl,
    "datePublished": "2026-01-01T00:00:00Z",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "ErrorFixer",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "ErrorFixer",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl
      }
    },
    "about": {
      "@type": "Thing",
      "name": `HTTP ${error.code} ${error.title}`
    },
    "proficiencyLevel": "Beginner to Advanced"
  };

  // 2. FAQPage Schema
  let faqSchema = null;
  if (error.faq && Array.isArray(error.faq) && error.faq.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "mainEntity": error.faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };
  }

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
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
        "item": `${baseUrl}/category/${error.category}`
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
  if (error.stepByStepSolutions && Array.isArray(error.stepByStepSolutions) && error.stepByStepSolutions.length > 0) {
    howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      "name": `How to Fix HTTP ${error.code} (${error.title}) Error`,
      "description": `Step-by-step developer guide and configuration recipes to resolve the HTTP ${error.code} ${error.title} error.`,
      "image": logoUrl,
      "totalTime": "PT10M",
      "tool": [
        { "@type": "HowToTool", "name": "Web Server (Nginx / Apache)" },
        { "@type": "HowToTool", "name": "Application Runtime (Node.js / React)" }
      ],
      "step": error.stepByStepSolutions.map((step, idx) => {
        const stepNum = step.step || (idx + 1);
        let stepText = step.description;
        if (step.whyItWorks) {
          stepText += ` Why this works: ${step.whyItWorks}`;
        }
        if (step.expectedResult) {
          stepText += ` Expected result: ${step.expectedResult}`;
        }
        
        return {
          "@type": "HowToStep",
          "position": stepNum,
          "name": step.title,
          "text": stepText,
          "url": `${pageUrl}#step-${stepNum}`
        };
      })
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
    </>
  );
}

