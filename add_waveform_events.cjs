const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

// Add import
content = content.replace(
  "import Eyebrow from './Eyebrow.astro';",
  "import Eyebrow from './Eyebrow.astro';\nimport Waveform from './Waveform.astro';"
);

// Add waveform to HTML
content = content.replace(
  '<div class="container relative z-10">',
  '<Waveform opacity={0.03} variant="B" flipY={true} />\n  <div class="container relative z-10">'
);

// Fix button classes
content = content.replace(
  'class="btn-primary mt-4"',
  'class="btn btn-outline-ivory mt-4"'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
