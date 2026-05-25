# Implementation Rules — preciousegwuenu.com
**Skill:** PreshDev Frontend Implementation Skill v2.0.0

---

## RULE SET 1 — CODE SCOPE

**1.1 — Component Isolation**
Generate ONE component per response. Never scaffold a full page. If asked to "build the hero section," output `<HeroSection />` only, with its sub-components inlined or imported — not the entire page layout.

**1.2 — No Layout Wrappers**
Do not include `<html>`, `<body>`, `<Layout>`, `<main>`, or page-level wrappers unless the request is specifically for those components.

**1.3 — Props Match Reality**
Component props must reflect actual data from the site. For Sanity-driven content, use the correct field names. No generic `title`, `description`, `image` prop naming without referencing the actual Sanity schema structure.

---

## RULE SET 2 — STYLING

**2.1 — Tailwind Classes Are Token Proxies**
Every Tailwind class must map to a design token. Use the extended theme config that aliases tokens to Tailwind utilities.

**2.2 — CSS Variables for Non-Tailwind Values**
For values without a direct Tailwind mapping (clamp sizes, custom easing, marquee durations), use CSS custom properties referencing the token: `style={{ fontSize: 'var(--text-display-xl)' }}`.

**2.3 — No Arbitrary Tailwind Values**
`w-[847px]`, `mt-[37px]`, `text-[#ff0000]` are forbidden. If a value doesn't have a token, raise a flag — don't invent an arbitrary value.

**2.4 — Dark Mode Is Not Conditional**
This site has a permanent dark theme. Do not add `dark:` Tailwind variants. Do not implement a theme toggle. The entire site is dark. Period.

---

## RULE SET 3 — ANIMATION (FRAMER MOTION)

**3.1 — Always Use Variants Object Pattern**
```typescript
// ✓ CORRECT
const variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

// ✗ WRONG
<motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 40, opacity: 0 }} />
```

**3.2 — StaggeredTitle: Split to Chars, Not Words**
```typescript
// ✓ CORRECT — split to individual characters
const chars = text.split('');
return chars.map((char, i) => (
  <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
    <motion.span variants={charVariants}>{char === ' ' ? '\u00A0' : char}</motion.span>
  </span>
));

// ✗ WRONG — word splitting
text.split(' ').map(word => <motion.span>{word}</motion.span>)
```

**3.3 — Marquee: Always Three Copies**
```typescript
// ✓ CORRECT
<div className="flex">
  {[0, 1, 2].map(i => (
    <div key={i} className="flex shrink-0" style={{ animation: `marquee var(--marquee-duration-fast) linear infinite` }}>
      {items.map(item => <span key={item}>{item}</span>)}
    </div>
  ))}
</div>

// ✗ WRONG — two copies (causes visible seam gap)
```

**3.4 — AnimatePresence for TextRotator**
```typescript
<AnimatePresence mode="wait">
  <motion.span key={currentRole} variants={textVariants} initial="enter" animate="center" exit="exit">
    {currentRole}
  </motion.span>
</AnimatePresence>
```

**3.5 — whileInView Standard Config**
```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={entranceVariants}
/>
```

---

## RULE SET 4 — TYPOGRAPHY

**4.1 — Font Variables Must Be Applied**
```typescript
// ✓ CORRECT — use CSS var
<h1 style={{ fontFamily: 'var(--font-display)' }}>

// Also acceptable — Tailwind font class mapped in config
<h1 className="font-display">
```

**4.2 — Fluid Sizes Use clamp()**
```typescript
// ✓ CORRECT
<h1 style={{ fontSize: 'clamp(60px, 8vw, 100px)' }}>

// ✗ WRONG — fixed size loses fluidity
<h1 className="text-6xl">
```

**4.3 — Body Text Has max-width**
All body paragraphs must be capped:
```typescript
<p className="max-w-[600px]"> // or style={{ maxWidth: 'var(--layout-content-narrow)' }}
```

---

## RULE SET 5 — DATA + CONTENT

**5.1 — Use Exact Copy**
All text content must match the live site character-for-character. Reference `SKILL.md` → "EXACT SITE CONTENT INVENTORY" for all copy strings.

**5.2 — Sanity Data Shape**
For Sanity-driven components (projects, services), define the TypeScript interface matching the CMS schema before implementing the component.

**5.3 — Image Optimization**
All images use `next/image` with:
- `width` and `height` from source dimensions
- `quality={75}` (matching live site Next.js config)
- `priority` on above-fold images
- `alt` text matching the content

---

## RULE SET 6 — ACCESSIBILITY

**6.1 — Staggered Titles Need aria-label**
Since each character is a `<span>`, the parent container needs:
```typescript
<motion.h1 aria-label="Featured Projects">
  {chars.map(...)}
</motion.h1>
```

**6.2 — Marquees Need pause-on-hover**
```typescript
// Add pause on hover/focus for accessibility
onMouseEnter={() => setIsPaused(true)}
onMouseLeave={() => setIsPaused(false)}
style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
```

**6.3 — Interactive Elements Need focus-visible**
All clickable elements (buttons, links, cards) must have visible focus rings using the accent color:
```typescript
className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e8ff47]"
```

---

## RULE SET 7 — FILE STRUCTURE

```
src/
├── app/
│   ├── layout.tsx              ← Font loading, global CSS
│   ├── page.tsx                ← Home page
│   ├── about/page.tsx
│   └── projects/page.tsx
├── components/
│   ├── shared/
│   │   ├── Preloader.tsx
│   │   ├── Navbar.tsx
│   │   ├── StaggeredTitle.tsx
│   │   ├── MarqueeTicker.tsx
│   │   ├── TextRotator.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── ServicesSection.tsx
│   │   └── BeyondTheCode.tsx
│   ├── about/
│   │   ├── AboutHero.tsx
│   │   └── AboutProfile.tsx
│   └── projects/
│       ├── ProjectsHero.tsx
│       ├── ProjectCard.tsx
│       └── ProjectsPagination.tsx
├── lib/
│   └── sanity.ts
└── styles/
    ├── globals.css             ← Token definitions, @keyframes
    └── fonts.css               ← Font face declarations
```
