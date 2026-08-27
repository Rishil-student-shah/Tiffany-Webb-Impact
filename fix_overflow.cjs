const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

// Reduce the massive middle gap to something more responsive so it doesn't break the container on laptops
content = content.replace(
  'gap: 8vw; /* Massive gap between left and right hands */',
  'gap: 5vw;'
);

// Reduce the column gap in the right list
content = content.replace(
  'column-gap: 4rem;',
  'column-gap: 2rem;'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
