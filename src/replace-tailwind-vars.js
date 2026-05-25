const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = [
  // Colors
  [/bg-\[var\(--color-bg-primary\)\]/g, 'bg-primary'],
  [/bg-\[var\(--color-bg-secondary\)\]/g, 'bg-secondary'],
  [/bg-\[var\(--color-bg-card\)\]/g, 'bg-card'],
  [/bg-\[var\(--color-accent-primary\)\]/g, 'bg-accent'],
  
  [/text-\[var\(--color-text-primary\)\]/g, 'text-white'],
  [/text-\[var\(--color-text-secondary\)\]/g, 'text-white/60'],
  [/text-\[var\(--color-text-muted\)\]/g, 'text-white/40'],
  [/text-\[var\(--color-text-inverse\)\]/g, 'text-primary'],
  [/text-\[var\(--color-accent-primary\)\]/g, 'text-accent'],
  [/text-\[var\(--color-bg-primary\)\]/g, 'text-primary'], // e.g. Let's Work Together button

  [/border-\[var\(--color-border-subtle\)\]/g, 'border-white/10'],
  [/border-\[var\(--color-border-default\)\]/g, 'border-[#222]'],
  [/hover:bg-\[var\(--color-interactive-hover\)\]/g, 'hover:bg-white/10'],
  [/hover:text-\[var\(--color-text-primary\)\]/g, 'hover:text-white'],

  // Layout max width
  [/max-w-\[var\(--layout-container-max\)\]/g, 'max-w-[1440px]'],
  [/max-w-\[var\(--space-container-max\)\]/g, 'max-w-[1440px]'],

  // Specific spacing
  [/px-\[var\(--space-container-x\)\]/g, 'px-6'],
  [/px-\[var\(--space-container-x-md\)\]/g, 'px-10'],
  [/px-\[var\(--space-container-x-lg\)\]/g, 'px-16'],
  
  [/p-\[var\(--space-container-x\)\]/g, 'p-6'],
  [/p-\[var\(--space-container-x-md\)\]/g, 'p-10'],
  [/p-\[var\(--space-container-x-lg\)\]/g, 'p-16'],

  [/py-\[var\(--space-section-y\)\]/g, 'py-24'],
  [/py-\[var\(--space-section-y-lg\)\]/g, 'py-32'],
  [/py-\[var\(--space-section-y-hero\)\]/g, 'py-40'],
  
  // Custom calc
  [/pt-\[calc\(var\(--layout-nav-height-mobile\)\+var\(--space-6\)\)\]/g, 'pt-22'],
  [/pt-\[calc\(var\(--layout-nav-height\)\+var\(--space-section-y-hero\)\)\]/g, 'pt-[232px]'],

  // Durations & Easing
  [/duration-\[var\(--duration-fast\)\]/g, 'duration-fast'],
  [/duration-\[var\(--duration-base\)\]/g, 'duration-base'],
  [/duration-\[var\(--duration-slow\)\]/g, 'duration-slow'],
  [/ease-\[var\(--ease-out-expo\)\]/g, 'ease-out-expo'],
  
  // Z-index
  [/z-\[var\(--z-sticky\)\]/g, 'z-sticky'],
  [/z-\[var\(--z-preloader\)\]/g, 'z-preloader'],
  [/z-\[calc\(var\(--z-sticky\)-1\)\]/g, 'z-[199]']
];

walkDir('c:\\dev\\src', (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  replacements.forEach(([regex, replaceValue]) => {
    content = content.replace(regex, replaceValue);
  });

  // Generic Spacing e.g. [var(--space-8)] -> 8
  content = content.replace(/\[var\(--space-(\d+(?:-\d+)?)\)\]/g, (match, p1) => {
    return p1.replace('-', '.');
  });

  // Handle typo like gap-(--space-8)
  content = content.replace(/\(-\-space-(\d+(?:-\d+)?)\)/g, (match, p1) => {
    return p1.replace('-', '.');
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
});
