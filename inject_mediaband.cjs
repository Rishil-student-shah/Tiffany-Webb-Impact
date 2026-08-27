const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/pages/index.astro', 'utf8');

content = content.replace(
  "<EventsImpact content={dbContent.events || {}} collections={dbCollections} />",
  "<MediaBand content={dbContent.media || {}} />\n\t\t<EventsImpact content={dbContent.events || {}} collections={dbCollections} />"
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/pages/index.astro', content, 'utf8');
