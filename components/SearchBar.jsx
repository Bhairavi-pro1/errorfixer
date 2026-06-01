"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import errorsData from "../data/errors.json";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const wrapperRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (query.trim().length > 0) {
      const lowerQuery = query.toLowerCase().trim();
      
      const scoredResults = errorsData
        .map(err => {
          const errCodeStr = err.code.toString();
          const errTitleLower = err.title.toLowerCase();
          let score = 0;
          
          // 1. Exact matches (Highest priority)
          if (lowerQuery === errCodeStr) {
            score += 100;
          } else if (lowerQuery === errTitleLower) {
            score += 90;
          } else {
            // 2. Whole word/phrase matches within the query
            const escapedTitle = errTitleLower.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const titleRegex = new RegExp(`\\b${escapedTitle}\\b`, 'i');
            const codeRegex = new RegExp(`\\b${errCodeStr}\\b`);
            
            if (codeRegex.test(lowerQuery)) {
              score += 80;
            }
            if (titleRegex.test(lowerQuery)) {
              score += 70;
            }
            
            // 3. Substring matches (Handles cases when user is still typing, e.g. "40", "bad req")
            if (errTitleLower.includes(lowerQuery)) {
              score += 50;
            } else if (errCodeStr.includes(lowerQuery)) {
              score += 40;
            }
            
            // 4. Variation matches (e.g. "HTTP 400 Bad Request")
            if (err.variations && err.variations.length > 0) {
              err.variations.forEach(v => {
                const vNameLower = v.name.toLowerCase();
                if (lowerQuery === vNameLower) {
                  score += 60;
                } else if (new RegExp(`\\b${vNameLower.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i').test(lowerQuery)) {
                  score += 45;
                } else if (vNameLower.includes(lowerQuery)) {
                  score += 30;
                }
              });
            }
            
            // 5. Description matching (Fallback)
            if (err.shortDescription.toLowerCase().includes(lowerQuery)) {
              score += 10;
            }
          }
          
          return { err, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.err);

      setFilteredResults(scoredResults.slice(0, 5));
    } else {
      setFilteredResults([]);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (slug) => {
    setQuery("");
    setIsFocused(false);
    router.push(`/${slug}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && filteredResults.length > 0) {
      handleResultClick(filteredResults[0].slug);
    }
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="relative flex items-center">
        <svg className="absolute left-4 w-5 h-5 text-on-surface-variant pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search by code (404), message, or issue..."
          className="w-full bg-surface-low border-b-2 border-transparent focus:border-primary text-foreground pl-12 pr-4 py-3 rounded-t-md outline-none transition-colors shadow-sm placeholder:text-on-surface-variant text-sm md:text-base font-sans"
        />
      </div>

      {/* Auto-suggestions Dropdown */}
      {isFocused && query.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-surface-highest border border-outline-variant rounded-b-md shadow-2xl overflow-hidden z-50">
          {filteredResults.length > 0 ? (
            <ul className="py-2">
              {filteredResults.map((err, idx) => (
                <li key={err.code}>
                  <button 
                    onClick={() => handleResultClick(err.slug)}
                    className="w-full text-left px-4 py-3 hover:bg-surface-high transition-colors flex flex-col gap-1 focus:bg-surface-high focus:outline-none"
                  >
                    <div className="flex items-center gap-2">
                      <span className="bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-md">{err.code}</span>
                      <span className="font-display font-semibold text-foreground">{err.title}</span>
                    </div>
                    <span className="text-sm text-foreground/70 truncate">{err.shortDescription}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-4 text-sm text-foreground/70">
              No results found for "{query}".
            </div>
          )}
        </div>
      )}
    </div>
  );
}
