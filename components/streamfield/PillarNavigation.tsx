import Link from 'next/link';

interface Pillar {
  title: string;
  description: string;
  href: string;
  accentColor: 'blue' | 'violet' | 'orange' | 'yellow' | 'green';
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    title: 'Visit',
    description: 'Plan your visit to the museum. Opening in 2028.',
    href: '/visit',
    accentColor: 'blue',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Explore',
    description: 'Discover stories of migration across time, place, and theme.',
    href: '/explore',
    accentColor: 'violet',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Learn',
    description: 'Educational resources for all ages and learning levels.',
    href: '/learn',
    accentColor: 'green',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Support',
    description: 'Help us build Britain&apos;s Migration Museum.',
    href: '/support',
    accentColor: 'orange',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function PillarNavigation() {
  const colorMap = {
    blue: 'bg-mm-blue',
    violet: 'bg-mm-violet',
    orange: 'bg-mm-orange',
    yellow: 'bg-mm-yellow',
    green: 'bg-mm-green',
  };

  const hoverColorMap = {
    blue: 'group-hover:bg-mm-blue',
    violet: 'group-hover:bg-mm-violet',
    orange: 'group-hover:bg-mm-orange',
    yellow: 'group-hover:bg-mm-yellow',
    green: 'group-hover:bg-mm-green',
  };

  return (
    <section className="py-20 bg-mm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore the Museum</h2>
          <p className="text-xl text-mm-grey max-w-2xl mx-auto">
            Revealing human stories, remixing British culture, reframing the migration narrative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group relative bg-mm-white hover:bg-mm-white border-2 border-mm-grey-light hover:border-mm-black p-8 transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`mb-4 text-mm-grey group-hover:text-mm-black transition-colors`}>
                {pillar.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-mm-grey">{pillar.description}</p>

              <div className="mt-4 flex items-center text-mm-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
