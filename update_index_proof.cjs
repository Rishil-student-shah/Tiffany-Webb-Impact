const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/pages/index.astro', 'utf8');

content = content.replace(
  "import BookingSection from '../components/BookingSection.astro';",
  "import BookingSection from '../components/BookingSection.astro';\nimport Proof from '../components/Proof.astro';"
);

content = content.replace(
  "<BookingSection content={dbContent.booking || {}} />",
  "<Proof content={dbContent.proof || {}} collections={dbCollections} />\n\t\t<BookingSection content={dbContent.booking || {}} />"
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/pages/index.astro', content, 'utf8');
