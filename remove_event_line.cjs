const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

content = content.replace(
  'border-top: 1px solid rgba(255, 255, 255, 0.1);',
  '/* border-top: 1px solid rgba(255, 255, 255, 0.1); removed per user request */'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
