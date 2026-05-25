# Token Usage Example — Correct vs Incorrect
**Skill:** PreshDev Frontend Implementation Skill v2.0.0
**Purpose:** Side-by-side comparisons of every major token category

---

## RULE REMINDER

> Every CSS property value MUST reference a token.
> Semantic tokens take priority over primitive tokens.
> No inline px/em/rem values without token justification.

---

## COLOR TOKENS

### ❌ WRONG
```tsx
<div style={{ backgroundColor: '#0a0a0a' }}>
<h1 style={{ color: '#ffffff' }}>
<p style={{ color: 'rgba(255,255,255,0.6)' }}>
<span style={{ color: '#e8ff47' }}>
<div style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
```

### ✓ CORRECT
```tsx
<div style={{ backgroundColor: 'var(--color-bg-primary)' }}>
<h1 style={{ color: 'var(--color-text-primary)' }}>
<p style={{ color: 'var(--color-text-secondary)' }}>
<span style={{ color: 'var(--color-accent-primary)' }}>
<div style={{ border: '1px solid var(--color-border-subtle)' }}>
```

---

## TYPOGRAPHY TOKENS

### ❌ WRONG
```tsx
<h1 style={{ fontFamily: 'ClashDisplay', fontSize: '100px', fontWeight: 700, letterSpacing: '-0.04em' }}>
<p style={{ fontFamily: 'GeneralSans', fontSize: '16px', lineHeight: '1.6' }}>
<span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
```

### ✓ CORRECT
```tsx
<h1 style={{
  fontFamily:    'var(--font-display)',
  fontSize:      'var(--text-display-2xl)',   /* clamp(80px,10vw,140px) */
  fontWeight:    'var(--font-weight-bold)',
  letterSpacing: 'var(--tracking-tighter)',
}}>

<p style={{
  fontFamily: 'var(--font-body)',
  fontSize:   'var(--text-body-base)',   /* 16px */
  lineHeight: 'var(--leading-relaxed)',  /* 1.6 */
}}>

<span style={{
  fontFamily:    'var(--font-body)',
  fontSize:      'var(--text-label-md)',    /* 12px */
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-widest)', /* 0.15em */
}}>
```

---

## SPACING TOKENS

### ❌ WRONG
```tsx
<section style={{ padding: '96px 64px' }}>
<div style={{ gap: '32px' }}>
<div style={{ marginBottom: '48px' }}>
```

### ✓ CORRECT
```tsx
<section style={{
  paddingTop:    'var(--space-section-y)',      /* 96px */
  paddingBottom: 'var(--space-section-y)',
  paddingLeft:   'var(--space-container-x-lg)', /* 64px */
  paddingRight:  'var(--space-container-x-lg)',
}}>

<div style={{ gap: 'var(--space-gap-lg)' }}>    {/* 32px */}
<div style={{ marginBottom: 'var(--space-gap-xl)' }}>  {/* 48px */}
```

---

## BORDER RADIUS TOKENS

### ❌ WRONG
```tsx
<div style={{ borderRadius: '24px' }}>
<span style={{ borderRadius: '9999px' }}>
<button style={{ borderRadius: '50px' }}>
```

### ✓ CORRECT
```tsx
<div style={{ borderRadius: 'var(--radius-card)' }}>    {/* 24px */}
<span style={{ borderRadius: 'var(--radius-badge)' }}>  {/* 9999px pill */}
<button style={{ borderRadius: 'var(--radius-button)' }}>  {/* 9999px pill */}
```

---

## ANIMATION / MOTION TOKENS

### ❌ WRONG
```tsx
// Inline animation values
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
/>

// Missing variants pattern
<motion.h1
  animate={{ opacity: 1 }}
  initial={{ opacity: 0 }}
/>
```

### ✓ CORRECT
```tsx
// Always use variants object
const entranceVariants = {
  hidden:  { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,            // var(--duration-slow)
      ease:     [0.16, 1, 0.3, 1], // var(--ease-out-expo)
    },
  },
};

<motion.div
  variants={entranceVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
/>
```

---

## STAGGER TOKENS

### ❌ WRONG
```tsx
// Arbitrary stagger values
const container = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// Word-level stagger on StaggeredTitle
const words = text.split(' ');
```

### ✓ CORRECT
```tsx
// Use stagger tokens
const containerVariants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.03 },  // var(--stagger-char) → 30ms
  },
};

// Always split to CHARACTERS for StaggeredTitle
const chars = text.split('');
chars.map((char, i) => (
  <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
    <motion.span variants={charVariants}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  </span>
))
```

---

## Z-INDEX TOKENS

### ❌ WRONG
```tsx
<div style={{ zIndex: 1000 }}>   // Preloader
<nav style={{ zIndex: 100 }}>    // Navbar
<div style={{ zIndex: 9999 }}>   // Random
```

### ✓ CORRECT
```tsx
<div style={{ zIndex: 'var(--z-preloader)' }}>  // 1000
<nav style={{ zIndex: 'var(--z-sticky)' }}>     // 200
<div style={{ zIndex: 'var(--z-overlay)' }}>    // 300
```

---

## SHADOW TOKENS

### ❌ WRONG
```tsx
<div style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.8)' }}>
<div style={{ boxShadow: '0 0 24px rgba(232,255,71,0.3)' }}>
```

### ✓ CORRECT
```tsx
<div style={{ boxShadow: 'var(--shadow-card)' }}>    // 0 8px 40px rgba(0,0,0,0.8)
<div style={{ boxShadow: 'var(--shadow-accent)' }}>  // accent glow
```

---

## MARQUEE DURATION TOKENS

### ❌ WRONG
```tsx
style={{ animation: 'marquee 25s linear infinite' }}
style={{ animation: 'marquee 20s linear infinite' }}  // Used for CTA — wrong!
```

### ✓ CORRECT
```tsx
// Projects category filter
style={{ animation: 'marquee var(--marquee-duration-fast) linear infinite' }}   // 20s

// Services category filter
style={{ animation: 'marquee var(--marquee-duration-base) linear infinite' }}   // 30s

// CTA "Let's Work Together"
style={{ animation: 'marquee var(--marquee-duration-slow) linear infinite' }}   // 40s
```

---

## ARBITRARY TAILWIND — ALWAYS FORBIDDEN

### ❌ WRONG
```tsx
<div className="w-[1440px] mt-[37px] text-[14px] text-[#e8ff47] rounded-[24px]">
```

### ✓ CORRECT
```tsx
<div
  className="mx-auto mt-9 rounded-card"
  style={{
    maxWidth:  'var(--layout-container-max)',  // 1440px
    fontSize:  'var(--text-body-sm)',          // 14px
    color:     'var(--color-accent-primary)',  // #e8ff47
  }}
>
```

---

## DARK MODE VARIANTS — NEVER USE

### ❌ WRONG
```tsx
<div className="bg-white dark:bg-[#0a0a0a]">
<p className="text-black dark:text-white">
```

### ✓ CORRECT
```tsx
// The site is permanently dark. No light mode exists. No dark: prefix needed.
<div style={{ backgroundColor: 'var(--color-bg-primary)' }}>
<p style={{ color: 'var(--color-text-primary)' }}>
```
