"use client";

import { useState } from "react";

// ─── FAQ data ────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is ErrorFixer and who is it for?",
    a: "ErrorFixer is a free, developer-focused reference tool that explains every HTTP status code — from 1xx informational responses all the way to 5xx server errors. It is built for web developers, backend engineers, DevOps teams, QA testers, and anyone who reads server logs or builds APIs. Whether you're a junior developer encountering your first 404 or a senior engineer chasing a subtle 503 intermittent failure, ErrorFixer gives you the context and actionable solutions you need — instantly.",
  },
  {
    q: "How do I look up a specific HTTP error code?",
    a: "Simply use the category filter buttons on this page (1xx, 2xx, 3xx, 4xx, 5xx) to narrow down the list, then click the error card that matches your code. Each error has its own dedicated page with a plain-English explanation, common causes, and copy-paste solutions for Node.js, React, Apache, and Nginx. You can also browse directly by URL — for example, errorfixer.com/404-not-found.",
  },
  {
    q: "Does ErrorFixer cover all HTTP status codes?",
    a: "Yes. ErrorFixer covers the full range of standardised HTTP status codes defined in RFC 9110 and related RFCs, including informational (1xx), success (2xx), redirection (3xx), client error (4xx), and server error (5xx) codes. We also include unofficial but widely used codes such as 418 I'm a Teapot and 429 Too Many Requests to give you a complete picture.",
  },
  {
    q: "Are the solutions specific to a particular tech stack?",
    a: "Each error page includes solutions tailored to the four most common environments: Node.js / Express, React (frontend fetch layer), Apache HTTP Server, and Nginx. We chose these because they cover the vast majority of real-world deployments. General, framework-agnostic advice is always listed first so the guidance remains useful regardless of your stack.",
  },
  {
    q: "What is the difference between a 4xx and a 5xx error?",
    a: "4xx errors are client-side problems — the request itself was malformed, unauthorised, or referencing something that doesn't exist. The server received the request and rejected it. 5xx errors are server-side problems — the request was valid but something went wrong while the server was trying to process it. Understanding this distinction helps you immediately know whether to look at your code (client) or your infrastructure (server) when debugging.",
  },
  {
    q: "Why do I keep seeing a 403 Forbidden error on my site?",
    a: "A 403 Forbidden error means the server understood the request but is refusing to fulfill it. The most common causes are incorrect file or directory permissions (especially on Linux servers), a Web Application Firewall (WAF) blocking the request, missing or misconfigured CORS headers, or a user lacking the required role or permission within your application. Visit the 403 Forbidden page on ErrorFixer for a full diagnosis checklist and platform-specific fixes.",
  },
  {
    q: "What causes a 500 Internal Server Error?",
    a: "A 500 Internal Server Error is a catch-all status code meaning the server encountered an unexpected condition that prevented it from fulfilling the request. Common culprits include unhandled exceptions in application code, database connection failures, misconfigured environment variables, syntax errors in server configuration files (like nginx.conf or .htaccess), and memory exhaustion. Always check your server-side logs first — they will almost always contain the exact error message and stack trace.",
  },
  {
    q: "How is ErrorFixer different from just reading MDN docs?",
    a: "MDN Web Docs is an authoritative reference for HTTP specifications and is excellent for understanding what a status code means in theory. ErrorFixer complements MDN by focusing on the practical 'why is this happening to me right now?' angle — real-world causes, debugging steps, and ready-to-use code snippets for specific environments. Think of MDN as the textbook and ErrorFixer as your on-call senior developer.",
  },
  {
    q: "Can ErrorFixer help me with API development and REST APIs?",
    a: "Absolutely. Proper HTTP status codes are a cornerstone of well-designed REST APIs. ErrorFixer helps API developers understand which codes to return in which situations — for example, returning 201 Created after a successful POST, 422 Unprocessable Entity for validation errors, and 429 Too Many Requests when rate-limiting. Using the correct status codes makes your API more predictable, easier to consume, and professional.",
  },
  {
    q: "Is there a way to search for an error code directly?",
    a: "Yes — you can type the numeric code or the status name directly into the search bar at the top of the page. The filter buttons also let you quickly isolate a category. For direct access, every error has a clean, predictable URL structure at errorfixer.com/[code]-[name] (e.g. /500-internal-server-error), which you can navigate to directly from your browser address bar or bookmark for quick reference.",
  },
  {
    q: "Does ErrorFixer explain informational (1xx) status codes too?",
    a: "Yes. While 1xx codes are rarely seen in browser consoles, they are critical in certain advanced scenarios — 100 Continue for large payload uploads, 101 Switching Protocols for WebSocket upgrades, and 103 Early Hints for modern performance optimisations. ErrorFixer documents all of them with the same level of detail as the more commonly encountered error codes.",
  },
  {
    q: "Is ErrorFixer free to use?",
    a: "Yes, ErrorFixer is completely free to use. There is no sign-up, no paywall, and no feature gating. Our goal is to make HTTP error troubleshooting instantly accessible to every developer, whether you're building your first side project or maintaining a large-scale production system. The site is supported by non-intrusive advertising, which keeps the content free for everyone.",
  },
];

// ─── How-to steps ────────────────────────────────────────────────────────────
const HOW_TO_STEPS = [
  {
    num: "01",
    title: "Spot the error code",
    desc: "HTTP status codes appear in browser DevTools (Network tab), server logs, API responses, and monitoring dashboards. Note the three-digit number — that's your starting point.",
  },
  {
    num: "02",
    title: "Filter by category",
    desc: "Use the category buttons above (1xx – 5xx) to narrow the list, or scroll through the cards to find your code. Each card shows the code, name, and a one-line summary.",
  },
  {
    num: "03",
    title: "Read the full diagnosis",
    desc: "Click any card to open the dedicated error page. You'll find a plain-English explanation, a list of the most common causes, and step-by-step solutions.",
  },
  {
    num: "04",
    title: "Apply the fix",
    desc: "Copy the relevant code snippet or configuration change for your stack (Node.js, React, Apache, or Nginx) and apply it. Most fixes take under five minutes.",
  },
];

// ─── Use-case cards ───────────────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: "🔍",
    title: "Debugging API Failures",
    desc: "When a third-party API returns an unexpected status, ErrorFixer tells you exactly what it means and what to check — no need to dig through vendor docs.",
  },
  {
    icon: "🚀",
    title: "Building REST APIs",
    desc: "Return the right status codes from the start. ErrorFixer is a quick reference for which code to use for creation, validation errors, authentication, and more.",
  },
  {
    icon: "🛡️",
    title: "Server Configuration",
    desc: "Troubleshoot Apache and Nginx misconfigurations causing 403, 502, or 504 errors with targeted, server-specific directive examples.",
  },
  {
    icon: "📋",
    title: "Code Reviews",
    desc: "Use ErrorFixer as a reference during PR reviews to verify that your team is returning semantically correct HTTP status codes throughout the codebase.",
  },
  {
    icon: "🎓",
    title: "Learning Web Fundamentals",
    desc: "Junior developers can use ErrorFixer to build a solid mental model of how HTTP works — a skill that compounds across every project and framework.",
  },
  {
    icon: "⚡",
    title: "Incident Response",
    desc: "When an on-call alert fires at 2 AM, ErrorFixer gives you instant clarity on what a status code means so you can triage faster and restore service sooner.",
  },
];

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────
function FAQItem({ item, index, openIdx, setOpenIdx }) {
  const isOpen = openIdx === index;
  return (
    <div className="border border-outline-variant rounded-md overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpenIdx(isOpen ? null : index)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-surface-low hover:bg-surface-high transition-colors duration-200 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-foreground text-sm md:text-base leading-snug">
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-5 h-5 text-tertiary transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 py-4 text-sm md:text-base text-on-surface-variant leading-relaxed border-t border-outline-variant bg-surface-container">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function HomeSEOContent() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="w-full bg-surface-low border-t border-outline-variant mt-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

        {/* ── What Is ErrorFixer ── */}
        <section aria-labelledby="what-is-errorfixer">
          <h2
            id="what-is-errorfixer"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-tight"
          >
            What Is <span className="gradient-text">ErrorFixer</span>?
          </h2>
          <div className="space-y-4 text-on-surface-variant leading-relaxed text-base md:text-lg">
            <p>
              ErrorFixer is a free, always-on HTTP status code reference designed for developers who need answers fast. When a broken request is blocking a deployment, slowing down a client demo, or waking you up with an on-call alert, you don't have time to wade through dry specification documents or generic Stack Overflow threads.
            </p>
            <p>
              Every one of the <strong className="text-foreground">60+ HTTP status codes</strong> in our database comes with a plain-English explanation, a list of the most common real-world causes, and ready-to-use solutions for the four most popular environments: <strong className="text-foreground">Node.js / Express, React, Apache HTTP Server</strong>, and <strong className="text-foreground">Nginx</strong>. The content is written by developers, for developers — no marketing fluff, no paywalls, no sign-up required.
            </p>
            <p>
              Whether you're debugging a REST API, configuring a web server, setting up a reverse proxy, or just learning how the web works under the hood, ErrorFixer is the reference you'll want bookmarked alongside your IDE.
            </p>
          </div>
        </section>

        {/* ── How to Use ── */}
        <section aria-labelledby="how-to-use-errorfixer">
          <h2
            id="how-to-use-errorfixer"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 tracking-tight"
          >
            How to Use <span className="gradient-text">ErrorFixer</span>
          </h2>
          <p className="text-on-surface-variant mb-10 text-base md:text-lg leading-relaxed">
            Getting from error code to working fix takes four simple steps.
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
            {HOW_TO_STEPS.map((step) => (
              <li
                key={step.num}
                className="bg-surface-container border border-outline-variant rounded-md p-6 relative overflow-hidden group hover:border-primary/40 transition-colors duration-300"
              >
                <span className="absolute top-4 right-5 text-5xl font-display font-black text-primary/10 select-none group-hover:text-primary/15 transition-colors">
                  {step.num}
                </span>
                <h3 className="text-lg font-display font-bold text-foreground mb-2 relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Why ErrorFixer ── */}
        <section aria-labelledby="why-errorfixer">
          <h2
            id="why-errorfixer"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-tight"
          >
            Why Choose <span className="gradient-text">ErrorFixer</span>?
          </h2>
          <div className="space-y-4 text-on-surface-variant leading-relaxed text-base md:text-lg mb-8">
            <p>
              HTTP status codes are a foundational layer of the web. Every browser, every API, every load balancer, and every mobile app communicates using them — yet they are often misunderstood or looked up on the fly. A mishandled status code can mean silent data loss, degraded user experience, broken integrations, or a SEO ranking hit that takes months to recover from.
            </p>
            <p>
              The official HTTP specifications (RFC 9110 and its predecessors) are comprehensive but dense. Searching for answers on forums gives you a mix of correct, outdated, and outright wrong information. ErrorFixer bridges that gap: <strong className="text-foreground">specification-accurate content</strong> presented in a <strong className="text-foreground">practical, actionable format</strong> that saves you time every single day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Status codes covered", value: "60+" },
              { label: "Tech stacks supported", value: "4" },
              { label: "Always free", value: "100%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-high border border-outline-variant rounded-md p-6 text-center"
              >
                <div className="text-4xl font-display font-black gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-on-surface-variant font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section aria-labelledby="use-cases">
          <h2
            id="use-cases"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 tracking-tight"
          >
            Common <span className="gradient-text">Use Cases</span>
          </h2>
          <p className="text-on-surface-variant mb-10 text-base md:text-lg leading-relaxed">
            ErrorFixer fits naturally into every part of the development lifecycle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="bg-surface-container border border-outline-variant rounded-md p-6 hover:bg-surface-high hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{uc.icon}</div>
                <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {uc.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Understanding HTTP Status Code Categories ── */}
        <section aria-labelledby="http-categories">
          <h2
            id="http-categories"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-tight"
          >
            Understanding HTTP Status Code{" "}
            <span className="gradient-text">Categories</span>
          </h2>
          <div className="space-y-4 text-on-surface-variant leading-relaxed text-base md:text-lg mb-8">
            <p>
              The HTTP protocol organises status codes into five classes, each identified by its leading digit. Knowing which class a code belongs to immediately tells you the nature of the problem and where to look for the solution.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                range: "1xx",
                name: "Informational",
                color: "text-blue-400",
                border: "border-blue-500/30",
                bg: "bg-blue-500/5",
                desc: "Provisional responses that indicate the request was received and the process is continuing. You rarely see these in browser consoles, but they are important in WebSocket upgrades (101) and large-payload workflows (100).",
              },
              {
                range: "2xx",
                name: "Success",
                color: "text-green-400",
                border: "border-green-500/30",
                bg: "bg-green-500/5",
                desc: "The request was successfully received, understood, and accepted. 200 OK is the most common, but 201 Created, 204 No Content, and 206 Partial Content each carry specific semantic meaning that well-designed APIs rely on.",
              },
              {
                range: "3xx",
                name: "Redirection",
                color: "text-yellow-400",
                border: "border-yellow-500/30",
                bg: "bg-yellow-500/5",
                desc: "Further action must be taken to complete the request. Redirects are critical for SEO (301 vs 302), maintaining method integrity (307/308), and efficient caching (304 Not Modified).",
              },
              {
                range: "4xx",
                name: "Client Error",
                color: "text-orange-400",
                border: "border-orange-500/30",
                bg: "bg-orange-500/5",
                desc: "The request contained bad syntax or cannot be fulfilled by the server. The problem is on the client side. Common examples include 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, and 429 Too Many Requests.",
              },
              {
                range: "5xx",
                name: "Server Error",
                color: "text-red-400",
                border: "border-red-500/30",
                bg: "bg-red-500/5",
                desc: "The server failed to fulfil a valid request. These indicate infrastructure or application bugs: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, and 504 Gateway Timeout are the most frequently encountered in production systems.",
              },
            ].map((cat) => (
              <div
                key={cat.range}
                className={`flex gap-4 items-start p-5 rounded-md border ${cat.border} ${cat.bg}`}
              >
                <span
                  className={`font-mono font-black text-lg flex-shrink-0 w-10 pt-0.5 ${cat.color}`}
                >
                  {cat.range}
                </span>
                <div>
                  <span className={`font-display font-bold text-base ${cat.color}`}>
                    {cat.name}
                  </span>
                  <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq">
          <h2
            id="faq"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 tracking-tight"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-on-surface-variant mb-10 text-base md:text-lg leading-relaxed">
            Everything you need to know about HTTP status codes and ErrorFixer.
          </p>
          <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
            {FAQS.map((item, i) => (
              <div
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <meta itemProp="name" content={item.q} />
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <meta itemProp="text" content={item.a} />
                </div>
                <FAQItem
                  item={item}
                  index={i}
                  openIdx={openIdx}
                  setOpenIdx={setOpenIdx}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="bg-surface-high border border-outline-variant rounded-md p-8 md:p-12 text-center glass"
        >
          <h2
            id="cta-heading"
            className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3"
          >
            Ready to fix your next error?
          </h2>
          <p className="text-on-surface-variant mb-6 max-w-xl mx-auto leading-relaxed">
            Scroll up to browse all HTTP status codes or use the category filter to jump straight to the error class you're investigating.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("category-filters");
              if (el) {
                const y =
                  el.getBoundingClientRect().top + window.scrollY - 90;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-semibold text-white bg-gradient-btn hover:opacity-90 transition-opacity duration-200 shadow-lg"
          >
            Browse Error Codes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" transform="rotate(180 12 12)" />
            </svg>
          </button>
        </section>

      </div>
    </div>
  );
}
