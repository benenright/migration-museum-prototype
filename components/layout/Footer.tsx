'use client';

import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-mm-black text-mm-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <img
              src="/mm-logo.svg"
              alt="Migration Museum"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-mm-grey-mid mb-4">
              Revealing, remixing, and reframing the story of migration in Britain.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="hover:text-mm-violet transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-mm-blue transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-bold mb-4">Visit</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/visit" className="text-mm-grey-mid hover:text-mm-white transition-colors">Plan Your Visit</Link></li>
              <li><Link href="/visit/whats-on" className="text-mm-grey-mid hover:text-mm-white transition-colors">What&apos;s On</Link></li>
              <li><Link href="/visit/access" className="text-mm-grey-mid hover:text-mm-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          {/* Explore & Learn */}
          <div>
            <h4 className="font-bold mb-4">Explore & Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/explore" className="text-mm-grey-mid hover:text-mm-white transition-colors">Stories</Link></li>
              <li><Link href="/learn" className="text-mm-grey-mid hover:text-mm-white transition-colors">Education</Link></li>
              <li><Link href="/learn/resources" className="text-mm-grey-mid hover:text-mm-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/support/donate" className="text-mm-grey-mid hover:text-mm-white transition-colors">Donate</Link></li>
              <li><Link href="/support/membership" className="text-mm-grey-mid hover:text-mm-white transition-colors">Become a Member</Link></li>
              <li><Link href="/support/volunteer" className="text-mm-grey-mid hover:text-mm-white transition-colors">Volunteer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mm-grey/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-mm-grey-mid gap-4">
          <p>&copy; 2026 Migration Museum. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 hover:text-mm-white transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Dark</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Light</span>
                </>
              )}
            </button>

            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-mm-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-mm-white transition-colors">Terms of Use</Link>
              <Link href="/accessibility" className="hover:text-mm-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
