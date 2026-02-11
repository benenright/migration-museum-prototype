# Migration Museum Website Prototype

A modern, accessible website for the Migration Museum, built with Next.js, TypeScript, and Tailwind CSS. This prototype implements the museum's brand guidelines and prepares for future integration with Wagtail CMS.

## 🎨 Design System

The website implements the Migration Museum's brand identity:

### Colors
- **Accent Colors**: Blue (#5A5FEF), Violet (#A880FF), Orange (#FF5C45), Yellow (#FFD700), Green (#59F5B1)
- **Neutrals**: Black (#000000), Greys (#7A7A7A, #D1D1D1, #E5E5E5), White (#FFFFFF)

### Typography
- **Font**: Work Sans (Variable font)
- **Style**: Title Case preferred over ALL CAPS for a modern, approachable feel

### Visual Language
- **Collage Aesthetic**: Torn shapes and cut-out image treatments representing cultural hybridity
- **Dynamic Branding**: Various "M" marks that can be remixed to create an ever-changing brand

## 🏗️ Architecture

### Component Structure (Wagtail-Ready)

```
components/
├── streamfield/          # Maps to Wagtail StreamField blocks
│   ├── HeroBlock         # Hero section with collage aesthetic
│   ├── WhatsOnPanel      # Current exhibitions and events
│   └── PillarNavigation  # Main site sections (Visit/Explore/Learn/Support)
├── layout/
│   ├── Header           # Persistent header with search
│   └── Footer           # Site footer with links
└── ui/                  # Reusable UI components (to be added)
```

### Information Architecture

Following the recommended IA from the expert review:

1. **VISIT**: Logistics, What's On, accessibility
2. **EXPLORE**: Story hub with faceted filtering (Theme/Time/Geography)
3. **LEARN**: Education resources for all levels
4. **SUPPORT**: Donations, membership, volunteering

## 🚀 Getting Started

```bash
cd migration-museum-prototype
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Sample Content

12 diverse migration stories covering themes of Work, Family, Culture, Food, Identity, Belonging, Innovation, and Refuge.

Stories include: Windrush Generation, Kindertransport, Brick Lane, Partition Voices, Notting Hill Carnival, and more.

## ♿ Accessibility

WCAG 2.1 AA compliant with semantic HTML, skip links, ARIA labels, and keyboard navigation.

## 🔄 Next Steps

### Phase 1: Homepage ✅
- Design system, Header, Hero, What's On, Pillar navigation, Footer

### Phase 2: Explore Hub (Next)
- Story cards grid with faceted filtering

### Phase 3: Individual Story Pages
- Story detail template with rich content blocks

## 🛠️ Technology Stack

- Next.js 15, TypeScript, Tailwind CSS, Work Sans font
- Wagtail-ready component structure

---

© 2026 Migration Museum
