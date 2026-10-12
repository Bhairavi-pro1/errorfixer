"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Hide Footer inside the Sanity Studio workspace to prevent layout overlays
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <footer className="bg-surface-high border-t border-outline-variant mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:gap-8">
          {/* Brand & Description */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-lg sm:text-2xl font-display font-bold text-foreground hover:text-primary transition-colors">
              <Image 
                src="/assets/brand_logo.png" 
                alt="ErrorFixer Logo" 
                width={32} 
                height={32} 
                className="w-7 h-auto sm:w-9 sm:h-auto object-contain"
              />
              <span>Error<span className="text-tertiary">Fixer</span></span>
            </Link>
            <p className="mt-2 sm:mt-4 text-foreground/90 text-sm sm:text-base max-w-md leading-relaxed text-left">
              The ultimate platform for understanding, identifying, and resolving HTTP error codes instantly with real-world solutions. Built for developers, by developers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-3">
              <li>
                <Link href="/" className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Home</Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Blog</Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Contact Us</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-2 sm:mb-4">Categories</h3>
            <ul className="space-y-1.5 sm:space-y-3">
              <li>
                <Link href="/" className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">All Categories</Link>
              </li>
              {["1xx", "2xx", "3xx", "4xx", "5xx"].map((cat) => (
                <li key={cat}>
                  <Link href={`/category/${cat}`} className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">{cat} Errors</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-2 sm:mb-4">Company</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-3">
              <li>
                <Link href="/privacy-policy" className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Terms and Conditions</Link>
              </li>
              <li className="col-span-2 sm:col-span-1">
                <Link href="/affiliate-disclosure" className="text-sm sm:text-base text-foreground/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Affiliate Disclosure</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-on-surface-variant text-xs sm:text-sm text-center sm:text-left">
            &copy; {currentYear} ErrorFixer. All rights reserved.
          </p>
          <p className="text-on-surface-variant text-xs sm:text-sm text-center sm:text-right">
            HTTP Status Code Reference & Diagnostic Guide
          </p>
        </div>
      </div>
    </footer>
  );
}

