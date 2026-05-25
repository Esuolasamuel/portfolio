# QA Template
**PreshDev Frontend Implementation Skill v2.0.0**

Fill in one copy of this form per component after implementation is complete.
A component cannot be marked **PASSED** unless every REQUIRED check is explicitly confirmed.

---

## HEADER

| Field | Value |
|-------|-------|
| Component / Section | _(e.g. Navbar, Hero Section, Projects Card #3)_ |
| Page | _(e.g. Home, About, Projects)_ |
| File path | _(e.g. components/Navbar/Navbar.tsx)_ |
| Reviewer | _(name or handle)_ |
| Review date | _(YYYY-MM-DD)_ |
| Implementation prompt used | _(Yes / No — if No, flag for re-review)_ |
| Reference file consulted | _(filename or N/A)_ |

---

## CHECKLIST A — TOKEN COMPLIANCE

> Every visual value must trace to a design token. No raw hex, px, or font-family strings.

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A1 | All colors use `--color-*` tokens | ☐ Pass / ☐ Fail / ☐ N/A | |
| A2 | All font sizes use `--font-size-*` tokens | ☐ Pass / ☐ Fail / ☐ N/A | |
| A3 | All font families use `--font-*` tokens | ☐ Pass / ☐ Fail / ☐ N/A | |
| A4 | All spacing uses `--space-*` tokens | ☐ Pass / ☐ Fail / ☐ N/A | |
| A5 | All border-radius uses `--radius-*` tokens | ☐ Pass / ☐ Fail / ☐ N/A | |
| A6 | All animation durations/easings use `--duration-*` / `--ease-*` tokens | ☐ Pass / ☐ Fail / ☐ N/A | |
| A7 | No hardcoded hex values anywhere in the file | ☐ Pass / ☐ Fail | |
| A8 | No hardcoded `px` font sizes outside token definitions | ☐ Pass / ☐ Fail | |

**Section A Result:** ☐ PASS (all applicable checks pass) / ☐ FAIL (list failing checks below)

Failing checks:
```
(leave blank if pass)
```

---

## CHECKLIST B — LAYOUT FIDELITY

> The component must match the reference file layout spec.

| # | Check | Status | Notes |
|---|-------|--------|-------|
| B1 | Column/grid structure matches reference exactly | ☐ Pass / ☐ Fail / ☐ N/A | |
| B2 | Column proportions match reference (e.g. 55/45 split) | ☐ Pass / ☐ Fail / ☐ N/A | |
| B3 | Element order matches reference (top-to-bottom, left-to-right) | ☐ Pass / ☐ Fail | |
| B4 | Container max-width applied correctly | ☐ Pass / ☐ Fail | |
| B5 | Section padding matches token spec | ☐ Pass / ☐ Fail | |
| B6 | Ghost numbers / decorative elements present and positioned correctly | ☐ Pass / ☐ Fail / ☐ N/A | |
| B7 | Image aspect ratios match reference | ☐ Pass / ☐ Fail / ☐ N/A | |

**Section B Result:** ☐ PASS / ☐ FAIL

Failing checks:
```
(leave blank if pass)
```

---

## CHECKLIST C — TYPOGRAPHY

> Font choices, sizes, weights, and line heights must match the typography system.

| # | Check | Status | Notes |
|---|-------|--------|-------|
| C1 | Display headings use `--font-display` (Neue Montreal / equivalent) | ☐ Pass / ☐ Fail / ☐ N/A | |
| C2 | Body text uses `--font-body` | ☐ Pass / ☐ Fail / ☐ N/A | |
| C3 | Mono / label text uses `--font-mono` where specified | ☐ Pass / ☐ Fail / ☐ N/A | |
| C4 | Heading sizes follow the correct scale tier from typography-system.md | ☐ Pass / ☐ Fail | |
| C5 | Font weights match spec (no arbitrary weight values) | ☐ Pass / ☐ Fail | |
| C6 | Letter-spacing applied correctly on display headings | ☐ Pass / ☐ Fail / ☐ N/A | |
| C7 | Line heights match spec | ☐ Pass / ☐ Fail | |
| C8 | No all-caps applied via `text-transform` unless specified in reference | ☐ Pass / ☐ Fail | |

**Section C Result:** ☐ PASS / ☐ FAIL

Failing checks:
```
(leave blank if pass)
```

---

## CHECKLIST D — COLOR & THEME

> Dark-only site. No light mode. No color improvisation.

| # | Check | Status | Notes |
|---|-------|--------|-------|
| D1 | Background is dark (`--color-bg-primary` or `--color-bg-secondary`) — no light surfaces | ☐ Pass / ☐ Fail | |
| D2 | No light mode styles, media queries, or conditional theme logic present | ☐ Pass / ☐ Fail | |
| D3 | Accent color is `--color-accent-green` — no substitute accent introduced | ☐ Pass / ☐ Fail | |
| D4 | Text colors use `--color-text-primary` / `--color-text-secondary` / `--color-text-muted` correctly | ☐ Pass / ☐ Fail | |
| D5 | Overlay/scrim uses `--color-overlay-*` token, not a hardcoded rgba | ☐ Pass / ☐ Fail / ☐ N/A | |
| D6 | Border colors use `--color-border-subtle` or `--color-border-strong` — no hardcoded borders | ☐ Pass / ☐ Fail / ☐ N/A | |

**Section D Result:** ☐ PASS / ☐ FAIL

Failing checks:
```
(leave blank if pass)
```

---

## CHECKLIST E — ANIMATION

> Only use animation types defined in animation-system.md. No custom easing curves not in the token set.

| # | Check | Status | Notes |
|---|-------|--------|-------|
| E1 | Animation type is one of the 6 catalogued types (fade-up, stagger-reveal, marquee, counter, exit-transition, hover-state) | ☐ Pass / ☐ Fail / ☐ N/A | |
| E2 | Duration uses `--duration-*` token | ☐ Pass / ☐ Fail / ☐ N/A | |
| E3 | Easing uses `--ease-*` token | ☐ Pass / ☐ Fail / ☐ N/A | |
| E4 | Stagger delay is within the defined stagger range from animation-system.md | ☐ Pass / ☐ Fail / ☐ N/A | |
| E5 | `prefers-reduced-motion` respected (animations disabled or minimised) | ☐ Pass / ☐ Fail / ☐ N/A | |
| E6 | No animation library imported that is not approved (only GSAP / Framer Motion / CSS) | ☐ Pass / ☐ Fail / ☐ N/A | |

**Section E Result:** ☐ PASS / ☐ FAIL / ☐ N/A (no animation in this component)

Failing checks:
```
(leave blank if pass)
```

---

## CHECKLIST F — COPY & CONTENT

> All text must match the reference file. No paraphrasing. No invented content.

| # | Check | Status | Notes |
|---|-------|--------|-------|
| F1 | Heading text matches reference exactly | ☐ Pass / ☐ Fail / ☐ N/A | |
| F2 | Subheading / body copy matches reference exactly | ☐ Pass / ☐ Fail / ☐ N/A | |
| F3 | CTA label and destination match reference | ☐ Pass / ☐ Fail / ☐ N/A | |
| F4 | Social links use exact URLs from footer-reference.md | ☐ Pass / ☐ Fail / ☐ N/A | |
| F5 | Stats (32+ projects, 12+ clients, 42k followers) match reference values | ☐ Pass / ☐ Fail / ☐ N/A | |
| F6 | Project titles and stack lists match projects-section-reference.md | ☐ Pass / ☐ Fail / ☐ N/A | |
| F7 | Copyright line: "Copyright © 2026. Made with love by devdesignlolu" | ☐ Pass / ☐ Fail / ☐ N/A | |

**Section F Result:** ☐ PASS / ☐ FAIL

Failing checks:
```
(leave blank if pass)
```

---

## CHECKLIST G — RESPONSIVENESS & ACCESSIBILITY

| # | Check | Status | Notes |
|---|-------|--------|-------|
| G1 | Mobile layout collapses correctly at 768px breakpoint | ☐ Pass / ☐ Fail | |
| G2 | No horizontal scroll on mobile | ☐ Pass / ☐ Fail | |
| G3 | Images have descriptive `alt` text | ☐ Pass / ☐ Fail | |
| G4 | Interactive elements are keyboard-focusable | ☐ Pass / ☐ Fail | |
| G5 | Focus states are visible (not removed with `outline: none` without replacement) | ☐ Pass / ☐ Fail | |
| G6 | Color contrast meets WCAG AA for body text | ☐ Pass / ☐ Fail | |
| G7 | Tap targets on mobile are ≥ 44×44px | ☐ Pass / ☐ Fail | |

**Section G Result:** ☐ PASS / ☐ FAIL

Failing checks:
```
(leave blank if pass)
```

---

## OVERALL RESULT

| Section | Result |
|---------|--------|
| A — Token Compliance | ☐ PASS / ☐ FAIL |
| B — Layout Fidelity | ☐ PASS / ☐ FAIL |
| C — Typography | ☐ PASS / ☐ FAIL |
| D — Color & Theme | ☐ PASS / ☐ FAIL |
| E — Animation | ☐ PASS / ☐ FAIL / ☐ N/A |
| F — Copy & Content | ☐ PASS / ☐ FAIL |
| G — Responsiveness & A11y | ☐ PASS / ☐ FAIL |

### Final Sign-Off

☐ **PASSED** — All applicable sections pass. Component is ready for integration.

☐ **FAILED** — One or more sections failed. List issues below and re-submit after fixes.

☐ **CONDITIONAL PASS** — Minor issues noted but do not block integration. Issues must be resolved before next release.

---

## ISSUES LOG

Use this section to record all failures found. Each row is one issue.

| # | Checklist ref | Description | Severity (P1/P2/P3) | Fixed? |
|---|--------------|-------------|---------------------|--------|
| 1 | | | | ☐ |
| 2 | | | | ☐ |
| 3 | | | | ☐ |
| 4 | | | | ☐ |

**Severity guide:**
- P1 — Blocks ship: wrong token, broken layout, wrong copy, light background
- P2 — Must fix before next review: animation missing, minor layout drift, missing alt text
- P3 — Nice-to-have / polish: minor spacing inconsistency, unused class

---

## REVIEWER NOTES

```
(free-text notes, observations, or suggestions for the implementer)
```
