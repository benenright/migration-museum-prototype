import Link from 'next/link';
import { Exhibition } from '@/data/sampleContent';

interface WhatsOnPanelProps {
  events: Exhibition[];
}

export default function WhatsOnPanel({ events }: WhatsOnPanelProps) {
  const colorMap = {
    blue: 'bg-mm-blue',
    violet: 'bg-mm-violet',
    orange: 'bg-mm-orange',
    yellow: 'bg-mm-yellow',
    green: 'bg-mm-green',
  };

  const borderColorMap = {
    blue: 'border-mm-blue',
    violet: 'border-mm-violet',
    orange: 'border-mm-orange',
    yellow: 'border-mm-yellow',
    green: 'border-mm-green',
  };

  return (
    <section className="pt-24 pb-16 bg-mm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="uppercase tracking-tight" style={{ fontWeight: 200, fontSize: 'clamp(3rem, 15vw, 120px)' }}>
            What&apos;s On
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/visit/whats-on/${event.slug}`}
              className="group bg-mm-white hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={event.heroImage}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-mm-white text-mm-black text-xs font-bold uppercase">
                  {event.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold mb-2 group-hover:text-mm-violet transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-mm-grey mb-3 font-semibold">{event.dates}</p>
                <p className="text-mm-grey line-clamp-3">{event.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
