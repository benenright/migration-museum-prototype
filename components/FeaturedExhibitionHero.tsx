'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface MetaInfo {
  entry: string;
  dates: string;
}

interface FeaturedExhibitionHeroProps {
  title: string;
  description: string;
  metaInfo: MetaInfo;
  imageSet?: number[];
  backgroundColor?: 'blue' | 'violet' | 'orange' | 'yellow' | 'green';
  randomize?: boolean;
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
};

// Predefined positions - scattered across the hero
const imagePositions = [
  { top: '10%', right: '5%', width: '35%', height: '50%', rotate: 5, zIndex: 20 },
  { top: '45%', right: '2%', width: '32%', height: '45%', rotate: -8, zIndex: 25 },
  { bottom: '15%', right: '20%', width: '28%', height: '40%', rotate: 12, zIndex: 15 },
];

export default function FeaturedExhibitionHero({
  title,
  description,
  metaInfo,
  imageSet = [1, 17, 19],
  backgroundColor = 'violet',
  randomize = false,
}: FeaturedExhibitionHeroProps) {
  const [mounted, setMounted] = useState(false);
  const [displayImages, setDisplayImages] = useState<number[]>(imageSet);

  useEffect(() => {
    setMounted(true);

    if (randomize) {
      const shuffledPeople = [...peopleCutouts].sort(() => Math.random() - 0.5);
      const shuffledTextures = [...textureCutouts].sort(() => Math.random() - 0.5);
      const selectedPeople = shuffledPeople.slice(0, 2);
      const selectedTexture = shuffledTextures.slice(0, 1);
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
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Scattered cutout images */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {displayImages.map((imageNum, index) => {
            const sortedPositions = [...imagePositions].sort((a, b) => b.zIndex - a.zIndex);
            const pos = sortedPositions[index] || sortedPositions[0];
            const isPerson = peopleCutouts.includes(imageNum);
            const baseScale = isPerson ? 1.5 : 1;
            const scale = baseScale * 0.75;

            return (
              <div
                key={`${imageNum}-${index}`}
                className="absolute animate-slide-in"
                style={{
                  ...('top' in pos && { top: pos.top }),
                  ...('bottom' in pos && { bottom: pos.bottom }),
                  ...('right' in pos && { right: pos.right }),
                  width: `calc(${pos.width} * ${scale})`,
                  height: `calc(${pos.height} * ${scale})`,
                  zIndex: pos.zIndex,
                  opacity: 0,
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards',
                }}
              >
                <div
                  className="w-full h-full transition-transform duration-300"
                  style={{ transform: `rotate(${pos.rotate}deg)` }}
                >
                  <Image
                    src={getImagePath(imageNum)}
                    alt="Exhibition"
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

      {/* Content - Left aligned */}
      <div className="container mx-auto px-4 py-32 md:py-40">
        <div className="relative z-40">
          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div
              className="px-5 py-3 font-bold text-base uppercase tracking-wide"
              style={{
                backgroundColor: colors.text,
                color: colors.bg,
              }}
            >
              {metaInfo.entry}
            </div>
            <div
              className="px-5 py-3 font-bold text-base tracking-wide"
              style={{
                backgroundColor: colors.text,
                color: colors.bg,
              }}
            >
              {metaInfo.dates}
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="mb-8 leading-[0.9] uppercase"
            style={{
              color: colors.text,
              letterSpacing: '-0.02em',
              fontWeight: 500,
              fontSize: 'clamp(3rem, 12vw, 120px)',
            }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: colors.text }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
