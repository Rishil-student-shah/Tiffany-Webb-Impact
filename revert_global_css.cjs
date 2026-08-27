const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/styles/global.css', 'utf8');

const targetCSS = `
/* ==========================================
   FORCE CALENDAR ICON TO WHITE
   ========================================== */
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1) !important;
  opacity: 0.8 !important;
  cursor: pointer !important;
}
`;

content = content.replace(targetCSS, '');
fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/styles/global.css', content, 'utf8');
