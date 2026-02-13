'use client';

import Header from '@/components/layout/HeaderWithDropdowns';
import Footer from '@/components/layout/Footer';
import StoryCard from '@/components/streamfield/StoryCard';
import WhatsOnPanel from '@/components/streamfield/WhatsOnPanel';
import CollageHero from '@/components/CollageHero';
import { whatsOnEvents, featuredStories } from '@/data/sampleContent';

export default function StyleGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-mm-white">
        {/* Page Header */}
        <section className="py-20 bg-mm-black text-mm-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Style Guide</h1>
            <p className="text-xl text-mm-grey-mid">
              Component library and design system for the Migration Museum
            </p>
          </div>
        </section>

        {/* Typography */}
        <section className="py-16 border-b border-mm-grey-light">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Typography</h2>

            <div className="space-y-12 max-w-4xl">
              {/* Hero Titles */}
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Hero Title (Homepage)</p>
                <div style={{
                  letterSpacing: '-0.02em',
                  fontSize: 'clamp(2.5rem, 8vw, 3rem)',
                  lineHeight: 1,
                  fontWeight: 700
                }}>
                  <span className="font-light">Revealing</span> <span className="font-bold">human stories</span>
                </div>
              </div>

              {/* Page Titles */}
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Page Title & Section Headers</p>
                <p className="text-sm text-mm-grey-mid mb-4">Used for page titles (Explore, What's On) and section headers (What's On Panel, Migration Stories)</p>
                <h1
                  className="uppercase"
                  style={{
                    color: '#000000',
                    fontWeight: 300,
                    fontSize: 'clamp(3rem, 10vw, 100px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Stories of Migration
                </h1>
              </div>

              {/* Story Detail Title */}
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Story/Exhibition Detail Title (h1)</p>
                <h1>Journey Across Borders</h1>
              </div>

              {/* Intro Text - Story Page Standard */}
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Intro Text (Standard - Story Pages)</p>
                <p className="text-[24px] font-medium text-mm-black leading-relaxed max-w-3xl">
                  This is the standardized intro text style used across story pages. It uses 24px font size,
                  medium weight, black color, and relaxed leading for optimal readability.
                </p>
              </div>

              {/* Body Text */}
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Body Text</p>
                <div className="prose prose-xl max-w-none">
                  <p className="text-[20px] leading-relaxed">
                    Every migration story is unique, shaped by individual circumstances, aspirations,
                    and the broader historical context. This is standard body text at 20px with relaxed leading.
                  </p>
                </div>
              </div>

              {/* Subtitles */}
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Subtitle (Hero)</p>
                <p className="text-2xl md:text-3xl font-medium">
                  Educational resources for all ages and levels
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color System */}
        <section className="py-16 border-b border-mm-grey-light">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Color System</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Primary Colors */}
              <div>
                <div className="w-full h-32 bg-mm-blue mb-2 rounded shadow"></div>
                <p className="font-bold">Blue</p>
                <p className="text-sm text-mm-grey">#5A5FEF</p>
                <p className="text-xs text-mm-grey-mid">Text: White</p>
              </div>

              <div>
                <div className="w-full h-32 bg-mm-violet mb-2 rounded shadow"></div>
                <p className="font-bold">Violet</p>
                <p className="text-sm text-mm-grey">#A880FF</p>
                <p className="text-xs text-mm-grey-mid">Text: White</p>
              </div>

              <div>
                <div className="w-full h-32 bg-mm-orange mb-2 rounded shadow"></div>
                <p className="font-bold">Orange</p>
                <p className="text-sm text-mm-grey">#FF5C45</p>
                <p className="text-xs text-mm-grey-mid">Text: White</p>
              </div>

              <div>
                <div className="w-full h-32 bg-mm-yellow mb-2 rounded shadow"></div>
                <p className="font-bold">Yellow</p>
                <p className="text-sm text-mm-grey">#FFD700</p>
                <p className="text-xs text-mm-grey-mid">Text: Black</p>
              </div>

              <div>
                <div className="w-full h-32 bg-mm-green mb-2 rounded shadow"></div>
                <p className="font-bold">Green</p>
                <p className="text-sm text-mm-grey">#59F5B1</p>
                <p className="text-xs text-mm-grey-mid">Text: Black</p>
              </div>

              {/* Neutrals */}
              <div>
                <div className="w-full h-32 bg-mm-black mb-2 rounded shadow"></div>
                <p className="font-bold">Black</p>
                <p className="text-sm text-mm-grey">#000000</p>
              </div>

              <div>
                <div className="w-full h-32 bg-mm-white border border-mm-grey-light mb-2 rounded shadow"></div>
                <p className="font-bold">White</p>
                <p className="text-sm text-mm-grey">#FFFFFF</p>
              </div>

              <div>
                <div className="w-full h-32 bg-mm-grey mb-2 rounded shadow"></div>
                <p className="font-bold">Grey</p>
                <p className="text-sm text-mm-grey">#6B7280</p>
              </div>

              <div>
                <div className="w-full h-32 bg-mm-grey-mid mb-2 rounded shadow"></div>
                <p className="font-bold">Grey Mid</p>
                <p className="text-sm text-mm-grey">#9CA3AF</p>
              </div>

              <div>
                <div className="w-full h-32 bg-mm-grey-light mb-2 rounded shadow"></div>
                <p className="font-bold">Grey Light</p>
                <p className="text-sm text-mm-grey">#F3F4F6</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="py-16 border-b border-mm-grey-light">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Buttons</h2>

            <div className="space-y-8">
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Primary Solid</p>
                <button className="px-8 py-4 bg-mm-black text-mm-white font-bold text-lg rounded hover:bg-opacity-90 transition-all">
                  Primary Button
                </button>
              </div>

              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Primary Ghost</p>
                <button className="px-8 py-4 border-2 border-mm-black text-mm-black font-bold text-lg rounded hover:bg-mm-black hover:text-mm-white transition-all">
                  Ghost Button
                </button>
              </div>

              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Colored Variants</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-mm-blue text-mm-white font-bold rounded hover:bg-opacity-90 transition-all">
                    Blue
                  </button>
                  <button className="px-6 py-3 bg-mm-violet text-mm-white font-bold rounded hover:bg-opacity-90 transition-all">
                    Violet
                  </button>
                  <button className="px-6 py-3 bg-mm-orange text-mm-white font-bold rounded hover:bg-opacity-90 transition-all">
                    Orange
                  </button>
                  <button className="px-6 py-3 bg-mm-green text-mm-black font-bold rounded hover:bg-opacity-90 transition-all">
                    Green
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Card Component */}
        <section className="py-16 border-b border-mm-grey-light">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Story Card Component</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Regular Story Card */}
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Regular Card</p>
                <StoryCard
                  {...featuredStories[0]}
                  isFeatured={false}
                />
              </div>

              {/* Featured Story Card */}
              <div className="md:col-span-2">
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Featured Card (2 columns wide)</p>
                <StoryCard
                  {...featuredStories[1]}
                  isFeatured={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CollageHero Component */}
        <section className="py-16 border-b border-mm-grey-light">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Collage Hero Component</h2>
            <p className="text-mm-grey mb-6">
              The CollageHero component creates an immersive full-screen hero with animated cutout images.
              It accepts different background colors and can randomize images.
            </p>

            <div className="bg-mm-grey-light p-6 rounded">
              <p className="text-sm font-mono mb-2">Props:</p>
              <ul className="text-sm font-mono space-y-1">
                <li>• title: string | React.ReactNode</li>
                <li>• subtitle?: string</li>
                <li>• buttons?: Button[]</li>
                <li>• imageSet?: number[]</li>
                <li>• backgroundColor?: 'blue' | 'violet' | 'orange' | 'yellow' | 'green' | 'tan'</li>
                <li>• randomize?: boolean</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What's On Panel */}
        <section className="py-16 border-b border-mm-grey-light bg-mm-grey-light">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">What's On Panel Component</h2>
          </div>

          <WhatsOnPanel events={whatsOnEvents.slice(0, 3)} />
        </section>

        {/* Spacing System */}
        <section className="py-16 border-b border-mm-grey-light">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Spacing System</h2>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-2">Section Padding</p>
                <div className="bg-mm-grey-light p-4">
                  <code className="text-sm">py-16</code> - Standard section padding (64px top/bottom)
                </div>
              </div>

              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-2">Large Section Padding</p>
                <div className="bg-mm-grey-light p-4">
                  <code className="text-sm">py-20</code> - Large section padding (80px top/bottom)
                </div>
              </div>

              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-2">Card Padding</p>
                <div className="bg-mm-grey-light p-4">
                  <code className="text-sm">p-8 md:p-10</code> - Card padding (32px / 40px on desktop)
                </div>
              </div>

              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-2">Grid Gaps</p>
                <div className="bg-mm-grey-light p-4">
                  <code className="text-sm">gap-10</code> - Story/Exhibition grid gap (40px)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Badges & Tags */}
        <section className="py-16 border-b border-mm-grey-light">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Badges & Tags</h2>

            <div className="space-y-8">
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Exhibition Type Tags</p>
                <div className="flex flex-wrap gap-2">
                  <div className="px-4 py-2 bg-mm-blue text-mm-white font-bold text-xs uppercase">
                    Exhibition
                  </div>
                  <div className="px-4 py-2 bg-mm-orange text-mm-white font-bold text-xs uppercase">
                    Event
                  </div>
                  <div className="px-4 py-2 bg-mm-green text-mm-black font-bold text-xs uppercase">
                    Workshop
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Theme Tags</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-mm-grey-light text-sm font-semibold text-mm-grey rounded">
                    Work & Employment
                  </span>
                  <span className="px-3 py-1 bg-mm-grey-light text-sm font-semibold text-mm-grey rounded">
                    Family
                  </span>
                  <span className="px-3 py-1 bg-mm-grey-light text-sm font-semibold text-mm-grey rounded">
                    Culture
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Featured Badge</p>
                <div className="inline-block px-3 py-1 bg-mm-black text-mm-white text-xs font-bold uppercase">
                  Featured Story
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="py-16 border-b border-mm-grey-light">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Form Elements</h2>

            <div className="space-y-8 max-w-2xl">
              <div>
                <label className="block text-sm font-semibold mb-2">Select Dropdown</label>
                <select className="px-4 py-2 border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-violet w-full">
                  <option>All Themes</option>
                  <option>Work & Employment</option>
                  <option>Family</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Search Input</label>
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search stories, exhibitions..."
                    className="w-full px-4 py-2 pr-10 border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-blue"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-mm-grey hover:text-mm-black">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Newsletter Input</label>
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-mm-white border border-mm-grey-mid rounded focus:outline-none focus:ring-2 focus:ring-mm-violet"
                  />
                  <button className="px-8 py-3 bg-mm-black text-mm-white font-bold rounded hover:bg-opacity-90">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Links</h2>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Text Links</p>
                <div className="space-y-2">
                  <div>
                    <a href="#" className="text-mm-blue hover:text-mm-violet font-semibold transition-colors">
                      Standard colored link →
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-mm-grey-mid hover:text-mm-white transition-colors">
                      Footer link style
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-mm-grey uppercase tracking-wider mb-4">Icon Links</p>
                <div className="flex items-center gap-2 text-mm-blue hover:text-mm-violet font-bold text-lg transition-colors cursor-pointer">
                  <span>Read more</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
