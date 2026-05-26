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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-2xl font-display font-bold text-foreground hover:text-primary transition-colors">
              <Image 
                src="/assets/brand_logo.png" 
                alt="ErrorFixer Logo" 
                width={40} 
                height={40} 
                className="w-10 h-auto object-contain"
              />
              <span>Error<span className="text-tertiary">Fixer</span></span>
            </Link>
            <p className="mt-4 text-foreground opacity-80 max-w-md leading-relaxed">
              The ultimate platform for understanding, identifying, and resolving HTTP error codes instantly with real-world solutions. Built for developers, by developers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-foreground opacity-80 hover:text-primary hover:opacity-100 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground opacity-80 hover:text-primary hover:opacity-100 transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-foreground opacity-80 hover:text-primary hover:opacity-100 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-foreground opacity-80 hover:text-primary hover:opacity-100 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/?category=All" className="text-foreground opacity-80 hover:text-primary hover:opacity-100 transition-colors">All Categories</Link>
              </li>
              {["1xx", "2xx", "3xx", "4xx", "5xx"].map((cat) => (
                <li key={cat}>
                  <Link href={`/?category=${cat}`} className="text-foreground opacity-80 hover:text-primary hover:opacity-100 transition-colors">{cat} Errors</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-foreground opacity-80 hover:text-primary hover:opacity-100 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-foreground opacity-80 hover:text-primary hover:opacity-100 transition-colors">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-foreground opacity-80 hover:text-primary hover:opacity-100 transition-colors">Affiliate Disclosure</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-outline-variant flex flex-col items-center">
          <p className="text-foreground opacity-70 text-sm text-center">
            &copy; {currentYear} ErrorFixer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
