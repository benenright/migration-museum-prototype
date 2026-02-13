interface IntroBlockProps {
  title: string;
  content: string;
  headingLevel?: 'h1' | 'h2' | 'h3';
}

export default function IntroBlock({
  title,
  content,
  headingLevel = 'h2'
}: IntroBlockProps) {
  const HeadingTag = headingLevel;

  // Use default h1 styles from globals.css for h1, Tailwind for h2/h3
  const headingClasses = headingLevel === 'h1'
    ? 'mb-8'
    : 'text-4xl md:text-5xl font-bold mb-8';

  return (
    <div className="max-w-3xl mx-auto mb-20">
      <HeadingTag className={headingClasses}>
        {title}
      </HeadingTag>
      <div className="prose prose-xl max-w-none">
        <p className="intro-text text-mm-black">
          {content}
        </p>
      </div>
    </div>
  );
}
