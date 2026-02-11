'use client';

import { useMemo } from 'react';
import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { whatsOnEvents } from '@/data/sampleContent';

export default function WhatsOnPage() {
  // Add random featured status to ~15% of events
  const eventsWithFeatured = useMemo(() =>
    whatsOnEvents.map((event) => ({
      ...event,
      isFeatured: Math.random() < 0.15,
    })),
    []
  );

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

  return (
    <>
      <Header />

      <main id="main-content">
        {/* Simple Hero */}
        <section className="pt-16 pb-6 bg-mm-white">
          <div className="container mx-auto px-4">
            <h1
              className="uppercase mb-0"
              style={{
                color: '#000000',
                fontWeight: 300,
                fontSize: 'clamp(3rem, 10vw, 100px)',
                letterSpacing: '-0.02em',
              }}
            >
              What&apos;s On
            </h1>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-mm-white border-b border-mm-grey-light">
          <div className="container mx-auto px-4 pb-6">
            <div className="flex flex-wrap gap-4">
              {/* Type Filter */}
              <div>
                <label htmlFor="type-filter" className="block text-sm font-semibold mb-2">
                  Filter by Type
                </label>
                <select
                  id="type-filter"
                  className="px-4 py-2 border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-violet"
                >
                  <option value="">All Types</option>
                  <option value="exhibition">Exhibitions</option>
                  <option value="event">Events</option>
                  <option value="workshop">Workshops</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label htmlFor="status-filter" className="block text-sm font-semibold mb-2">
                  Filter by Status
                </label>
                <select
                  id="status-filter"
                  className="px-4 py-2 border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-violet"
                >
                  <option value="">All</option>
                  <option value="current">Current</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label htmlFor="sort" className="block text-sm font-semibold mb-2">
                  Sort by
                </label>
                <select
                  id="sort"
                  className="px-4 py-2 border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-violet"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="alpha">Alphabetical</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-mm-grey">
                Showing <strong>{whatsOnEvents.length} exhibitions and events</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-auto">
              {eventsWithFeatured.map((event) => {
                const bgColor = event.isFeatured ? colorMap[event.accentColor] : '#FFFFFF';
                const textColor = event.isFeatured ? textColorMap[event.accentColor] : '#000000';

                return (
                  <div
                    key={event.id}
                    className={event.isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}
                  >
                    <Link
                      href={`/visit/whats-on/${event.slug}`}
                      className="group block overflow-hidden transition-all duration-300 hover:shadow-2xl"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      {/* Image Section */}
                      <div className={`relative w-full overflow-hidden ${event.isFeatured ? 'h-80 md:h-[512px]' : 'h-64'}`}>
                        <img
                          src={event.heroImage}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-8 md:p-10">
                        {/* Featured Badge */}
                        {event.isFeatured && (
                          <div
                            className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase"
                            style={{
                              backgroundColor: textColor,
                              color: bgColor,
                            }}
                          >
                            Featured
                          </div>
                        )}

                        {/* Type & Status */}
                        <div className="mb-6">
                          <p className="text-sm font-bold mb-1" style={{ color: textColor }}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </p>
                          <p className="text-sm opacity-80" style={{ color: textColor }}>
                            {event.dates}
                          </p>
                        </div>

                        {/* Title */}
                        <h3
                          className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                          style={{ color: textColor }}
                        >
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-6 text-base" style={{ color: textColor, opacity: 0.9 }}>
                          {event.shortDescription.substring(0, 150)}...
                        </p>

                        {/* Read More Link */}
                        <div
                          className="flex items-center gap-2 font-bold transition-transform group-hover:translate-x-2"
                          style={{ color: textColor }}
                        >
                          <span>Learn more</span>
                          <svg
                            className="w-5 h-5"
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
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-mm-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Plan Your Visit</h2>
            <p className="text-xl text-mm-grey mb-8 max-w-2xl mx-auto">
              The Migration Museum will open its permanent home in the City of London in 2028.
              Sign up for updates.
            </p>
            <a
              href="/support"
              className="inline-block px-8 py-4 bg-mm-black text-mm-white font-bold text-lg rounded hover:bg-opacity-90 dark:bg-mm-white dark:text-mm-black transition-all"
            >
              Stay Updated
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
