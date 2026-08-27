const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/pages/index.astro', 'utf8');

content = content.replace(
  "SELECT section_name, item_title as title, item_order as sort_order, subtitle, content_html, image_url, icon_svg",
  "SELECT section_name, title, sort_order, subtitle, content_html, image_url, icon_svg"
);

content = content.replace(
  "ORDER BY section_name, item_order ASC",
  "ORDER BY section_name, sort_order ASC"
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/pages/index.astro', content, 'utf8');
