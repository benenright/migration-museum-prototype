'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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

  useEffect(() => {
    const handleScroll = () => {
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
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate scale and opacity based on scroll position
  // Scale from large (1.2) to small (1) between 0 and 300px scroll
  const scrollThreshold = 300;
  const scale = scrollPosition < scrollThreshold
    ? 1.2 - (scrollPosition / scrollThreshold) * 0.2
    : 1;

  // Word logo fades out between 100px and 300px scroll
  const wordOpacity = scrollPosition < 100
    ? 1
    : scrollPosition < scrollThreshold
    ? 1 - ((scrollPosition - 100) / 200)
    : 0;

  // Size changes from w-24 to w-16
  const logoSize = scrollPosition < scrollThreshold ? 24 * scale : 16;

  return (
    <div
      className="fixed top-8 left-8 z-50"
      style={{
        pointerEvents: 'none',
      }}
    >
      <div className="flex flex-col items-start gap-1 transition-all duration-300">
        {/* Top M */}
        <div
          className="relative transition-all duration-700 ease-in-out"
          style={{
            width: `${logoSize * 4}px`,
            height: `${logoSize * 4}px`,
          }}
        >
          <Image
            src={LOGO_VARIANTS[topLogoIndex]}
            alt="Migration Museum Logo Top"
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
          }}
        >
          <Image
            src={LOGO_VARIANTS[bottomLogoIndex]}
            alt="Migration Museum Logo Bottom"
            fill
            className="object-contain"
          />
        </div>

        {/* Word Logo - fades out on scroll */}
        <div
          className="mt-2 transition-opacity duration-500"
          style={{
            opacity: wordOpacity,
          }}
        >
          <img
            src="/mm-logo.svg"
            alt="Migration Museum"
            className="h-12 w-auto dark-logo-invert"
          />
        </div>
      </div>
    </div>
  );
}
