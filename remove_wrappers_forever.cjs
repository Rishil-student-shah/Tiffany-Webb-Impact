const fs = require('fs');
let content = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

content = content.replace(/<div class="page-wrapper">\s*<div class="page-card">/, '');
content = content.replace(/<\/div>\s*<\/main>\s*<\/div>\s*<\/div>/, '</div>\n        </main>');

fs.writeFileSync('src/layouts/Layout.astro', content, 'utf8');
