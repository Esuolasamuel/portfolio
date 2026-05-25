# UI Analysis Rules — preciousegwuenu.com
**Skill:** PreshDev Frontend Implementation Skill v2.0.0

---

## RULE SET A — SCOPE RULES

**A1 — One Section Per Response**
Analyze exactly one section per response. If asked to "analyze the home page," respond by listing the sections and asking which to start with. Never combine sections.

**A2 — Define Section Boundaries First**
Before any analysis, state explicitly where the section starts and ends:
- What element/trigger marks the beginning?
- What element/trigger marks the end?
- What is the section's DOM position on the page?

**A3 — Sub-elements Are Separate**
A complex component (e.g. Project Card) is a sub-element of its parent section. When it has enough complexity, it merits its own 18-point analysis. Do not flatten sub-components into a surface description.

---

## RULE SET B — TOKEN MAPPING RULES

**B1 — Every Value Gets a Token**
For every visual property observed (color, spacing, size, radius, shadow, timing), map it to a token from `design-tokens.md`. If no exact token exists, use the nearest token and mark it `[nearest: token-name]`.

**B2 — Semantic Token Priority**
Always use semantic tokens over primitive tokens:
- ✓ `var(--color-text-secondary)` — semantic
- ✗ `var(--primitive-white-a60)` — primitive (only use in token definitions)

**B3 — No Naked Values**
`padding: 64px` is never acceptable alone. Always write: `padding: 64px → var(--space-16)`.

**B4 — Clamp Values Need Both Anchors**
For fluid type sizes, always state both min and max:
- ✓ `clamp(60px, 8vw, 100px) → var(--text-display-xl)`
- ✗ `big heading text`

---

## RULE SET C — HIERARCHY RULES

**C1 — Rank Every Element**
In Point 15, every visible element must be ranked by visual prominence. The rank must be justified by a measurable property: size, weight, color contrast, or position.

**C2 — Dominant Element Rule**
The most visually dominant element in each section is almost always the `<StaggeredTitle />`. This is not a heading — it is the primary visual anchor. Treat it as rank 1 in every section where it appears.

**C3 — Accent Color = Visual Emphasis**
Any element using `var(--color-accent-primary)` (#e8ff47) is by definition a high-emphasis element. Document its position in the hierarchy relative to everything else.

---

## RULE SET D — MOTION ANALYSIS RULES

**D1 — Name the Trigger**
For every animation, state the exact trigger: `mount`, `scrollIntoView (whileInView)`, `loop (infinite)`, `hover`, or `exit`. Never write "animates when visible."

**D2 — StaggeredTitle Is Always Character-Level**
When a `<StaggeredTitle />` component is observed, the stagger unit is always per-character (`--stagger-char: 30ms`), never per-word. Document each character's wrapper structure.

**D3 — Marquee Requires Duration Token**
Every `<MarqueeTicker />` instance must have its duration mapped to a token:
- Projects category bar: `--marquee-duration-fast` (20s)
- Services category bar: `--marquee-duration-base` (30s)
- CTA "Let's Work Together": `--marquee-duration-slow` (40s)

**D4 — Document viewport margin**
For scroll-triggered animations: `viewport={{ once: true, margin: '-100px' }}` is the standard. If it differs, note explicitly.

---

## RULE SET E — TYPOGRAPHY ANALYSIS RULES

**E1 — Family First**
For every text element, state font family before any other property: `ClashDisplay` (display) or `GeneralSans` (body/UI).

**E2 — Staggered Titles Are Not Plain Text**
Every section title using `<StaggeredTitle />` renders each character as an individual `<span>` with `overflow: hidden` wrapper. This must be noted in the typography section, not just animation.

**E3 — Ghost Numbers**
Project card ghost numbers (large background numbers "1", "2", etc.) are a typography element, not a background element. They use:
- `var(--font-display)`, `var(--font-weight-black)`
- `var(--color-accent-primary)` at 15% opacity
- Font size: `clamp(80px, 8vw, 120px)`

**E4 — TextRotator Copy Must Be Listed**
When a `<TextRotator />` is observed, list every string in the rotation sequence in order:
1. "Frontend Developer"
2. "Content Creator"
3. "Technical Writer"

---

## RULE SET F — LAYOUT ANALYSIS RULES

**F1 — Describe Both Axes**
Every layout must describe both its primary axis (flex-direction / grid flow) and cross-axis alignment.

**F2 — Asymmetric Layouts Are Documented Asymmetrically**
If left column is 55% and right is 45%, say so. Don't write "two columns" without documenting the proportion.

**F3 — Full-Bleed vs Contained**
Distinguish between:
- Full-bleed: element spans 100vw (background images, CTA section)
- Container: content constrained to `var(--layout-container-max)` (1440px) with padding

**F4 — Background Images Are Layers**
When a section has a background image + dark overlay, document both as separate layers with their respective tokens/opacity values.

---

## RULE SET G — RESPONSIVE ANALYSIS RULES

**G1 — Mobile-First Mindset**
Describe mobile layout first, then escalate through breakpoints to desktop.

**G2 — Stack Order Matters**
When a multi-column desktop layout becomes single-column mobile, document what stacks on top of what.

**G3 — Typography Clamp Behavior**
For fluid type, document what the type looks like at both the minimum (mobile) and maximum (large desktop) of the clamp range.

---

## PROHIBITED ANALYSIS BEHAVIORS

```
✗ DO NOT write "this section looks like..." (subjective)
✗ DO NOT write "the design uses a clean/modern aesthetic" (opinion)
✗ DO NOT skip the motion section because "it's just a fade"
✗ DO NOT group all spacing into "generous whitespace" (non-actionable)
✗ DO NOT describe a StaggeredTitle as "h1 heading text"
✗ DO NOT describe the marquee as "scrolling text"
✗ DO NOT write "standard padding" without a token reference
✗ DO NOT write "responsive layout" without specifying breakpoint behaviors
✗ DO NOT describe colors by name ("lime green") — always use token + hex
✗ DO NOT omit the ghost number from project card analyses
```
