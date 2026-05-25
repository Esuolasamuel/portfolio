# Design Constraints
**PreshDev Frontend Implementation Skill v2.0.0**

These are the hard constraints for preciousegwuenu.com. They are non-negotiable.
No implementation, redesign suggestion, or QA override can bypass them.
Read this file before every implementation request.

---

## HOW TO READ THIS FILE

Each constraint is stated as a rule, followed by its rationale and one or more enforcement notes.
**HARD** constraints cause an automatic QA FAIL if violated.
**SOFT** constraints are strong defaults that require explicit client sign-off to override.

---

## SECTION 1 — THEME

### C-01 — Dark mode only [HARD]

This site has exactly one color theme: dark.

- There is no light mode.
- There is no system-preference toggle.
- There is no `prefers-color-scheme: light` block anywhere in the codebase.
- Background colors are always dark (`--color-bg-primary`, `--color-bg-secondary`, `--color-bg-card`).
- No white, cream, or light-gray surface may appear on any page, section, or component.

**Enforcement:** Any light background detected in QA is a P1 failure (checklist D1).

---

### C-02 — Single accent color [HARD]

The accent color is `--color-accent-green` and only `--color-accent-green`.

- No secondary accent color may be introduced.
- No accent variant (lighter green, neon green, teal) may substitute for the token.
- The accent is used for: hover states, active link indicators, CTA highlights, and select typographic emphasis.
- It is NOT used for: body text, backgrounds, borders (unless specified in a reference file).

**Enforcement:** Any accent substitution is a P1 failure (checklist D3).

---

### C-03 — No gradient backgrounds [HARD]

Background gradients are not part of this design system.

- Section backgrounds must be flat dark colors from the token set.
- The only permitted gradient is a subtle vignette or overlay on top of a background image (not behind text on flat surfaces).
- No `linear-gradient`, `radial-gradient`, or `conic-gradient` on any container background without explicit reference-file approval.

**Enforcement:** Unapproved gradients are a P2 failure.

---

## SECTION 2 — TYPOGRAPHY

### C-04 — No font substitution [HARD]

The display font and body font are specified in `typography-system.md`.

- Do not substitute with system fonts (`system-ui`, `sans-serif`, `Georgia`, etc.).
- Do not introduce a new font not documented in the typography system.
- If a font fails to load, it should fall back to the documented fallback stack — not a different creative choice.

**Enforcement:** Wrong font family is a P1 failure (checklist C1, C2).

---

### C-05 — No type scale deviation [HARD]

Font sizes must come from the token scale.

- Do not interpolate between scale steps (no `font-size: 20px` when the scale goes 18px → 24px).
- Do not introduce new scale tokens without updating `typography-system.md` first.
- The display heading scale is intentionally large (up to 72px+). Do not reduce it for visual comfort — the reference design uses it deliberately.

**Enforcement:** Off-scale sizes are a P1 failure (checklist A8, C4).

---

## SECTION 3 — LAYOUT

### C-06 — No layout redesign [HARD]

This skill is for faithful implementation of the existing design, not redesign.

- If a reference file specifies a two-column layout, you must implement a two-column layout — not a card grid, not a single column, not a sidebar layout.
- If an element's position feels "off" relative to your own aesthetic preference, implement the reference spec anyway and flag the concern as a note. Do not silently correct it.
- No new layout patterns may be introduced that are not in a reference file.

**Enforcement:** Layout deviation from reference is a P1 failure (checklist B1, B2).

---

### C-07 — Container max-width is 1200px [HARD]

All full-width sections use a centered inner container with `max-width: var(--container-max-width)` (1200px).

- Do not use `max-width: 100%` for content containers.
- Do not use a narrower container unless the reference file specifies a different width for that section (e.g. a narrower reading column on the blog/insights page).
- Edge-to-edge backgrounds (full-bleed images, marquee strips) are exempt — they extend to viewport width.

**Enforcement:** Wrong container width is a P2 failure (checklist B4).

---

### C-08 — Mobile breakpoint is 768px [HARD]

The primary mobile breakpoint is `768px`.

- All responsive layout changes must trigger at this breakpoint.
- Do not introduce intermediate breakpoints (e.g. 480px, 640px) unless a reference file specifies them.
- The mobile layout collapses to a single column in all multi-column sections unless a reference file specifies otherwise.

**Enforcement:** Wrong breakpoint or missing mobile collapse is a P2 failure (checklist G1).

---

## SECTION 4 — ANIMATION

### C-09 — Only approved animation types [HARD]

Six animation types are documented in `animation-system.md`. No others may be used.

The approved types are:
1. fade-up (element enters from below with opacity transition)
2. stagger-reveal (children animate in sequence)
3. marquee (continuous horizontal loop)
4. counter (numerical count-up animation)
5. exit-transition (page or component exit)
6. hover-state (interactive micro-animation on cursor events)

- Do not add: flip animations, bounce, zoom-in, rotate-in, blur-in, or any other type.
- All animation must use tokens from `animation-system.md` for duration and easing.

**Enforcement:** Unapproved animation type is a P2 failure (checklist E1).

---

### C-10 — GSAP is the primary animation library [SOFT]

GSAP (GreenSock) is the primary animation engine for complex sequences (stagger, scroll-triggered).
Framer Motion may be used for React component-level motion (enter/exit transitions).
CSS animations are acceptable for simple, stateless loops (marquee, hover states).

- Do not introduce three.js, anime.js, lottie, or other animation libraries without client approval.
- Do not mix GSAP and Framer Motion on the same element — pick one per component.

---

### C-11 — All scroll-triggered animations use ScrollTrigger [HARD]

Sections that animate on scroll must use GSAP ScrollTrigger, not IntersectionObserver or CSS scroll-driven animations.

- Start trigger: `top 80%` (element enters 80% down the viewport) unless a reference file specifies differently.
- Once-only: animations fire once and do not reverse on scroll-up.

**Enforcement:** Missing or incorrect scroll trigger implementation is a P2 failure (checklist E1).

---

## SECTION 5 — CONTENT & COPY

### C-12 — No copy invention or paraphrasing [HARD]

All text content on the site is the client's voice.

- Do not paraphrase, summarise, or reword any heading, body text, or CTA.
- Do not invent placeholder copy (e.g. "Lorem ipsum" or generic filler).
- If the reference file does not specify copy for a sub-element, leave it blank and flag it — do not fill it in.

**Enforcement:** Invented or paraphrased copy is a P1 failure (checklist F1–F3).

---

### C-13 — Social URLs are fixed [HARD]

The following social URLs are canonical and must not be altered:

| Platform | URL |
|----------|-----|
| TikTok | https://tiktok.com/@preshdevvv |
| LinkedIn | https://www.linkedin.com/in/preciousegwuenu/ |
| Instagram | https://instagram.com/preshdevvv |
| X (Twitter) | https://x.com/preshdevvv |
| GitHub | https://github.com/preshpi/ |
| YouTube | https://www.youtube.com/channel/UCJg9QXDxjw-lBDPwNl5wrCQ |

- The contact CTA is always `mailto:pietech55@gmail.com`.
- Do not use old `twitter.com` URLs — the site uses `x.com`.

**Enforcement:** Wrong social URL is a P1 failure (checklist F4).

---

### C-14 — Stats are fixed values [HARD]

The stats displayed on the About page and in the about block on the home page are:

| Stat | Value |
|------|-------|
| Projects completed | 32+ |
| Total clients | 12+ |
| Social media followers | 42k |

These values are live site data as of audit. Do not round, adjust, or estimate different values.

**Enforcement:** Wrong stat values are a P1 failure (checklist F5).

---

## SECTION 6 — TECHNICAL

### C-15 — Next.js App Router conventions [HARD]

This is a Next.js project using the App Router.

- Use `<Link>` from `next/link` for all internal navigation — not `<a>` tags.
- Use `<Image>` from `next/image` for all images — not `<img>` tags.
- Do not add `"use client"` to a component unless it requires browser APIs or interactivity.
- Server components are the default. Client components are the exception.

**Enforcement:** Wrong element type (e.g. `<a>` for internal links) is a P2 failure.

---

### C-16 — No inline styles for design values [HARD]

CSS values that express design intent must live in CSS files or CSS Modules, not inline `style` props.

- Exception: dynamically calculated values that cannot be expressed statically (e.g. animation progress as a JS variable) may use inline styles.
- Token references via inline style are permitted where CSS Modules cannot reference them (e.g. `style={{ color: 'var(--color-accent-green)' }}`), but this should be the exception, not the rule.

**Enforcement:** Static design values in inline styles are a P2 failure.

---

### C-17 — Image hosting is Cloudinary + Sanity CDN [SOFT]

Background images are hosted on Cloudinary. Project and profile images are hosted on Sanity's CDN (`cdn.sanity.io`).

- Do not use Next.js public folder for images that exist on these CDNs.
- Do not swap CDN URLs with placeholder services (placehold.co, picsum, etc.) in production code.
- Cloudinary base URL: `https://res.cloudinary.com/dgtc1iood/image/upload/`
- Sanity CDN base URL: `https://cdn.sanity.io/images/ya179eb0/production/`

---

## CONSTRAINT SUMMARY TABLE

| ID | Constraint | Type | QA Checklist |
|----|-----------|------|-------------|
| C-01 | Dark mode only | HARD | D1 |
| C-02 | Single accent color | HARD | D3 |
| C-03 | No gradient backgrounds | HARD | D1 |
| C-04 | No font substitution | HARD | C1, C2 |
| C-05 | No type scale deviation | HARD | A8, C4 |
| C-06 | No layout redesign | HARD | B1, B2 |
| C-07 | Container max-width 1200px | HARD | B4 |
| C-08 | Mobile breakpoint 768px | HARD | G1 |
| C-09 | Only approved animation types | HARD | E1 |
| C-10 | GSAP primary animation library | SOFT | — |
| C-11 | ScrollTrigger for scroll animations | HARD | E1 |
| C-12 | No copy invention or paraphrasing | HARD | F1–F3 |
| C-13 | Social URLs are fixed | HARD | F4 |
| C-14 | Stats are fixed values | HARD | F5 |
| C-15 | Next.js App Router conventions | HARD | — |
| C-16 | No inline styles for design values | HARD | — |
| C-17 | Cloudinary + Sanity CDN for images | SOFT | — |
