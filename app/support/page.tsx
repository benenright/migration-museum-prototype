import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';

export default function SupportPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-mm-orange py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-mm-white mb-6">Support Us</h1>
            <p className="text-2xl text-mm-white">Help us build Britain&apos;s Migration Museum</p>
          </div>
        </section>
        <section className="py-16 bg-mm-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Make a Donation</h2>
                <p className="text-xl text-mm-grey mb-6">
                  Your support helps us preserve and share stories of migration for future generations.
                  Every contribution makes a difference.
                </p>
                <a
                  href="/support/donate"
                  className="inline-block px-8 py-4 bg-mm-black text-mm-white font-bold text-lg rounded hover:bg-opacity-90 dark:bg-mm-white dark:text-mm-black"
                >
                  Donate Now
                </a>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Become a Member</h2>
                <p className="text-xl text-mm-grey mb-6">
                  Join our community of supporters and get exclusive access to events, exhibitions,
                  and behind-the-scenes content.
                </p>
                <a
                  href="/support/membership"
                  className="inline-block px-8 py-4 border-2 border-mm-orange text-mm-orange font-bold text-lg rounded hover:bg-mm-orange hover:text-mm-white transition-all"
                >
                  Join Now
                </a>
              </div>
            </div>

            <div className="bg-mm-white border-2 border-mm-grey-mid p-12 rounded">
              <h3 className="text-3xl font-bold mb-6">Other Ways to Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-xl mb-3">Volunteer</h4>
                  <p className="text-mm-grey mb-3">Share your time and skills with the museum.</p>
                  <a href="/support/volunteer" className="text-mm-orange hover:text-mm-violet font-semibold">Learn more →</a>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3">Corporate Partnerships</h4>
                  <p className="text-mm-grey mb-3">Partner with us to support migration heritage.</p>
                  <a href="/support/corporate" className="text-mm-orange hover:text-mm-violet font-semibold">Get in touch →</a>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3">Share Your Story</h4>
                  <p className="text-mm-grey mb-3">Contribute to our oral history archive.</p>
                  <a href="/contribute" className="text-mm-orange hover:text-mm-violet font-semibold">Contribute →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
