# Component Reference — preciousegwuenu.com
**Skill:** PreshDev Frontend Implementation Skill v2.0.0

---

## SHARED COMPONENTS

---

### `<Preloader />`

**File:** `src/components/shared/Preloader.tsx`
**Trigger:** Page mount (initial load only — not on client-side navigation)
**Z-index:** `var(--z-preloader)` → 1000 (above everything)

**Visual Structure:**
```
Full viewport (100vw × 100vh)
Background: var(--color-bg-primary) → #0a0a0a
│
├── "PreshDev" wordmark — center-left or centered
│   Font: var(--font-display), bold, white
│
└── Percentage counter — large, bottom-left or centered
    Format: "0%" → "100%"
    Font: var(--font-display), var(--font-weight-black)
    Color: var(--color-text-primary)
    Size: large (est. var(--text-display-xl))
```

**Animation Sequence:**
```
Phase 1 (0ms → 300ms):      "PreshDev" logo fades in
Phase 2 (300ms → 2000ms):   Counter counts 0% → 100%
Phase 3 (2000ms → 2500ms):  Preloader slides upward (y: 0 → -100vh)
Phase 4 (2400ms → 2900ms):  Page content fades in
```

**Framer Motion:**
```typescript
const preloaderVariants: Variants = {
  initial: { y: 0 },
  exit: {
    y: '-100%',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
```

**Props:** None (self-contained, reads from internal timer)

**Notes:**
- Appears TWICE on the page DOM as two separate instances (one with logo top-left, one full-screen overlay) — this is the actual live behavior
- Counter runs with `requestAnimationFrame` or `useInterval`, duration ~1700ms

---

### `<Navbar />`

**File:** `src/components/shared/Navbar.tsx`
**Position:** Fixed top, full width
**Height:** `var(--layout-nav-height)` → 72px desktop / 64px mobile
**Z-index:** `var(--z-sticky)` → 200
**Background:** Transparent over hero, possibly with backdrop blur on scroll

**Structure:**
```
<nav> — max-width 1440px, padding-x var(--space-nav-x) → 40px
│
├── LEFT: "PreshDev" wordmark
│   Font: var(--font-display), bold
│   Color: var(--color-text-primary)
│   Size: ~20px
│
├── CENTER: Nav links
│   Home · About · Projects · Insights
│   Font: var(--font-body), var(--font-weight-medium), 14px
│   Color: var(--color-text-secondary) → rgba(255,255,255,0.6)
│   Hover: var(--color-text-primary) → #ffffff
│   Letter-spacing: var(--tracking-wide) → 0.04em
│
└── RIGHT: "Contact" CTA link
    href: mailto:pietech55@gmail.com
    Font: var(--font-body), medium, 14px
    Styling: subtle border or distinct from nav links
```

**Interaction States:**
- Default: `var(--color-text-secondary)` on all nav links
- Hover: color transitions to `var(--color-text-primary)` in `var(--duration-fast)` = 200ms, `var(--ease-out)`
- Active route: `var(--color-text-primary)` (full white)

---

### `<StaggeredTitle />`

**File:** `src/components/shared/StaggeredTitle.tsx`
**Purpose:** Character-by-character animated heading reveal

**Props:**
```typescript
interface StaggeredTitleProps {
  text: string;         // e.g. "Featured Projects"
  as?: 'h1' | 'h2' | 'h3';  // HTML element
  className?: string;
  delay?: number;       // delay before stagger starts (ms)
}
```

**Structure:**
```tsx
<motion.h1 aria-label={text} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
  {text.split('').map((char, i) => (
    <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
      <motion.span variants={charVariants} style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  ))}
</motion.h1>
```

**Variants:**
```typescript
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,   // --stagger-char
      delayChildren: 0.1,
    }
  }
};

const charVariants: Variants = {
  hidden:  { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.6,              // --duration-slow
      ease: [0.16, 1, 0.3, 1],   // --ease-out-expo
    }
  }
};
```

**Styling (applied externally via className):**
- Section titles: `var(--font-display)`, `clamp(60px, 8vw, 100px)`, bold, `--leading-none`, `--tracking-tighter`
- Hero name: `var(--font-display)`, `clamp(80px, 10vw, 140px)`, bold, `line-height: 0.9`, `--tracking-tightest`

---

### `<MarqueeTicker />`

**File:** `src/components/shared/MarqueeTicker.tsx`

**Props:**
```typescript
interface MarqueeTickerProps {
  items: string[];
  duration?: number;      // seconds, defaults to 30
  direction?: 'left' | 'right';
  separator?: string;     // character between items, default '·'
  className?: string;
}
```

**Structure:**
```tsx
<div className="overflow-hidden w-full">
  <div className="flex" style={{ animation: `marquee ${duration}s linear infinite` }}>
    {[0, 1, 2].map(i => (
      <div key={i} className="flex shrink-0 gap-8">
        {items.map(item => (
          <span key={item} className="uppercase tracking-widest text-sm whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    ))}
  </div>
</div>
```

**Required keyframe (globals.css):**
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-33.333%); }
}
```

**Duration by instance:**
| Usage | Duration | Token |
|-------|----------|-------|
| Projects category filter | 20s | `--marquee-duration-fast` |
| Services category filter | 30s | `--marquee-duration-base` |
| CTA "Let's Work Together" | 40s | `--marquee-duration-slow` |

**Item lists:**
- Projects: `['E-commerce', 'Fintech', 'Healthcare', 'Saas', 'Social']`
- Services: `['Development', 'Content Collaboration', 'SEO', 'Quality Assurance']`
- CTA: `['Let\'s Work Together']` (repeated)

---

### `<TextRotator />`

**File:** `src/components/shared/TextRotator.tsx`

**Props:**
```typescript
interface TextRotatorProps {
  items: string[];
  interval?: number;  // ms between rotations, default 2500
  className?: string;
}
```

**Default items (all instances):**
```typescript
['Frontend Developer', 'Content Creator', 'Technical Writer']
```

**Animation:**
```typescript
const textVariants: Variants = {
  enter:  { y: '100%', opacity: 0 },
  center: { y: '0%', opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:   { y: '-100%', opacity: 0, transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] } },
};
```

**Usage in pages:**
- Home Hero — subtitle below name
- Home "Beyond the Code" — label above body
- About Hero — subtitle
- Projects page is NOT listed for TextRotator (marquee filter only)

---

### `<CTASection />`

**File:** `src/components/shared/CTASection.tsx`
**Background:** Full-bleed Cloudinary image with heavy dark overlay (~70%)
**Image:** `https://res.cloudinary.com/dgtc1iood/image/upload/v1767512348/83e9c19591773e06b1fdad216a3f2daeba89a06e_jipcbg.jpg`

**Structure:**
```
<section> — full width, padding-y var(--space-section-y-lg) → 128px
│
├── Marquee band — "Let's Work Together" (40s loop)
│   Typography: var(--font-display), display-xl size, bold
│   Color: var(--color-text-primary)
│   Separator: "·" or "—"
│
├── Body text
│   "I collaborate with brands, businesses, and creatives to craft digital
│    experiences that stand out. Ready when you are."
│   Font: var(--font-body), 16-18px, var(--color-text-secondary)
│   max-width: ~600px
│
└── "Leave a message" link
    href: mailto:pietech55@gmail.com (or contact form)
    Styling: subtle underline or button variant
```

**Tokens:**
- Background overlay: `var(--color-bg-overlay)` at ~70% opacity
- Section padding: `var(--space-section-y-lg)`

---

### `<Footer />`

**File:** `src/components/shared/Footer.tsx`

**Structure:**
```
<footer> — full width, padding-y var(--space-16) → 64px, padding-x var(--space-container-x-lg)
│
├── TOP: Two-column grid
│   │
│   ├── LEFT COLUMN: "Navigation"
│   │   Label: "Navigation" (var(--font-body), uppercase, label-md, white-60)
│   │   Links: Home · About · Projects · Insights
│   │   Link style: var(--color-text-secondary), hover → var(--color-text-primary)
│   │
│   └── RIGHT COLUMN: "Socials"
│       Label: "Socials" (same label style)
│       Links: TikTok · LinkedIn · Instagram · X · GitHub · YouTube
│       All open in new tab
│
└── BOTTOM: Copyright bar
    "Copyright © 2026."
    "Made with love by devdesignlolu"
    Font: var(--font-body), var(--text-body-xs), var(--color-text-muted)
    Layout: space-between or stacked
```

**Social URLs:**
```
TikTok:    https://tiktok.com/@preshdevvv
LinkedIn:  https://www.linkedin.com/in/preciousegwuenu/
Instagram: https://instagram.com/preshdevvv
X:         https://x.com/preshdevvv
GitHub:    https://github.com/preshpi/
YouTube:   https://www.youtube.com/channel/UCJg9QXDxjw-lBDPwNl5wrCQ
```

---

## PAGE-SPECIFIC COMPONENTS

---

### `<HeroSection />` (Home)

**File:** `src/components/home/HeroSection.tsx`

**Layout:** Asymmetric two-column — content left (~55%), illustration right (~45%)
**Background:** Full-bleed image with dark overlay + near-black base

**Left Column Elements (top to bottom):**
1. `<StaggeredTitle text="PreciousEgwuenu" as="h1" />` — display-2xl
2. `<TextRotator items={roles} />` — heading-md, white-60
3. Body paragraph
4. CTA button group: "View resume" (primary) + "Contact" (secondary/link)
5. Annotation row: "WAT" label + "Based in Lagos, Nigeria"

**Right Column Elements:**
1. Profile SVG illustration (from Sanity CDN, 664×492px)

**Background Layer:**
- Image: `https://res.cloudinary.com/dgtc1iood/image/upload/v1766907340/8c288a67b8bfb8d9a629ea07fe3663383bb89b66_buoski.jpg`
- Overlay: `var(--color-bg-primary)` at ~80% opacity

---

### `<FeaturedProjects />` (Home — 2 projects)
### `<ProjectsPage />` (Projects — 4 per page, paginated)

**Project Card Structure:**
```
ODD cards (1, 3):
  Image LEFT, content RIGHT (or image top)

EVEN cards (2, 4):
  Image RIGHT, content LEFT (flipped)

Content block:
  ├── Ghost number (1, 2, 3, 4) — accent-15%, background, display-2xl
  ├── Project title — heading-lg, font-display, bold
  ├── Description — body-base, white-60
  ├── "Live website" label + URL link
  ├── "Code" label + GitHub link (if available)
  └── Stack badges — pill, body-xs, white-60, border-subtle
```

---

### `<ServicesSection />` (Home)

**Structure:**
```
Section title: <StaggeredTitle text="My Core Services" />
MarqueeTicker: services list (30s)

Service cards grid (2×2 on desktop, 1-col on mobile):
  Card structure:
    ├── Number label: "01" "02" "03" "04" — accent color, label-md, uppercase
    ├── Title — heading-md, font-display, bold, white
    ├── Description — body-sm, white-60
    └── Illustration image — right side or bottom
```

**Service card data (exact):**
```
01 — Development
     "Building fast, responsive, and scalable web applications using modern technologies and best practices."

02 — Content Collaboration
     "Partnering with teams to create engaging technical content, tutorials, and documentation that resonates."

03 — SEO
     "Optimizing your web presence for better search visibility, performance, and organic growth."

04 — Quality Assurance
     "Ensuring your applications are bug-free, accessible, and deliver a seamless user experience."
```

---

### `<AboutProfile />` (About page)

**Layout:** Photo large left, text content right (or stacked on mobile)

**Text content (exact):**
```
Heading: "About Precious Egwuenu"

Paragraph 1:
"I am a frontend developer I have a strong background in creating visually 
appealing and user-friendly web experiences. I am motivated to find a role 
where I can challenge myself and provide value to website users. I am excited 
to bring my knowledge and experience to a team and contribute to a company's 
success."

Paragraph 2:
"I believe in the power of collaboration, blending design, strategy, and 
technology to create work that's both innovative and impactful. Whether it's 
crafting content for tech brands, designing pixel-perfect frontends, or 
building custom websites optimized for search, my focus is always on 
delivering results that matter."

Stats:
  Project Completed:      32+
  Total Client:           12+
  Social media followers: 42k

Skills (pill badges):
  React Js · Next Js · Javascript · Git · Tailwind · Typescript · HTML · CSS
```
