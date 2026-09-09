import Link from "next/link";
import { notFound } from "next/navigation";
import errorsData from "../../../data/errors.json";
import siteMetadata from "../../../data/metadata.json";
import ErrorCard from "../../../components/ErrorCard";
import AdBanner from "../../../components/AdBanner";
import AdBannerMobile from "../../../components/AdBannerMobile";

const CATEGORY_DETAILS = {
  "1xx": {
    name: "1xx Informational",
    range: "100–103",
    tagline: "Provisional Responses & Protocol Handshakes",
    overview: "The 1xx (Informational) class of HTTP status codes indicates a provisional response consisting only of the status line and optional headers, terminated by an empty line. These codes inform the client that the initial request was received and that the server is continuing the operation or negotiating protocol upgrades.",
    whyImportant: "While rarely visible in standard browser navigation, 1xx status codes are essential for high-performance protocols—enabling large file uploads without wasted bandwidth (100 Continue), real-time bidirectional WebSockets (101 Switching Protocols), and early resource preloading (103 Early Hints).",
    debuggingTip: "Check your HTTP protocol version (HTTP/1.1 vs HTTP/2), verify reverse proxy upgrade headers (like Nginx proxy_set_header Upgrade), and inspect raw network headers in Wireshark or browser DevTools.",
    faqs: [
      {
        q: "What does a 1xx status code mean?",
        a: "A 1xx status code is an informational response indicating that the server has received the request headers and the client should continue sending the request body or proceed with protocol negotiation."
      },
      {
        q: "Do browsers display 1xx status codes to users?",
        a: "No, browsers handle 1xx codes internally in the networking layer. You can observe them in browser DevTools (Network tab) or server diagnostic logs."
      },
      {
        q: "Why is 103 Early Hints important for SEO?",
        a: "103 Early Hints allows web servers to inform browsers about critical CSS, fonts, and scripts to preload while the server is still rendering HTML, significantly improving Largest Contentful Paint (LCP) and Core Web Vitals."
      }
    ]
  },
  "2xx": {
    name: "2xx Success",
    range: "200–226",
    tagline: "Successful Requests & REST API Standards",
    overview: "The 2xx (Success) class of status codes indicates that the client's request was successfully received, understood, and accepted by the server. Using the correct 2xx status code is the foundation of well-architected, predictable RESTful APIs.",
    whyImportant: "Beyond a generic 200 OK, using specific codes like 201 Created (with a Location header), 202 Accepted (for asynchronous queues), and 204 No Content (for DELETE actions) allows frontend clients and API consumers to handle state transitions with zero ambiguity.",
    debuggingTip: "Ensure your backend controllers return the exact semantic 2xx code. For 204 No Content, make sure the response body is strictly empty to prevent client-side JSON parsing errors.",
    faqs: [
      {
        q: "What is the difference between 200 OK and 201 Created?",
        a: "200 OK indicates general success where the payload contains the result. 201 Created explicitly indicates that a new resource was created as a result of a POST request, typically accompanied by a Location header."
      },
      {
        q: "When should an API return 204 No Content?",
        a: "Return 204 No Content when an operation succeeds (such as deleting a record or saving an update) but there is no response payload necessary to send back to the client."
      },
      {
        q: "How does 206 Partial Content enable video streaming?",
        a: "206 Partial Content responds to HTTP Range headers, allowing media players to request specific byte ranges of audio and video files for smooth seeking and buffering."
      }
    ]
  },
  "3xx": {
    name: "3xx Redirection",
    range: "300–308",
    tagline: "URL Routing, Method Preservation & SEO Equity",
    overview: "The 3xx (Redirection) class of status codes indicates that the client must take additional action to complete the request. These codes direct browsers and search engines to alternative URL locations.",
    whyImportant: "Correctly using 3xx status codes is vital for website SEO, domain migrations, and security. 301 passes permanent link equity to new URLs, while modern 307 and 308 redirects guarantee that POST/PUT payloads are preserved without being erroneously converted into GET requests.",
    debuggingTip: "Watch out for infinite redirect loops (ERR_TOO_MANY_REDIRECTS) caused by conflicting HTTP-to-HTTPS rewrite rules in Nginx/Apache or circular OAuth login redirects.",
    faqs: [
      {
        q: "What is the difference between 301 and 302 redirects for SEO?",
        a: "A 301 redirect indicates a permanent move, passing 90-99% of ranking equity (link juice) to the target URL. A 302 redirect indicates a temporary move, signaling search engines to keep indexing the original URL."
      },
      {
        q: "Why should I use 307 or 308 instead of 302 or 301?",
        a: "307 (Temporary) and 308 (Permanent) strictly guarantee that the HTTP request method (e.g. POST, PUT, DELETE) and body are preserved across the redirect, preventing data loss."
      },
      {
        q: "How do I fix a 301 redirect loop in Nginx or Apache?",
        a: "Check your server configuration for conflicting rewrite rules, verify Cloudflare SSL mode (switch from Flexible to Full/Strict), and clear browser redirection caches."
      }
    ]
  },
  "4xx": {
    name: "4xx Client Errors",
    range: "400–451",
    tagline: "Client-Side Request Errors, Authentication & Routing",
    overview: "The 4xx (Client Error) class of status codes indicates that the client made an invalid or unauthorized request. These are the most common errors developers encounter during API development and frontend navigation.",
    whyImportant: "4xx errors cover critical application workflows including 404 missing routes (often solved with Nginx try_files for SPAs), 403 permission/CORS blocks, 401 expired JWT bearer tokens, 413 oversized file uploads, and 429 rate limiting.",
    debuggingTip: "Verify the outgoing request URL, check Authorization headers, inspect CORS Access-Control-Allow-Origin settings, and ensure web servers like Nginx are configured to route deep links to index.html.",
    faqs: [
      {
        q: "What causes 404 Not Found errors on React/Vue single-page app refresh?",
        a: "SPAs use client-side routing. When you refresh a deep link, the web server looks for a physical file at that path. Fix this by configuring Nginx 'try_files $uri $uri/ /index.html' or Apache .htaccess rewrite rules."
      },
      {
        q: "What is the difference between 401 Unauthorized and 403 Forbidden?",
        a: "401 Unauthorized means authentication is required (missing or invalid token). 403 Forbidden means the server knows who you are, but you do not have permission to access the resource."
      },
      {
        q: "How do I fix 413 Payload Too Large when uploading files?",
        a: "Increase the maximum allowed body size in your web server (e.g. 'client_max_body_size 50M;' in Nginx) and in your backend middleware (e.g. 'express.json({ limit: \"50mb\" })')."
      }
    ]
  },
  "5xx": {
    name: "5xx Server Errors",
    range: "500–511",
    tagline: "Backend Crashes, Upstream Proxies & Infrastructure Failures",
    overview: "The 5xx (Server Error) class of status codes indicates that the server failed to fulfill an apparently valid request due to an internal problem, upstream crash, or resource constraint.",
    whyImportant: "5xx errors directly impact site availability and business revenue. Quick resolution requires diagnosing unhandled application exceptions (500), Nginx upstream gateway connection drops (502), high traffic overload (503), and slow database query timeouts (504).",
    debuggingTip: "Always inspect server error logs (/var/log/nginx/error.log or PM2/Docker logs) first. Look for unhandled promise rejections, out-of-memory crashes, database connection pool exhaustion, or strict gateway proxy timeouts.",
    faqs: [
      {
        q: "How do I troubleshoot a 500 Internal Server Error?",
        a: "Check your backend application logs (Node.js, Python, PHP) and web server error logs for stack traces. 500 errors are almost always caused by unhandled exceptions or syntax errors in server configs."
      },
      {
        q: "What is the primary cause of 502 Bad Gateway in Nginx?",
        a: "502 Bad Gateway occurs when Nginx acts as a reverse proxy and cannot reach the upstream backend process because the backend is crashed, offline, or listening on the wrong port (e.g. Node.js process exited)."
      },
      {
        q: "How do I resolve a 504 Gateway Timeout error?",
        a: "Increase proxy timeouts in Nginx ('proxy_read_timeout 300s;'), optimize slow SQL database queries by adding indexes, and offload long-running operations to background job queues."
      }
    ]
  }
};

const ALL_CATEGORIES = ["1xx", "2xx", "3xx", "4xx", "5xx"];

export async function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({
    category: cat,
  }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://errorfixer.toolsofsaas.com";
  const catKey = `category-${category}`;
  const custom = siteMetadata[catKey];
  const info = CATEGORY_DETAILS[category];

  if (!info) {
    return { title: "Category Not Found | ErrorFixer" };
  }

  const title = custom?.title || `${info.name} HTTP Status Codes (${info.range}) – Fixes & Guide | ErrorFixer`;
  const description = custom?.description || `${info.overview.substring(0, 155)} Discover solutions for ${category} error codes in Nginx, Node.js, and React.`;

  return {
    title,
    description,
    keywords: custom?.keywords || [
      `${category} status codes`,
      `http ${category} errors list`,
      `fix ${category} errors`,
      `${category} troubleshooting guide`,
      "web development http status codes"
    ],
    alternates: {
      canonical: `${baseUrl}/category/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/category/${category}`,
      siteName: "ErrorFixer",
      images: [
        {
          url: `${baseUrl}/assets/brand_logo.png`,
          width: 1200,
          height: 630,
          alt: `${info.name} Status Codes - ErrorFixer`
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/assets/brand_logo.png`],
    }
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const info = CATEGORY_DETAILS[category];

  if (!info) {
    notFound();
  }

  const categoryErrors = errorsData.filter((err) => err.category === category);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://errorfixer.toolsofsaas.com";
  const pageUrl = `${baseUrl}/category/${category}`;

  // Structured Data Schemas
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${info.name} HTTP Status Codes (${info.range})`,
    "description": info.overview,
    "url": pageUrl,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": categoryErrors.map((err, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": `${err.code} ${err.title}`,
        "url": `${baseUrl}/${err.slug}`
      }))
    }
  };

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
        "name": `${info.name} Codes`,
        "item": pageUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": info.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  // Chunking for Ad banners
  const chunks = [];
  for (let i = 0; i < categoryErrors.length; i += 6) {
    chunks.push(categoryErrors.slice(i, i + 6));
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <nav aria-label="Breadcrumb" className="overflow-x-auto pb-2 whitespace-nowrap scrollbar-hide">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-on-surface-variant font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors flex items-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
              </li>
              <li><span className="text-outline-variant">/</span></li>
              <li className="text-foreground font-semibold" aria-current="page">
                {info.name} Codes
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="pt-6 sm:pt-14 pb-4 sm:pb-10 px-3 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-surface-high border border-outline-variant text-tertiary text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
            <span>Range: {info.range}</span>
            <span>•</span>
            <span>{categoryErrors.length} Status Codes</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-foreground mb-2.5 sm:mb-5 tracking-tight">
            {info.name} <span className="gradient-text">HTTP Codes</span>
          </h1>
          <p className="text-xs sm:text-base md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-3 sm:mb-6 leading-relaxed text-justify sm:text-center hyphens-auto">
            {info.overview}
          </p>
        </section>

        {/* Category Switcher Tabs */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-5 sm:mb-10">
          <div className="bg-surface-high border border-outline-variant p-2 sm:p-4 rounded-md glass shadow-xl">
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              <Link
                href="/"
                className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-md text-[11px] sm:text-sm font-mono font-bold bg-surface text-on-surface-variant border border-outline-variant hover:bg-surface-highest hover:text-foreground transition-all"
              >
                All Categories
              </Link>
              {ALL_CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  href={`/category/${cat}`}
                  className={`px-2.5 py-1 sm:px-4 sm:py-2 rounded-md text-[11px] sm:text-sm font-mono font-bold transition-all duration-300 border ${
                    category === cat
                      ? "bg-surface-highest text-tertiary border-tertiary shadow-[0_0_10px_rgba(76,215,246,0.2)]"
                      : "bg-surface text-on-surface-variant border-outline-variant hover:bg-surface-highest hover:text-foreground"
                  }`}
                >
                  {cat} Codes
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Error Cards Grid */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-10 sm:pb-16">
          <div className="space-y-4 sm:space-y-10">
            {chunks.map((chunk, chunkIdx) => (
              <div key={chunkIdx} className="space-y-4 sm:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 md:gap-6">
                  {chunk.map((err) => (
                    <ErrorCard key={err.code} error={err} />
                  ))}
                </div>
                {chunkIdx < chunks.length - 1 && (
                  <div className="w-full">
                    <div className="hidden md:block">
                      <AdBanner />
                    </div>
                    <div className="block md:hidden">
                      <AdBannerMobile />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Educational Deep Dive Section */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pb-12 sm:pb-24">
          <div className="bg-surface-low border border-outline-variant rounded-xl p-4 sm:p-8 sm:p-10 shadow-lg mb-6 sm:mb-10">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-primary-container text-white flex items-center justify-center font-mono text-xs sm:text-sm">💡</span>
              Understanding {info.name} Codes
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm md:text-base text-foreground/90 leading-relaxed text-justify hyphens-auto">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-tertiary mb-1 sm:mb-2">Why These Status Codes Matter</h3>
                <p>{info.whyImportant}</p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-primary mb-1 sm:mb-2">Diagnostic & Troubleshooting Strategy</h3>
                <p>{info.debuggingTip}</p>
              </div>
            </div>
          </div>

          {/* Category FAQ Accordion */}
          <div className="bg-surface-low border border-outline-variant rounded-xl p-4 sm:p-8 sm:p-10 shadow-lg mb-6 sm:mb-10">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-tertiary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Frequently Asked Questions About {category} Codes
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {info.faqs.map((faq, idx) => (
                <div key={idx} className="border border-outline-variant rounded-lg p-3 sm:p-5 sm:p-6 bg-surface-container">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1 sm:mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed text-justify hyphens-auto">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Banner after FAQ */}
          <div className="w-full mb-6 sm:mb-12">
            <div className="hidden md:block">
              <AdBanner />
            </div>
            <div className="block md:hidden">
              <AdBannerMobile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
