"use client";
import { useState } from "react";

export default function StepByStepSolutions({ error }) {
  const steps = error.stepByStepSolutions || [];
  const [copied, setCopied] = useState(null);
  
  if (steps.length === 0) return null;

  const handleCopy = (code, idx) => {
    navigator.clipboard.writeText(code);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="solutions" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 border-b border-outline-variant pb-2">
        <span className="w-8 h-8 rounded-md bg-primary-container flex items-center justify-center border border-outline-variant text-white font-mono text-sm shadow-sm">!</span>
        Step-by-Step Solutions
      </h2>
      <p className="text-on-surface-variant mb-8 leading-relaxed">
        Follow these step-by-step instructions to resolve the {error.code} error. Start with the first step and proceed sequentially.
      </p>
      
      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-surface-container rounded-lg border border-outline-variant p-6 relative overflow-hidden group shadow-md transition-shadow hover:shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none -mr-16 -mt-16"></div>
            
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 relative z-10">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-highest text-tertiary font-mono text-lg font-bold flex items-center justify-center border border-tertiary/30 shadow-[0_0_15px_rgba(76,215,246,0.15)]">
                {step.step || idx + 1}
              </span>
              <div className="flex-1 min-w-0 w-full">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/90 mb-5 leading-relaxed text-base">{step.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface-low p-4 rounded-md border border-outline-variant/50">
                    <h4 className="text-xs font-bold text-tertiary uppercase tracking-wider mb-2 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Why this works
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{step.whyItWorks}</p>
                  </div>
                  <div className="bg-surface-low p-4 rounded-md border border-outline-variant/50">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Expected result
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{step.expectedResult}</p>
                  </div>
                </div>

                {step.codeBlocks && step.codeBlocks.length > 0 && (
                  <div className="space-y-4">
                    {step.codeBlocks.map((block, bIdx) => {
                      const blockId = `${idx}-${bIdx}`;
                      return (
                        <div key={bIdx} className="bg-[#0d1117] rounded-md overflow-hidden border border-outline-variant relative">
                          <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-outline-variant">
                            <span className="text-xs font-mono text-on-surface-variant font-semibold">{block.label || block.lang}</span>
                            <button 
                              onClick={() => handleCopy(block.code, blockId)}
                              className="text-xs font-medium text-on-surface-variant hover:text-white transition-colors flex items-center gap-1"
                            >
                              {copied === blockId ? (
                                <>
                                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                  Copy
                                </>
                              )}
                            </button>
                          </div>
                          <div className="p-4 overflow-x-auto">
                            <pre className="text-sm font-mono text-gray-300 leading-snug">
                              <code>{block.code}</code>
                            </pre>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
