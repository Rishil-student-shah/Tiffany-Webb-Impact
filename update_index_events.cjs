const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/pages/index.astro', 'utf8');

content = content.replace(
  "import Proof from '../components/Proof.astro';",
  "import EventsImpact from '../components/EventsImpact.astro';\nimport Proof from '../components/Proof.astro';"
);

content = content.replace(
  "<Proof content={dbContent.proof || {}} collections={dbCollections} />",
  "<EventsImpact content={dbContent.events || {}} collections={dbCollections} />\n\t\t<Proof content={dbContent.proof || {}} collections={dbCollections} />"
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/pages/index.astro', content, 'utf8');
