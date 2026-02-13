import Link from 'next/link';
import Image from 'next/image';
import { Exhibition } from '@/data/sampleContent';
import { colorMap, textColorMap } from '@/constants/colors';

interface WhatsOnPanelProps {
  events: Exhibition[];
}

export default function WhatsOnPanel({ events }: WhatsOnPanelProps) {

  return (
    <section className="pt-24 pb-16 bg-mm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="uppercase mb-0" style={{ color: '#000000', fontWeight: 300, fontSize: 'clamp(3rem, 10vw, 100px)', letterSpacing: '-0.02em' }}>
            What&apos;s On
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4">
            <div className="flex gap-5 px-5" style={{ scrollSnapType: 'x mandatory' }}>
              {events.map((event) => (
                <Link
                  key={event.id}
                  href={`/visit/whats-on/${event.slug}`}
                  className="flex-shrink-0 bg-mm-white shadow-xl"
                  style={{
                    width: 'calc(100vw - 60px)',
                    scrollSnapAlign: 'center',
                  }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={event.heroImage}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
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

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-mm-grey line-clamp-3">{event.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/visit/whats-on/${event.slug}`}
              className="group bg-mm-white hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={event.heroImage}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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

              <div className="p-6">
                <h3 className="font-bold mb-2 group-hover:text-mm-violet transition-colors">
                  {event.title}
                </h3>
                <p className="text-mm-grey line-clamp-3">{event.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
