"use client";
import { useState, useEffect } from "react";

export default function HelpfulVoting({ error }) {
  const [vote, setVote] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(`vote_${error.slug}`);
    if (saved) setVote(saved);
  }, [error.slug]);

  const handleVote = (type) => {
    setVote(type);
    localStorage.setItem(`vote_${error.slug}`, type);
    // In a real app, send to API here
  };

  return (
    <section className="mb-12 py-8 border-y border-outline-variant text-center bg-surface-low rounded-lg mt-8">
      <h3 className="text-lg font-bold text-foreground mb-4">Was this troubleshooting guide helpful?</h3>
      <div className="flex justify-center gap-4">
        <button 
          onClick={() => handleVote('up')}
          className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all ${
            vote === 'up' 
              ? 'bg-green-400/20 border-green-400/50 text-green-400' 
              : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-high'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          Yes
        </button>
        <button 
          onClick={() => handleVote('down')}
          className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all ${
            vote === 'down' 
              ? 'bg-red-400/20 border-red-400/50 text-red-400' 
              : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-high'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
          </svg>
          No
        </button>
      </div>
      {vote && (
        <p className="mt-4 text-sm text-tertiary animate-pulse">Thank you for your feedback!</p>
      )}
    </section>
  );
}
