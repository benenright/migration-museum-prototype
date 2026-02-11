# Design Notes: Migration Museum Prototype

## What We've Built - Phase 1 Complete ✅

### Design System Foundation
- **Brand Colors**: All 10 colors from brand guidelines configured in Tailwind
- **Typography**: Work Sans variable font with proper hierarchy (h1-h6)
- **Custom CSS**: Torn edge and angled edge classes for collage aesthetic
- **Accessibility**: Skip-to-content link, semantic HTML, WCAG 2.1 AA structure

### Homepage Components

#### 1. Header (`components/layout/Header.tsx`)
- Persistent navigation with sticky positioning
- Logo placeholder (simplified "M" mark - can be enhanced with actual SVG marks)
- Search bar (desktop persistent, mobile in menu)
- Four main navigation links: Visit, Explore, Learn, Support
- Mobile-responsive hamburger menu
- Color-coded hover states matching brand

#### 2. Hero Section (`components/streamfield/HeroBlock.tsx`)
- Full-width hero with configurable accent color backgrounds
- Abstract geometric shapes creating collage effect
- Dynamic "M" mark positioned in corner
- Supports title + subtitle
- Responsive typography scaling

#### 3. What's On Panel (`components/streamfield/WhatsOnPanel.tsx`)
- Grid layout (1-3 columns responsive)
- Event/exhibition cards with:
  - Color-coded borders matching accent colors
  - Type badges (exhibition/event/workshop)
  - Date information
  - Hover effects
- Links to individual event pages

#### 4. Pillar Navigation (`components/streamfield/PillarNavigation.tsx`)
- Four main sections: Visit, Explore, Learn, Support
- Icon + title + description format
- Color-coded accent bars on hover
- Animated hover states
- Clear call-to-action affordances

#### 5. Footer (`components/layout/Footer.tsx`)
- Four-column grid (responsive)
- Social media links
- Site map navigation
- Copyright and legal links
- Black background with white/grey text

### Sample Content (`data/sampleContent.ts`)
Created comprehensive, realistic content:
- **12 migration stories** covering diverse themes and time periods
- **3 What's On events** (exhibitions and workshops)
- **8 themes**: Work, Family, Culture, Food, Identity, Belonging, Innovation, Refuge
- **5 time periods**: Pre-1800 to Present
- **10+ geographies**: Caribbean, South Asia, East Asia, Africa, Europe, etc.

## Design Decisions & Brand Implementation

### Collage Aesthetic
**Implemented:**
- Torn edge CSS clip-path for organic, cut-out feel
- Angled edge clip-path for subtle geometric treatment
- Layered elements (see Featured Story section on homepage)
- Abstract shapes in hero backgrounds

**To Enhance:**
- Real photography with torn/cut-out treatments
- Pattern overlays from various cultures
- More complex layering with multiple images
- Integration with actual "M" mark SVGs from brand library

### Typography Hierarchy
**Title Case Usage:**
- All headlines use Title Case (not ALL CAPS) per brand guidelines
- Exceptions: Small badges/labels use uppercase for clarity
- Variable font weights create rhythm and emphasis

### Color Strategy
**Current Implementation:**
- Accent colors used strategically (not overwhelming)
- Each pillar has a designated color (Visit=Blue, Explore=Violet, Learn=Green, Support=Orange)
- Grey backgrounds provide breathing room
- High contrast maintained for accessibility

**Brand Guideline Principle:**
> "To expand our palette, we can take inspiration from the creativity of the people we work with. We can pick a colour out of the artworks and images shared with us."

*Opportunity:* When real images are added, extract colors from artwork to create contextual accent colors.

### "Foreground" vs "Background" Approach
Per brand guidelines:
- **Foreground**: Museum-focused content uses collage aesthetic ✅
- **Background**: When showcasing individuals (like Karen Arthur), respect their imagery

*Homepage currently uses "Foreground" approach throughout.*

## What's Next - Phase 2: Explore Hub

### Priority Components to Build:

#### 1. Story Cards Grid
```tsx
components/streamfield/StoryGrid.tsx
```
- Masonry or grid layout
- Story cards with:
  - Featured image (with collage treatment options)
  - Title
  - Theme tags
  - Time period & geography
  - Excerpt (2-3 lines)
  - Accent color coding

#### 2. Faceted Filtering
```tsx
components/ui/FilterPanel.tsx
```
- Three filter types: Theme, Time, Geography
- Multi-select capability
- Clear visual feedback
- Mobile-responsive (drawer/accordion)
- Active filter count display

#### 3. Search Enhancement
- Full-text search functionality
- Search results page
- Highlighting matching terms
- Filter integration

#### 4. Sort Options
- Relevance (default for search)
- Chronological (oldest/newest)
- Alphabetical
- Recently added

### Data Structure for Stories

Already prepared in `sampleContent.ts`:
```typescript
{
  id: string;
  title: string;
  slug: string;
  theme: string[];        // Multi-select tags
  timePeriod: string;
  geography: string;
  excerpt: string;        // Preview text
  heroImage: string;
  accentColor: 'blue' | 'violet' | 'orange' | 'yellow' | 'green';
}
```

Maps cleanly to Wagtail Page model with tags and categories.

## Phase 3: Individual Story Pages

### Story Detail Template Structure
```tsx
app/explore/[slug]/page.tsx
```

Wagtail StreamField blocks to implement:
1. **Story Hero** - Full-width image with title overlay
2. **Rich Text Block** - Body content with proper typography
3. **Image Gallery** - Multiple images with collage treatments
4. **Pull Quote Block** - Highlighted quotes from interviews
5. **Timeline Block** - Key dates and events
6. **Related Objects** - Museum artifacts/documents
7. **Audio/Video Embed** - Oral histories
8. **Related Stories** - Links to connected narratives

### Content Example Structure:
```
Story: "The Windrush Generation"
├── Hero Image (collage-treated)
├── Introduction (rich text)
├── Timeline (1948-1971)
├── Personal Story: Enoch Powell's Speech (pull quote + context)
├── Image Gallery: Caribbean arrival photos
├── Audio: Oral history excerpt
├── NHS Contribution section (rich text + stats)
├── Legacy section
└── Related Stories: "NHS Origins", "Notting Hill Carnival"
```

## Technical Implementation Notes

### Wagtail Migration Path

**Current Next.js Structure:**
```
app/page.tsx (homepage)
├── HeroBlock
├── WhatsOnPanel
├── PillarNavigation
└── Featured Story Section
```

**Future Wagtail Structure:**
```python
class HomePage(Page):
    body = StreamField([
        ('hero', blocks.StructBlock([
            ('title', blocks.CharBlock()),
            ('subtitle', blocks.CharBlock(required=False)),
            ('accent_color', blocks.ChoiceBlock(choices=ACCENT_COLORS)),
        ])),
        ('whats_on', blocks.StructBlock([
            ('events', blocks.ListBlock(blocks.PageChooserBlock(page_type='events.EventPage'))),
        ])),
        ('pillar_navigation', blocks.StaticBlock()),
        ('featured_story', blocks.PageChooserBlock(page_type='stories.StoryPage')),
    ])
```

**API Strategy:**
- Wagtail Headless API serves JSON
- Next.js fetches at build time (SSG) for performance
- ISR (Incremental Static Regeneration) for updates
- Client-side filtering/search for interactivity

### Image Handling

**Current:** Placeholder colored divs
**Production Needs:**
1. Actual photography from museum archives
2. Image optimization (Next.js Image component)
3. Collage treatment tool or pre-processed assets
4. Alt text for accessibility
5. Multiple sizes for responsive delivery

**Collage Tool Opportunity:**
The brand guidelines mention an "Image Generator" tool. Consider:
- Building a simple admin interface for applying torn/angled edge treatments
- Batch processing tool for consistent aesthetic
- Integration with Wagtail's image upload

## Visual Design Refinements to Consider

### 1. Enhanced "M" Marks
Currently using simplified text "M". Can enhance with:
- SVG versions from brand library
- Animated transitions between different M variants
- Context-aware M selection (different marks for different themes)

### 2. Micro-interactions
Add delight through:
- Smooth color transitions on hover
- Staggered animation on card grids
- Parallax effects on hero sections (subtle)
- Loading states with brand-appropriate animation

### 3. Pattern Library
Create reusable pattern components:
```tsx
components/ui/
├── Button.tsx        // Brand-styled buttons
├── Card.tsx          // Base card component
├── Badge.tsx         // Theme/category badges
├── CollageImage.tsx  // Image with torn/angled treatments
└── IconButton.tsx    // Accessible icon buttons
```

### 4. Responsive Refinement
Current breakpoints: sm, md, lg
Consider adding:
- xl breakpoint for large displays
- Container max-widths for comfortable reading
- Mobile-first micro-refinements

## Content Strategy Notes

### Story Selection Criteria
The 12 sample stories represent:
- ✅ Diverse time periods (1800s - present)
- ✅ Multiple geographies (Caribbean, Asia, Europe, Africa)
- ✅ Various themes (work, refuge, culture, identity)
- ✅ Different migration drivers (labor, refuge, education)
- ✅ Known and lesser-known narratives

### Tone of Voice
Sample content demonstrates:
- Human-centered storytelling
- Factual but empathetic
- Avoids both sentimentality and clinical distance
- Active voice, present tense where appropriate
- Accessible language (no jargon)

### Educational Differentiation
Future "Learn" section should differentiate:
- **Primary**: Interactive, visual, gamified
- **Secondary**: Curriculum-linked, downloadable resources
- **Higher Ed**: Research access, academic partnerships
- **Adult**: Evening talks, workshops, tours

## Accessibility Audit Checklist

Current Implementation:
- ✅ Semantic HTML (header, nav, main, footer, sections)
- ✅ Skip to content link
- ✅ Heading hierarchy (H1 → H2 → H3)
- ✅ ARIA labels on search and menu buttons
- ✅ Keyboard navigation (links, buttons)
- ✅ Color contrast (using brand's high-contrast palette)

To Add:
- [ ] Focus visible styles (custom brand-appropriate)
- [ ] Screen reader testing
- [ ] ARIA live regions for dynamic content
- [ ] Reduced motion preferences
- [ ] High contrast mode support

## Performance Considerations

### Current Setup:
- Next.js SSG for static pages (fast)
- Tailwind CSS purging (small CSS bundle)
- Google Fonts with display: swap

### Future Optimizations:
1. Image optimization (next/image with proper sizing)
2. Code splitting (dynamic imports for heavy components)
3. Font subsetting (only characters needed)
4. CDN for static assets
5. Lazy loading below-the-fold content

### Target Metrics:
- Lighthouse Performance: >90
- Lighthouse Accessibility: 100
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

## Testing Strategy

### Manual Testing:
- [ ] Chrome, Safari, Firefox (latest 2 versions)
- [ ] iOS Safari, Android Chrome
- [ ] Screen reader (VoiceOver, NVDA)
- [ ] Keyboard-only navigation
- [ ] Print styles

### Automated Testing:
```bash
# To add
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev @axe-core/playwright  # Accessibility testing
```

Test priorities:
1. Component rendering
2. Navigation interactions
3. Filter functionality
4. Accessibility compliance
5. Responsive behavior

---

**Last Updated**: February 5, 2026
**Phase**: 1 Complete (Homepage) → Moving to Phase 2 (Explore Hub)
