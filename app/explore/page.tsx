'use client';

import { useMemo, useState } from 'react';
import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import ScrollingLogoStack from '@/components/ScrollingLogoStack';
import StoryCard from '@/components/streamfield/StoryCard';
import { featuredStories, themes, timePeriods, geographies } from '@/data/sampleContent';

export default function ExplorePage() {
  // Filter state
  const [themeFilter, setThemeFilter] = useState<string>('');
  const [timeFilter, setTimeFilter] = useState<string>('');
  const [geoFilter, setGeoFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('newest');

  // Ensure one of first 2 items is featured, then ~15% random after that
  const storiesWithFeatured = useMemo(() => {
    // Randomly choose which of first 2 items should be featured (0 or 1)
    const featuredIndex = Math.floor(Math.random() * 2);

    let stories = featuredStories.map((story, index) => {
      // Ensure at least one of first 2 is featured
      if (index === 0 || index === 1) {
        return {
          ...story,
          isFeatured: index === featuredIndex,
        };
      }
      // After first 2, randomly assign featured status
      return {
        ...story,
        isFeatured: Math.random() < 0.15,
      };
    });

    // Apply filters
    if (themeFilter) {
      stories = stories.filter(story => story.theme.includes(themeFilter));
    }
    if (timeFilter) {
      stories = stories.filter(story => story.timePeriod === timeFilter);
    }
    if (geoFilter) {
      stories = stories.filter(story => story.geography === geoFilter);
    }

    // Apply sorting
    if (sortBy === 'newest') {
      // Reverse chronological order - newest first (based on timePeriod)
      stories = [...stories].reverse();
    } else if (sortBy === 'oldest') {
      // Keep original chronological order
      // No change needed as default order
    } else if (sortBy === 'alpha') {
      stories = [...stories].sort((a, b) => a.title.localeCompare(b.title));
    }

    return stories;
  }, [themeFilter, timeFilter, geoFilter, sortBy]);

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
              Stories of Migration
            </h1>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-mm-white">
          <div className="container mx-auto px-4 pb-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Theme Filter */}
              <div>
                <label htmlFor="theme-filter" className="block text-sm font-semibold mb-2">
                  Filter by Theme
                </label>
                <select
                  id="theme-filter"
                  value={themeFilter}
                  onChange={(e) => setThemeFilter(e.target.value)}
                  className="px-4 py-2 border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-violet"
                >
                  <option value="">All Themes</option>
                  {themes.map((theme) => (
                    <option key={theme} value={theme}>
                      {theme}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Period Filter */}
              <div>
                <label htmlFor="time-filter" className="block text-sm font-semibold mb-2">
                  Filter by Time
                </label>
                <select
                  id="time-filter"
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="px-4 py-2 border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-violet"
                >
                  <option value="">All Periods</option>
                  {timePeriods.map((period) => (
                    <option key={period.value} value={period.value}>
                      {period.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Geography Filter */}
              <div>
                <label htmlFor="geography-filter" className="block text-sm font-semibold mb-2">
                  Filter by Geography
                </label>
                <select
                  id="geography-filter"
                  value={geoFilter}
                  onChange={(e) => setGeoFilter(e.target.value)}
                  className="px-4 py-2 border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-violet"
                >
                  <option value="">All Regions</option>
                  {geographies.map((geo) => (
                    <option key={geo} value={geo}>
                      {geo}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label htmlFor="sort" className="block text-sm font-semibold mb-2">
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

        {/* Story Grid */}
        <section className="py-16 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-auto">
              {storiesWithFeatured.map((story) => (
                <div
                  key={story.id}
                  className={story.isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}
                >
                  <StoryCard {...story} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-mm-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Share Your Story</h2>
            <p className="text-xl text-mm-grey mb-8 max-w-2xl mx-auto">
              Do you have a migration story to share? We want to hear from you.
              Help us build a fuller picture of British migration history.
            </p>
            <a
              href="/contribute"
              className="inline-block px-8 py-4 bg-mm-black text-mm-white font-bold text-lg rounded hover:bg-opacity-90 dark:bg-mm-white dark:text-mm-black transition-all"
            >
              Contribute Your Story
            </a>
          </div>
        </section>
      </main>
      </div>

      <Footer />
    </>
  );
}
