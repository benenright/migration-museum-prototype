import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import ScrollingLogoStack from '@/components/ScrollingLogoStack';
import StandardInfoPage from '@/components/streamfield/StandardInfoPage';

export default function StudentsPage() {
  return (
    <>
      <ScrollingLogoStack />

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header transparent hideLogo searchIconOnly />
        </div>

        <main id="main-content">
          <StandardInfoPage
            title="For Students"
            intro="Whether you're researching for homework, preparing for exams, or exploring migration for a personal project, the Migration Museum offers resources and experiences designed to support your learning journey."
            sections={[
              {
                heading: "Study Resources",
                content: "Access free resources to support your coursework and research:",
                list: [
                  "Downloadable fact sheets on key migration topics and periods",
                  "Historical source packs with photographs, documents, and artifacts",
                  "Video interviews with migrants sharing their personal stories",
                  "Timeline of migration to Britain from Roman times to present",
                  "Glossary of migration-related terms and concepts",
                  "Bibliography and reading lists for further research"
                ]
              },
              {
                heading: "Homework Help",
                content: "Support for common migration-related assignments:",
                list: [
                  "GCSE History: Empire and Migration, Modern Britain topics",
                  "A-Level History: Britain 1945-2007, Migration and Identity",
                  "Citizenship Studies: Diversity, Identity, and Belonging",
                  "Geography: Global migration patterns and push/pull factors",
                  "English: Personal narratives and creative writing prompts",
                  "Religious Studies: Faith communities and migration"
                ]
              },
              {
                heading: "Youth Programmes",
                content: "Join our programmes designed specifically for young people:",
                list: [
                  "Youth Board (ages 16-25): Shape our exhibitions and events",
                  "Student Ambassadors: Represent the museum in your school/college",
                  "Young Creatives Programme: Workshops in writing, film, and art",
                  "Work Experience: 1-2 week placements in museum departments",
                  "Volunteer Opportunities: Museum guides, event support, research",
                  "Schools Competition: Annual creative project with prizes"
                ]
              },
              {
                heading: "Interactive Trails",
                content: "Explore the museum with our self-guided trails:",
                list: [
                  "Detective Trail: Solve clues using objects and stories (KS2-3)",
                  "Photography Challenge: Capture your perspective on migration",
                  "Object Investigation: Deep dive into specific artifacts",
                  "Story Collector: Record oral histories from visitors",
                  "Creative Response: Sketch, write, or respond artistically",
                  "Digital Trail: Use your phone to access bonus content"
                ]
              },
              {
                heading: "University Students",
                content: "Resources for undergraduate and postgraduate research:",
                list: [
                  "Access to our research library and archives (by appointment)",
                  "Study spaces available during museum opening hours",
                  "Curator talks and academic symposia throughout the year",
                  "Dissertation and thesis research support",
                  "Internship opportunities in curation, education, and collections",
                  "Collaboration with university research projects"
                ]
              },
              {
                heading: "Independent Visit",
                content: "Visit us on your own or with friends:",
                list: [
                  "Free entry for all students (student ID required)",
                  "Open Tuesday-Saturday, 10am-5pm",
                  "WiFi available throughout the museum",
                  "Quiet study area with power sockets",
                  "Café with student discount (10% off with valid ID)",
                  "Take photos of displays for your research (no flash)"
                ]
              }
            ]}
            callToAction={{
              title: "Get Involved with Our Youth Programmes",
              description: "Join our Youth Board, become a Student Ambassador, or apply for our Young Creatives Programme. We're always looking for passionate young people to help shape what we do.",
              buttonText: "Join Our Youth Network",
              buttonLink: "mailto:youth@migrationmuseum.org"
            }}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}
