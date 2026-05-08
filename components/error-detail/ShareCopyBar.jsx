"use client";
import { useState, useEffect } from "react";

export default function ShareCopyBar({ error }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${error.code} ${error.title} - ErrorFixer`,
          text: `Check out this complete troubleshooting guide for the ${error.code} error.`,
          url: url,
        });
      } catch (err) {
        console.error("Error sharing", err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-outline-variant">
      <button 
        onClick={handleCopy}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-low border border-outline-variant text-sm font-medium text-on-surface-variant hover:text-foreground transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        {copied ? 'Copied URL!' : 'Copy Link'}
      </button>

      <button 
        onClick={handleShare}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-low border border-outline-variant text-sm font-medium text-on-surface-variant hover:text-foreground transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        Share
      </button>
      
      <div className="flex-1"></div>
      
      <span className="text-xs text-on-surface-variant bg-surface-highest px-3 py-1.5 rounded-full border border-outline-variant">
        {error.readingTime || '8 min read'}
      </span>
    </div>
  );
}
