import HomePageContent from "../components/HomePageContent";
import errorsData from "../data/errors.json";
import siteMetadata from "../data/metadata.json";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://errorfixer.toolsofsaas.com";

export const metadata = {
  ...siteMetadata.home,
  openGraph: {
    title: siteMetadata.home?.title || "ErrorFixer – Fix HTTP Errors Instantly | Ultimate Guide",
    description: siteMetadata.home?.description || "Understand, identify, and fix HTTP errors instantly with real-world solutions tailored for developers.",
    url: baseUrl,
    siteName: "ErrorFixer",
    images: [
      {
        url: "/assets/brand_logo.png",
        width: 1200,
        height: 630,
        alt: "ErrorFixer Logo",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.home?.title || "ErrorFixer – Fix HTTP Errors Instantly | Ultimate Guide",
    description: siteMetadata.home?.description || "Understand, identify, and fix HTTP errors instantly with real-world solutions tailored for developers.",
    images: ["/assets/brand_logo.png"],
    creator: "@errorfixer",
  },
};

const homeFaqs = [
  {
    q: "What is ErrorFixer and who is it for?",
    a: "ErrorFixer is a free, developer-focused reference tool that explains every HTTP status code — from 1xx informational responses all the way to 5xx server errors. It is built for web developers, backend engineers, DevOps teams, QA testers, and anyone who reads server logs or builds APIs."
  },
  {
    q: "How do I look up a specific HTTP error code?",
    a: "Simply use the category filter buttons on this page (1xx, 2xx, 3xx, 4xx, 5xx) to narrow down the list, then click the error card that matches your code. Each error has its own dedicated page with a plain-English explanation, common causes, and copy-paste solutions for Node.js, React, Apache, and Nginx."
  },
  {
    q: "Does ErrorFixer cover all HTTP status codes?",
    a: "Yes. ErrorFixer covers the full range of standardised HTTP status codes defined in RFC 9110 and related RFCs, including informational (1xx), success (2xx), redirection (3xx), client error (4xx), and server error (5xx) codes."
  },
  {
    q: "Are the solutions specific to a particular tech stack?",
    a: "Each error page includes solutions tailored to the four most common environments: Node.js / Express, React (frontend fetch layer), Apache HTTP Server, and Nginx."
  },
  {
    q: "What is the difference between a 4xx and a 5xx error?",
    a: "4xx errors are client-side problems — the request itself was malformed, unauthorised, or referencing something that doesn't exist. 5xx errors are server-side problems — the request was valid but something went wrong while the server was trying to process it."
  },
  {
    q: "Why do I keep seeing a 403 Forbidden error on my site?",
    a: "A 403 Forbidden error means the server understood the request but is refusing to fulfill it. The most common causes are incorrect file or directory permissions (especially on Linux servers), a Web Application Firewall (WAF) blocking the request, or missing CORS headers."
  },
  {
    q: "What causes a 500 Internal Server Error?",
    a: "A 500 Internal Server Error is a catch-all status code meaning the server encountered an unexpected condition that prevented it from fulfilling the request. Common culprits include unhandled exceptions in application code, database connection failures, and syntax errors in server configs."
  },
  {
    q: "How is ErrorFixer different from just reading MDN docs?",
    a: "MDN Web Docs is an authoritative reference for HTTP specifications and is excellent for understanding what a status code means in theory. ErrorFixer complements MDN by focusing on the practical real-world causes, debugging steps, and ready-to-use code snippets for specific environments (Nginx, Express, React, Apache)."
  }
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ErrorFixer",
    "url": baseUrl,
    "description": "Developer guide and instant copy-paste solutions for HTTP error codes in Nginx, Node.js, React, and Apache.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ErrorFixer",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/brand_logo.png`
  };

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <HomePageContent errors={errorsData} />
    </>
  );
}
