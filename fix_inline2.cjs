const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

// Inline audience-title
content = content.replace(
  '<div class="audience-title">{aud.title}</div>',
  '<div class="audience-title" style="font-size: 1.8rem; font-family: var(--font-serif); line-height: 1.25;">{aud.title}</div>'
);

// Inline audience-item padding
content = content.replace(
  '<div class="audience-item">',
  '<div class="audience-item" style="padding: 2.5rem 0;">'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
