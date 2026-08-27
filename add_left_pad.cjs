const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

// Inject left padding into works-content
content = content.replace(
  '<div class="works-content reveal-up">',
  '<div class="works-content reveal-up" style="padding-left: 5vw; padding-right: 2rem;">'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
