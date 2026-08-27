const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', 'utf8');

// Use container-narrow instead of container
content = content.replace(
  '<div class="container relative z-10">',
  '<div class="container-narrow relative z-10">'
);

// Reduce gaps and font sizes in the style block
content = content.replace(
  'gap: 2.5rem;',
  'gap: 1.5rem;'
);

content = content.replace(
  'padding: 2.5rem 2rem;',
  'padding: 1.5rem 1.5rem;'
);

content = content.replace(
  'font-size: 1.5rem;',
  'font-size: 1.25rem;'
);

// Add custom margin to ensure space even on smaller screens
content = content.replace(
  '<div class="attributes-grid reveal-up">',
  '<div class="attributes-grid reveal-up" style="margin: 0 4vw;">'
);


fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', content, 'utf8');
