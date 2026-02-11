'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  type: 'exhibition' | 'event';
  description: string;
  dates: string;
  accentColor: 'blue' | 'violet' | 'orange' | 'yellow' | 'green';
}

interface WhatsOnShowcaseProps {
  events: Event[];
}

const colorMap = {
  blue: 'bg-mm-blue',
  violet: 'bg-mm-violet',
  orange: 'bg-mm-orange',
  yellow: 'bg-mm-yellow',
  green: 'bg-mm-green',
};

export default function WhatsOnShowcase({ events }: WhatsOnShowcaseProps) {
  // Take first 3 events for the showcase
  const showcaseEvents = events.slice(0, 3);

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="bg-mm-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-2">
            What&apos;s On
          </h2>
          <p className="text-center text-mm-grey text-xl">
            Exhibitions & Events
          </p>
        </div>
      </div>

      {/* Full Bleed Color Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {showcaseEvents.map((event, index) => {
          const bgColor = colorMap[event.accentColor];

          return (
            <Link
              key={event.id}
              href={`/${event.type === 'exhibition' ? 'visit' : 'learn'}#${event.id}`}
              className="group relative overflow-hidden min-h-[600px] flex flex-col"
            >
              {/* Background Color */}
              <div className={`absolute inset-0 ${bgColor} transition-transform duration-500 group-hover:scale-105`} />

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full p-8 text-mm-white">
                {/* Badge */}
                {index === 0 && (
                  <div className="inline-block self-start px-3 py-1 bg-mm-white text-mm-black text-xs font-bold uppercase mb-6">
                    Special Exhibition
                  </div>
                )}

                {/* Image Placeholder - Top half */}
                <div className="flex-1 mb-8 relative">
                  <div className="absolute inset-0 bg-mm-black opacity-20 group-hover:opacity-10 transition-opacity">
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-20 h-20 text-mm-white opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Text Content - Bottom half */}
                <div>
                  {/* Dates */}
                  <div className="mb-4">
                    <div className="px-4 py-2 bg-mm-white inline-block">
                      <p className="text-mm-black text-sm font-bold">
                        {event.dates.split(' - ').map((date, i) => (
                          <span key={i}>
                            {date}
                            {i === 0 && event.dates.includes(' - ') && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {event.title}
                  </h3>

                  {/* Subtitle/Description */}
                  <p className="text-mm-white opacity-90 text-sm md:text-base line-clamp-2">
                    {event.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 transform translate-x-0 group-hover:translate-x-2 transition-transform">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* View All Link */}
      <div className="bg-mm-white py-12 text-center">
        <Link
          href="/visit"
          className="inline-flex items-center gap-2 text-mm-blue hover:text-mm-violet font-bold text-lg transition-colors"
        >
          View all exhibitions and events
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
