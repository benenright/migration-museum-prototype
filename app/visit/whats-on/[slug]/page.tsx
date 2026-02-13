import { notFound } from 'next/navigation';
import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import ScrollingLogoStack from '@/components/ScrollingLogoStack';
import MigrationStoriesCarousel from '@/components/MigrationStoriesCarousel';
import IntroBlock from '@/components/streamfield/IntroBlock';
import ImageGalleryBlock from '@/components/streamfield/ImageGalleryBlock';
import { whatsOnEvents, featuredStories } from '@/data/sampleContent';

export default async function ExhibitionPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const event = whatsOnEvents.find((e) => e.slug === slug);

  if (!event) {
    notFound();
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

  const bgColor = colorMap[event.accentColor];
  const textColor = textColorMap[event.accentColor];

  // Get related stories if they exist
  const relatedStoriesData = event.relatedStories
    ? featuredStories.filter((story) => event.relatedStories?.includes(story.slug))
    : [];

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
        {/* Hero Section - Full Height Immersive */}
        <section
          className="relative min-h-[90vh] flex items-end"
          style={{ backgroundColor: bgColor }}
        >
          {/* Hero Image */}
          <div className="absolute inset-0">
            <img
              src={event.heroImage}
              alt={event.title}
              className="w-full h-full object-cover"
              style={{ opacity: 0.3 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, transparent 0%, ${bgColor} 100%)`
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 pb-20 relative z-10">
            <div className="max-w-5xl">
              {/* Meta Badges */}
              <div className="flex gap-0 mb-8">
                <div
                  className="px-4 py-2 badge-text tracking-wider"
                  style={{
                    backgroundColor: bgColor === colorMap.yellow || bgColor === colorMap.green ? '#000000' : bgColor,
                    color: bgColor === colorMap.yellow || bgColor === colorMap.green ? '#FFFFFF' : textColor,
                  }}
                >
                  {event.type}
                </div>
                <div
                  className="px-4 py-2 badge-text"
                  style={{
                    backgroundColor: textColor,
                    color: bgColor,
                  }}
                >
                  {event.dates}
                </div>
              </div>

              {/* Title - Large and Impactful */}
              <h1
                className="mb-8"
                style={{ color: textColor }}
              >
                {event.title}
              </h1>

              {/* Short Description */}
              <p className="text-xl md:text-2xl font-light max-w-3xl" style={{ color: textColor, opacity: 0.9 }}>
                {event.shortDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-mm-white">
          <div className="container mx-auto px-4">
            {/* Full Description - Using IntroBlock component */}
            <IntroBlock
              title={`About This ${event.type === 'exhibition' ? 'Exhibition' : event.type === 'event' ? 'Event' : 'Workshop'}`}
              content={event.fullDescription}
            />

            {/* Gallery Images - Using ImageGalleryBlock component */}
            {event.galleryImages && event.galleryImages.length > 1 && (
              <ImageGalleryBlock
                title="Exhibition Views"
                images={event.galleryImages.slice(1).map((image, index) => ({
                  src: image,
                  alt: `${event.title} - View ${index + 2}`
                }))}
              />
            )}

            {/* Visitor Information - Narrower column */}
            <div className="max-w-3xl mx-auto mb-20 p-10 md:p-12 bg-mm-grey-light">
              <h3 className="text-3xl font-bold mb-8">Plan Your Visit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3">When</h4>
                  <p className="text-mm-grey mb-1">{event.dates}</p>
                  {event.type === 'event' && event.startDate && (
                    <p className="small-text text-mm-grey">Check website for specific times</p>
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Where</h4>
                  <p className="text-mm-grey">{event.location}</p>
                  <p className="small-text text-mm-grey mt-1">Migration Museum</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Admission</h4>
                  <p className="text-mm-grey">{event.price}</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Booking</h4>
                  {event.booking?.required ? (
                    <>
                      <p className="text-mm-grey mb-4">Booking required</p>
                      <a
                        href={event.booking.link || '#'}
                        className="inline-block px-6 py-3 bg-mm-black text-mm-white font-bold rounded hover:bg-opacity-90 dark:bg-mm-white dark:text-mm-black transition-all"
                      >
                        Book Your Place
                      </a>
                    </>
                  ) : (
                    <p className="text-mm-grey">No booking required - just turn up!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Stories Carousel */}
        {relatedStoriesData.length > 0 && (
          <MigrationStoriesCarousel stories={relatedStoriesData} />
        )}
      </main>
      </div>

      <Footer />
    </>
  );
}
