'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  color?: string;
}

const navigationItems: NavItem[] = [
  {
    label: 'Visit',
    href: '/visit',
    color: 'mm-blue',
    dropdown: [
      { label: 'What\'s On', href: '/visit/whats-on', description: 'Current exhibitions and events' },
      { label: 'Plan Your Visit', href: '/visit', description: 'Hours, location, and access' },
      { label: 'Accessibility', href: '/visit/access', description: 'Making the museum accessible to all' },
      { label: 'Group Visits', href: '/visit/groups', description: 'Book a group tour' },
    ],
  },
  {
    label: 'Explore',
    href: '/explore',
    color: 'mm-violet',
    dropdown: [
      { label: 'All Stories', href: '/explore', description: 'Browse migration stories' },
      { label: 'By Theme', href: '/explore?filter=theme', description: 'Work, family, culture, and more' },
      { label: 'By Time Period', href: '/explore?filter=time', description: 'From pre-1800 to present' },
      { label: 'By Geography', href: '/explore?filter=geography', description: 'Stories from around the world' },
    ],
  },
  {
    label: 'Learn',
    href: '/learn',
    color: 'mm-green',
    dropdown: [
      { label: 'For Teachers', href: '/learn/teachers', description: 'Curriculum resources and workshops' },
      { label: 'For Students', href: '/learn/students', description: 'Primary and secondary resources' },
      { label: 'For Families', href: '/learn/families', description: 'Activities and trails' },
      { label: 'Resources', href: '/learn/resources', description: 'Downloads and toolkits' },
    ],
  },
  {
    label: 'News & Ideas',
    href: '/news',
    color: 'mm-orange',
    dropdown: [
      { label: 'Latest News', href: '/news', description: 'Updates from the museum' },
      { label: 'Blog', href: '/news/blog', description: 'Stories and perspectives' },
      { label: 'Press', href: '/news/press', description: 'Media and press releases' },
      { label: 'Events Calendar', href: '/news/events', description: 'Upcoming talks and workshops' },
    ],
  },
];

interface HeaderProps {
  transparent?: boolean;
  hideLogo?: boolean;
  searchIconOnly?: boolean;
}

export default function HeaderWithDropdowns({ transparent = false, hideLogo = false, searchIconOnly = false }: HeaderProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <header className={`sticky top-0 z-50 ${transparent ? 'bg-transparent' : 'bg-mm-white border-b border-mm-grey-light'}`}>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to Content
      </a>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {!hideLogo && (
            <Link href="/" className="flex items-center group">
              <img
                src="/mm-logo.svg"
                alt="Migration Museum"
                className="h-12 w-auto dark-logo-invert"
              />
            </Link>
          )}

          {/* Search Bar or Icon */}
          {!searchIconOnly ? (
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
          ) : (
            <div className="flex-1" />
          )}

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-6">
            {navigationItems.map((item) => (
              <div
                key={item.href}
                className="relative"
              >
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`font-semibold hover:text-${item.color} transition-colors flex items-center gap-1`}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-semibold hover:text-${item.color} transition-colors flex items-center gap-1`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-mm-white border border-mm-grey-light shadow-xl rounded z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-3 hover:bg-mm-grey-light transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-semibold text-mm-black">{dropdownItem.label}</div>
                          {dropdownItem.description && (
                            <div className="text-sm text-mm-grey mt-1">{dropdownItem.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {searchIconOnly && (
              <button
                className="p-2 text-mm-black hover:text-mm-blue transition-colors"
                aria-label="Search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            )}

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
              {navigationItems.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className="font-semibold block py-2">
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block text-sm text-mm-grey hover:text-mm-black py-1"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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
