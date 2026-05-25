# Implementation Prompt Template
**PreshDev Frontend Implementation Skill v2.0.0**

Use this template to request a section or component implementation. Fill in every field. Do not omit sections — empty fields cause under-specified output.

---

## HOW TO USE

Copy the block below, fill in all fields, and submit it as your implementation request. Fields marked `[REQUIRED]` will cause the skill to halt if missing. Fields marked `[OPTIONAL]` can be left as `N/A` if not applicable.

---

```
IMPLEMENTATION REQUEST
======================

## 1. TARGET
Section / Component:     [REQUIRED] e.g. Hero Section, Navbar, Projects Card, Footer
Page:                    [REQUIRED] e.g. Home (index), About, Projects
File to create/edit:     [REQUIRED] e.g. components/HeroSection.tsx

## 2. REFERENCE
Reference file:          [REQUIRED] e.g. references/hero-section-reference.md
Section in reference:    [REQUIRED] e.g. "Layout Spec > Two-Column Grid"
Screenshot / visual:     [OPTIONAL] Attach image or paste Cloudinary URL

## 3. SCOPE
What to build:           [REQUIRED] Describe what this implementation must produce.
                         Be specific. e.g. "Full hero section with animated heading,
                         subtitle, CTA button, and background image."

What NOT to build:       [REQUIRED] Explicit exclusions to prevent scope creep.
                         e.g. "Do not implement navbar or preloader — those are
                         separate components."

## 4. STATE & INTERACTION
Animated:                [REQUIRED] Yes / No
If yes, animation type:  [REQUIRED if animated] e.g. fade-up, stagger-reveal, marquee
Interactive elements:    [OPTIONAL] e.g. "CTA button hover state", "nav link underline
                         on hover"
Scroll behavior:         [OPTIONAL] e.g. "Navbar becomes sticky after 80px scroll"

## 5. TOKENS
Color tokens required:   [REQUIRED] List every token this section uses.
                         e.g. --color-bg-primary, --color-text-primary,
                         --color-accent-green
Typography tokens:       [REQUIRED] e.g. --font-display / 72px / weight 700
Spacing tokens:          [REQUIRED] e.g. --space-section-y for vertical padding

## 6. COPY
Heading:                 [REQUIRED if section has a heading] Exact string
Subheading / body:       [OPTIONAL] Exact string or "see reference file"
CTA label:               [OPTIONAL] e.g. "Let's Work Together"
CTA destination:         [OPTIONAL] e.g. mailto:pietech55@gmail.com

## 7. ASSETS
Background image URL:    [OPTIONAL] Full Cloudinary or CDN URL
Profile / card images:   [OPTIONAL] List URLs or "see reference file"
Icons:                   [OPTIONAL] Icon library + names, e.g. "lucide-react: ArrowRight"

## 8. LAYOUT
Container max-width:     [OPTIONAL] e.g. 1200px or "use --container-max-width token"
Grid / flex structure:   [REQUIRED] Describe the layout.
                         e.g. "Two columns: left 55% text, right 45% image"
Mobile breakpoint:       [REQUIRED] Describe collapse behavior.
                         e.g. "Stack to single column at 768px, image moves below text"

## 9. OUTPUT FORMAT
Language / framework:    [REQUIRED] e.g. React + TypeScript, Next.js App Router
CSS approach:            [REQUIRED] e.g. CSS Modules, Tailwind, inline CSS variables
Export type:             [REQUIRED] Default export / Named export
File path:               [REQUIRED] Full path from project root

## 10. CONSTRAINTS
Hard constraints active: [REQUIRED] Confirm: "Yes, I have read constraints/design-constraints.md"
Anti-patterns checked:   [REQUIRED] Confirm: "Yes, I have read anti-patterns/anti-patterns.md"
Special restrictions:    [OPTIONAL] Any constraint specific to this request not covered
                         by the global constraints file.
```

---

## FILLED EXAMPLE

Below is a correctly filled example for the Navbar component.

```
IMPLEMENTATION REQUEST
======================

## 1. TARGET
Section / Component:     Navbar
Page:                    All pages (shared component)
File to create/edit:     components/Navbar.tsx

## 2. REFERENCE
Reference file:          references/navbar-reference.md
Section in reference:    "Fixed Position Spec" and "Mobile Collapse"
Screenshot / visual:     N/A

## 3. SCOPE
What to build:           Full navbar with logo ("PreshDev"), nav links (Home, About,
                         Projects, Insights), Contact CTA, mobile hamburger menu,
                         and scroll-triggered background change.

What NOT to build:       Do not implement the preloader — that is a separate component.
                         Do not add a search bar.

## 4. STATE & INTERACTION
Animated:                Yes
If yes, animation type:  fade-in on mount (duration 0.4s, ease-out), link underline
                         slide-in on hover
Interactive elements:    Mobile menu open/close, active link indicator
Scroll behavior:         Background transitions from transparent to --color-bg-primary
                         with backdrop-blur after 80px scroll

## 5. TOKENS
Color tokens required:   --color-bg-primary, --color-text-primary, --color-accent-green,
                         --color-border-subtle
Typography tokens:       --font-body / 14px / weight 500 for nav links;
                         --font-display / 18px / weight 700 for logo
Spacing tokens:          --space-nav-x (horizontal padding), --space-nav-y (vertical
                         padding)

## 6. COPY
Heading:                 Logo: "PreshDev"
Subheading / body:       Nav links: Home, About, Projects, Insights
CTA label:               Contact
CTA destination:         mailto:pietech55@gmail.com

## 7. ASSETS
Background image URL:    N/A
Profile / card images:   N/A
Icons:                   lucide-react: Menu, X (hamburger toggle)

## 8. LAYOUT
Container max-width:     --container-max-width (1200px)
Grid / flex structure:   Flex row, space-between: logo left, links center, CTA right
Mobile breakpoint:       Collapse links at 768px. Logo and hamburger icon remain.
                         Menu opens as full-width dropdown overlay.

## 9. OUTPUT FORMAT
Language / framework:    React + TypeScript, Next.js App Router
CSS approach:            CSS Modules with CSS variable tokens
Export type:             Default export
File path:               components/Navbar/Navbar.tsx

## 10. CONSTRAINTS
Hard constraints active: Yes, I have read constraints/design-constraints.md
Anti-patterns checked:   Yes, I have read anti-patterns/anti-patterns.md
Special restrictions:    Logo must use Next.js <Link> not <a> tag.
```

---

## COMMON MISTAKES WHEN FILLING THIS TEMPLATE

| Mistake | Effect | Fix |
|---------|--------|-----|
| Leaving color tokens blank | AI invents hex values instead of using tokens | Always list every token the section needs |
| Vague "What to build" | Scope creep, missing elements | Enumerate every sub-component |
| Missing mobile breakpoint | Desktop-only output | Always specify collapse behavior |
| Skipping constraints confirmation | Anti-patterns may appear in output | Always confirm both constraint files read |
| Providing screenshot without reference file | AI guesses layout from image alone | Always supply both |
