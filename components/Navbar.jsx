"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Hide Navbar inside the Sanity Studio workspace to prevent it from blocking the layout
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  const categoriesList = ["1xx", "2xx", "3xx", "4xx", "5xx"];

  useEffect(() => {
    // Initialize theme based on localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 text-xl font-display font-bold text-foreground hover:text-primary transition-colors">
              <Image 
                src="/assets/brand_logo.png" 
                alt="ErrorFixer Logo" 
                width={40} 
                height={40} 
                className="w-10 h-auto object-contain"
                priority
              />
              <span>Error<span className="text-tertiary">Fixer</span></span>
            </Link>
          </div>

          {/* Center: SearchBar */}
          <div className="hidden md:flex flex-1 max-w-2xl px-6">
            <SearchBar />
          </div>

          {/* Right: Hamburger menu icon & Theme Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-foreground hover:bg-surface-high transition-colors focus:outline-none"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button 
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-md text-foreground hover:bg-surface-high transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search bar visible only on small screens */}
      <div className="md:hidden px-4 pb-3">
         <SearchBar />
      </div>

      {/* Slide-in Menu Panel */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="relative w-72 h-full bg-surface-high shadow-xl flex flex-col p-6 animate-slide-in-right">
            <button 
              onClick={() => setMenuOpen(false)}
              className="self-end p-2 text-foreground hover:bg-surface-highest rounded-md transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="mt-8 flex flex-col gap-6 font-display">
              <Link href="/" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-foreground hover:text-primary transition-colors block w-full">Home</Link>
              <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-foreground hover:text-primary transition-colors block w-full">Blog</Link>

              
              <div className="flex flex-col">
                <button 
                  onClick={() => setCategoriesOpen(!categoriesOpen)} 
                  className="flex items-center justify-between text-xl font-bold text-foreground hover:text-primary transition-colors focus:outline-none w-full"
                >
                  <span>Categories</span>
                  <svg className={`h-5 w-5 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {categoriesOpen && (
                  <div className="mt-3 ml-4 flex flex-col gap-4">
                    <Link href="/?category=All" onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-on-surface-variant hover:text-primary transition-colors block w-full">All Categories</Link>
                    {categoriesList.map(cat => (
                      <Link key={cat} href={`/?category=${cat}`} onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-on-surface-variant hover:text-primary transition-colors block w-full">{cat} Errors</Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
