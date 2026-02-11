interface HeroBlockProps {
  title: string;
  subtitle?: string;
  accentColor?: 'blue' | 'violet' | 'orange' | 'yellow' | 'green';
}

export default function HeroBlock({ title, subtitle, accentColor = 'violet' }: HeroBlockProps) {
  const colorMap = {
    blue: 'bg-mm-blue',
    violet: 'bg-mm-violet',
    orange: 'bg-mm-orange',
    yellow: 'bg-mm-yellow',
    green: 'bg-mm-green',
  };

  return (
    <section className={`relative min-h-[70vh] flex items-center ${colorMap[accentColor]} overflow-hidden`}>
      {/* Collage Background - Abstract shapes representing cultural hybridity */}
      <div className="absolute inset-0 opacity-20">
        {/* Geometric torn shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-mm-black torn-edge rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-80 h-48 bg-mm-white angled-edge -rotate-6"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-72 bg-mm-black opacity-30 torn-edge"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-mm-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-2xl md:text-3xl text-mm-white font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Dynamic M mark in corner */}
      <div className="absolute bottom-8 right-8 opacity-30">
        <div className="w-32 h-32 bg-mm-white flex items-center justify-center">
          <span className="text-6xl font-bold text-mm-black">M</span>
        </div>
      </div>
    </section>
  );
}
