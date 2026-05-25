# Animation System — preciousegwuenu.com

---

## ANIMATION PHILOSOPHY

Motion on this site is **purposeful and architectural**. Every animation serves one of three roles:
1. **Entrance** — Revealing content as the user arrives or scrolls
2. **Loop** — Continuous ambient motion (marquees, text rotators)
3. **Interaction** — Feedback on hover/click/focus

Motion is **never decorative for its own sake**. Every animation has a token, a trigger, and a timing value.

---

## MOTION TOKENS (Reference: design-tokens.md)

```typescript
const motionTokens = {
  duration: {
    instant:   0,
    fastest:   0.1,
    fast:      0.2,
    base:      0.4,
    slow:      0.6,
    slower:    0.8,
    slowest:   1.2,
    preloader: 2.5,
  },
  ease: {
    outExpo:  [0.16, 1, 0.3, 1],       // PRIMARY — all entrances
    outBack:  [0.34, 1.56, 0.64, 1],   // Spring reveals
    inExpo:   [0.7, 0, 0.84, 0],       // Exits
    inOut:    [0.4, 0, 0.2, 1],        // Smooth transitions
  },
  stagger: {
    char:  0.03,    // 30ms per character
    word:  0.06,    // 60ms per word
    item:  0.08,    // 80ms per list/card item
    row:   0.12,    // 120ms per row
  },
  marquee: {
    slow:  40,      // seconds — CTA section
    base:  30,      // seconds — Services section
    fast:  20,      // seconds — Projects categories
  },
};
```

---

## ANIMATION CATALOGUE

### 1. PRELOADER
**Component:** `<Preloader />`
**Trigger:** Page mount, before content renders
**Duration:** ~2.5s total sequence

```typescript
// Sequence:
// Phase 1: Logo "PreshDev" fades in (0ms → 300ms)
// Phase 2: Percentage counter counts 0% → 100% (300ms → 2000ms)
// Phase 3: Preloader slides up / fades out (2000ms → 2500ms)
// Phase 4: Page content fades in (2400ms → 2900ms)

const preloaderVariants = {
  initial:  { opacity: 1, y: 0 },
  exit:     {
    y: '-100%',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const counterAnimation = {
  // Uses useMotionValue + useTransform or requestAnimationFrame
  from: 0,
  to:   100,
  duration: 1700,   // ms
  ease: 'easeInOut',
};
```

---

### 2. STAGGERED TITLE (Character Reveal)
**Component:** `<StaggeredTitle />`
**Trigger:** Scroll into view (IntersectionObserver / Framer `whileInView`)
**Used in:** Every section heading ("Featured Projects", "My Core Services", "Beyond the Code", "PreciousEgwuenu")

```typescript
// Each character is wrapped in an overflow-hidden span
// Inner span translates from Y(100%) → Y(0)

const containerVariants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.03,    // --stagger-char
      delayChildren:   0.1,
    }
  }
};

const charVariants = {
  hidden:  { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.6,            // --duration-slow
      ease: [0.16, 1, 0.3, 1], // --ease-out-expo
    }
  }
};

// Usage:
// Split text → array of chars
// Wrap each: <span style={{overflow:'hidden'}}><motion.span variants={charVariants}>{char}</motion.span></span>
// Spaces rendered as &nbsp; or ' ' with explicit width
```

**CRITICAL:** Each character's wrapper `<span>` must have `display: inline-block` and `overflow: hidden`. Without `overflow: hidden`, the reveal animation is visible before trigger.

---

### 3. MARQUEE / TICKER
**Component:** `<MarqueeTicker />`
**Trigger:** Always playing (CSS animation, no scroll trigger)
**Used in:**
- Projects section filter bar (E-commerce · Fintech · Healthcare · SaaS · Social)
- Services section filter bar (Development · Content Collaboration · SEO · Quality Assurance)
- CTA section ("Let's Work Together")

```typescript
// Implementation: Duplicate content set × 3
// CSS transform: translateX(0) → translateX(-33.33%)
// Infinite loop — seamless because 3 copies = invisible seam

// Tailwind + inline CSS:
const marqueeStyle = {
  display: 'flex',
  animation: `marquee var(--marquee-duration-fast) linear infinite`,
};

// keyframes (global CSS):
// @keyframes marquee {
//   from { transform: translateX(0); }
//   to   { transform: translateX(-33.333%); }
// }

// DIRECTION:
// - Category marquees: left-to-right scroll (standard)
// - CTA "Let's Work Together": right-to-left OR continuous loop
```

**Durations by section:**
| Section | Duration | Token |
|---------|----------|-------|
| Projects categories | 20s | `--marquee-duration-fast` |
| Services categories | 30s | `--marquee-duration-base` |
| CTA "Let's Work Together" | 40s | `--marquee-duration-slow` |

---

### 4. TEXT ROTATOR
**Component:** `<TextRotator />`
**Trigger:** On mount, cycles every ~2.5s
**Used in:**
- Hero section: "Frontend Developer" → "Content Creator" → role cycling
- About hero: Same roles
- Projects hero: Category cycling

```typescript
const roles = ['Frontend Developer', 'Content Creator', 'Technical Writer'];

// Animation: Current text exits (y: 0 → -100%, opacity: 0)
// Next text enters (y: 100% → 0, opacity: 1)
// Cycle interval: 2500ms

const textVariants = {
  enter:  { y: '100%', opacity: 0 },
  center: { y: '0%',   opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:   { y: '-100%',opacity: 0, transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] } },
};
```

---

### 5. SCROLL ENTRANCE — Cards & Sections
**Trigger:** `whileInView` with `viewport={{ once: true, margin: '-100px' }}`

```typescript
// Generic entrance for cards, stat numbers, text blocks
const entranceVariants = {
  hidden:  { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

// For staggered card lists:
const listVariants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08 }  // --stagger-item
  }
};
```

---

### 6. HOVER INTERACTIONS

```typescript
// Nav link underline
// CSS: position relative, ::after pseudo-element
// transform: scaleX(0) → scaleX(1), transform-origin: left
// duration: 200ms, ease: ease-out

// Project card — image scale
const cardImageHover = {
  initial: { scale: 1 },
  hover:   { scale: 1.03, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
};

// CTA button — subtle scale + glow
const buttonHover = {
  initial: { scale: 1 },
  hover:   { scale: 1.02, boxShadow: '0 0 24px rgba(232,255,71,0.3)' },
};

// Stack tag — border brightens
// transition: border-color 200ms ease
```

---

## ANIMATION RULES

```
RULE 1:  Staggered titles ALWAYS use charVariants (per-character), never word-level
RULE 2:  Marquee content is ALWAYS duplicated ×3 minimum (prevents gap flash)
RULE 3:  Scroll-triggered animations fire ONCE (viewport: { once: true })
RULE 4:  Duration values MUST come from the motionTokens duration scale
RULE 5:  Ease curves MUST come from the motionTokens ease object
RULE 6:  The preloader MUST complete before any page content is interactive
RULE 7:  Text rotator cycle interval is fixed at 2500ms — do not vary
RULE 8:  No CSS transitions on layout properties (width, height) — use transform only
RULE 9:  Never animate color directly — use opacity or transform alternatives
RULE 10: Framer Motion `AnimatePresence` required for enter/exit sequences
```

---

## ANIMATION ANTI-PATTERNS

```
✗ Bounce/elastic ease on heading reveals (use ease-out-expo only)
✗ Fade-in-only animations (always pair opacity with Y translate)
✗ Marquee with only 2 copies (causes visible gap seam)
✗ Scroll-triggered animations that repeat on scroll-up (once: true required)
✗ Per-word stagger on section titles (always per-character)
✗ Preloader skip on navigation between pages (preloader only on initial load)
✗ CSS transition on transform with no hardware acceleration (use will-change: transform)
```