const fs = require('fs');
let content = fs.readFileSync('src/components/Nav.astro', 'utf8');

content = content.replace('background-color: var(--color-ink);', 'background: transparent;');
content = content.replace('box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);', '');

fs.writeFileSync('src/components/Nav.astro', content, 'utf8');
