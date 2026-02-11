import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import CollageHero from '@/components/CollageHero';

export default function LearnPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <CollageHero
          title="Learn"
          subtitle="Educational resources for all ages and levels"
          imageSet={[17, 19, 20]}
          backgroundColor="orange"
        />
        <section className="py-16 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-mm-white border border-mm-grey-mid">
                <h3 className="text-2xl font-bold mb-4">For Teachers</h3>
                <p className="text-mm-grey mb-4">Curriculum-linked resources and workshops for primary and secondary educators.</p>
                <a href="/learn/teachers" className="text-mm-green hover:text-mm-blue font-semibold">Explore resources →</a>
              </div>
              <div className="p-8 bg-mm-white border border-mm-grey-mid">
                <h3 className="text-2xl font-bold mb-4">For Students</h3>
                <p className="text-mm-grey mb-4">Interactive learning materials designed for classroom and home use.</p>
                <a href="/learn/students" className="text-mm-green hover:text-mm-blue font-semibold">Start learning →</a>
              </div>
              <div className="p-8 bg-mm-white border border-mm-grey-mid">
                <h3 className="text-2xl font-bold mb-4">For Families</h3>
                <p className="text-mm-grey mb-4">Fun activities and trails to explore migration stories together.</p>
                <a href="/learn/families" className="text-mm-green hover:text-mm-blue font-semibold">Discover activities →</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
