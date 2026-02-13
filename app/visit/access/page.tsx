import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import ScrollingLogoStack from '@/components/ScrollingLogoStack';
import StandardInfoPage from '@/components/streamfield/StandardInfoPage';

export default function AccessibilityPage() {
  return (
    <>
      <ScrollingLogoStack />

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header transparent hideLogo searchIconOnly />
        </div>

        <main id="main-content">
          <StandardInfoPage
            title="Accessibility"
            intro="The Migration Museum is committed to making our exhibitions and programmes accessible to all. We want everyone to feel welcome and able to engage with the stories we share."
            sections={[
              {
                heading: "Physical Access",
                content: "Our building is fully wheelchair accessible with step-free access throughout. We have:",
                list: [
                  "Wheelchair-accessible entrances and lifts to all floors",
                  "Accessible toilets on every level",
                  "Designated wheelchair spaces in our auditorium and event spaces",
                  "Accessible parking nearby (please contact us in advance)",
                  "Wheelchairs available for loan - please ask at reception"
                ]
              },
              {
                heading: "Sensory Support",
                content: "We understand that museums can be overwhelming environments. We offer:",
                list: [
                  "BSL interpreted tours (monthly, bookable in advance)",
                  "Hearing loops in our auditorium and at reception",
                  "Large print exhibition guides available on request",
                  "Quiet hours on the first Wednesday of each month (9-11am)",
                  "Assistance dogs are welcome throughout the museum"
                ]
              },
              {
                heading: "Visual Accessibility",
                content: "For visitors who are blind or partially sighted:",
                list: [
                  "Audio described tours available (contact us to arrange)",
                  "Tactile elements in selected exhibitions",
                  "High contrast and large print labels",
                  "Staff trained to provide verbal descriptions"
                ]
              },
              {
                heading: "Cognitive & Learning Accessibility",
                content: "We strive to make our content accessible to visitors with learning disabilities:",
                list: [
                  "Easy Read versions of key exhibition information",
                  "Social stories available for download before your visit",
                  "Staff available to provide additional support",
                  "Quiet spaces available if you need a break"
                ]
              },
              {
                heading: "Planning Your Visit",
                content: "To help you prepare for your visit, we can provide:",
                list: [
                  "Pre-visit information packs",
                  "Virtual tours of our spaces",
                  "Advance information about upcoming exhibitions",
                  "One-to-one support - please contact us at least 2 weeks before your visit"
                ]
              }
            ]}
            callToAction={{
              title: "Need Additional Support?",
              description: "If you have specific accessibility requirements or would like to discuss your visit in advance, please get in touch. We're here to help ensure you have the best possible experience.",
              buttonText: "Contact Our Access Team",
              buttonLink: "mailto:access@migrationmuseum.org"
            }}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}
