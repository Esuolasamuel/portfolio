# Bad Analysis Example — Annotated Violations
**Skill:** PreshDev Frontend Implementation Skill v2.0.0
**Purpose:** Demonstrate common analysis failures with corrections

---

## THE BAD ANALYSIS (DO NOT REPLICATE)

Below is a flawed analysis response. Every violation is annotated inline.

---

### ❌ VIOLATION 1: Full-page summary instead of one section

> "The website has a clean, modern dark aesthetic with a hero section featuring
> the developer's name, a projects grid, a services section, and a contact area.
> The typography is large and bold for headings with smaller body text. The
> primary accent color is a lime green. The overall layout feels contemporary
> and professional."

**Why this is WRONG:**
- Describes the entire page, not one section
- "clean, modern dark aesthetic" is subjective opinion — prohibited
- "lime green" is not a token reference — must be `var(--color-accent-primary)` → #e8ff47
- "feels contemporary and professional" is design opinion — prohibited
- Does not complete the 18-point format

**Correction:** Pick ONE section. Start with the 18-point template. Never describe visual aesthetics.

---

### ❌ VIOLATION 2: Naked px values without token references

> "The hero section has a padding of about 120px top and bottom. The heading
> text is approximately 90px. The body text is around 16px with good line
> spacing."

**Why this is WRONG:**
- `120px` must be written: `120px → var(--space-section-y-hero)` [est]
- `90px` must be written: `clamp(80px, 10vw, 140px) → var(--text-display-2xl)` [est]
- `16px` must be written: `var(--text-body-base) → 16px`
- "good line spacing" is subjective and non-actionable

**Correction:** Every value must trace to a token. If approximate, mark `[est]`. Never use subjective adjectives.

---

### ❌ VIOLATION 3: Describing StaggeredTitle as plain text

> "The section title 'Featured Projects' is rendered in a large bold heading.
> It uses the ClashDisplay font at a large size with white color."

**Why this is WRONG:**
- Fails to identify `<StaggeredTitle />` component
- Does not document the per-character `<span>` structure
- Does not document `overflow: hidden` wrapper requirement
- Does not specify animation (trigger, stagger, duration, easing)
- "large size" is not a token

**Correction:**
> "The section title 'Featured Projects' renders via `<StaggeredTitle text='Featured Projects' as='h2' />`.
> Each character is wrapped in `<span style={{ display:'inline-block', overflow:'hidden' }}>` with
> an inner `<motion.span>`. Trigger: whileInView, once. Stagger: var(--stagger-char) → 30ms per char.
> Duration: var(--duration-slow) → 600ms. Ease: var(--ease-out-expo) → cubic-bezier(0.16,1,0.3,1).
> Direction: y: 110% → 0%."

---

### ❌ VIOLATION 4: Describing Marquee as "scrolling text"

> "Below the section title there's some scrolling text with the category
> names. It scrolls from right to left continuously."

**Why this is WRONG:**
- Does not identify `<MarqueeTicker />` component
- "some scrolling text" is vague — not engineering-grade
- Does not state duration or token
- Does not document the 3-copy duplication system
- Does not document the `-33.333%` keyframe translate

**Correction:**
> "`<MarqueeTicker items={categories} duration={20} />` — var(--marquee-duration-fast) → 20s.
> Items: `['E-commerce', 'Fintech', 'Healthcare', 'Saas', 'Social']`.
> 3 copies in DOM to prevent seam gap. @keyframes marquee: translateX(0) → translateX(-33.333%)."

---

### ❌ VIOLATION 5: Skipping animation with "just a fade"

> "The project cards fade in when scrolled into view. Nothing special here."

**Why this is WRONG:**
- "Nothing special here" is not an analysis — it's dismissal
- Animation section cannot be skipped
- Does not specify trigger, duration, easing, direction, stagger, or Framer variant shape

**Correction:**
```typescript
// Point 11 — Animation for project cards:
// Element: Project cards
// Type: scrollEntrance (staggered list)
// Trigger: whileInView, viewport={{ once: true, margin: '-100px' }}
// Container: { transition: { staggerChildren: 0.08 } }  // --stagger-item
// Card variants:
//   hidden:  { y: 40, opacity: 0 }
//   visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } }
```

---

### ❌ VIOLATION 6: "Standard padding" without token

> "The section uses standard padding on the sides with comfortable spacing
> between elements."

**Why this is WRONG:**
- "Standard padding" is meaningless
- "comfortable spacing" is subjective
- Neither references a token

**Correction:**
> "Padding-X: var(--space-container-x-lg) → 64px desktop. Padding-Y: var(--space-section-y) → 96px.
> Inter-card gap: var(--space-gap-2xl) → 64px [est]."

---

### ❌ VIOLATION 7: Merging two sections

> "The Services section and the Beyond the Code section both have similar
> layouts — staggered titles, marquee tickers, and body content. They can
> be analyzed together as they share the same pattern."

**Why this is WRONG:**
- PRINCIPLE 1 violation: sections cannot be merged
- They do NOT share the same layout (Services = 2×2 card grid; Beyond the Code = stats + video cards)
- Merging sections always corrupts fidelity

**Correction:** Each section gets its own separate 18-point analysis in its own response.

---

### ❌ VIOLATION 8: Inventing components or variants

> "The hero could use a gradient background instead of the dark overlay,
> which would give it more depth. I'd also suggest adding a floating badge
> component near the profile image to highlight key skills."

**Why this is WRONG:**
- PRINCIPLE 3 violation: zero redesign tolerance
- "Could use" and "I'd suggest" are creative opinions — absolutely prohibited
- No gradient exists in the design system
- No floating badge component exists

**Correction:** Only document what exists on the live site. Never propose improvements.

---

### ❌ VIOLATION 9: Color by name instead of token

> "The number labels on the service cards are lime green / chartreuse colored.
> The background is very dark, almost black. The text is white."

**Why this is WRONG:**
- "lime green / chartreuse" — must be `var(--color-accent-primary)` → #e8ff47
- "very dark, almost black" — must be `var(--color-bg-primary)` → #0a0a0a
- "white" — must be `var(--color-text-primary)` → #ffffff

**Rule B3 (token rules): No naked values. Always token + hex.**

---

### ❌ VIOLATION 10: Responsive section with no detail

> "The layout is responsive and works on mobile."

**Why this is WRONG:**
- This is non-actionable — a developer cannot implement from this
- Does not specify what changes at each breakpoint
- Does not specify stack order
- Does not specify how grid collapses
- Does not specify how typography fluid sizing behaves at min

**Correction:**
> "Mobile (375px): grid collapses to 1 column. Left (text) stacks above right (illustration).
> Image may be hidden or reduced in size. Padding-X: var(--space-container-x) → 24px.
> Heading: clamp min-bound → 80px."

---

## SUMMARY: THE 10 CARDINAL VIOLATIONS

| # | Violation | Token |
|---|-----------|-------|
| 1 | Full-page summary instead of section-by-section | PRINCIPLE 1 |
| 2 | Naked px values without token references | Rule B3 |
| 3 | Describing StaggeredTitle as plain `<h1>` | Rule E2 |
| 4 | Describing Marquee as "scrolling text" | Rule D3 |
| 5 | Skipping animations as "just a fade" | Rule D1 |
| 6 | "Standard padding" without a token | Rule B1 |
| 7 | Merging two sections into one analysis | Rule A1 |
| 8 | Inventing components or suggesting improvements | PRINCIPLE 3 |
| 9 | Naming colors by hue ("lime green") not token | Rule B2 |
| 10 | "Responsive" with no breakpoint detail | Rule G1 |
