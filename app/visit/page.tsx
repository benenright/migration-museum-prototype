import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import CollageHero from '@/components/CollageHero';

export default function VisitPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <CollageHero
          title="Visit"
          subtitle="Plan your visit to the Migration Museum"
          imageSet={[18, 24, 25]}
          backgroundColor="blue"
        />
        <section className="py-16 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-6">Opening in 2028</h2>
              <p className="text-xl text-mm-grey mb-6">
                The Migration Museum will open its permanent home in the City of London in 2028.
                In the meantime, explore our online stories and exhibitions.
              </p>
              <a href="/explore" className="inline-block px-8 py-4 bg-mm-blue text-mm-white font-bold rounded hover:bg-opacity-90">
                Explore Stories
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
