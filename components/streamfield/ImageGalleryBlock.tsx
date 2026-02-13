import Image from 'next/image';

interface ImageGalleryBlockProps {
  title?: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  height?: 'small' | 'medium' | 'large';
}

export default function ImageGalleryBlock({
  title,
  images,
  height = 'large'
}: ImageGalleryBlockProps) {
  const heightClasses = {
    small: 'h-64 md:h-96',
    medium: 'h-80 md:h-[500px]',
    large: 'h-96 md:h-[600px]'
  };

  return (
    <div className="max-w-6xl mx-auto mb-20">
      {title && (
        <div className="max-w-3xl mb-10">
          <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
        </div>
      )}
      <div className="space-y-8">
        {images.map((image, index) => (
          <div key={index} className={`relative ${heightClasses[height]} overflow-hidden`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1536px) 100vw, 1536px"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
