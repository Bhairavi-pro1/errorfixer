"use client";
import { useState } from "react";

export default function DevNotes({ error }) {
  if (!error.devNotes) return null;
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="dev-notes" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        Developer Notes
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Headers */}
        {error.devNotes.httpHeaders && (
          <div className="bg-[#0d1117] rounded-lg overflow-hidden border border-outline-variant shadow-sm">
            <div className="px-4 py-2 bg-[#161b22] border-b border-outline-variant flex justify-between items-center">
              <span className="text-xs font-mono text-on-surface-variant font-semibold">HTTP Headers Example</span>
              <button onClick={() => handleCopy(error.devNotes.httpHeaders, 'headers')} className="text-xs text-on-surface-variant hover:text-white transition-colors">
                {copied === 'headers' ? <span className="text-green-400">Copied!</span> : 'Copy'}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-gray-300 leading-snug"><code>{error.devNotes.httpHeaders}</code></pre>
            </div>
          </div>
        )}

        {/* Response */}
        {error.devNotes.responseExample && (
          <div className="bg-[#0d1117] rounded-lg overflow-hidden border border-outline-variant shadow-sm">
            <div className="px-4 py-2 bg-[#161b22] border-b border-outline-variant flex justify-between items-center">
              <span className="text-xs font-mono text-on-surface-variant font-semibold">JSON Response Example</span>
              <button onClick={() => handleCopy(error.devNotes.responseExample, 'response')} className="text-xs text-on-surface-variant hover:text-white transition-colors">
                {copied === 'response' ? <span className="text-green-400">Copied!</span> : 'Copy'}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-gray-300 leading-snug"><code>{error.devNotes.responseExample}</code></pre>
            </div>
          </div>
        )}
      </div>

      {error.devNotes.relatedRFCs && error.devNotes.relatedRFCs.length > 0 && (
        <div className="mt-6 bg-surface-low p-5 rounded-md border border-outline-variant inline-block w-full">
          <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2 uppercase tracking-wider">
            <svg className="w-4 h-4 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Official Specifications
          </h4>
          <ul className="flex flex-wrap gap-2">
            {error.devNotes.relatedRFCs.map((rfc, idx) => (
              <li key={idx} className="bg-surface-highest px-3 py-1.5 rounded text-sm text-foreground/90 border border-outline-variant font-mono hover:border-primary transition-colors cursor-default">
                {rfc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
