const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MediaBand.astro', 'utf8');

// Replace container with container-narrow to fix the full-width edge touching
content = content.replace(
  '<div class="container relative z-10 h-full">',
  '<div class="container-narrow relative z-10 h-full">'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MediaBand.astro', content, 'utf8');
