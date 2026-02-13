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
    label: 'Stories',
    href: '/explore',
    color: 'mm-violet',
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
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleMobileSection = (label: string) => {
    setExpandedMobileSection(expandedMobileSection === label ? null : label);
  };

  // Detect background for navigation color
  useEffect(() => {
    if (!transparent) return;

    const checkBackground = () => {
      const navElement = document.elementFromPoint(window.innerWidth / 2, 50);

      if (navElement) {
        let element: HTMLElement | null = navElement as HTMLElement;
        let bgColor = window.getComputedStyle(element).backgroundColor;

        // Walk up the DOM tree until we find a non-transparent background
        while (element && (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent')) {
          element = element.parentElement;
          if (element) {
            bgColor = window.getComputedStyle(element).backgroundColor;
          }
        }

        // Parse the background color
        const rgb = bgColor.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
          // If brightness is high (> 200), it's a light background, so nav should be dark (false)
          // If brightness is low (< 200), it's a dark background, so nav should be light (true)
          setIsDarkBackground(brightness < 200);
        } else {
          // Default to dark nav on light background if we can't determine
          setIsDarkBackground(false);
        }
      }
    };

    checkBackground();
    window.addEventListener('scroll', checkBackground, { passive: true });
    return () => window.removeEventListener('scroll', checkBackground);
  }, [transparent]);

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

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen || !mobileMenuRef.current) return;

    const menuElement = mobileMenuRef.current;
    const focusableElements = menuElement.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Focus first element when menu opens
    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      // Shift+Tab on first element - go to last
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable?.focus();
      }
      // Tab on last element - go to first
      else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable?.focus();
      }
    };

    menuElement.addEventListener('keydown', handleKeyDown);

    return () => {
      menuElement.removeEventListener('keydown', handleKeyDown);
      // Restore focus to menu button when closing
      if (!isMenuOpen) {
        menuButtonRef.current?.focus();
      }
    };
  }, [isMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 ${transparent ? 'bg-transparent dark:bg-transparent' : 'bg-mm-white dark:bg-mm-white border-b border-mm-grey-light'}`}>
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
          <nav ref={navRef} className="hidden lg:flex items-center gap-3">
            {searchIconOnly && (
              <button
                className="p-2 hover:text-mm-blue transition-colors"
                style={{
                  color: transparent && isDarkBackground ? '#FFFFFF' : '#000000',
                }}
                aria-label="Search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            )}

            {navigationItems.map((item) => (
              <div
                key={item.href}
                className="relative"
              >
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="font-semibold transition-all flex items-center gap-1 group px-4 py-2 rounded"
                    style={{
                      color: transparent && isDarkBackground ? '#FFFFFF' : '#000000',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#000000';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = transparent && isDarkBackground ? '#FFFFFF' : '#000000';
                    }}
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
                    className="font-semibold transition-all flex items-center gap-1 group px-4 py-2 rounded"
                    style={{
                      color: transparent && isDarkBackground ? '#FFFFFF' : '#000000',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#000000';
                      (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = transparent && isDarkBackground ? '#FFFFFF' : '#000000';
                    }}
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
                            <div className="small-text text-mm-grey mt-1">{dropdownItem.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/support"
              className="px-4 py-2 bg-mm-black text-mm-white font-semibold rounded hover:bg-opacity-90 dark:bg-mm-white dark:text-mm-black transition-all"
            >
              Support
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
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

        {/* Mobile Menu - Full Screen */}
        {isMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden fixed inset-0 z-50 bg-mm-white overflow-y-auto">
            {/* Logo at top */}
            <div className="p-6 border-b border-mm-grey-light flex items-center justify-between">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="/mm-logo.svg"
                  alt="Migration Museum"
                  className="h-10 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Accordion */}
            <nav className="p-6">
              <div className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <div key={item.href} className="border-b border-mm-grey-light">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleMobileSection(item.label)}
                          className="w-full flex items-center justify-between py-4 text-left"
                        >
                          <span className="text-2xl font-bold">{item.label}</span>
                          <svg
                            className={`w-6 h-6 transition-transform ${
                              expandedMobileSection === item.label ? 'rotate-45' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                        {expandedMobileSection === item.label && (
                          <div className="pb-4 pl-4 space-y-3">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block lead-text text-mm-grey hover:text-mm-black"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-4"
                      >
                        <span className="text-2xl font-bold">{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}

                {/* Support Button */}
                <div className="pt-8">
                  <Link
                    href="/support"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full px-6 py-4 bg-mm-black text-mm-white font-bold lead-text text-center rounded"
                  >
                    Support
                  </Link>
                </div>

                {/* Mobile Search */}
                <div className="relative mt-6">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full px-4 py-3 pr-10 border border-mm-grey-mid rounded lead-text"
                    aria-label="Search"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-mm-grey">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
