const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MediaBand.astro', 'utf8');

// Replace link2 definition
content = content.replace(
  'const link2 = content.link_2 || "Media resources &rarr;";',
  'const link2 = content.link_2 || "Media resources";'
);

// Replace HTML rendering
content = content.replace(
  '<a href="/media" class="media-text-link" set:html={link2}></a>',
  '<a href="/media" class="media-text-link" style="display: inline-block;">{link2} <span class="arrow">&rarr;</span></a>'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MediaBand.astro', content, 'utf8');
