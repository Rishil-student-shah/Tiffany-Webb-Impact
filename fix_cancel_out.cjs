const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/styles/global.css', 'utf8');

// Remove color-scheme just in case they cancel each other out
content = content.replace(
  'input[type="date"] {\n  color-scheme: dark !important;\n}',
  ''
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/styles/global.css', content, 'utf8');
