# Implementation Example — Footer Component
**Skill:** PreshDev Frontend Implementation Skill v2.0.0
**Purpose:** Reference implementation demonstrating full token compliance

---

## COMPONENT: Footer
**File:** `src/components/shared/Footer.tsx`
**Depends on:** Nothing (static, no sub-components)
**Tokens used:** `--color-bg-primary`, `--color-text-secondary`, `--color-text-muted`,
                 `--color-border-subtle`, `--font-body`, `--text-body-sm`, `--text-body-xs`,
                 `--text-label-md`, `--tracking-wider`, `--duration-fast`, `--ease-out`

---

### TypeScript Interface

```typescript
// No props — Footer is fully static (no Sanity CMS, no dynamic data)
// All data is hardcoded as constants within the component
```

---

### Component Code

```tsx
'use client';

import Link from 'next/link';

// ── Static data ──────────────────────────────────────────────
const navigationLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Insights', href: '/insights' },
] as const;

const socialLinks = [
  { label: 'TikTok',    href: 'https://tiktok.com/@preshdevvv' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/preciousegwuenu/' },
  { label: 'Instagram', href: 'https://instagram.com/preshdevvv' },
  { label: 'X',         href: 'https://x.com/preshdevvv' },
  { label: 'GitHub',    href: 'https://github.com/preshpi/' },
  { label: 'YouTube',   href: 'https://www.youtube.com/channel/UCJg9QXDxjw-lBDPwNl5wrCQ' },
] as const;

// ── Component ─────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
      className="w-full"
    >
      <div
        className="mx-auto px-6 lg:px-16 py-16"
        style={{ maxWidth: 'var(--layout-container-max)' }}
      >
        {/* ── Top two-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left: Navigation */}
          <nav aria-label="Footer navigation">
            <p
              className="mb-4"
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      'var(--text-label-md)',   /* 12px */
                fontWeight:    'var(--font-weight-medium)',
                letterSpacing: 'var(--tracking-wider)',  /* 0.08em */
                textTransform: 'uppercase',
                color:         'var(--color-text-secondary)',
              }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navigationLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="footer-link transition-colors focus-visible:outline
                               focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{
                      fontFamily:  'var(--font-body)',
                      fontSize:    'var(--text-body-sm)',    /* 14px */
                      fontWeight:  'var(--font-weight-regular)',
                      color:       'var(--color-text-secondary)',
                      /* focus-visible outline color set in globals.css */
                      outlineColor: 'var(--color-accent-primary)',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Socials */}
          <nav aria-label="Social media links">
            <p
              className="mb-4"
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      'var(--text-label-md)',
                fontWeight:    'var(--font-weight-medium)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                color:         'var(--color-text-secondary)',
              }}
            >
              Socials
            </p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Precious on ${label}`}
                    className="footer-link transition-colors focus-visible:outline
                               focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{
                      fontFamily:   'var(--font-body)',
                      fontSize:     'var(--text-body-sm)',
                      fontWeight:   'var(--font-weight-regular)',
                      color:        'var(--color-text-secondary)',
                      outlineColor: 'var(--color-accent-primary)',
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Copyright bar ── */}
        <div
          className="mt-12 pt-6 flex flex-col gap-1 sm:flex-row sm:justify-between"
          style={{ borderTop: '1px solid var(--color-border-subtle)' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   'var(--text-body-xs)',    /* 12px */
              fontWeight: 'var(--font-weight-regular)',
              color:      'var(--color-text-muted)',
            }}
          >
            Copyright © 2026.
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   'var(--text-body-xs)',
              fontWeight: 'var(--font-weight-regular)',
              color:      'var(--color-text-muted)',
            }}
          >
            Made with love by devdesignlolu
          </span>
        </div>
      </div>
    </footer>
  );
}
```

---

### CSS / Token Requirements (globals.css)

```css
/* Footer link hover state — kept in CSS for performance */
.footer-link:hover {
  color: var(--color-text-primary);   /* #ffffff */
}

/* Transition applied globally to links */
.footer-link {
  transition: color var(--duration-fast) var(--ease-out);
}
```

---

### Usage Example

```tsx
// In any page layout (app/layout.tsx or individual pages):
import Footer from '@/components/shared/Footer';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
```

---

## WHY THIS IMPLEMENTATION IS CORRECT

✓ No arbitrary Tailwind values (no `w-[px]`, no `text-[#hex]`)
✓ Every color via CSS variable (`var(--color-*)`)
✓ Every font via CSS variable (`var(--font-body)`)
✓ Every size via CSS variable (`var(--text-*)`)
✓ Social links have `target="_blank"` + `rel="noopener noreferrer"`
✓ Social links have `aria-label` describing the action
✓ Nav links use `<Link>` (Next.js), social links use `<a>`
✓ Copyright text is exact: "Copyright © 2026." / "Made with love by devdesignlolu"
✓ No light mode variants (no `dark:` classes)
✓ Hover state in CSS class, not inline style (performance)
✓ `focus-visible` uses accent color `var(--color-accent-primary)`
✓ Two `<nav>` elements with distinct `aria-label`
