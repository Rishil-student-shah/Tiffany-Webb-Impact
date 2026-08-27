const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

// Inline works-title
content = content.replace(
  '<h2 class="section-title works-title" set:html={formattedHeadline}></h2>',
  '<h2 class="section-title works-title" style="font-size: clamp(2.2rem, 3.5vw, 3.5rem); line-height: 1.1; margin-bottom: 2rem; letter-spacing: -0.01em;" set:html={formattedHeadline}></h2>'
);

// Inline audience-title
content = content.replace(
  '<div class="audience-title">{aud.title}</div>',
  '<div class="audience-title" style="font-size: 1.35rem; font-family: var(--font-serif); line-height: 1.25;">{aud.title}</div>'
);

// Inline audience-item
content = content.replace(
  '<div class="audience-item">',
  '<div class="audience-item" style="padding: 1.75rem 0;">'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
