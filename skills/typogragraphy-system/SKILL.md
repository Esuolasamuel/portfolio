# Typography System — preciousegwuenu.com

---

## FONT FAMILIES

| Role | Family | Fallback | Usage |
|------|--------|---------|-------|
| Display | `ClashDisplay` | `sans-serif` | Section staggered titles, hero name |
| Body | `GeneralSans` | `sans-serif` | Nav, body copy, cards, UI labels |
| Mono | `JetBrains Mono` | `monospace` | Code references (rare) |

### Font Loading (Next.js)
```tsx
// app/layout.tsx
import localFont from 'next/font/local';

const clashDisplay = localFont({
  src: [
    { path: '../fonts/ClashDisplay-Variable.woff2', weight: '400 700' },
  ],
  variable: '--font-display',
});

const generalSans = localFont({
  src: [
    { path: '../fonts/GeneralSans-Variable.woff2', weight: '400 700' },
  ],
  variable: '--font-body',
});
```

---

## TYPE SCALE

### Display — Section Staggered Titles
Used in: "PreciousEgwuenu" (hero), "Featured Projects", "My Core Services", "Beyond the Code"

```css
font-family:    var(--font-display);
font-size:      clamp(60px, 8vw, 100px);   /* --text-display-xl */
font-weight:    700;                        /* --font-weight-bold */
line-height:    1.0;                        /* --leading-none → --leading-tight */
letter-spacing: -0.03em;                   /* --tracking-tighter */
color:          var(--color-text-primary);

/* Each character rendered as independent <span> */
/* Animated via Framer Motion (see animation-system.md) */
```

### Hero Name — "PreciousEgwuenu"
```css
font-family:    var(--font-display);
font-size:      clamp(80px, 10vw, 140px);  /* --text-display-2xl */
font-weight:    700;
line-height:    0.9;
letter-spacing: -0.04em;
```

### Role Rotator Subtitle
```css
/* "Frontend Developer | Content Creator | Technical Writer" */
font-family:    var(--font-body);
font-size:      var(--text-heading-md);   /* 18-24px */
font-weight:    var(--font-weight-medium);
letter-spacing: var(--tracking-normal);
color:          var(--color-text-secondary);
```

### Section Sub-Heading (e.g. "About Precious Egwuenu")
```css
font-family:    var(--font-display);
font-size:      var(--text-heading-xl);   /* clamp(28px, 3vw, 40px) */
font-weight:    var(--font-weight-bold);
line-height:    var(--leading-snug);
color:          var(--color-text-primary);
```

### Project Card Title
```css
font-family:    var(--font-display);
font-size:      var(--text-heading-lg);   /* clamp(22px, 2.5vw, 32px) */
font-weight:    var(--font-weight-bold);
line-height:    var(--leading-tight);
```

### Project Number (Large)
```css
font-family:    var(--font-display);
font-size:      clamp(80px, 8vw, 120px);
font-weight:    var(--font-weight-black);
line-height:    1;
color:          var(--color-accent-primary);   /* #e8ff47 — ONLY use case */
opacity:        0.15;                           /* Large ghost number behind content */
```

### Service Card Number (01, 02...)
```css
font-family:    var(--font-body);
font-size:      var(--text-label-md);     /* 12px */
font-weight:    var(--font-weight-medium);
letter-spacing: var(--tracking-wider);    /* 0.08em */
color:          var(--color-accent-primary);
text-transform: uppercase;
```

### Body Text
```css
font-family:    var(--font-body);
font-size:      var(--text-body-base);   /* 16px */
font-weight:    var(--font-weight-regular);
line-height:    var(--leading-relaxed);  /* 1.6 */
color:          var(--color-text-secondary);
max-width:      600px;   /* Reading line length cap */
```

### Marquee Tags
```css
font-family:    var(--font-body);
font-size:      var(--text-label-lg);    /* 14px */
font-weight:    var(--font-weight-medium);
letter-spacing: var(--tracking-widest);  /* 0.15em */
text-transform: uppercase;
color:          var(--color-text-secondary);
```

### Stat Number
```css
font-family:    var(--font-display);
font-size:      clamp(40px, 5vw, 64px);
font-weight:    var(--font-weight-black);
line-height:    1;
color:          var(--color-text-primary);
```

### Stat Label
```css
font-family:    var(--font-body);
font-size:      var(--text-body-sm);     /* 14px */
font-weight:    var(--font-weight-regular);
color:          var(--color-text-secondary);
```

### Nav Links
```css
font-family:    var(--font-body);
font-size:      var(--text-body-sm);     /* 14px */
font-weight:    var(--font-weight-medium);
letter-spacing: var(--tracking-wide);    /* 0.04em */
color:          var(--color-text-secondary);
transition:     color var(--duration-fast) var(--ease-out);
```

### Stack Tags / Badges
```css
font-family:    var(--font-body);
font-size:      var(--text-body-xs);     /* 12px */
font-weight:    var(--font-weight-medium);
letter-spacing: var(--tracking-wide);
border-radius:  var(--radius-full);
padding:        var(--space-1) var(--space-3);  /* 4px 12px */
border:         1px solid var(--color-border-subtle);
```

---

## TYPOGRAPHIC HIERARCHY MAP (PER SECTION)

### Hero Section Hierarchy
```
1. "PreciousEgwuenu"     — display-2xl, bold, white    (DOMINANT)
2. "Frontend Developer"  — heading-md, medium, white-60 (SECONDARY)
3. Body paragraph        — body-base, regular, white-60  (TERTIARY)
4. CTA buttons           — label-lg, medium, black/white (ACTION)
5. "WAT" + location tag  — label-md, uppercase, white-60 (ANNOTATION)
```

### Projects Section Hierarchy
```
1. "Featured Projects"   — display-xl, staggered        (SECTION TITLE)
2. Ghost number (1, 2…)  — display-2xl, accent-15%      (DECORATIVE)
3. Project title         — heading-lg, bold              (CARD TITLE)
4. Description           — body-base, white-60           (DESCRIPTION)
5. "Live website" label  — label-md, uppercase           (LINK LABEL)
6. URL                   — body-sm, white-60             (LINK)
7. Stack badges          — body-xs, pill                 (TAGS)
```

---

## ANTI-PATTERNS

```
✗ Never use Inter, Roboto, or system fonts
✗ Never render staggered titles as plain text (each character = <span>)
✗ Never center-align body text paragraphs
✗ Never use font weights outside the defined scale
✗ Never increase body text line-height beyond 1.8
✗ Never reduce display heading letter-spacing to positive values
✗ Never apply accent color (#e8ff47) to body copy
```