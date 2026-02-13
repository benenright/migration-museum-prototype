import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import ScrollingLogoStack from '@/components/ScrollingLogoStack';
import StandardInfoPage from '@/components/streamfield/StandardInfoPage';

export default function FamiliesPage() {
  return (
    <>
      <ScrollingLogoStack />

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header transparent hideLogo searchIconOnly />
        </div>

        <main id="main-content">
          <StandardInfoPage
            title="For Families"
            intro="The Migration Museum welcomes families to explore together. Our exhibitions feature hands-on activities, storytelling, and interactive elements designed to engage children while sparking meaningful conversations about migration, identity, and belonging."
            sections={[
              {
                heading: "Family-Friendly Exhibitions",
                content: "Our exhibitions are designed with families in mind:",
                list: [
                  "Interactive touchscreens with games and quizzes for children",
                  "Audio stories narrated for younger audiences (ages 5+)",
                  "Object handling opportunities - touch real historical items",
                  "Child-height displays and magnifying stations",
                  "Comfortable seating throughout for breaks and discussions",
                  "Buggy-friendly galleries with wide pathways"
                ]
              },
              {
                heading: "Children's Activities",
                content: "Free activity resources for kids of all ages:",
                list: [
                  "Explorer Backpacks (ages 5-11): Tools, activities, and challenges",
                  "Creative Corner: Art supplies to draw and respond to what you see",
                  "Story Cards: Prompts to share your own family's migration story",
                  "Treasure Hunt Trail: Find hidden objects throughout the galleries",
                  "Photo Challenge: Family selfie spots and photography missions",
                  "Take-home activity sheets to continue learning at home"
                ]
              },
              {
                heading: "Family Events",
                content: "Join our special events throughout the year:",
                list: [
                  "Family Saturdays: Monthly themed activities and workshops (free)",
                  "Storytelling Sessions: Migration stories from around the world",
                  "Arts & Crafts Workshops: Create your own migration-themed art",
                  "Meet the Museum: Behind-the-scenes tours for families",
                  "School Holiday Programmes: Week-long activities during breaks",
                  "Festival Celebrations: Lunar New Year, Eid, Diwali, and more"
                ]
              },
              {
                heading: "Visiting with Young Children",
                content: "Practical information for families with little ones:",
                list: [
                  "Baby changing facilities on both floors",
                  "Breastfeeding welcome throughout the museum (quiet room available)",
                  "High chairs available in the café",
                  "Buggy parking near the entrance (buggies also welcome in galleries)",
                  "Children's menu in the café with healthy options",
                  "Quiet spaces if children need a break from busy galleries"
                ]
              },
              {
                heading: "Accessibility for Families",
                content: "We want all families to enjoy their visit:",
                list: [
                  "Sensory-friendly sessions twice monthly (low lighting/sound)",
                  "Visual story guides for children with additional needs",
                  "BSL-interpreted family events quarterly",
                  "Wheelchair accessible throughout with step-free access",
                  "Accessible toilets with changing places facilities",
                  "Assistance dogs welcome"
                ]
              },
              {
                heading: "Plan Your Family Visit",
                content: "Tips for a great day out:",
                list: [
                  "Allow 1.5-2 hours for your visit (or longer with activities)",
                  "Free entry for all - no booking required for general visits",
                  "Best times: Weekday mornings tend to be quieter",
                  "Visit the café first or last - it can get busy at lunchtime",
                  "Ask at reception for current activities and drop-in sessions",
                  "Nearest stations: Lewisham (10 min walk), Lewisham DLR"
                ]
              },
              {
                heading: "Create Your Own Family Story",
                content: "Use your visit as a starting point for family conversations:",
                list: [
                  "Recording booth: Record your family's migration story to share",
                  "Family Tree Workshops: Map your family's journey",
                  "Photo Archives: Bring old family photos to digitize and preserve",
                  "Intergenerational storytelling: Help children interview grandparents",
                  "Recipe Collection: Share your family's cultural food traditions",
                  "Language Map: Mark all the languages spoken in your family"
                ]
              }
            ]}
            callToAction={{
              title: "Join Our Family Mailing List",
              description: "Get monthly updates about family events, school holiday activities, and new exhibitions designed for children and families.",
              buttonText: "Sign Up for Family Updates",
              buttonLink: "mailto:families@migrationmuseum.org?subject=Family Mailing List"
            }}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}
