const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

content = content.replace(
  'font-size: 1.125rem;',
  'font-size: 1.05rem;'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
