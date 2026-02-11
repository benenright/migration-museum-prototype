'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Story {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  timePeriod: string;
  geography: string;
  accentColor: 'blue' | 'violet' | 'orange' | 'yellow' | 'green';
}

interface MigrationStoriesCarouselProps {
  stories: Story[];
}

const colorMap = {
  blue: '#5A5FEF',
  violet: '#A880FF',
  orange: '#FF5C45',
  yellow: '#FFD700',
  green: '#59F5B1',
};

const textColorMap = {
  blue: '#FFFFFF',
  violet: '#FFFFFF',
  orange: '#FFFFFF',
  yellow: '#000000',
  green: '#000000',
};

export default function MigrationStoriesCarousel({ stories }: MigrationStoriesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
  };

  // Get visible stories with their positions relative to center
  const getVisibleStories = () => {
    const result = [];
    for (let i = 0; i < stories.length; i++) {
      const offset = i - currentIndex;
      // Normalize offset to be between -1 and 1 for visible cards
      let normalizedOffset = offset;
      if (offset > stories.length / 2) {
        normalizedOffset = offset - stories.length;
      } else if (offset < -stories.length / 2) {
        normalizedOffset = offset + stories.length;
      }

      // Only include cards that should be visible (prev, center, next)
      if (Math.abs(normalizedOffset) <= 1) {
        result.push({
          story: stories[i],
          offset: normalizedOffset,
          index: i
        });
      }
    }
    return result.sort((a, b) => a.offset - b.offset);
  };

  const visibleStories = getVisibleStories();
  const centerStory = stories[currentIndex];
  const centerColor = colorMap[centerStory.accentColor];
  const centerTextColor = textColorMap[centerStory.accentColor];

  return (
    <section className="w-full relative overflow-hidden">
      {/* Section Header */}
      <div className="bg-mm-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="uppercase tracking-tight text-center mb-2" style={{ fontWeight: 200, fontSize: 'clamp(3rem, 15vw, 120px)' }}>
            Migration Stories
          </h2>
          <p className="text-center text-mm-grey text-xl">
            Explore journeys that shaped Britain
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative min-h-[700px] flex items-center justify-center py-20 bg-mm-white">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 md:left-8 z-50 bg-mm-white hover:bg-mm-black rounded-full p-4 shadow-lg transition-all group"
          aria-label="Previous story"
        >
          <Image
            src="/images/arrow.svg"
            alt="Previous"
            width={24}
            height={24}
            className="transform rotate-180 brightness-0 group-hover:invert"
          />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 md:right-8 z-50 bg-mm-white hover:bg-mm-black rounded-full p-4 shadow-lg transition-all group"
          aria-label="Next story"
        >
          <Image
            src="/images/arrow.svg"
            alt="Next"
            width={24}
            height={24}
            className="brightness-0 group-hover:invert"
          />
        </button>

        {/* Carousel Items */}
        <div className="flex items-center justify-center w-full px-4 md:px-20">
          <div className="relative w-full max-w-7xl" style={{ height: '700px' }}>
            {visibleStories.map(({ story, offset, index: storyIndex }) => {
              const isCenter = offset === 0;
              const bgColor = isCenter ? centerColor : '#FFFFFF';
              const textColor = isCenter ? centerTextColor : '#000000';

              // Cycle through the 4 story images based on story index
              const imageNumber = (storyIndex % 4) + 1;
              const imageSrc = imageNumber === 1 ? '/images/story.png' : `/images/story${imageNumber}.png`;

              // Calculate position based on offset
              const basePosition = 100; // percentage spacing between cards
              const translateX = offset * basePosition;

              return (
                <Link
                  key={story.id}
                  href={`/explore/${story.slug}`}
                  className={`group absolute overflow-hidden transition-all duration-700 ease-in-out ${
                    isCenter
                      ? 'z-30 shadow-2xl'
                      : 'z-10 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: bgColor,
                    minHeight: '600px',
                    width: 'calc(33.33% - 1rem)',
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${translateX}%), -50%) scale(${isCenter ? 1.25 : 0.9})`,
                    opacity: isCenter ? 1 : 0.7,
                  }}
                >
                  {/* Image Section - Top Half */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content Container - Bottom Half */}
                  <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
                    {/* Badge for center item */}
                    {isCenter && (
                      <div
                        className="inline-block self-start px-3 py-1 mb-6 text-xs font-bold uppercase"
                        style={{
                          backgroundColor: textColor,
                          color: bgColor,
                        }}
                      >
                        Featured Story
                      </div>
                    )}

                    {/* Time Period & Geography */}
                    <div className="mb-6">
                      <p className="text-sm font-bold mb-1" style={{ color: textColor }}>
                        {story.timePeriod}
                      </p>
                      <p className="text-sm opacity-80" style={{ color: textColor }}>
                        {story.geography}
                      </p>
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-bold mb-4 leading-tight ${
                        isCenter ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
                      }`}
                      style={{ color: textColor }}
                    >
                      {story.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className={`mb-6 flex-grow ${isCenter ? 'text-base' : 'text-sm'}`}
                      style={{ color: textColor, opacity: 0.9 }}
                    >
                      {story.excerpt.substring(0, 150)}...
                    </p>

                    {/* Read More Link */}
                    <div
                      className="flex items-center gap-2 font-bold transition-transform group-hover:translate-x-2"
                      style={{ color: textColor }}
                    >
                      <span>Read story</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute -bottom-8 md:-bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
          {stories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-mm-black' : 'w-2 bg-mm-grey-mid'
              }`}
              aria-label={`Go to story ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div className="bg-mm-white pt-24 pb-12 text-center">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-mm-blue hover:text-mm-violet font-bold text-lg transition-colors"
        >
          Explore all migration stories
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
