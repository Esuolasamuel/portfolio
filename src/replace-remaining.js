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
  // Radiuses
  [/rounded-\[var\(--radius-full\)\]/g, 'rounded-full'],
  [/rounded-\[var\(--radius-card\)\]/g, 'rounded-2xl'],
  [/rounded-\[var\(--radius-2xl\)\]/g, 'rounded-2xl'],
  [/rounded-\[var\(--radius-lg\)\]/g, 'rounded-lg'],
  [/rounded-\[var\(--radius-badge\)\]/g, 'rounded-full'],
  
  // Margins
  [/-mx-\[var\(--space-container-x\)\]/g, '-mx-6'],
  [/-mx-\[var\(--space-container-x-md\)\]/g, '-mx-10'],
  [/-mx-\[var\(--space-container-x-lg\)\]/g, '-mx-16'],

  // Layout calculations
  [/pt-\[var\(--layout-nav-height\)\]/g, 'pt-[72px]'],
  [/pt-\[calc\(var\(--layout-nav-height\)\+var\(--space-section-y\)\)\]/g, 'pt-[168px]'], // 72 + 96 = 168

  // Background and Hover variables
  [/bg-\[var\(--color-text-primary\)\]/g, 'bg-white'],
  [/hover:bg-\[var\(--color-text-secondary\)\]/g, 'hover:bg-white/60'],
  [/from-\[var\(--color-bg-primary\)\]/g, 'from-primary'],
  [/hover:border-\[var\(--color-accent-primary\)\]/g, 'hover:border-accent'],
  
  // Also found pb-[var(--space-section-y)]
  [/pb-\[var\(--space-section-y\)\]/g, 'pb-24']
];

walkDir('c:\\dev\\src', (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  replacements.forEach(([regex, replaceValue]) => {
    content = content.replace(regex, replaceValue);
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
});
