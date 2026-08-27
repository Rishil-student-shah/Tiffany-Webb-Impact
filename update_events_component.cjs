const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

const regex = /const btnLink = content\.btn_link \|\| "\/work-with-tiffany";/;
const newVars = `const btnLink = content.btn_link || "/work-with-tiffany";
const emptyText = content.empty_text || "Next dates announced soon.";
const emptyBtn = content.empty_btn || "Book Tiffany";
const linkText = content.link_text || "See the full picture";`;
content = content.replace(regex, newVars);

content = content.replace(/<p class="empty-text">Next dates announced soon\.<\/p>/, '<p class="empty-text">{emptyText}</p>');
content = content.replace(/>Book Tiffany<\/a>/, '>{emptyBtn}</a>');
content = content.replace(/See the full picture <span class="arrow">/, '{linkText} <span class="arrow">');

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
