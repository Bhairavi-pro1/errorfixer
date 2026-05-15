"use client";
import { useState } from "react";

export default function AdvancedUseCases({ error }) {
  const useCases = error.advancedUseCases || [];
  const [copied, setCopied] = useState(null);

  if (useCases.length === 0) return null;

  const handleCopy = (code, idx) => {
    navigator.clipboard.writeText(code);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="advanced-use-cases" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        Advanced Use Cases
      </h2>
      <p className="text-on-surface-variant mb-6 leading-relaxed">
        Explore advanced scenarios, distributed system implementations, and infrastructure considerations for {error.code} errors.
      </p>

      <div className="space-y-8">
        {useCases.map((useCase, idx) => (
          <div key={idx} className="bg-surface-low border border-outline-variant rounded-lg overflow-hidden">
            <div className="px-5 py-4 border-b border-outline-variant bg-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="font-semibold text-foreground text-lg">{useCase.title}</h3>
            </div>
            
            <div className="p-5 space-y-6 bg-surface-container/30">
              {/* Scenario & How it works */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    Scenario
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{useCase.scenario}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    How it Works
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{useCase.howItWorks}</p>
                </div>
              </div>

              {/* Implementation Example */}
              {useCase.implementationExample && (
                <div>
                  <h4 className="font-medium text-foreground mb-3">{useCase.implementationExample.label || "Implementation Example"}</h4>
                  <div className="bg-[#0d1117] relative rounded-md overflow-hidden border border-outline-variant">
                    <div className="px-4 py-2 border-b border-outline-variant bg-[#161b22] flex justify-between items-center">
                      <span className="text-xs font-mono text-on-surface-variant">{useCase.implementationExample.lang}</span>
                      <button 
                        onClick={() => handleCopy(useCase.implementationExample.code, idx)}
                        className="p-1.5 rounded-md text-on-surface-variant hover:text-white transition-colors"
                        title="Copy code"
                      >
                        {copied === idx ? (
                          <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        )}
                      </button>
                    </div>
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-sm font-mono text-gray-300 leading-snug">
                        <code>{useCase.implementationExample.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Benefits & Best Practices */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCase.benefits && useCase.benefits.length > 0 && (
                  <div>
                    <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-on-surface-variant flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {useCase.bestPractices && useCase.bestPractices.length > 0 && (
                  <div>
                    <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Best Practices
                    </h4>
                    <ul className="space-y-2">
                      {useCase.bestPractices.map((practice, i) => (
                        <li key={i} className="text-sm text-on-surface-variant flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Developer Notes */}
              {useCase.developerNotes && useCase.developerNotes.length > 0 && (
                <div className="bg-surface-highest rounded-md p-4 border border-outline-variant">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Developer Notes
                  </h4>
                  <ul className="space-y-1">
                    {useCase.developerNotes.map((note, i) => (
                      <li key={i} className="text-sm text-on-surface-variant flex items-start gap-2">
                        <span className="text-tertiary mt-0.5">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Real World Example & Why Underrated */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCase.realWorldExample && (
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">Real World Example</h4>
                    <p className="text-sm text-on-surface-variant">{useCase.realWorldExample}</p>
                  </div>
                )}
                {useCase.whyUnderrated && (
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">Why It's Underrated</h4>
                    <p className="text-sm text-on-surface-variant">{useCase.whyUnderrated}</p>
                  </div>
                )}
              </div>

              {/* Security & Performance Impact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-outline-variant/50">
                {useCase.securityImpact && (
                  <div>
                    <h4 className="font-medium text-red-400 mb-1 text-sm flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Security Impact
                    </h4>
                    <p className="text-sm text-on-surface-variant">{useCase.securityImpact}</p>
                  </div>
                )}
                {useCase.performanceImpact && (
                  <div>
                    <h4 className="font-medium text-yellow-400 mb-1 text-sm flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Performance Impact
                    </h4>
                    <p className="text-sm text-on-surface-variant">{useCase.performanceImpact}</p>
                  </div>
                )}
              </div>

              {/* Advanced Architecture */}
              {useCase.advancedArchitecture && (
                <div className="bg-primary/5 rounded-md p-4 border border-primary/20">
                  <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Advanced Architecture: {useCase.advancedArchitecture.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant">{useCase.advancedArchitecture.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
