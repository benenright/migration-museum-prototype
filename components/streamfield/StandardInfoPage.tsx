import IntroBlock from './IntroBlock';

interface ContentSection {
  heading: string;
  content: string;
  list?: string[];
}

interface StandardInfoPageProps {
  title: string;
  intro: string;
  sections: ContentSection[];
  callToAction?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export default function StandardInfoPage({
  title,
  intro,
  sections,
  callToAction
}: StandardInfoPageProps) {
  return (
    <article className="pt-[100px] pb-20 bg-mm-white">
      <div className="container mx-auto px-4">
        {/* Intro Section - Narrow column */}
        <IntroBlock title={title} content={intro} headingLevel="h1" />

        {/* Content Sections - Narrow column */}
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
              <p className="body-text text-mm-grey mb-4">
                {section.content}
              </p>
              {section.list && section.list.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 body-text text-mm-grey">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {callToAction && (
          <div className="max-w-3xl mx-auto mt-16 p-8 bg-mm-grey-light rounded">
            <h3 className="text-2xl font-bold mb-4">{callToAction.title}</h3>
            <p className="lead-text text-mm-grey mb-6">{callToAction.description}</p>
            <a
              href={callToAction.buttonLink}
              className="inline-block px-8 py-4 bg-mm-black text-mm-white font-bold rounded hover:bg-opacity-90 transition-all"
            >
              {callToAction.buttonText}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
