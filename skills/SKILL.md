# PreshDev Frontend Implementation Skill
**Version:** 2.0.0 | **Target Site:** preciousegwuenu.com | **Stack:** Next.js · Tailwind CSS · Framer Motion · TypeScript · Sanity CMS

---

## PURPOSE

This skill is a **production-grade AI operating system** for implementing preciousegwuenu.com with pixel-perfect fidelity. It governs how Claude analyses UI sections, maps design tokens, and generates implementation instructions **WITHOUT redesigning, reinterpreting, or drifting** from the original design.

This skill enforces:
- Section-by-section analysis (never whole-page summaries)
- Token-first design decisions (every spacing, color, type value traces to a token)
- Motion system preservation (exact easing curves, durations, stagger patterns)
- Zero redesign tolerance (no improvements, no modernization, no interpretation)

---

## WHEN TO ACTIVATE THIS SKILL

Activate when asked to:
- Analyze any section of preciousegwuenu.com
- Generate implementation instructions for any section
- Reproduce a component from this design system
- Validate frontend code against the design system
- Audit for design drift or token violations

---

## SKILL FILE MAP

```
preshdev-skill/
├── SKILL.md                             ← YOU ARE HERE (master entry)
├── design-tokens.md                     ← Complete token dictionary (canonical source of truth)
├── color-system.md                      ← Color palette + semantic mapping
├── typography-system.md                 ← Type scale + font rules
├── animation-system.md                  ← Motion tokens + animation patterns
├── section-analysis-template.md         ← 18-point analysis format
├── ui-analysis-rules.md                 ← Rules governing analysis behavior
├── implementation-rules.md              ← Rules governing code generation
├── component-reference.md               ← All components documented
├── review-checklist.md                  ← Pre-ship QA checklist
├── output-format.md                     ← Required output structure
├── examples/
│   ├── good-analysis-example.md
│   ├── bad-analysis-example.md
│   ├── implementation-example.md
│   └── token-usage-example.md
├── references/
│   ├── preloader-reference.md
│   ├── navbar-reference.md
│   ├── hero-section-reference.md
│   ├── projects-section-reference.md
│   ├── services-section-reference.md
│   ├── beyond-the-code-reference.md
│   ├── cta-section-reference.md
│   ├── footer-reference.md
│   └── about-page-reference.md
├── templates/
│   ├── section-analysis-template.md
│   ├── implementation-prompt-template.md
│   └── qa-template.md
├── workflows/
│   ├── analysis-workflow.md
│   ├── implementation-workflow.md
│   └── qa-workflow.md
├── constraints/
│   └── design-constraints.md
└── anti-patterns/
    └── anti-patterns.md
```

---

## OPERATING PRINCIPLES (NON-NEGOTIABLE)

### PRINCIPLE 1 — SECTION ISOLATION
Never analyze or implement more than one section at a time. Each section is a self-contained unit with its own layout, tokens, and behavior. Merging sections corrupts fidelity.

### PRINCIPLE 2 — TOKEN SUPREMACY
Every CSS value must trace to a design token. `padding: 96px` is forbidden. `padding: var(--space-24)` is required.

### PRINCIPLE 3 — ZERO REDESIGN
You are a replication system, not a design system. Your opinions about what "would look better" are irrelevant and destructive. Replicate exactly.

### PRINCIPLE 4 — MOTION IS DATA
Animation timing, easing, stagger intervals, delay sequences, and marquee speeds are design decisions encoded in this skill. Do not approximate them.

### PRINCIPLE 5 — HIERARCHY IS SACRED
The visual hierarchy of every section — what is largest, heaviest, most prominent — must be preserved exactly. Never flatten or elevate elements relative to the original.

### PRINCIPLE 6 — COPY IS EXACT
Every text string, label, link text, and placeholder must match the original site exactly. Do not paraphrase, improve, or substitute.

---

## SITE ARCHITECTURE

**Site:** preciousegwuenu.com  
**Author:** Precious Egwuenu  
**Role:** Frontend Developer, Content Creator, Technical Writer  
**Stack:** Next.js · TypeScript · Tailwind CSS · Sanity CMS · Framer Motion  
**Theme:** Dark (permanent — no light mode)  
**Accent:** Chartreuse/Lime `#e8ff47`  
**Locale:** Lagos, Nigeria

### Page Map

| Page | Route | Sections (in order) |
|------|--------|---------------------|
| Home | `/` | Preloader → Navbar → Hero → Featured Projects → My Core Services → Beyond the Code → CTA → Footer |
| About | `/about` | Preloader → Navbar → Hero ("Beyond the Code") → Profile+About+Stats+Skills → CTA → Footer |
| Projects | `/projects` | Preloader → Navbar → Hero ("Featured Projects") → Project Cards (paginated) → CTA → Footer |

### Shared Components (used across all pages)
| Component | Description |
|-----------|-------------|
| `<Preloader />` | Full-screen load screen with percentage counter (0%→100%), "PreshDev" logo |
| `<Navbar />` | Fixed top bar: "PreshDev" logo (left) + nav links (center) + "Contact" link (right) |
| `<StaggeredTitle />` | Character-by-character heading reveal (used for ALL section/page titles) |
| `<MarqueeTicker />` | Infinite horizontal scroll ticker (categories, service tags, CTA marquee) |
| `<TextRotator />` | Cycling text (roles: "Frontend Developer" → "Content Creator" → "Technical Writer") |
| `<CTASection />` | "Let's Work Together" — full-width dark section with marquee + body text + "Leave a message" link |
| `<Footer />` | Two-column grid: Navigation links (left) + Social links (right) |

---

## EXACT SITE CONTENT INVENTORY

### Home Page (`/`)

**Hero Section:**
- Name: "PreciousEgwuenu" (rendered as individual character `<h1>` tags per char)
- Rotating subtitle: "Frontend Developer" / "Content Creator"
- Body: "I build beautiful, user-friendly web experiences and love sharing the journey through tutorials, blogs, and community vibes."
- CTA 1: "View resume" (button)
- CTA 2: "Contact" (mailto:pietech55@gmail.com)
- Annotation labels: "WAT" (top-right corner) + "Based in Lagos, Nigeria"
- Profile illustration: SVG image (Sanity CDN)
- Background: Full-bleed photo with dark overlay

**Featured Projects (Home — 2 projects shown):**
- Project 1: "SupportHive" — Crowdfunding platform — React, Tailwind CSS, Sanity, Paystack, Typescript — supporthivee.org
- Project 2: "6lackish" — Fashion E-commerce — Next.JS, Tailwind CSS, Sanity, Paystack, Firebase — 6lackish.com
- CTA: "View all works" → `/projects`

**My Core Services:**
- "01 Development" — "Building fast, responsive, and scalable web applications..."
- "02 Content Collaboration" — "Partnering with teams to create engaging technical content..."
- "03 SEO" — "Optimizing your web presence for better search visibility..."
- "04 Quality Assurance" — "Ensuring your applications are bug-free, accessible..."
- Marquee: "Development · Content Collaboration · SEO · Quality Assurance"

**Beyond the Code (Home):**
- Rotating labels: "Frontend Developer" / "Content Creator" / "Technical Writer"
- Body: "I create content that bridges the gap between complex tech concepts and everyday developers..."
- Stats: "Followers 50k+" / "Views 2M+" / "Posts 500+"
- Featured Viral Contents (scrolling grid of 7 video cards with "Watch Video" label):
  - "2025 Tech wrapped" (Instagram)
  - "ChatGPT is no longer safe!..." (TikTok)
  - "Building my portfolio" (Instagram)
  - "5 lessons i've learned from 5 years in tech" (TikTok)
  - "Framer motion" (TikTok)
  - "Learn Javascript for 30 days" (TikTok)
  - "CSS Tool" (TikTok)

**CTA Section:**
- Marquee: "Let's Work Together" (repeated, infinite loop)
- Body: "I collaborate with brands, businesses, and creatives to craft digital experiences that stand out. Ready when you are."
- Link: "Leave a message"
- Background: Full-bleed textured photo with heavy dark overlay

### About Page (`/about`)

**Hero:** "Beyond the Code" (staggered title) + TextRotator same roles

**Profile + About Block:**
- Profile image: Large photo (Sanity CDN, 1360×819px source)
- Heading: "About Precious Egwuenu"
- Body paragraph 1: "I am a frontend developer I have a strong background in creating visually appealing and user-friendly web experiences..."
- Body paragraph 2: "I believe in the power of collaboration, blending design, strategy, and technology to create work that's both innovative and impactful..."

**Stats:**
- "Project Completed: 32+"
- "Total Client: 12+"
- "Social media followers: 42k"

**My Top Skills (pill/badge grid):**
React Js · Next Js · Javascript · Git · Tailwind · Typescript · HTML · CSS

### Projects Page (`/projects`)

**Hero:** "Featured Projects" (staggered title)
**Marquee filter:** "E-commerce · Fintech · Healthcare · Saas · Social" (×3 duplication)
**Background:** Same Cloudinary photo as home projects section

**Project Cards (paginated, 4 per page):**
- Project 1: SupportHive — crowdfunding — React, Tailwind CSS, Sanity, Paystack, Typescript
- Project 2: 6lackish — Fashion E-commerce — Next.JS, Tailwind CSS, Sanity, Paystack, Firebase
- Project 3: MediaSurf — "Get images and videos of your choice" — Next.JS, Tailwind CSS, Pexels API
- Project 4: Noteey — "Note Taking Tool" — Next.JS, Tailwind CSS, Typescript
- Pagination: "Previous" / "Next" controls

---

## ANALYSIS PROTOCOL

```
STEP 1 → Identify exact section name and page context
STEP 2 → Load section-analysis-template.md (18-point format)
STEP 3 → Complete ALL 18 points before generating any code
STEP 4 → Map every observed value to a named token from design-tokens.md
STEP 5 → List every component present in the section
STEP 6 → Document every animation behavior with token references
STEP 7 → Note ALL responsive breakpoint changes
STEP 8 → Generate implementation instructions (token-referenced throughout)
```

---

## IMPLEMENTATION PROTOCOL

```
STEP 1 → Reference component-reference.md for component specs
STEP 2 → Reference design-tokens.md for ALL values
STEP 3 → Use Tailwind CSS classes (mapped to tokens) exclusively
STEP 4 → Implement Framer Motion for all animations
STEP 5 → Build the component in isolation (never scaffold a full page)
STEP 6 → Validate against review-checklist.md before output
```

---

## QUICK TOKEN REFERENCE

```css
/* Backgrounds */
--color-bg-primary:   #0a0a0a;      /* Page background */
--color-bg-secondary: #111111;      /* Alternate section bg */
--color-bg-card:      #1a1a1a;      /* Cards */

/* Text */
--color-text-primary:   #ffffff;
--color-text-secondary: rgba(255,255,255,0.6);
--color-text-muted:     rgba(255,255,255,0.4);
--color-text-inverse:   #0a0a0a;    /* Text on accent bg */

/* Accent */
--color-accent-primary: #e8ff47;    /* Lime/chartreuse */

/* Typography */
--font-display: 'ClashDisplay', sans-serif;
--font-body:    'GeneralSans', sans-serif;

/* Spacing base */
--space-unit: 4px;

/* Motion */
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
--stagger-char:   30ms;
--stagger-item:   80ms;
--duration-slow:  600ms;
--marquee-duration-fast: 20s;
--marquee-duration-base: 30s;
--marquee-duration-slow: 40s;
```

---

## CRITICAL PROHIBITIONS

```
✗ DO NOT analyze the full page in one response
✗ DO NOT merge two or more sections into one analysis
✗ DO NOT introduce colors not in the token system
✗ DO NOT introduce new animation patterns
✗ DO NOT improve or modernize typography choices
✗ DO NOT simplify complex layout structures
✗ DO NOT use arbitrary CSS values without token reference
✗ DO NOT generate global page scaffolding when asked for a section
✗ DO NOT invent component variants that don't exist
✗ DO NOT use placeholder copy different from the original
✗ DO NOT summarize a section globally — break it into sub-elements
✗ DO NOT assume a section layout — trace it exactly from the reference files
```

---

## WORKFLOW ENTRY POINTS

| Task | Files to Load |
|------|--------------|
| Section Analysis | `ui-analysis-rules.md` → `section-analysis-template.md` → `references/[section]-reference.md` |
| Component Implementation | `component-reference.md` → `design-tokens.md` → `implementation-rules.md` |
| Animation Implementation | `animation-system.md` |
| Full QA | `review-checklist.md` → `workflows/qa-workflow.md` |
| Token Lookup | `design-tokens.md` (canonical) |
| Color Decision | `color-system.md` |
| Typography Decision | `typography-system.md` |

---

*Every file in this skill exists to prevent AI hallucination, layout drift, and token violation. This is a replication system — not a creative system.*
