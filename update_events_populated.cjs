const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

// 1. Change button text from "Work with Tiffany" to "Book Tiffany" and make it a SOLID GOLD button
content = content.replace(
  'Work with Tiffany',
  'Book Tiffany'
);

content = content.replace(
  'background: transparent; color: var(--color-ivory) !important; border: 1.5px solid rgba(251, 246, 234, 0.45);',
  'background: var(--color-gold) !important; color: var(--color-ink) !important; border: 1.5px solid var(--color-gold); font-weight: 600;'
);
content = content.replace(
  'background: rgba(251, 246, 234, 0.14); border-color: var(--color-ivory);',
  'background: #E5C354 !important; border-color: #E5C354; transform: translateY(-3px);'
);


// 2. Fix the DB mapping for the Carousel populated state so it uses standard DB columns
content = content.replace(
  'const status = evt.tag || "Upcoming";',
  'const status = evt.icon_svg || "Upcoming";'
);
content = content.replace(
  'const audience = evt.stat_number || "500+";',
  'const audience = evt.image_url || "500+";'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
