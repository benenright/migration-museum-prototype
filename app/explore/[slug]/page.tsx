import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import ScrollingLogoStack from '@/components/ScrollingLogoStack';
import MigrationStoriesCarousel from '@/components/MigrationStoriesCarousel';
import IntroBlock from '@/components/streamfield/IntroBlock';
import { featuredStories } from '@/data/sampleContent';
import { colorMap } from '@/constants/colors';

export function generateStaticParams() {
  return featuredStories.map((story) => ({
    slug: story.slug,
  }));
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = featuredStories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  // Get the story index to determine which image to use
  const storyIndex = featuredStories.findIndex((s) => s.id === story.id);
  const imageNumber = (storyIndex % 4) + 1;
  const heroImage = imageNumber === 1 ? '/images/story.png' : `/images/story${imageNumber}.png`;

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
        {/* Colored Text Block - Full Width at Top */}
        <section
          className="relative py-12 pt-[200px] min-h-[50vh] flex items-end"
          style={{
            background: colorMap[story.accentColor],
          }}
        >
          <div className="container mx-auto px-4 lg:pl-[180px]">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div
                className="mb-4 flex items-center gap-2"
                style={{
                  color: ['yellow', 'green'].includes(story.accentColor) ? '#000000' : '#FFFFFF'
                }}
              >
                <a href="/" className="hover:underline">Home</a>
                <span>/</span>
                <a href="/explore" className="hover:underline">Explore</a>
              </div>

              <h1
                className="mb-4"
                style={{
                  color: ['yellow', 'green'].includes(story.accentColor) ? '#000000' : '#FFFFFF'
                }}
              >
                {story.title}
              </h1>

              <div
                className="flex flex-wrap gap-4 text-lg"
                style={{
                  color: ['yellow', 'green'].includes(story.accentColor) ? '#000000' : '#FFFFFF'
                }}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {story.timePeriod}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {story.geography}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative min-h-[80vh] bg-mm-white">
          <div className="relative w-full h-full min-h-[80vh]">
            <Image
              src={heroImage}
              alt={story.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </section>

        {/* Story Content */}
        <article className="py-16 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Theme tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {story.theme.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-mm-grey-light text-sm font-semibold text-mm-grey rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Introduction */}
              <div className="prose prose-xl max-w-none mb-12">
                <p className="intro-text text-mm-black">
                  {story.excerpt}
                </p>
              </div>

              {/* Sample content blocks - would be StreamField in Wagtail */}
              <div className="space-y-12">
                {/* Rich Text Block */}
                <div className="prose prose-xl max-w-none">
                  <h2>The Journey Begins</h2>
                  <p className="body-text mb-6">
                    Every migration story is unique, shaped by individual circumstances, aspirations,
                    and the broader historical context. This narrative explores the complex realities
                    of movement, belonging, and identity that have shaped Britain for centuries.
                  </p>
                  <p className="body-text mb-6">
                    Understanding these stories helps us see migration not as a distant historical
                    phenomenon, but as a lived experience that connects us all. Through personal
                    accounts, archival materials, and cultural artifacts, we piece together a more
                    complete picture of British history.
                  </p>
                  <p className="body-text mb-6">
                    The decision to migrate is rarely simple. It involves leaving behind familiar
                    places, communities, and ways of life while embracing uncertainty and the
                    promise of new opportunities. These journeys are marked by courage, resilience,
                    and an enduring hope for a better future.
                  </p>
                  <p className="body-text mb-6">
                    For many, migration meant navigating complex bureaucratic systems, learning new
                    languages, and adapting to unfamiliar customs. Yet despite these challenges,
                    migrants have continuously enriched British society through their contributions
                    to culture, economy, and community life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Pull Quote - Highlighted */}
        <section className="py-20 bg-mm-white">
          <div className="container mx-auto px-4">
            <blockquote className="max-w-4xl mx-auto text-center">
              <p
                className="text-4xl md:text-5xl font-normal mb-8 inline"
                style={{
                  lineHeight: 1.3,
                  backgroundColor: colorMap[story.accentColor],
                  color: ['yellow', 'green'].includes(story.accentColor) ? '#000000' : '#FFFFFF',
                  padding: '0.2em 0.4em',
                  boxDecorationBreak: 'clone',
                  WebkitBoxDecorationBreak: 'clone',
                }}
              >
                "Migration is not just about crossing borders. It is about carrying home with you
                while building a new one."
              </p>
              <footer className="text-base text-mm-grey mt-6 block">
                — Oral history archive
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Story Content Continued */}
        <article className="py-16 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {/* Image Gallery Placeholder */}
                <div className="grid grid-cols-2 gap-4 my-12">
                  <div className="relative h-64 bg-mm-grey-light torn-edge">
                    <div className="absolute inset-0 flex items-center justify-center text-mm-grey">
                      Historical photograph
                    </div>
                  </div>
                  <div className="relative h-64 bg-mm-grey-light angled-edge">
                    <div className="absolute inset-0 flex items-center justify-center text-mm-grey">
                      Artifact image
                    </div>
                  </div>
                </div>

                {/* Rich Text Continued */}
                <div className="prose prose-xl max-w-none">
                  <h2>Impact and Legacy</h2>
                  <p className="body-text mb-6">
                    The legacy of this migration story continues to resonate today. From cultural
                    contributions to economic impact, from family histories to national identity,
                    these movements have fundamentally shaped modern Britain.
                  </p>
                  <p className="body-text mb-6">
                    Migrants have brought new perspectives, skills, and traditions that have
                    transformed British society in countless ways. Their influence can be seen
                    in the arts, cuisine, music, literature, and the very fabric of urban and
                    rural communities across the nation.
                  </p>
                  <p className="body-text mb-6">
                    The children and grandchildren of migrants often navigate multiple identities,
                    creating new hybrid cultures that blend heritage with contemporary British life.
                    This ongoing process of cultural exchange and adaptation continues to evolve,
                    shaping the Britain of tomorrow.
                  </p>
                  <p className="body-text mb-6">
                    By exploring these narratives, we challenge simplistic understandings of
                    British history and recognize the complexity and richness that migration
                    brings to our shared story. Each personal journey contributes to the larger
                    tapestry of what it means to be British today.
                  </p>
                </div>

                {/* Related Resources */}
                <div className="bg-mm-grey-light p-8 rounded">
                  <h3 className="text-2xl font-bold mb-4">Learn More</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-mm-blue hover:text-mm-violet font-semibold">
                        Download teaching resources →
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-mm-blue hover:text-mm-violet font-semibold">
                        Listen to oral histories →
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-mm-blue hover:text-mm-violet font-semibold">
                        Explore the archive →
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Stories Carousel */}
        <MigrationStoriesCarousel stories={featuredStories} />
      </main>
      </div>

      <Footer />
    </>
  );
}
