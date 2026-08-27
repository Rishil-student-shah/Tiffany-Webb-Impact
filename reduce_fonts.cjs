const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

// Reduce left headline font size
content = content.replace(
  'font-size: clamp(3.5rem, 5.5vw, 5.5rem)',
  'font-size: clamp(2.5rem, 4vw, 4rem)'
);

// Reduce right column list title font size
content = content.replace(
  /font-size: 1\.8rem;/g,
  'font-size: 1.4rem;'
);

// Reduce right column padding slightly to match the smaller fonts better
content = content.replace(
  /padding: 2\.5rem 0;/g,
  'padding: 1.8rem 0;'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
