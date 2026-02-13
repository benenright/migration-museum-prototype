import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import ScrollingLogoStack from '@/components/ScrollingLogoStack';
import StandardInfoPage from '@/components/streamfield/StandardInfoPage';

export default function GroupVisitsPage() {
  return (
    <>
      <ScrollingLogoStack />

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header transparent hideLogo searchIconOnly />
        </div>

        <main id="main-content">
          <StandardInfoPage
            title="Group Visits"
            intro="Bring your group to explore the rich tapestry of migration stories at the Migration Museum. We welcome groups of all sizes and offer tailored experiences to suit your interests."
            sections={[
              {
                heading: "Why Visit as a Group?",
                content: "Group visits offer a unique opportunity for shared learning and discussion. Whether you're a community group, workplace team, or social club, exploring migration stories together creates meaningful conversations about identity, belonging, and our shared history.",
                list: [
                  "Discounted group rates for parties of 10 or more",
                  "Dedicated group entrance to avoid queues",
                  "Optional guided tours led by expert educators",
                  "Private group bookings available for evening visits",
                  "Flexible scheduling to accommodate your group's needs"
                ]
              },
              {
                heading: "Group Sizes & Pricing",
                content: "We accommodate groups of various sizes:",
                list: [
                  "Small groups (10-20 people): £8 per person (self-guided)",
                  "Medium groups (21-40 people): £7 per person (self-guided)",
                  "Large groups (41+ people): Contact us for custom pricing",
                  "Guided tours: Additional £50 per tour (max 25 people per guide)",
                  "One complimentary ticket for every 10 paid admissions"
                ]
              },
              {
                heading: "Guided Tours",
                content: "Enhance your visit with a guided tour led by our knowledgeable educators:",
                list: [
                  "Overview tours (60 minutes) - Perfect introduction to our exhibitions",
                  "Deep dive tours (90 minutes) - Focused exploration of specific themes",
                  "Bespoke tours - Tailored to your group's interests",
                  "Tours available in multiple languages (advance booking required)",
                  "Interactive discussions encouraged"
                ]
              },
              {
                heading: "Facilities for Groups",
                content: "We provide amenities to make your group visit comfortable:",
                list: [
                  "Secure storage for bags and coats",
                  "Designated lunch spaces for groups bringing their own food",
                  "Museum café with group booking options",
                  "Private meeting room available for pre- or post-visit discussions (extra charge)"
                ]
              },
              {
                heading: "How to Book",
                content: "Booking your group visit is easy:",
                list: [
                  "Book at least 2 weeks in advance to ensure availability",
                  "Complete our online group booking form or call our bookings team",
                  "Payment required 7 days before your visit",
                  "Receive confirmation with detailed visit information",
                  "Cancellations accepted up to 48 hours before (full refund)"
                ]
              },
              {
                heading: "Special Interest Groups",
                content: "We welcome groups with specific interests and can tailor content for:",
                list: [
                  "Community organizations exploring their heritage",
                  "Professional development groups",
                  "University and college students",
                  "Faith groups",
                  "Older adults' groups and retirement communities",
                  "Social clubs and societies"
                ]
              }
            ]}
            callToAction={{
              title: "Ready to Book Your Group Visit?",
              description: "Contact our friendly bookings team to arrange your visit. We're here to help create an engaging and memorable experience for your group.",
              buttonText: "Book Your Group Visit",
              buttonLink: "mailto:groups@migrationmuseum.org"
            }}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}
