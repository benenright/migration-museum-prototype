import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import ScrollingLogoStack from '@/components/ScrollingLogoStack';
import StandardInfoPage from '@/components/streamfield/StandardInfoPage';

export default function TeachersPage() {
  return (
    <>
      <ScrollingLogoStack />

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header transparent hideLogo searchIconOnly />
        </div>

        <main id="main-content">
          <StandardInfoPage
            title="For Teachers"
            intro="The Migration Museum offers rich learning opportunities aligned with the National Curriculum. Our exhibitions and resources help students explore migration's role in shaping Britain while developing critical thinking about identity, diversity, and belonging."
            sections={[
              {
                heading: "Curriculum Links",
                content: "Our content supports teaching across multiple subjects and key stages:",
                list: [
                  "History: Migration through the ages, Empire and Commonwealth, Modern Britain",
                  "Citizenship: Identity, diversity, human rights, British values",
                  "English: Personal narratives, creative writing, oral histories",
                  "Geography: Push and pull factors, global movement, settlement patterns",
                  "PSHE: Identity and belonging, diversity and inclusion, empathy",
                  "Religious Studies: Faith and migration, cultural traditions"
                ]
              },
              {
                heading: "School Visits",
                content: "Bring your class to experience our exhibitions firsthand:",
                list: [
                  "Self-led visits: Free for all schools (booking required)",
                  "Facilitated workshops: £120 per class (up to 30 students)",
                  "Pre-visit teacher preview sessions available",
                  "Dedicated education space for group activities",
                  "Visits aligned with KS2, KS3, KS4, and KS5 curriculum",
                  "Accessible for students with additional needs"
                ]
              },
              {
                heading: "Workshops & Sessions",
                content: "Our expert educators deliver engaging workshops:",
                list: [
                  "Object handling sessions with historical artifacts",
                  "Oral history workshops - students interview visitors or each other",
                  "Creative response sessions - drama, art, and writing",
                  "Source analysis skills for KS3/KS4 History students",
                  "Identity exploration workshops for Citizenship and PSHE",
                  "Bespoke sessions tailored to your class needs"
                ]
              },
              {
                heading: "Teaching Resources",
                content: "Download free resources to use in the classroom:",
                list: [
                  "Pre and post-visit activity packs for each key stage",
                  "PowerPoint presentations with images and discussion prompts",
                  "Source packs with historical documents and photographs",
                  "Video clips featuring personal migration stories",
                  "Lesson plans linked to specific curriculum objectives",
                  "Assessment frameworks and differentiated activities"
                ]
              },
              {
                heading: "Professional Development",
                content: "We support teachers with CPD opportunities:",
                list: [
                  "Termly teacher CPD sessions (free, booking required)",
                  "Subject-specific workshops (History, Citizenship, English)",
                  "Guidance on teaching sensitive topics",
                  "Introduction to oral history methods",
                  "New exhibition preview sessions for teachers",
                  "Certificate of attendance provided"
                ]
              },
              {
                heading: "Virtual Learning",
                content: "Can't visit in person? We offer digital alternatives:",
                list: [
                  "Live virtual tours via video link (45 minutes, £60 per class)",
                  "Pre-recorded exhibition tours available on our website",
                  "Interactive online workshops",
                  "Digital resource packs for classroom use",
                  "Q&A sessions with exhibition curators (subject to availability)"
                ]
              },
              {
                heading: "Planning Your Visit",
                content: "To help your school visit run smoothly:",
                list: [
                  "Book at least 3 weeks in advance",
                  "Risk assessments available on request",
                  "Free teacher preview visits (bring up to 2 colleagues)",
                  "Dedicated school entrance and coat storage",
                  "Indoor lunch space available (booking required)",
                  "Accessible facilities throughout"
                ]
              }
            ]}
            callToAction={{
              title: "Book Your School Visit or Workshop",
              description: "Ready to bring your students to the Migration Museum? Our education team is here to help plan an engaging and curriculum-linked visit.",
              buttonText: "Contact Our Education Team",
              buttonLink: "mailto:education@migrationmuseum.org"
            }}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}
