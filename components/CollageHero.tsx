'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Button {
  text: string;
  href: string;
  variant: 'solid' | 'ghost';
}

interface CollageHeroProps {
  title: string | React.ReactNode;
  subtitle?: string;
  buttons?: Button[];
  imageSet?: number[]; // Which cutout images to use (e.g., [1, 17, 19])
  backgroundColor?: 'blue' | 'violet' | 'orange' | 'yellow' | 'green' | 'tan';
  randomize?: boolean; // If true, randomly select images on each mount
}

// Pool of available cutout images
const peopleCutouts = [17, 18, 19, 20];
const textureCutouts = [1, 23, 24];

const backgroundColors = {
  blue: { bg: '#5A5FEF', text: '#FFFFFF' },
  violet: { bg: '#A880FF', text: '#FFFFFF' },
  orange: { bg: '#FF5C45', text: '#FFFFFF' },
  yellow: { bg: '#FFD700', text: '#000000' },
  green: { bg: '#59F5B1', text: '#000000' },
  tan: { bg: '#938664', text: '#FFFFFF' },
};

// Predefined positions - mostly right side for desktop
const imagePositions = [
  // Image 1 - large, top right
  { top: '-10%', right: '2%', width: '50%', height: '70%', rotate: 3, zIndex: 20 },
  // Image 2 - large, upper right (woman with glasses - moved higher)
  { top: '5%', right: '-8%', width: '48%', height: '65%', rotate: -5, zIndex: 25 },
  // Image 3 - medium, bottom right
  { bottom: '-5%', right: '15%', width: '38%', height: '55%', rotate: 8, zIndex: 15 },
  // Image 4 - medium, center right
  { top: '15%', right: '30%', width: '35%', height: '50%', rotate: -8, zIndex: 30 },
  // Image 5 - small accent, left side (moved right and up on desktop)
  { bottom: '-15%', left: '27%', width: '28%', height: '42%', rotate: 12, zIndex: 10 },
];

export default function CollageHero({
  title,
  subtitle,
  buttons,
  imageSet = [1, 17, 19],
  backgroundColor = 'yellow',
  randomize = false,
}: CollageHeroProps) {
  const [mounted, setMounted] = useState(false);
  const [displayImages, setDisplayImages] = useState<number[]>(imageSet);

  useEffect(() => {
    setMounted(true);

    // Randomize images if requested
    if (randomize) {
      // Randomly select 2 people cutouts and 1 texture cutout
      const shuffledPeople = [...peopleCutouts].sort(() => Math.random() - 0.5);
      const shuffledTextures = [...textureCutouts].sort(() => Math.random() - 0.5);

      // Take 2 people and 1 texture for a total of 3 images
      // People will be positioned in higher z-index positions
      const selectedPeople = shuffledPeople.slice(0, 2);
      const selectedTexture = shuffledTextures.slice(0, 1);

      // Combine: people first (will get higher z-index positions)
      setDisplayImages([...selectedPeople, ...selectedTexture]);
    }
  }, [randomize]);

  const getImagePath = (num: number) => {
    if (num === 1) return '/images/cutouts/1.png';
    return `/images/cutouts/image ${num}.png`;
  };

  const colors = backgroundColors[backgroundColor];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Desktop cutout images */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          {displayImages.map((imageNum, index) => {
            // Sort positions by z-index descending to assign people to higher z-index
            const sortedPositions = [...imagePositions].sort((a, b) => b.zIndex - a.zIndex);
            const pos = sortedPositions[index] || sortedPositions[0];

            // Check if this is a people cutout
            const isPerson = peopleCutouts.includes(imageNum);

            // People cutouts are 50% bigger than textures, but all reduced by 25% overall
            // So: people = 1.5 * 0.75 = 1.125x, textures = 1 * 0.75 = 0.75x
            const baseScale = isPerson ? 1.5 : 1;
            const scale = baseScale * 0.75;

            // Shift all cutouts down by adjusting top/bottom positions
            // Add 100px to move them further down on desktop
            const adjustedTop = pos.top
              ? `calc(${pos.top} + 15% + 100px)`
              : undefined;
            const adjustedBottom = pos.bottom
              ? `calc(${pos.bottom} - 15% - 100px)`
              : undefined;

            return (
              <div
                key={`${imageNum}-${index}`}
                className="absolute animate-slide-in"
                style={{
                  top: adjustedTop,
                  bottom: adjustedBottom,
                  left: pos.left,
                  right: pos.right,
                  width: `calc(${pos.width} * ${scale})`,
                  height: `calc(${pos.height} * ${scale})`,
                  zIndex: pos.zIndex,
                  opacity: 0,
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards',
                }}
              >
                <div
                  className="w-full h-full transition-transform duration-300 hover:scale-105"
                  style={{ transform: `rotate(${pos.rotate}deg)` }}
                >
                  <Image
                    src={getImagePath(imageNum)}
                    alt=""
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 50vw, 40vw"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Mobile cutout images - top right */}
      {mounted && (
        <div className="absolute top-0 right-0 overflow-hidden pointer-events-none md:hidden" style={{ width: '60%', height: '40vh' }}>
          {displayImages.slice(0, 2).map((imageNum, index) => {
            const isPerson = peopleCutouts.includes(imageNum);
            const baseScale = isPerson ? 1.2 : 0.8;

            return (
              <div
                key={`mobile-${imageNum}-${index}`}
                className="absolute animate-slide-in"
                style={{
                  top: index === 0 ? '5%' : '25%',
                  right: index === 0 ? '-5%' : '20%',
                  width: `${baseScale * 45}%`,
                  height: `${baseScale * 45}%`,
                  zIndex: index === 0 ? 20 : 15,
                  opacity: 0,
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards',
                }}
              >
                <div
                  className="w-full h-full"
                  style={{ transform: `rotate(${index === 0 ? -5 : 8}deg)` }}
                >
                  <Image
                    src={getImagePath(imageNum)}
                    alt=""
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="50vw"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Text Content */}
      <div className="container mx-auto px-4 min-h-screen flex items-start pt-[45vh] md:pt-[calc(33.333vh-60px)]">
        <div className="relative z-40 w-full md:max-w-xl lg:max-w-[66.666%] pl-0 md:pl-[100px]">
          <h1
            className="mb-6 md:mb-8"
            style={{
              color: colors.text,
              letterSpacing: '-0.02em',
              fontSize: 'clamp(2rem, 8vw, 3rem)',
              lineHeight: 1.1,
              fontWeight: 700
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-xl md:text-2xl lg:text-3xl font-medium"
              style={{ color: colors.text }}
            >
              {subtitle}
            </p>
          )}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`px-8 py-4 font-bold text-lg rounded transition-all text-center ${
                    button.variant === 'solid'
                      ? 'hover:opacity-90'
                      : 'border-2'
                  }`}
                  style={
                    button.variant === 'solid'
                      ? {
                          backgroundColor: colors.text,
                          color: colors.bg,
                        }
                      : {
                          borderColor: colors.text,
                          color: colors.text,
                        }
                  }
                  onMouseEnter={(e) => {
                    if (button.variant === 'ghost') {
                      e.currentTarget.style.backgroundColor = colors.text;
                      e.currentTarget.style.color = colors.bg;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (button.variant === 'ghost') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.text;
                    }
                  }}
                >
                  {button.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
