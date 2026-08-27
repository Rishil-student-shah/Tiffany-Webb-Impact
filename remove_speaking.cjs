const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/pages/index.astro', 'utf8');

content = content.replace(
  "import SpeakingFormats from '../components/SpeakingFormats.astro';\n",
  ""
);

content = content.replace(
  "\t\t<SpeakingFormats content={dbContent.speaking_formats || {}} collections={dbCollections} />\n",
  ""
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/pages/index.astro', content, 'utf8');
