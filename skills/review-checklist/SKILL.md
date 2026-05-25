# Review Checklist — preciousegwuenu.com
**Skill:** PreshDev Frontend Implementation Skill v2.0.0

Use this checklist before declaring any section or component implementation complete.

---

## CHECKLIST A — TOKEN COMPLIANCE

- [ ] Every color value uses a semantic token (`var(--color-*)`)
- [ ] Every spacing value maps to the 4px grid token (`var(--space-*)`)
- [ ] Every font-size uses a type scale token or clamp with token reference
- [ ] Every font-family uses `var(--font-display)` or `var(--font-body)`
- [ ] Every border-radius uses a radius token (`var(--radius-*)`)
- [ ] Every shadow uses a shadow token (`var(--shadow-*)`)
- [ ] Every z-index uses a z-index token (`var(--z-*)`)
- [ ] No arbitrary Tailwind values (`w-[px]`, `mt-[px]`, `text-[#hex]`)
- [ ] No hardcoded hex values in component files (only in `globals.css` token declarations)

---

## CHECKLIST B — TYPOGRAPHY COMPLIANCE

- [ ] All section titles use `<StaggeredTitle />` (NOT plain `<h1>`, `<h2>`)
- [ ] StaggeredTitle splits to characters (not words)
- [ ] Each character wrapper has `display: inline-block` AND `overflow: hidden`
- [ ] Stagger interval is `0.03s` (30ms per char, `--stagger-char`)
- [ ] Display headings use `var(--font-display)` (ClashDisplay)
- [ ] Body text uses `var(--font-body)` (GeneralSans)
- [ ] Body paragraphs have `max-width: 600px` cap
- [ ] Letter-spacing on display headings is negative (`--tracking-tighter`)
- [ ] No system fonts (no Inter, Roboto, -apple-system)
- [ ] Ghost project numbers use accent color at `opacity: 0.15`

---

## CHECKLIST C — ANIMATION COMPLIANCE

- [ ] All entrance animations use `whileInView` with `viewport={{ once: true, margin: '-100px' }}`
- [ ] All entrance easing uses `[0.16, 1, 0.3, 1]` (`--ease-out-expo`)
- [ ] Marquee uses 3 copies (not 2)
- [ ] Marquee `@keyframes` moves by `-33.333%` (not `-50%`)
- [ ] TextRotator uses `AnimatePresence mode="wait"`
- [ ] TextRotator cycle interval is `2500ms`
- [ ] Preloader z-index is `1000` (`var(--z-preloader)`)
- [ ] No CSS transitions on `width` or `height` (use `transform` only)
- [ ] No bounce/elastic easing on heading reveals

---

## CHECKLIST D — LAYOUT COMPLIANCE

- [ ] Container max-width is `1440px`
- [ ] Desktop padding-x is `64px` (`var(--space-container-x-lg)`)
- [ ] Section padding-y matches token (96px base, 128px large, 160px hero)
- [ ] Asymmetric layouts preserve exact column proportion
- [ ] Full-bleed sections span 100vw (not inside container)
- [ ] Background images use `cover` + `center`
- [ ] Overlay opacity matches token reference

---

## CHECKLIST E — CONTENT COMPLIANCE

- [ ] All text matches live site copy exactly (no paraphrasing)
- [ ] All URLs match live site links exactly
- [ ] All social links open in new tab
- [ ] Stack badge labels match exactly (e.g. "Next.JS" not "Next.js")
- [ ] Service numbers are "01" "02" "03" "04" (zero-padded, not "1" "2")
- [ ] Stat labels match exactly ("Project Completed" not "Projects")
- [ ] Copyright year matches (2026)
- [ ] Footer byline: "Made with love by devdesignlolu" (exact)

---

## CHECKLIST F — ACCESSIBILITY

- [ ] `<StaggeredTitle>` parent has `aria-label` with full text
- [ ] `<MarqueeTicker>` has pause-on-hover/focus behavior
- [ ] All images have descriptive `alt` text
- [ ] Interactive elements have visible `focus-visible` styles using accent color
- [ ] Color contrast: accent `#e8ff47` on `#0a0a0a` meets WCAG AA
- [ ] Nav links are in a `<nav>` with `aria-label`
- [ ] CTA email links use `aria-label` describing the action

---

## CHECKLIST G — RESPONSIVE COMPLIANCE

- [ ] Mobile layout tested at 375px
- [ ] Tablet layout tested at 768px
- [ ] Desktop layout tested at 1280px
- [ ] Max layout tested at 1440px
- [ ] No horizontal overflow on mobile
- [ ] Multi-column grids correctly collapse to single column
- [ ] Navigation collapses correctly on mobile (hamburger or simplified)
- [ ] Fluid type scales correctly between breakpoints

---

## SIGN-OFF

Before submitting implementation:
1. Run through all 7 checklists above
2. Any `[ ]` unchecked = implementation is NOT complete
3. Note any items marked N/A with explicit justification
