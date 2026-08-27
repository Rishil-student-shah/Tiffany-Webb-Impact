const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', 'utf8');

// Add gradient CSS to works-title
content = content.replace(
  'letter-spacing: -0.01em;',
  'letter-spacing: -0.01em;\n    background: linear-gradient(92deg, var(--color-gold), var(--color-coral));\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n    display: inline-block;'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', content, 'utf8');
