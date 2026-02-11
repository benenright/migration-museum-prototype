import { notFound } from 'next/navigation';
import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
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
      <Header />

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
              <div className="flex flex-wrap gap-3 mb-8">
                <div
                  className="px-4 py-2 font-bold text-xs uppercase tracking-wider"
                  style={{
                    backgroundColor: textColor,
                    color: bgColor,
                  }}
                >
                  {event.type}
                </div>
                <div
                  className="px-4 py-2 font-bold text-xs uppercase tracking-wider"
                  style={{
                    backgroundColor: textColor,
                    color: bgColor,
                  }}
                >
                  {event.status}
                </div>
              </div>

              {/* Title - Large and Impactful */}
              <h1
                className="mb-8"
                style={{ color: textColor }}
              >
                {event.title}
              </h1>

              {/* Dates - Prominent */}
              <p className="text-2xl md:text-3xl font-light mb-6" style={{ color: textColor }}>
                {event.dates}
              </p>

              {/* Short Description */}
              <p className="text-xl md:text-2xl font-light max-w-3xl" style={{ color: textColor, opacity: 0.9 }}>
                {event.shortDescription}
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="flex flex-col items-center gap-2 animate-bounce" style={{ color: textColor, opacity: 0.7 }}>
              <span className="text-sm font-semibold uppercase tracking-wider">Scroll</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Visit Information Bar - Sticky */}
        <section className="sticky top-0 z-40 bg-mm-black text-mm-white py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap gap-8 text-sm">
                <div>
                  <span className="opacity-70 mr-2">When:</span>
                  <span className="font-semibold">{event.dates}</span>
                </div>
                <div>
                  <span className="opacity-70 mr-2">Where:</span>
                  <span className="font-semibold">{event.location}</span>
                </div>
                <div>
                  <span className="opacity-70 mr-2">Admission:</span>
                  <span className="font-semibold">{event.price}</span>
                </div>
              </div>
              {event.booking?.required && (
                <a
                  href={event.booking.link || '#'}
                  className="px-6 py-2 bg-mm-black text-mm-white hover:bg-opacity-90 font-bold text-sm rounded dark:bg-mm-white dark:text-mm-black transition-all"
                >
                  Book Now
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Full Description - Large Typography */}
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  About This {event.type === 'exhibition' ? 'Exhibition' : event.type === 'event' ? 'Event' : 'Workshop'}
                </h2>
                <div className="prose prose-xl max-w-none">
                  <p className="text-xl md:text-2xl leading-relaxed font-light text-mm-grey">
                    {event.fullDescription}
                  </p>
                </div>
              </div>

              {/* Gallery Images - Large Format */}
              {event.galleryImages && event.galleryImages.length > 1 && (
                <div className="mb-20">
                  <h3 className="text-3xl md:text-4xl font-bold mb-10">Exhibition Views</h3>
                  <div className="space-y-8">
                    {event.galleryImages.slice(1).map((image, index) => (
                      <div key={index} className="relative h-96 md:h-[600px] overflow-hidden">
                        <img
                          src={image}
                          alt={`${event.title} - View ${index + 2}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Visitor Information */}
              <div className="mb-20 p-10 md:p-12 bg-mm-grey-light">
                <h3 className="text-3xl font-bold mb-8">Plan Your Visit</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold mb-3">When</h4>
                    <p className="text-mm-grey mb-1">{event.dates}</p>
                    {event.type === 'event' && event.startDate && (
                      <p className="text-sm text-mm-grey">Check website for specific times</p>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3">Where</h4>
                    <p className="text-mm-grey">{event.location}</p>
                    <p className="text-sm text-mm-grey mt-1">Migration Museum</p>
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

              {/* Related Stories */}
              {relatedStoriesData.length > 0 && (
                <div className="mb-20">
                  <h3 className="text-3xl md:text-4xl font-bold mb-10">Related Stories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedStoriesData.map((story) => (
                      <Link
                        key={story.id}
                        href={`/explore/${story.slug}`}
                        className="group block"
                      >
                        <div className="relative h-64 mb-4 overflow-hidden">
                          <div className="absolute inset-0 bg-mm-violet opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                          <img
                            src="/images/story.png"
                            alt={story.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <p className="text-sm text-mm-grey mb-2">
                          {story.timePeriod} • {story.geography}
                        </p>
                        <h4 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-mm-violet transition-colors">
                          {story.title}
                        </h4>
                        <p className="text-mm-grey line-clamp-3">{story.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-mm-black text-mm-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore More</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-80">
              Discover more exhibitions, events, and stories at the Migration Museum.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/visit/whats-on"
                className="px-8 py-4 bg-mm-white text-mm-black font-bold rounded hover:bg-opacity-90 transition-all"
              >
                View All Exhibitions
              </Link>
              <Link
                href="/explore"
                className="px-8 py-4 border-2 border-mm-white text-mm-white font-bold rounded hover:bg-mm-white hover:text-mm-black transition-all"
              >
                Explore Stories
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
