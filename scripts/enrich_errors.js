const fs = require('fs');
const path = require('path');

const errorsPath = path.join(__dirname, '../data/errors.json');
const rawData = fs.readFileSync(errorsPath, 'utf8');
const errors = JSON.parse(rawData);

function generateSEOContent(error) {
  const { code, title, shortDescription, category } = error;
  
  // Base properties depending on category
  let errorType = "Client Error";
  let severity = "Medium";
  let difficultyLevel = "Medium";
  let sideType = "Client-side";
  let isRecoverable = true;
  let estimatedFixTime = "15-30 min";
  
  if (category === "1xx") {
    errorType = "Informational";
    severity = "Low";
    difficultyLevel = "Easy";
    sideType = "Server-side";
    estimatedFixTime = "None";
  } else if (category === "2xx") {
    errorType = "Success";
    severity = "Low";
    difficultyLevel = "Easy";
    sideType = "Server-side";
    estimatedFixTime = "None";
  } else if (category === "3xx") {
    errorType = "Redirection";
    severity = "Low";
    difficultyLevel = "Easy";
    sideType = "Client/Server";
    estimatedFixTime = "5-10 min";
  } else if (category === "4xx") {
    errorType = "Client Error";
    severity = "High";
    difficultyLevel = "Medium";
    sideType = "Client-side";
    estimatedFixTime = "10-45 min";
  } else if (category === "5xx") {
    errorType = "Server Error";
    severity = "Critical";
    difficultyLevel = "Hard";
    sideType = "Server-side";
    estimatedFixTime = "30-120 min";
  }

  // Common related errors to link to
  const allSlugs = errors.map(e => e.slug);
  const relatedErrors = allSlugs
    .filter(slug => slug.startsWith(category[0]) && slug !== error.slug)
    .slice(0, 4);
    
  if (relatedErrors.length === 0) {
    relatedErrors.push("404-not-found", "500-internal-server-error", "403-forbidden");
  }

  // --- Overview ---
  const overview = {
    what: `The HTTP ${code} ${title} status code indicates that ${shortDescription.toLowerCase().replace(/\.$/, '')}. In the context of web communication, this is a standard response from the server indicating the specific state of your request.`,
    why: `This typically occurs when a client makes a request that ${category.startsWith('4') ? 'contains invalid data, lacks credentials, or requests a non-existent resource' : category.startsWith('5') ? 'the server fails to process due to internal misconfigurations, crashes, or upstream timeouts' : 'triggers a specific protocol state'}. The server responds with ${code} to inform the client of the outcome.`,
    where: `You will commonly encounter the ${code} error in browser network tabs, API response payloads, server error logs (like Apache or Nginx), and uptime monitoring tools. It affects both direct user navigation and background AJAX/fetch requests.`,
    sideType: sideType,
    impact: `If left unresolved, a ${code} error can lead to degraded user experience, blocked workflows, and potential negative impacts on SEO if search engine crawlers consistently encounter it on public-facing pages.`
  };

  // --- Symptoms ---
  const symptoms = [
    `The web browser displays a generic or custom "${code} ${title}" error page.`,
    `API requests return a response payload containing a ${code} status code.`,
    `Frontend applications may show a "failed to load data" or "network error" toast notification.`,
    `Server access logs record requests terminating with the ${code} status.`,
    `Monitoring systems and webhooks trigger alerts for elevated ${code} error rates.`
  ];

  // --- Detailed Causes ---
  const detailedCauses = [
    {
      title: "Misconfigured Server Settings",
      explanation: `The server processing the request may have incorrect routing rules, strict security policies, or syntax errors in its configuration files that force it to return a ${code} status.`,
      example: "An Nginx location block might lack the correct proxy_pass directive, or an Apache .htaccess file might have a typo.",
      severity: "High"
    },
    {
      title: "Client-Side Request Malformation",
      explanation: `The application sending the request might be appending invalid headers, using an unsupported HTTP method, or lacking necessary authentication tokens.`,
      example: "A React application making a fetch request without including the required 'Authorization: Bearer <token>' header.",
      severity: "Medium"
    },
    {
      title: "Upstream Service Failures",
      explanation: `If your architecture involves microservices or reverse proxies, the upstream server might be timing out, crashing, or returning unexpected data.`,
      example: "A Node.js backend attempting to query a database that is currently offline or unreachable.",
      severity: "Critical"
    },
    {
      title: "Network & DNS Anomalies",
      explanation: `Issues related to DNS resolution, CDN caching layers, or strict corporate firewalls can intercept and reject requests before they reach the actual application logic.`,
      example: "A CDN returning a cached error state because the origin server was briefly down during the last cache refresh.",
      severity: "Medium"
    }
  ];

  // --- Step-by-Step Solutions ---
  const stepByStepSolutions = [
    {
      step: 1,
      title: "Verify Request Parameters and Headers",
      description: `Before diving into server configs, ensure that the outgoing request is perfectly formatted. Check the URL path, query parameters, HTTP method, and necessary headers (like Content-Type and Authorization).`,
      whyItWorks: `Eliminating client-side formatting issues is the fastest way to resolve request-based errors, as servers are strict about HTTP specification compliance.`,
      expectedResult: `If the request was malformed, correcting it will result in a successful 2xx response.`,
      codeBlocks: [
        {
          lang: "javascript",
          label: "Fetch Example",
          code: `fetch('https://api.example.com/data', {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Bearer YOUR_TOKEN'\n  }\n})\n.then(res => {\n  if(!res.ok) throw new Error(\`HTTP error! status: \${res.status}\`);\n  return res.json();\n});`
        }
      ]
    },
    {
      step: 2,
      title: "Inspect Server and Error Logs",
      description: `Access your server's diagnostic logs to find the exact stack trace or error message associated with the request that generated the ${code} status.`,
      whyItWorks: `Logs provide the exact context—such as a missing file, a database connection timeout, or a syntax error—that generic HTTP status codes obscure.`,
      expectedResult: `You will find a specific error message guiding you to the exact line of code or configuration directive causing the issue.`,
      codeBlocks: [
        {
          lang: "bash",
          label: "Nginx Logs",
          code: `tail -f /var/log/nginx/error.log`
        },
        {
          lang: "bash",
          label: "Apache Logs",
          code: `tail -f /var/log/apache2/error.log`
        }
      ]
    },
    {
      step: 3,
      title: "Review Application Routing Logic",
      description: `Ensure that your application framework (e.g., Express, Django, Laravel) is correctly matching the incoming route and has the required controller logic implemented.`,
      whyItWorks: `Frameworks will automatically return specific errors (like 404 or 405) if they cannot find a matching route definition or controller method for the request.`,
      expectedResult: `Adding or fixing the route definition will allow the framework to process the request normally.`,
      codeBlocks: [
        {
          lang: "javascript",
          label: "Express.js Route",
          code: `app.get('/api/resource', (req, res) => {\n  // Implementation here\n  res.status(200).json({ success: true });\n});`
        }
      ]
    },
    {
      step: 4,
      title: "Clear Caches and Flush DNS",
      description: `If you have recently made changes to your server or DNS records, your local machine, browser, or a middleman CDN might be serving a stale error page. Clear all intermediary caches.`,
      whyItWorks: `Clearing caches forces a fresh request to be sent all the way to the origin server, bypassing any outdated state.`,
      expectedResult: `The fresh request will reach the updated server logic, potentially resolving the error.`,
      codeBlocks: [
        {
          lang: "bash",
          label: "Windows DNS Flush",
          code: `ipconfig /flushdns`
        },
        {
          lang: "bash",
          label: "macOS DNS Flush",
          code: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
        }
      ]
    }
  ];

  // --- Advanced Fixes ---
  const advancedFixes = [
    {
      title: "Nginx Reverse Proxy Configuration",
      lang: "nginx",
      code: `server {\n    listen 80;\n    server_name example.com;\n\n    location / {\n        proxy_pass http://localhost:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        \n        # Handle specific errors\n        proxy_intercept_errors on;\n        error_page ${code} /custom_${code}.html;\n    }\n}`,
      note: `Ensure that the upstream service (localhost:3000) is running and accessible. Intercepting errors allows Nginx to serve custom error pages.`,
      warning: `Always test your configuration using 'nginx -t' before reloading the service.`
    },
    {
      title: "Apache .htaccess Error Handling",
      lang: "apache",
      code: `RewriteEngine On\n# Custom Error Document definition\nErrorDocument ${code} /errors/${code}.html\n\n# Ensure correct permissions are granted\n<Directory /var/www/html>\n    AllowOverride All\n    Require all granted\n</Directory>`,
      note: `Place this in your site's root .htaccess file to gracefully handle ${code} scenarios with a branded page.`,
      warning: `Mod_rewrite must be enabled on your Apache server for rewrite rules to function.`
    },
    {
      title: "Node.js Global Error Middleware",
      lang: "javascript",
      code: `app.use((err, req, res, next) => {\n  console.error(err.stack);\n  const status = err.status || ${category.startsWith('5') ? 500 : 400};\n  res.status(status).json({\n    error: {\n      message: err.message || 'An unexpected error occurred',\n      status: status\n    }\n  });\n});`,
      note: `This middleware catches exceptions thrown in earlier routes and normalizes the API response structure.`,
      warning: `Do not expose stack traces to the client in a production environment.`
    }
  ];

  // --- Platform Fixes ---
  const platformFixes = {
    Windows: [
      "Open Command Prompt as Administrator and run 'ipconfig /flushdns' to clear stale DNS records.",
      "Check Windows Defender Firewall rules that might be blocking outbound port access.",
      "Clear browser cache by pressing Ctrl + Shift + Del."
    ],
    macOS: [
      "Open Terminal and run 'sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder' to reset DNS.",
      "Check the Network Utility or Activity Monitor for rogue processes consuming ports.",
      "Clear Safari cache via the Develop menu."
    ],
    Linux: [
      "Restart the networking service: 'sudo systemctl restart NetworkManager'.",
      "Verify iptables or ufw rules are not dropping packets unexpectedly.",
      "Check system logs using 'journalctl -xe' for underlying OS-level failures."
    ],
    Android: [
      "Go to Settings > Apps > [Your Browser] > Storage > Clear Cache.",
      "Toggle Airplane mode on and off to reset the mobile network connection.",
      "Try accessing the site via a different Wi-Fi network or cellular data."
    ],
    iOS: [
      "Navigate to Settings > Safari > Clear History and Website Data.",
      "Restart the device if network settings appear stuck or unresponsive.",
      "Disable any active VPN configurations temporarily to isolate the issue."
    ],
    Chrome: [
      "Navigate to 'chrome://net-internals/#dns' and click 'Clear host cache'.",
      "Disable all extensions, especially ad-blockers and privacy shields, to see if they interfere.",
      "Open an Incognito window (Ctrl + Shift + N) to test without local state."
    ],
    Firefox: [
      "Navigate to 'about:networking#dns' and click 'Clear DNS Cache'.",
      "Restart Firefox in Troubleshoot Mode (Safe Mode) to disable all add-ons temporarily.",
      "Clear Recent History specifically targeting 'Cache' and 'Offline Website Data'."
    ],
    Edge: [
      "Navigate to 'edge://settings/clearBrowserData' and wipe cached images and files.",
      "Ensure 'Tracking prevention' is not set to 'Strict', which can break some site functionalities.",
      "Open an InPrivate window to test the connection without stored cookies."
    ]
  };

  // --- Variations ---
  const variations = [
    { name: `HTTP ${code} ${title}`, slug: error.slug },
    { name: `Soft ${code} Error`, slug: error.slug },
    { name: `NGINX ${code} Gateway Error`, slug: error.slug },
    { name: `API Request Failed with ${code}`, slug: error.slug }
  ];

  // --- Prevention Tips ---
  const preventionTips = [
    "Implement comprehensive automated testing (unit, integration, and e2e) in your CI/CD pipeline.",
    "Utilize robust monitoring and alerting tools like Datadog, New Relic, or Sentry to catch anomalies early.",
    "Keep all server software, frameworks, and third-party dependencies updated to their latest stable versions.",
    "Enforce strict validation on all incoming client payloads to prevent malformed data from crashing backend services.",
    "Configure appropriate timeouts and retry logic with exponential backoff for all external network requests."
  ];

  // --- Real World Scenarios ---
  const realWorldScenarios = [
    {
      title: `${code} Error After Deployment`,
      description: `A new version of the application was deployed, but environment variables were missing or a database migration failed to run, causing the server to respond with a ${code} status to all incoming requests.`
    },
    {
      title: `${code} Only on Specific Devices`,
      description: `Users on mobile networks experience the ${code} error while desktop users on broadband do not, indicating a potential issue with request timeouts, MTU sizes, or aggressive mobile carrier caching proxies.`
    },
    {
      title: `Intermittent ${code} Spikes During High Traffic`,
      description: `The error only appears during peak usage hours when the server runs out of available memory or database connection pool limits are exhausted, resulting in a cascade of ${code} failures.`
    }
  ];

  // --- FAQ ---
  const faq = [
    {
      q: `How do I quickly fix the ${code} ${title} error?`,
      a: `The fastest way to troubleshoot a ${code} error is to first determine if it's a client or server issue. If it's a 4xx error, double-check your request URL, headers, and payload. If it's a 5xx error, check your server error logs immediately to find the root cause.`
    },
    {
      q: `Is the ${code} error dangerous to my website's security?`,
      a: `Typically, standard HTTP status codes like ${code} are not inherently dangerous; they are expected protocol behaviors. However, they might indicate an underlying vulnerability or misconfiguration if they are unexpected or expose stack traces to the public.`
    },
    {
      q: `Can antivirus software or firewalls cause a ${code} error?`,
      a: `Yes. Aggressive local antivirus software or corporate firewalls can intercept HTTP traffic, modify headers, or block requests entirely, leading the browser or application to surface a ${code} or similar network error.`
    },
    {
      q: `Does clearing my browser cache resolve the ${code} error?`,
      a: `If the ${code} response was erroneously cached by your browser or a CDN, clearing the cache forces a fresh request to the server, which may resolve the issue if the origin server has already been fixed.`
    },
    {
      q: `Will a ${code} error affect my SEO rankings?`,
      a: `Consistent client or server errors on public-facing URLs will negatively impact SEO. Search engine crawlers will flag the pages as inaccessible or broken, which can lead to de-indexing or lowered rankings over time.`
    }
  ];

  // --- Dev Notes ---
  const devNotes = {
    httpHeaders: `HTTP/1.1 ${code} ${title}\nContent-Type: application/json\nConnection: close\nDate: ${new Date().toUTCString()}`,
    responseExample: `{\n  "error": {\n    "code": ${code},\n    "message": "${title}",\n    "details": "The request could not be completed successfully."\n  }\n}`,
    relatedRFCs: [
      "RFC 9110: HTTP Semantics",
      "RFC 7231: Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content"
    ]
  };

  return {
    ...error,
    severity,
    errorType,
    difficultyLevel,
    isRecoverable,
    estimatedFixTime,
    affectedPlatforms: ["All Browsers", "Web Servers", "APIs", "Mobile Apps"],
    readingTime: "8 min",
    overview,
    symptoms,
    detailedCauses,
    stepByStepSolutions,
    advancedFixes,
    platformFixes,
    variations,
    preventionTips,
    realWorldScenarios,
    faq,
    devNotes,
    relatedErrors
  };
}

const enrichedErrors = errors.map(generateSEOContent);

// Specific custom content for highly popular errors to make them stand out
const specialErrors = ['404-not-found', '500-internal-server-error', '403-forbidden', '502-bad-gateway', '503-service-unavailable', '400-bad-request', '401-unauthorized'];

specialErrors.forEach(slug => {
  const index = enrichedErrors.findIndex(e => e.slug === slug);
  if (index !== -1) {
    enrichedErrors[index].overview.impact = "This is one of the most highly visible and critical errors on the internet. It severely damages user trust, significantly impacts SEO rankings if left unresolved, and causes direct revenue loss in e-commerce applications.";
    enrichedErrors[index].readingTime = "12 min";
    enrichedErrors[index].difficultyLevel = slug.startsWith('5') ? 'Hard' : 'Easy';
  }
});

fs.writeFileSync(errorsPath, JSON.stringify(enrichedErrors, null, 2));
console.log('Successfully enriched errors.json with Phase 1 SEO data!');
