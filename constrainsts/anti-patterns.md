# Anti-Patterns Catalogue
**PreshDev Frontend Implementation Skill v2.0.0**

This file documents the most common implementation mistakes observed on this site.
Each entry shows the incorrect pattern, the correct replacement, and why it matters.
Read this file before every implementation and before every QA review.

---

## HOW TO USE

Scan the category that matches your current task. If your code contains any ❌ pattern below, fix it before submitting for QA. These are not style preferences — they are violations that will cause a QA FAIL.

---

## CATEGORY 1 — TOKEN VIOLATIONS

### AP-01: Hardcoded hex color

**Violation type:** Token compliance — automatic QA FAIL (A7)

❌ Wrong:
```css
color: #ffffff;
background-color: #0a0a0a;
border: 1px solid #333333;
```

✅ Correct:
```css
color: var(--color-text-primary);
background-color: var(--color-bg-primary);
border: 1px solid var(--color-border-subtle);
```

**Why it matters:** Hardcoded values break when the design system updates. A token change propagates everywhere; a hex value must be hunted down manually. It also signals the implementer did not read the color system.

---

### AP-02: Hardcoded pixel font size

**Violation type:** Token compliance — QA FAIL (A8)

❌ Wrong:
```css
font-size: 72px;
font-size: 16px;
font-size: 14px;
```

✅ Correct:
```css
font-size: var(--font-size-display-xl);
font-size: var(--font-size-body-md);
font-size: var(--font-size-body-sm);
```

**Why it matters:** Pixel values divorce the implementation from the type scale. If the scale changes, hardcoded values produce rogue sizes that break typographic rhythm.

---

### AP-03: Hardcoded spacing value

**Violation type:** Token compliance — QA FAIL (A4)

❌ Wrong:
```css
padding: 120px 48px;
margin-bottom: 64px;
gap: 24px;
```

✅ Correct:
```css
padding: var(--space-section-y) var(--space-section-x);
margin-bottom: var(--space-block-lg);
gap: var(--space-gap-md);
```

**Why it matters:** Arbitrary spacing breaks the vertical rhythm system. All spacing relationships are defined in the token set for a reason.

---

### AP-04: Inline rgba for overlays

**Violation type:** Token compliance — QA FAIL (A1, D5)

❌ Wrong:
```css
background: rgba(0, 0, 0, 0.6);
background: rgba(0,0,0,0.85);
```

✅ Correct:
```css
background: var(--color-overlay-medium);
background: var(--color-overlay-heavy);
```

**Why it matters:** Overlay opacity is a design decision, not a magic number. The token encodes the intent.

---

### AP-05: Arbitrary animation duration

**Violation type:** Token compliance — QA FAIL (E2, E3)

❌ Wrong:
```css
transition: all 0.3s ease-in-out;
animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

✅ Correct:
```css
transition: all var(--duration-fast) var(--ease-out);
animation: fadeIn var(--duration-medium) var(--ease-spring);
```

**Why it matters:** Animation timings are part of the motion language. Arbitrary values make interactions feel inconsistent.

---

## CATEGORY 2 — THEME VIOLATIONS

### AP-06: Light background applied

**Violation type:** Hard constraint violation — automatic QA FAIL (D1)

❌ Wrong:
```css
background-color: #ffffff;
background-color: #f5f5f5;
background-color: white;
background: #fafafa;
```

✅ Correct:
```css
background-color: var(--color-bg-primary);   /* darkest surface */
background-color: var(--color-bg-secondary); /* slightly elevated dark surface */
background-color: var(--color-bg-card);      /* card surface */
```

**Why it matters:** This is a dark-only site. A white or light background is a design breach, not a styling choice. It will be caught in QA and rejected.

---

### AP-07: Light mode media query

**Violation type:** Hard constraint violation — automatic QA FAIL (D2)

❌ Wrong:
```css
@media (prefers-color-scheme: light) {
  background-color: #ffffff;
  color: #000000;
}
```

✅ Correct:
```
(no light mode logic anywhere — delete the block entirely)
```

**Why it matters:** The site has no light mode. Adding this logic introduces broken states that will be triggered for the majority of users.

---

### AP-08: Accent color substitution

**Violation type:** Hard constraint violation — QA FAIL (D3)

❌ Wrong:
```css
color: #00ff88;         /* close but wrong */
color: #4ade80;         /* Tailwind green — wrong */
background: #22c55e;    /* wrong green */
```

✅ Correct:
```css
color: var(--color-accent-green);
background: var(--color-accent-green);
```

**Why it matters:** The accent green is a precise brand color. Substituting a "similar" green breaks color consistency across the site.

---

## CATEGORY 3 — LAYOUT VIOLATIONS

### AP-09: Wrong column proportion

**Violation type:** Layout fidelity — QA FAIL (B2)

❌ Wrong (Hero section):
```css
.hero-grid {
  grid-template-columns: 1fr 1fr; /* 50/50 split */
}
```

✅ Correct:
```css
.hero-grid {
  grid-template-columns: 55fr 45fr; /* 55/45 — match reference */
}
```

**Why it matters:** Layout proportions are specified in reference files. Guessing creates visual drift that accumulates across sections and makes the page look unbalanced.

---

### AP-10: Alternating card layout not implemented

**Violation type:** Layout fidelity — QA FAIL (B1)

❌ Wrong (Projects section — card always image-left):
```jsx
<div className="card">
  <img src={project.image} />
  <div className="card-content">...</div>
</div>
```

✅ Correct:
```jsx
<div className={`card ${index % 2 !== 0 ? 'card--reversed' : ''}`}>
  <img src={project.image} />
  <div className="card-content">...</div>
</div>
```

```css
.card--reversed {
  flex-direction: row-reverse;
}
```

**Why it matters:** The projects section alternates image-left / image-right on odd/even cards. This is a documented layout pattern. Omitting it makes all cards identical and breaks the visual rhythm.

---

### AP-11: Ghost number omitted from project cards

**Violation type:** Layout fidelity — QA FAIL (B6)

❌ Wrong:
```jsx
<div className="card">
  {/* No ghost number */}
  <h3>{project.title}</h3>
</div>
```

✅ Correct:
```jsx
<div className="card">
  <span className="card__ghost-number" aria-hidden="true">
    {String(index + 1).padStart(2, '0')}
  </span>
  <h3>{project.title}</h3>
</div>
```

**Why it matters:** The large ghost number (01, 02, 03…) positioned behind the card is a defining visual element of the projects layout. It is not decorative fluff — it is part of the design spec.

---

### AP-12: Missing marquee duplication

**Violation type:** Layout fidelity / animation — QA FAIL (E1, B1)

❌ Wrong:
```jsx
<div className="marquee">
  <span>E-commerce · Fintech · Healthcare · SaaS · Social</span>
</div>
```

✅ Correct:
```jsx
<div className="marquee">
  <div className="marquee__track">
    <span>E-commerce · Fintech · Healthcare · SaaS · Social ·&nbsp;</span>
    <span aria-hidden="true">E-commerce · Fintech · Healthcare · SaaS · Social ·&nbsp;</span>
  </div>
</div>
```

**Why it matters:** A continuous marquee requires duplicated content so the second copy fills the gap as the first exits. A single span causes a visible pause/jump in the loop.

---

## CATEGORY 4 — TYPOGRAPHY VIOLATIONS

### AP-13: Wrong font family on display headings

**Violation type:** Typography — QA FAIL (C1)

❌ Wrong:
```css
h1 {
  font-family: 'Inter', sans-serif;
  font-family: system-ui, sans-serif;
}
```

✅ Correct:
```css
h1 {
  font-family: var(--font-display);
}
```

**Why it matters:** Display headings must use the display font defined in the typography system. System fonts produce a generic appearance that does not match the site's identity.

---

### AP-14: Uppercase via CSS transform on headings

**Violation type:** Typography — QA FAIL (C8)

❌ Wrong:
```css
h2 {
  text-transform: uppercase;
}
```

✅ Correct:
```
(no text-transform unless explicitly specified in the reference file for that section)
```

**Why it matters:** The animated letter-stagger on headings (e.g. "Featured Projects" on the projects page) splits the heading into individual characters. Applying `text-transform: uppercase` via CSS breaks this animation pattern and contradicts the reference design.

---

### AP-15: Incorrect heading hierarchy

**Violation type:** Typography + Accessibility — QA FAIL (C4, G5)

❌ Wrong (skipping levels):
```jsx
<h1>Featured Projects</h1>
<h3>SupportHive</h3>  {/* skipped h2 */}
```

✅ Correct:
```jsx
<h1>Featured Projects</h1>
<h2>SupportHive</h2>
```

**Why it matters:** Skipping heading levels breaks screen reader navigation and violates WCAG 2.1 SC 1.3.1.

---

## CATEGORY 5 — COPY & CONTENT VIOLATIONS

### AP-16: Invented or paraphrased copy

**Violation type:** Content fidelity — QA FAIL (F1–F3)

❌ Wrong:
```jsx
<p>I'm a passionate developer who loves creating beautiful websites.</p>
```

✅ Correct:
```jsx
<p>
  I am a frontend developer I have a strong background in creating visually
  appealing and user-friendly web experiences. I am motivated to find a role
  where I can challenge myself and provide value to website users.
</p>
```

**Why it matters:** Copy on this site is the client's voice. Paraphrasing changes meaning and must never be done without explicit instruction.

---

### AP-17: Wrong social URLs

**Violation type:** Content fidelity — QA FAIL (F4)

❌ Wrong:
```jsx
href="https://twitter.com/preshdevvv"   /* old Twitter URL */
href="https://linkedin.com/preshpi"     /* invented slug */
```

✅ Correct (verified from live site):
```jsx
href="https://tiktok.com/@preshdevvv"
href="https://www.linkedin.com/in/preciousegwuenu/"
href="https://instagram.com/preshdevvv"
href="https://x.com/preshdevvv"
href="https://github.com/preshpi/"
href="https://www.youtube.com/channel/UCJg9QXDxjw-lBDPwNl5wrCQ"
```

**Why it matters:** Wrong social URLs break live links in production. The correct URLs are scraped from the live site and are authoritative.

---

### AP-18: Wrong contact CTA destination

**Violation type:** Content fidelity — QA FAIL (F3)

❌ Wrong:
```jsx
href="/contact"
href="https://calendly.com/..."
```

✅ Correct:
```jsx
href="mailto:pietech55@gmail.com"
```

**Why it matters:** The Contact CTA opens the user's mail client directly. Routing to an internal page or third-party booking tool is incorrect.

---

## CATEGORY 6 — ANIMATION VIOLATIONS

### AP-19: Animating on page load without scroll trigger

**Violation type:** Animation system — QA FAIL (E1)

❌ Wrong (fires immediately):
```jsx
useEffect(() => {
  gsap.from('.hero-heading', { opacity: 0, y: 40, duration: 0.6 });
}, []);
```

✅ Correct (fires on scroll into view, unless it's a hero / above-the-fold element):
```jsx
gsap.from('.section-heading', {
  scrollTrigger: { trigger: '.section-heading', start: 'top 80%' },
  opacity: 0,
  y: 40,
  duration: var(--duration-medium),
  ease: var(--ease-out),
});
```

**Why it matters:** Sections below the fold should animate in as they scroll into view. Firing everything on load makes the page feel broken for users who scroll quickly, and it defeats the progressive reveal pattern used throughout the site.

---

### AP-20: Missing `prefers-reduced-motion` guard

**Violation type:** Accessibility / animation — QA FAIL (E5)

❌ Wrong:
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.element { animation: fadeUp 0.4s ease-out; }
```

✅ Correct:
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.element { animation: fadeUp 0.4s ease-out; }

@media (prefers-reduced-motion: reduce) {
  .element { animation: none; }
}
```

**Why it matters:** Users with vestibular disorders can trigger nausea or seizures from motion. This is a legal accessibility requirement in many jurisdictions.

---

## QUICK REFERENCE — VIOLATION SEVERITY

| Anti-pattern | Severity | Auto-fail category |
|-------------|----------|--------------------|
| AP-01 Hardcoded hex | P1 | A7 |
| AP-02 Hardcoded px font | P1 | A8 |
| AP-03 Hardcoded spacing | P1 | A4 |
| AP-04 Inline rgba overlay | P1 | A1, D5 |
| AP-05 Arbitrary animation | P2 | E2, E3 |
| AP-06 Light background | P1 | D1 |
| AP-07 Light mode media query | P1 | D2 |
| AP-08 Wrong accent color | P1 | D3 |
| AP-09 Wrong column proportion | P1 | B2 |
| AP-10 Missing alternating layout | P1 | B1 |
| AP-11 Missing ghost number | P2 | B6 |
| AP-12 Missing marquee duplication | P2 | E1, B1 |
| AP-13 Wrong font family | P1 | C1 |
| AP-14 Uppercase via CSS | P2 | C8 |
| AP-15 Skipped heading level | P2 | G5 |
| AP-16 Paraphrased copy | P1 | F1–F3 |
| AP-17 Wrong social URLs | P1 | F4 |
| AP-18 Wrong CTA destination | P1 | F3 |
| AP-19 Missing scroll trigger | P2 | E1 |
| AP-20 Missing reduced-motion guard | P2 | E5 |
