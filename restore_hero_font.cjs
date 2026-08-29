const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.astro', 'utf8');

content = content.replace(/font-size: clamp\(3\.5rem, 6vw, 5\.5rem\);/, 'font-size: clamp(3.5rem, 8vw, 6.5rem);');
content = content.replace(/line-height: 1\.1;/, 'line-height: 0.98;');

fs.writeFileSync('src/components/Hero.astro', content, 'utf8');
