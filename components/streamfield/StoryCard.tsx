import Link from 'next/link';
import Image from 'next/image';
import { colorMap, textColorMap } from '@/constants/colors';

interface StoryCardProps {
  id: string;
  title: string;
  slug: string;
  theme: string[];
  timePeriod: string;
  geography: string;
  excerpt: string;
  accentColor: 'blue' | 'violet' | 'orange' | 'yellow' | 'green';
  isFeatured?: boolean;
}

export default function StoryCard({
  id,
  title,
  slug,
  timePeriod,
  geography,
  excerpt,
  accentColor,
  isFeatured = false,
}: StoryCardProps) {
  const bgColor = isFeatured ? colorMap[accentColor] : '#FFFFFF';
  const textColor = isFeatured ? textColorMap[accentColor] : '#000000';

  // Cycle through the 4 story images based on story id hash
  const storyHash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const imageNumber = (storyHash % 4) + 1;
  const imageSrc = imageNumber === 1 ? '/images/story.png' : `/images/story${imageNumber}.png`;

  return (
    <Link
      href={`/explore/${slug}`}
      className="group block overflow-hidden transition-all duration-300 hover:shadow-2xl"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {/* Image Section */}
      <div className={`relative w-full overflow-hidden ${isFeatured ? 'h-80 md:h-[512px]' : 'h-64'}`}>
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-10">
        {/* Featured Badge */}
        {isFeatured && (
          <div
            className="inline-block px-3 py-1 mb-6 badge-text"
            style={{
              backgroundColor: textColor,
              color: bgColor,
            }}
          >
            Featured Story
          </div>
        )}

        {/* Time Period & Geography */}
        <div className="mb-6">
          <p className="small-text font-bold mb-1" style={{ color: textColor }}>
            {timePeriod}
          </p>
          <p className="small-text opacity-80" style={{ color: textColor }}>
            {geography}
          </p>
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: textColor }}>
          {title}
        </h3>

        {/* Excerpt */}
        <p className="mb-6 text-base" style={{ color: textColor, opacity: 0.9 }}>
          {excerpt.substring(0, 150)}...
        </p>

        {/* Read More Link */}
        <div
          className="flex items-center gap-2 font-bold transition-transform group-hover:translate-x-2"
          style={{ color: textColor }}
        >
          <span>Read story</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
