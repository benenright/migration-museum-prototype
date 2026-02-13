'use client';

import { useMemo, useState } from 'react';
import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import ScrollingLogoStack from '@/components/ScrollingLogoStack';
import Link from 'next/link';
import { whatsOnEvents } from '@/data/sampleContent';
import { colorMap, textColorMap } from '@/constants/colors';

export default function WhatsOnPage() {
  // Filter state
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('newest');

  // Ensure one of first 2 items is featured, then ~15% random after that
  const eventsWithFeatured = useMemo(() => {
    // Randomly choose which of first 2 items should be featured (0 or 1)
    const featuredIndex = Math.floor(Math.random() * 2);

    let events = whatsOnEvents.map((event, index) => {
      // Ensure at least one of first 2 is featured
      if (index === 0 || index === 1) {
        return {
          ...event,
          isFeatured: index === featuredIndex,
        };
      }
      // After first 2, randomly assign featured status
      return {
        ...event,
        isFeatured: Math.random() < 0.15,
      };
    });

    // Apply filters
    if (typeFilter) {
      events = events.filter(event => event.type === typeFilter);
    }
    if (statusFilter) {
      events = events.filter(event => event.status === statusFilter);
    }

    // Apply sorting
    if (sortBy === 'newest') {
      // Sort by start date descending
      events = [...events].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
    } else if (sortBy === 'oldest') {
      // Sort by start date ascending
      events = [...events].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    } else if (sortBy === 'alpha') {
      events = [...events].sort((a, b) => a.title.localeCompare(b.title));
    }

    return events;
  }, [typeFilter, statusFilter, sortBy]);

  return (
    <>
      {/* Scrolling Logo Stack */}
      <ScrollingLogoStack />

      {/* Header with transparent background overlay */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header transparent hideLogo searchIconOnly />
        </div>

        <main id="main-content">
        {/* Simple Hero */}
        <section className="bg-mm-white" style={{ paddingTop: '196px', paddingBottom: '24px' }}>
          <div className="container mx-auto px-4 text-center">
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
        <section className="bg-mm-white">
          <div className="container mx-auto px-4 pb-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Type Filter */}
              <div>
                <label htmlFor="type-filter" className="block small-text font-semibold mb-2">
                  Filter by Type
                </label>
                <select
                  id="type-filter"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
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
                <label htmlFor="status-filter" className="block small-text font-semibold mb-2">
                  Filter by Status
                </label>
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
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
                <label htmlFor="sort" className="block small-text font-semibold mb-2">
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-violet"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="alpha">Alphabetical</option>
                </select>
              </div>
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
                        {/* Tags over image */}
                        <div className="absolute bottom-4 left-4 flex gap-0">
                          {/* Type Tag - Colored */}
                          <div
                            className="px-3 py-1 badge-text"
                            style={{
                              backgroundColor: colorMap[event.accentColor],
                              color: textColorMap[event.accentColor],
                            }}
                          >
                            {event.type}
                          </div>
                          {/* Date Tag - White */}
                          <div className="px-3 py-1 bg-mm-white text-mm-black badge-text">
                            {event.dates}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 md:p-10">
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
      </div>

      <Footer />
    </>
  );
}
