'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import CollageHero from '@/components/CollageHero';
import WhatsOnPanel from '@/components/streamfield/WhatsOnPanel';
import PillarNavigation from '@/components/streamfield/PillarNavigation';
import MigrationStoriesCarousel from '@/components/MigrationStoriesCarousel';
import ScrollingLogoStack from '@/components/ScrollingLogoStack';
import { whatsOnEvents, featuredStories } from '@/data/sampleContent';

export default function Homepage2() {
  const [randomBg, setRandomBg] = useState<'blue' | 'violet' | 'orange' | 'yellow' | 'green' | 'tan'>('violet');

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
      {/* Scrolling Logo Stack */}
      <ScrollingLogoStack />

      {/* Header with transparent background overlay */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header transparent hideLogo searchIconOnly />
        </div>

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

          {/* Museum Strapline Section */}
          <section className="py-20 bg-mm-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight text-mm-black">
                  <span className="font-bold">Revealing</span>
                  <span className="font-bold"> human stories.</span>
                  <br />
                  <span className="font-light">Remixing</span>
                  <span className="font-light"> British culture.</span>
                  <br />
                  <span className="font-bold">Reframing</span>
                  <span className="font-bold"> migration.</span>
                </h2>
              </div>
            </div>
          </section>

          <WhatsOnPanel events={whatsOnEvents.slice(0, 3)} />

          <PillarNavigation />

          {/* Migration Stories Carousel */}
          <MigrationStoriesCarousel stories={featuredStories} />
        </main>
      </div>

      <Footer />
    </>
  );
}
