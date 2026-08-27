const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

// Reduce massive gaps
content = content.replace('margin-bottom: 4rem;', 'margin-bottom: 1rem;');
content = content.replace('margin-top: 3rem;', 'margin-top: 1rem;');
content = content.replace('padding-top: 3rem;', '');

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
