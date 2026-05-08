"use client";
import { useState } from "react";

export default function AdvancedFixes({ error }) {
  const fixes = error.advancedFixes || [];
  const [copied, setCopied] = useState(null);

  if (fixes.length === 0) return null;

  const handleCopy = (code, idx) => {
    navigator.clipboard.writeText(code);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="advanced-fixes" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-on-secondary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        Advanced Developer Fixes
      </h2>
      <p className="text-on-surface-variant mb-6 leading-relaxed">
        If you have server access, you can implement these backend configurations or middleware patterns to handle or prevent {error.code} errors.
      </p>

      <div className="space-y-6">
        {fixes.map((fix, idx) => (
          <div key={idx} className="bg-surface-low border border-outline-variant rounded-lg overflow-hidden">
            <div className="px-5 py-4 border-b border-outline-variant bg-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="font-semibold text-foreground text-lg">{fix.title}</h3>
              <span className="px-2 py-1 bg-surface-highest text-on-surface-variant text-xs font-mono rounded inline-block self-start sm:self-auto">
                {fix.lang}
              </span>
            </div>
            
            {(fix.note || fix.warning) && (
              <div className="px-5 py-4 space-y-3 bg-surface-container/50">
                {fix.note && (
                  <p className="text-sm text-foreground/80 flex items-start gap-2">
                    <svg className="w-4 h-4 text-tertiary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{fix.note}</span>
                  </p>
                )}
                {fix.warning && (
                  <p className="text-sm text-red-400 flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span><strong>Warning:</strong> {fix.warning}</span>
                  </p>
                )}
              </div>
            )}

            <div className="bg-[#0d1117] relative">
              <button 
                onClick={() => handleCopy(fix.code, idx)}
                className="absolute top-3 right-3 p-1.5 rounded-md bg-[#161b22] text-on-surface-variant hover:text-white border border-outline-variant transition-colors"
                title="Copy code"
              >
                {copied === idx ? (
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                )}
              </button>
              <div className="p-5 overflow-x-auto">
                <pre className="text-sm font-mono text-gray-300 leading-snug">
                  <code>{fix.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
