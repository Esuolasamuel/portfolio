# Design Tokens — preciousegwuenu.com
**Authority:** All implementation decisions trace to this file. No arbitrary values permitted.

---

## TOKEN PHILOSOPHY

Every visual property on this site is derived from a named token. If a value has no token, it does not belong in the design. This file is the single source of truth.

**Token Naming Convention:**
`--[category]-[variant]-[modifier]`
Examples: `--color-bg-primary`, `--space-16`, `--duration-slow`

---

## 1. COLOR TOKENS

### Primitive Color Scale (Raw Values)
```css
/* Black / Near-Black */
--primitive-black-000: #000000;
--primitive-black-050: #050505;
--primitive-black-100: #0a0a0a;   /* PRIMARY BG */
--primitive-black-200: #111111;   /* SECONDARY BG */
--primitive-black-300: #1a1a1a;   /* CARD BG */
--primitive-black-400: #222222;   /* BORDER */
--primitive-black-500: #2e2e2e;   /* DIVIDER */

/* White / Near-White */
--primitive-white-000: #ffffff;   /* PRIMARY TEXT */
--primitive-white-100: #f5f5f5;   /* SECONDARY TEXT */
--primitive-white-200: #e0e0e0;
--primitive-white-300: #cccccc;

/* Accent — Chartreuse/Lime */
--primitive-accent-400: #e8ff47;  /* PRIMARY ACCENT */
--primitive-accent-300: #f0ff7a;  /* ACCENT LIGHT */
--primitive-accent-500: #c8e000;  /* ACCENT DARK */

/* Alpha Whites */
--primitive-white-a10: rgba(255, 255, 255, 0.10);
--primitive-white-a20: rgba(255, 255, 255, 0.20);
--primitive-white-a40: rgba(255, 255, 255, 0.40);
--primitive-white-a60: rgba(255, 255, 255, 0.60);
--primitive-white-a80: rgba(255, 255, 255, 0.80);

/* Alpha Blacks */
--primitive-black-a10: rgba(0, 0, 0, 0.10);
--primitive-black-a40: rgba(0, 0, 0, 0.40);
--primitive-black-a60: rgba(0, 0, 0, 0.60);
--primitive-black-a80: rgba(0, 0, 0, 0.80);
```

### Semantic Color Tokens
```css
/* Backgrounds */
--color-bg-primary:      var(--primitive-black-100);   /* #0a0a0a — page bg */
--color-bg-secondary:    var(--primitive-black-200);   /* #111111 — section bg */
--color-bg-card:         var(--primitive-black-300);   /* #1a1a1a — card bg */
--color-bg-overlay:      var(--primitive-black-a80);   /* loading overlay */

/* Text */
--color-text-primary:    var(--primitive-white-000);   /* body text, headings */
--color-text-secondary:  var(--primitive-white-a60);   /* subtitles, captions */
--color-text-muted:      var(--primitive-white-a40);   /* disabled, placeholders */
--color-text-inverse:    var(--primitive-black-100);   /* text on accent bg */

/* Accent */
--color-accent-primary:  var(--primitive-accent-400);  /* #e8ff47 — CTAs, highlights */
--color-accent-light:    var(--primitive-accent-300);  /* hover states */
--color-accent-dark:     var(--primitive-accent-500);  /* pressed states */

/* Borders */
--color-border-default:  var(--primitive-black-400);   /* #222222 */
--color-border-subtle:   var(--primitive-white-a10);   /* subtle dividers */
--color-border-accent:   var(--primitive-accent-400);  /* accent borders */

/* Interactive */
--color-interactive-hover:   var(--primitive-white-a10);
--color-interactive-active:  var(--primitive-white-a20);
```

---

## 2. TYPOGRAPHY TOKENS

### Font Families
```css
--font-display: 'ClashDisplay', 'ClashDisplay-Variable', sans-serif;
--font-body:    'GeneralSans', 'GeneralSans-Variable', sans-serif;
--font-mono:    'JetBrains Mono', 'Fira Code', monospace;
```

### Font Weights
```css
--font-weight-regular:    400;
--font-weight-medium:     500;
--font-weight-semibold:   600;
--font-weight-bold:       700;
--font-weight-extrabold:  800;
--font-weight-black:      900;
```

### Type Scale (Desktop)
```css
/* Display — Hero headings, section titles (staggered) */
--text-display-2xl: clamp(80px, 10vw, 140px);   /* Hero "PreciousEgwuenu" */
--text-display-xl:  clamp(60px, 8vw, 100px);    /* Section staggered titles */
--text-display-lg:  clamp(40px, 5vw, 72px);     /* Sub-section headings */

/* Heading */
--text-heading-xl:  clamp(28px, 3vw, 40px);
--text-heading-lg:  clamp(22px, 2.5vw, 32px);
--text-heading-md:  clamp(18px, 2vw, 24px);
--text-heading-sm:  clamp(16px, 1.5vw, 20px);

/* Body */
--text-body-lg:   18px;
--text-body-base: 16px;
--text-body-sm:   14px;
--text-body-xs:   12px;

/* Label / UI */
--text-label-lg:  14px;
--text-label-md:  12px;
--text-label-sm:  10px;
```

### Line Heights
```css
--leading-none:    1;
--leading-tight:   1.1;   /* Display text, section titles */
--leading-snug:    1.2;
--leading-normal:  1.5;   /* Body text */
--leading-relaxed: 1.6;
--leading-loose:   1.8;
```

### Letter Spacing
```css
--tracking-tighter:  -0.04em;   /* Display headings */
--tracking-tight:    -0.02em;
--tracking-normal:    0em;
--tracking-wide:      0.04em;
--tracking-wider:     0.08em;   /* Labels, uppercase tags */
--tracking-widest:    0.15em;   /* Marquee tags */
```

---

## 3. SPACING TOKENS

### Base Scale (4px grid)
```css
--space-0:    0px;
--space-px:   1px;
--space-0-5:  2px;
--space-1:    4px;
--space-1-5:  6px;
--space-2:    8px;
--space-2-5:  10px;
--space-3:    12px;
--space-3-5:  14px;
--space-4:    16px;
--space-5:    20px;
--space-6:    24px;
--space-7:    28px;
--space-8:    32px;
--space-9:    36px;
--space-10:   40px;
--space-11:   44px;
--space-12:   48px;
--space-14:   56px;
--space-16:   64px;
--space-18:   72px;
--space-20:   80px;
--space-24:   96px;
--space-28:  112px;
--space-32:  128px;
--space-36:  144px;
--space-40:  160px;
--space-48:  192px;
--space-56:  224px;
--space-64:  256px;
```

### Semantic Spacing Tokens
```css
/* Container */
--space-container-x:      var(--space-6);     /* 24px — mobile */
--space-container-x-md:   var(--space-10);    /* 40px — tablet */
--space-container-x-lg:   var(--space-16);    /* 64px — desktop */
--space-container-max:     1440px;             /* max-width */
--space-content-max:       1200px;             /* content max-width */

/* Section Padding */
--space-section-y:         var(--space-24);   /* 96px — base section padding */
--space-section-y-lg:      var(--space-32);   /* 128px — large sections */
--space-section-y-hero:    var(--space-40);   /* 160px — hero sections */

/* Component Gaps */
--space-gap-xs:    var(--space-2);    /* 8px */
--space-gap-sm:    var(--space-4);    /* 16px */
--space-gap-md:    var(--space-6);    /* 24px */
--space-gap-lg:    var(--space-8);    /* 32px */
--space-gap-xl:    var(--space-12);   /* 48px */
--space-gap-2xl:   var(--space-16);   /* 64px */

/* Nav */
--space-nav-height:        72px;
--space-nav-x:             var(--space-10);   /* 40px */

/* Card */
--space-card-padding:      var(--space-8);    /* 32px */
--space-card-gap:          var(--space-6);    /* 24px */
```

---

## 4. BORDER RADIUS TOKENS

```css
--radius-none:   0px;
--radius-sm:     4px;
--radius-md:     8px;
--radius-lg:     12px;
--radius-xl:     16px;
--radius-2xl:    24px;
--radius-3xl:    32px;
--radius-full:   9999px;   /* Pill — stack tags, badges */
```

### Semantic Radius
```css
--radius-badge:    var(--radius-full);    /* Tech stack tags */
--radius-card:     var(--radius-2xl);     /* Project cards */
--radius-button:   var(--radius-full);    /* CTAs */
--radius-input:    var(--radius-lg);      /* Form inputs */
```

---

## 5. SHADOW TOKENS

```css
--shadow-none:   none;
--shadow-sm:     0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.6);
--shadow-md:     0 4px 16px rgba(0,0,0,0.5);
--shadow-lg:     0 8px 32px rgba(0,0,0,0.6);
--shadow-xl:     0 16px 64px rgba(0,0,0,0.7);
--shadow-accent: 0 0 24px rgba(232,255,71,0.3);   /* Accent glow */
--shadow-card:   0 8px 40px rgba(0,0,0,0.8);       /* Project card */
```

---

## 6. Z-INDEX TOKENS

```css
--z-behind:      -1;
--z-base:         0;
--z-raised:      10;
--z-dropdown:   100;
--z-sticky:     200;     /* Navbar */
--z-overlay:    300;     /* Overlays */
--z-modal:      400;
--z-preloader: 1000;    /* Preloader — above everything */
```

---

## 7. OPACITY TOKENS

```css
--opacity-0:       0;
--opacity-10:      0.10;
--opacity-20:      0.20;
--opacity-30:      0.30;
--opacity-40:      0.40;   /* Muted text */
--opacity-50:      0.50;
--opacity-60:      0.60;   /* Secondary text */
--opacity-70:      0.70;
--opacity-80:      0.80;
--opacity-90:      0.90;
--opacity-100:     1;

/* Semantic */
--opacity-text-secondary: var(--opacity-60);
--opacity-text-muted:     var(--opacity-40);
--opacity-disabled:       var(--opacity-30);
```

---

## 8. ANIMATION / MOTION TOKENS

### Duration Scale
```css
--duration-instant:    0ms;
--duration-fastest:   100ms;
--duration-fast:      200ms;
--duration-base:      400ms;
--duration-slow:      600ms;
--duration-slower:    800ms;
--duration-slowest:  1200ms;
--duration-preloader: 2500ms;   /* Preloader to content transition */
```

### Easing Tokens
```css
--ease-linear:     linear;
--ease-in:         cubic-bezier(0.4, 0, 1, 1);
--ease-out:        cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
--ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);     /* PRIMARY — Headings, entrances */
--ease-out-back:   cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy reveals */
--ease-in-expo:    cubic-bezier(0.7, 0, 0.84, 0);     /* Exits */
--ease-spring:     cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Spring elements */
```

### Stagger Tokens
```css
--stagger-char:   30ms;    /* Per-character stagger (StaggeredTitle) */
--stagger-word:   60ms;    /* Per-word stagger */
--stagger-item:   80ms;    /* Per-item stagger (lists, cards) */
--stagger-row:   120ms;    /* Per-row stagger */
```

### Marquee Tokens
```css
--marquee-duration-slow:    40s;    /* CTA marquee "Let's Work Together" */
--marquee-duration-base:    30s;    /* Services marquee */
--marquee-duration-fast:    20s;    /* Projects category marquee */
```

---

## 9. BREAKPOINT TOKENS

```css
--bp-xs:   375px;   /* Small mobile */
--bp-sm:   640px;   /* Mobile landscape */
--bp-md:   768px;   /* Tablet portrait */
--bp-lg:  1024px;   /* Tablet landscape / small desktop */
--bp-xl:  1280px;   /* Desktop */
--bp-2xl: 1440px;   /* Large desktop (max layout width) */
```

### Tailwind Breakpoint Map
```
xs:  → @media (min-width: 375px)
sm:  → @media (min-width: 640px)
md:  → @media (min-width: 768px)
lg:  → @media (min-width: 1024px)
xl:  → @media (min-width: 1280px)
2xl: → @media (min-width: 1440px)
```

---

## 10. LAYOUT TOKENS

```css
/* Container */
--layout-container-max:     1440px;
--layout-content-max:       1200px;
--layout-content-narrow:     800px;   /* About page text content */

/* Grid */
--layout-grid-cols-base:     12;      /* 12-column base grid */
--layout-grid-gap:           var(--space-6);   /* 24px grid gap */

/* Nav */
--layout-nav-height:         72px;
--layout-nav-height-mobile:  64px;

/* Preloader */
--layout-preloader-height:   100vh;
--layout-preloader-width:    100vw;
```

---

## 11. ICONOGRAPHY TOKENS

```css
/* Icon Size Scale */
--icon-xs:   12px;
--icon-sm:   16px;
--icon-md:   20px;
--icon-lg:   24px;
--icon-xl:   32px;
--icon-2xl:  48px;

/* Icon Colors */
--icon-color-default:   var(--color-text-primary);
--icon-color-muted:     var(--color-text-secondary);
--icon-color-accent:    var(--color-accent-primary);
```

---

## TOKEN USAGE CONTRACT

```
RULE 1:  Every CSS property value MUST reference a token.
RULE 2:  No inline px/em/rem values without token justification.
RULE 3:  Semantic tokens take priority over primitive tokens.
RULE 4:  New tokens require explicit justification — no casual additions.
RULE 5:  Token names must match this file exactly (case-sensitive).
RULE 6:  Tailwind classes must align to token equivalents (see spacing-system.md).
```