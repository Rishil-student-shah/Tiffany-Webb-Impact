const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

// Use inline styles for the eyebrow wrapper to guarantee padding bypasses cache
content = content.replace(
  '<Eyebrow>{eyebrow}</Eyebrow>',
  '<div style="margin-bottom: 2rem;"><Eyebrow>{eyebrow}</Eyebrow></div>'
);

// Use inline styles for the works-title to guarantee font size and margin bypasses cache
content = content.replace(
  '<h2 class="section-title works-title" set:html={formattedHeadline}></h2>',
  '<h2 class="section-title" style="font-size: clamp(3.5rem, 5.5vw, 5.5rem); line-height: 1.05; margin-bottom: 3rem; letter-spacing: -0.01em;" set:html={formattedHeadline}></h2>'
);

// Remove the now-redundant CSS
content = content.replace(
  /  \.works-content :global\(\.eyebrow\) \{[\s\S]*?\}\n/,
  ''
);
content = content.replace(
  /  \.works-title \{[\s\S]*?\}\n/,
  ''
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
