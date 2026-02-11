'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-mm-white border-b border-mm-grey-light">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to Content
      </a>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/mm-logo.svg"
              alt="Migration Museum"
              className="h-12 w-auto"
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search stories, exhibitions..."
                className="w-full px-4 py-2 pr-10 border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-blue"
                aria-label="Search"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-mm-grey hover:text-mm-black"
                aria-label="Submit search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/visit" className="font-semibold hover:text-mm-blue transition-colors">
              Visit
            </Link>
            <Link href="/explore" className="font-semibold hover:text-mm-violet transition-colors">
              Explore
            </Link>
            <Link href="/learn" className="font-semibold hover:text-mm-green transition-colors">
              Learn
            </Link>
            <Link
              href="/support"
              className="px-4 py-2 bg-mm-black text-mm-white font-semibold rounded hover:bg-opacity-90 dark:bg-mm-white dark:text-mm-black transition-all"
            >
              Support
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-mm-grey-light pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/visit" className="font-semibold hover:text-mm-blue transition-colors">
                Visit
              </Link>
              <Link href="/explore" className="font-semibold hover:text-mm-violet transition-colors">
                Explore
              </Link>
              <Link href="/learn" className="font-semibold hover:text-mm-green transition-colors">
                Learn
              </Link>
              <Link
                href="/support"
                className="px-4 py-2 bg-mm-black text-mm-white font-semibold rounded text-center dark:bg-mm-white dark:text-mm-black"
              >
                Support
              </Link>
              {/* Mobile Search */}
              <div className="relative mt-2">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pr-10 border border-mm-grey-mid rounded"
                  aria-label="Search"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-mm-grey">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
