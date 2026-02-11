import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';

export default function NewsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-mm-orange py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-mm-white mb-6">News & Ideas</h1>
            <p className="text-2xl text-mm-white">Latest updates, blog posts, and perspectives</p>
          </div>
        </section>
        <section className="py-16 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <article className="mb-12 pb-12 border-b border-mm-grey-light">
                <div className="text-sm text-mm-grey mb-2">News · February 5, 2026</div>
                <h2 className="text-3xl font-bold mb-4">Construction Begins on Permanent Museum Site</h2>
                <p className="text-lg text-mm-grey mb-4">
                  Work has officially begun on the Migration Museum&apos;s permanent home at 65 Crutched Friars
                  in the City of London. The state-of-the-art facility will open in 2028.
                </p>
                <a href="/news/construction-begins" className="text-mm-orange hover:text-mm-violet font-semibold">Read more →</a>
              </article>
              <article className="mb-12">
                <div className="text-sm text-mm-grey mb-2">Blog · January 28, 2026</div>
                <h2 className="text-3xl font-bold mb-4">Rethinking British History Through Migration</h2>
                <p className="text-lg text-mm-grey mb-4">
                  How can we tell a more complete story of Britain? Our Director reflects on the importance
                  of centering migration in national narratives.
                </p>
                <a href="/news/blog/rethinking-british-history" className="text-mm-orange hover:text-mm-violet font-semibold">Read more →</a>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
