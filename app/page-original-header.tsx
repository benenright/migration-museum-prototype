'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import CollageHero from '@/components/CollageHero';
import WhatsOnPanel from '@/components/streamfield/WhatsOnPanel';
import MigrationStoriesCarousel from '@/components/MigrationStoriesCarousel';
import { whatsOnEvents, featuredStories } from '@/data/sampleContent';

export default function Home() {
  const [randomBg, setRandomBg] = useState<'blue' | 'violet' | 'orange' | 'yellow' | 'green' | 'tan'>('yellow');

  useEffect(() => {
    // Randomly select a background color on client-side mount
    const bgColors: Array<'blue' | 'violet' | 'orange' | 'yellow' | 'green' | 'tan'> = [
      'blue',
      'violet',
      'orange',
      'yellow',
      'green',
      'tan',
    ];
    setRandomBg(bgColors[Math.floor(Math.random() * bgColors.length)]);
  }, []);

  return (
    <>
      <Header />

      <main id="main-content">
        <CollageHero
          title={
            <>
              <span className="font-light">Revealing</span>
              <span className="font-light"> human stories.</span>
              <br />
              <span className="font-bold">Remixing</span>
              <span className="font-bold"> British culture.</span>
              <br />
              <span className="font-light">Reframing</span>
              <span className="font-light"> migration.</span>
            </>
          }
          buttons={[
            {
              text: 'Visit Us',
              href: '/visit',
              variant: 'solid',
            },
            {
              text: 'Explore Stories',
              href: '/explore',
              variant: 'ghost',
            },
          ]}
          imageSet={[1, 17, 19]}
          backgroundColor={randomBg}
          randomize={true}
        />

        <WhatsOnPanel events={whatsOnEvents.slice(0, 3)} />

        {/* Opening 2028 Section with Pillar Cards */}
        <section className="py-20 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                We're opening in 2028
              </h2>
              <p className="text-lg md:text-xl text-mm-grey">
                The Migration Museum will open its doors in the City of London in 2028.
                A permanent home dedicated to exploring how the movement of people to and from
                Britain across the ages has shaped who we are — as individuals, as communities,
                and as a nation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link
                href="/visit"
                className="group relative bg-mm-white hover:bg-mm-white border-2 border-mm-grey-light hover:border-mm-black p-8 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-4 text-mm-grey group-hover:text-mm-black transition-colors">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Visit</h3>
                <p className="text-mm-grey">Plan your visit to the museum. Opening in 2028.</p>
                <div className="mt-4 flex items-center text-mm-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link
                href="/explore"
                className="group relative bg-mm-white hover:bg-mm-white border-2 border-mm-grey-light hover:border-mm-black p-8 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-4 text-mm-grey group-hover:text-mm-black transition-colors">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Explore</h3>
                <p className="text-mm-grey">Discover stories of migration across time, place, and theme.</p>
                <div className="mt-4 flex items-center text-mm-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link
                href="/learn"
                className="group relative bg-mm-white hover:bg-mm-white border-2 border-mm-grey-light hover:border-mm-black p-8 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-4 text-mm-grey group-hover:text-mm-black transition-colors">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Learn</h3>
                <p className="text-mm-grey">Educational resources for all ages and learning levels.</p>
                <div className="mt-4 flex items-center text-mm-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link
                href="/support"
                className="group relative bg-mm-white hover:bg-mm-white border-2 border-mm-grey-light hover:border-mm-black p-8 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-4 text-mm-grey group-hover:text-mm-black transition-colors">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Support</h3>
                <p className="text-mm-grey">Help us build Britain&apos;s Migration Museum.</p>
                <div className="mt-4 flex items-center text-mm-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Story Teaser */}
        {/* <section className="py-20 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-mm-blue text-mm-white text-sm font-bold uppercase mb-4">
                  Featured Story
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The Windrush Generation
                </h2>
                <p className="text-lg text-mm-grey mb-6">
                  Between 1948 and 1971, nearly half a million people moved from the Caribbean
                  to Britain. They were responding to the call to help rebuild post-war Britain
                  and fill labor shortages in the new National Health Service, public transport,
                  and other essential services.
                </p>
                <a
                  href="/explore/windrush-generation"
                  className="inline-flex items-center gap-2 text-mm-blue hover:text-mm-violet font-bold text-lg transition-colors"
                >
                  Read their stories
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="relative">
                <div className="relative h-96 bg-mm-blue angled-edge">
                  <div className="absolute inset-0 bg-mm-black opacity-20"></div>
                  <div className="absolute bottom-4 right-4 px-4 py-2 bg-mm-white">
                    <p className="text-sm font-bold">1948-1971</p>
                    <p className="text-xs text-mm-grey">Caribbean → Britain</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-mm-yellow torn-edge opacity-80"></div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Migration Stories Carousel */}
        <MigrationStoriesCarousel stories={featuredStories} />
      </main>

      <Footer />
    </>
  );
}
