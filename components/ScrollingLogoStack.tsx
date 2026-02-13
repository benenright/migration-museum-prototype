'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LOGO_VARIANTS = [
  '/images/m1.svg',
  '/images/m2.svg',
  '/images/m3.svg',
  '/images/m4.svg',
];

export default function ScrollingLogoStack() {
  const [topLogoIndex, setTopLogoIndex] = useState(1);
  const [bottomLogoIndex, setBottomLogoIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport after hydration
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      // Schedule update on next animation frame
      rafId = requestAnimationFrame(() => {
        const position = window.scrollY;
        setScrollPosition(position);

        // Calculate which section we're in based on scroll position
        // Each section is roughly 600px
        const sectionHeight = 600;
        const currentSection = Math.floor(position / sectionHeight);

        // Cycle through logo variants based on section
        // Top M and bottom M swapped - solid on top, outline on bottom
        setTopLogoIndex((currentSection + 1) % LOGO_VARIANTS.length);
        setBottomLogoIndex(currentSection % LOGO_VARIANTS.length);
      });
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Detect background color/brightness for contrast
  useEffect(() => {
    let rafId: number | null = null;

    const checkBackground = () => {
      // Cancel any pending animation frame
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      // Schedule update on next animation frame (throttles to ~60fps)
      rafId = requestAnimationFrame(() => {
        // Check if we're in footer area (footer has dark background)
        const footer = document.querySelector('footer');
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const logoBottom = 32 + 200; // logo top (32) + approximate height (200)

          // If logo overlaps footer, it should be white
          if (footerRect.top < logoBottom) {
            setIsDarkBackground(true);
            return;
          }
        }

        // Otherwise, check at logo position - sample below the logo to avoid detecting the logo itself
        const logoElement = document.elementFromPoint(100, 100);

        if (logoElement) {
          let element: HTMLElement | null = logoElement as HTMLElement;
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
            // If brightness is high (> 200), it's a light background, so logo should be dark (false)
            // If brightness is low (< 200), it's a dark background, so logo should be light (true)
            setIsDarkBackground(brightness < 200);
          } else {
            // Default to dark logo on light background if we can't determine
            setIsDarkBackground(false);
          }
        }
      });
    };

    checkBackground();
    window.addEventListener('scroll', checkBackground, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkBackground);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [scrollPosition]);

  // Calculate scale and opacity based on scroll position
  // Scale from large (1.2) to small (1) between 0 and 80px scroll (fast shrink)
  // Then grow back to large when in footer
  const scrollThreshold = 80;
  const footerThreshold = 200; // Distance from bottom to start growing

  // Detect if we're near the footer
  const isNearFooter = () => {
    if (typeof window === 'undefined') return false;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
    return distanceFromBottom < footerThreshold;
  };

  const inFooter = isNearFooter();

  // Calculate scale: large at top, small in middle, large at bottom (footer)
  let scale: number;
  if (inFooter) {
    // Grow back to large size in footer
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
    const footerProgress = 1 - (distanceFromBottom / footerThreshold);
    scale = 1 + (footerProgress * 0.2); // Grow from 1 to 1.2
  } else if (scrollPosition < scrollThreshold) {
    scale = 1.2 - (scrollPosition / scrollThreshold) * 0.2;
  } else {
    scale = 1;
  }

  // Word logo fades out between 40px and 80px scroll (fast fade), then fades back in at footer
  let wordOpacity: number;
  if (inFooter) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
    const footerProgress = 1 - (distanceFromBottom / footerThreshold);
    wordOpacity = footerProgress;
  } else if (scrollPosition < 40) {
    wordOpacity = 1;
  } else if (scrollPosition < scrollThreshold) {
    wordOpacity = 1 - ((scrollPosition - 40) / 40);
  } else {
    wordOpacity = 0;
  }

  // Size changes - same large size at top/footer, but shrinks down 20px smaller
  // At scale 1.2 (large): logoSize = 21.5 (gives ~86px width)
  // At scale 1.0 (small): logoSize = 13 (gives 52px width, 20px less than original 72px)
  // Mobile: 40% of desktop size
  const mobileScale = isMobile ? 0.4 : 1;
  const logoSize = Math.round((13 + (scale - 1) * 42.5) * mobileScale);

  return (
    <Link
      href="/"
      className="fixed top-4 left-4 md:top-8 md:left-8 z-50 cursor-pointer"
      style={{
        pointerEvents: 'auto',
      }}
    >
      <div className="flex flex-col items-start gap-1 transition-all duration-300">
        {/* Top M */}
        <div
          className="relative transition-all duration-700 ease-in-out"
          style={{
            width: `${logoSize * 4}px`,
            height: `${logoSize * 4}px`,
            filter: isDarkBackground ? 'brightness(0) invert(1)' : 'none',
          }}
        >
          <Image
            src={LOGO_VARIANTS[topLogoIndex]}
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Bottom M */}
        <div
          className="relative transition-all duration-700 ease-in-out"
          style={{
            width: `${logoSize * 4}px`,
            height: `${logoSize * 4}px`,
            filter: isDarkBackground ? 'brightness(0) invert(1)' : 'none',
          }}
        >
          <Image
            src={LOGO_VARIANTS[bottomLogoIndex]}
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Word Logo - fades out on scroll */}
        <div
          className="mt-2 transition-opacity duration-500"
          style={{
            opacity: wordOpacity,
            filter: isDarkBackground ? 'brightness(0) invert(1)' : 'none',
          }}
        >
          <img
            src="/mm-logo.svg"
            alt="Migration Museum"
            className="h-10 w-auto"
          />
        </div>
      </div>
    </Link>
  );
}
