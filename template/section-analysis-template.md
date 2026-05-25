# Section Analysis Template — 18-Point Format
**Skill:** PreshDev Frontend Implementation Skill v2.0.0

---

## MANDATORY USAGE

This template MUST be completed in full before any implementation instructions or code are generated. No point may be skipped. If a point does not apply, write "N/A — [reason]".

---

## TEMPLATE

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POINT 01 — SECTION IDENTIFICATION
  Name:         [Exact section name, e.g. "Featured Projects (Home)"]
  Page:         [Home / About / Projects]
  Route:        [e.g. /]
  DOM Order:    [e.g. 3rd section after Navbar]
  Boundaries:   [What visually starts and ends this section?]
  Component:    [e.g. <FeaturedProjects />]

POINT 02 — LAYOUT STRUCTURE
  Type:         [Single column / Two column / Grid / Flex row / Asymmetric / etc.]
  Description:  [Describe the spatial layout in plain English — left col does X, right col does Y]
  Axis:         [Primary: horizontal | vertical]
  Nesting:      [Describe any nested layout containers]

POINT 03 — CONTAINER SYSTEM
  Max width:    [e.g. 1440px → var(--layout-container-max)]
  Padding X:    [e.g. 64px desktop → var(--space-container-x-lg)]
  Padding Y:    [e.g. 96px → var(--space-section-y)]
  Alignment:    [centered / left-aligned / full-bleed]
  Background:   [Token reference for section background color/image]

POINT 04 — GRID SYSTEM
  Columns:      [e.g. 12-col grid / 2-col asymmetric / auto-fit minmax]
  Column gap:   [Token reference]
  Row gap:      [Token reference]
  Spanning:     [Which elements span multiple columns?]
  Tailwind:     [Equivalent Tailwind grid classes]

POINT 05 — SPACING SYSTEM
  Section padding Y:  [Token + px value]
  Section padding X:  [Token + px value]
  Inter-element gap:  [Token + px value]
  Internal padding:   [Token + px value, for cards/components]
  Margin notes:       [Any margin overrides or special spacing relationships]

POINT 06 — TYPOGRAPHY SYSTEM
  [List every text element in the section]
  Element:      [e.g. Section title "Featured Projects"]
  Font:         [var(--font-display) | var(--font-body)]
  Size token:   [e.g. var(--text-display-xl)]
  Weight:       [e.g. var(--font-weight-bold)]
  Line height:  [e.g. var(--leading-tight)]
  Tracking:     [e.g. var(--tracking-tighter)]
  Color:        [Token]
  Rendering:    [Plain text / StaggeredTitle chars / TextRotator]

POINT 07 — COLOR SYSTEM
  Background:         [Token]
  Text primary:       [Token]
  Text secondary:     [Token]
  Accent elements:    [Which elements use accent color + token]
  Border colors:      [Token]
  Image overlays:     [Token + opacity]
  Special colors:     [Any alpha/transparency values]

POINT 08 — ICONOGRAPHY SYSTEM
  Icons present:      [List all icons by name]
  Icon library:       [e.g. Lucide / custom SVG / none]
  Icon size:          [Token]
  Icon color:         [Token]
  Icon context:       [Where each icon appears and its role]

POINT 09 — COMPONENT STRUCTURE
  [List every discrete component in the section]
  Component:    [Name + description]
  Props:        [Key props that drive variation]
  Children:     [What child components does it contain?]
  Reused:       [Is this component shared across pages?]

POINT 10 — INTERACTION STATES
  [For every interactive element:]
  Element:      [e.g. Project card]
  Default:      [Visual state at rest]
  Hover:        [What changes on hover?]
  Active:       [What changes on click/press?]
  Focus:        [Keyboard focus state]
  Transition:   [Token: duration + easing]

POINT 11 — ANIMATION / MOTION
  [For every animated element:]
  Element:      [e.g. Section title]
  Type:         [StaggeredTitle / MarqueeTicker / TextRotator / scrollEntrance / hover]
  Trigger:      [mount / scrollIntoView / loop / hover]
  Duration:     [Token]
  Easing:       [Token]
  Stagger:      [Token, if applicable]
  Delay:        [ms, if applicable]
  Direction:    [y-translate from → to / x-translate / opacity / scale]
  Framer impl:  [variants shape — initial / animate / exit]

POINT 12 — RESPONSIVE BEHAVIOR
  Mobile (375px):   [Layout changes at smallest breakpoint]
  sm (640px):       [Changes]
  md (768px):       [Changes]
  lg (1024px):      [Changes]
  xl (1280px):      [Full desktop layout — describe as baseline]
  2xl (1440px):     [Max-width container behavior]
  Stack order:      [How do columns stack on mobile?]

POINT 13 — DESIGN TOKENS USED
  [Exhaustive list of every token referenced in this section]
  Color tokens:      [list]
  Spacing tokens:    [list]
  Typography tokens: [list]
  Motion tokens:     [list]
  Radius tokens:     [list]
  Shadow tokens:     [list]
  Z-index tokens:    [list]

POINT 14 — ELEMENT POSITIONING
  [For every significant element, describe exact position]
  Element:      [Name]
  Position:     [absolute / relative / sticky / flex child]
  Alignment:    [start / center / end / stretch]
  Offset:       [Token reference for any position offsets]
  Z-index:      [Token if stacked]

POINT 15 — VISUAL HIERARCHY
  [Rank every element by visual prominence, 1 = most dominant]
  Rank 1:  [Element + why it's dominant — size/weight/color]
  Rank 2:  [Element]
  Rank 3:  [Element]
  Rank 4:  [Element]
  Rank n:  [Continue for all elements]

POINT 16 — ALIGNMENT RULES
  Text alignment:       [left / center / right — per element]
  Icon alignment:       [relative to text]
  Cross-axis align:     [align-items value]
  Main-axis justify:    [justify-content value]
  Specific overrides:   [Any element that breaks the main alignment]

POINT 17 — CONSTRAINTS
  DO NOT:   [List specific things that must not be changed]
  PRESERVE: [List specific things that must be preserved exactly]
  WATCH:    [Edge cases, tricky implementation details]

POINT 18 — IMPLEMENTATION NOTES
  Dependencies:   [NPM packages required]
  Data source:    [Static / Sanity CMS / API]
  Special logic:  [Pagination, filtering, conditional rendering]
  Accessibility:  [ARIA labels, keyboard behavior, focus management]
  Performance:    [Lazy loading, image optimization notes]
  Code refs:      [Related reference files to consult]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END SECTION ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## COMPLETION RULES

1. Complete ALL 18 points — no skipping
2. Every value must reference a token from `design-tokens.md`
3. No arbitrary px/em values — always token + equivalent
4. If a value is estimated (can't be measured exactly), mark it with `[est]`
5. Framer Motion variants must be fully specified (not "animate in somehow")
6. After completing all 18 points, add a `## IMPLEMENTATION CHECKLIST` section
