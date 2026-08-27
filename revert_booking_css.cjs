const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', 'utf8');

const targetCSS = `<style>
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    opacity: 0.7;
    cursor: pointer;
  }
  input[type="date"]::-webkit-calendar-picker-indicator:hover {
    opacity: 1;
  }
  input[type="date"] {
    color-scheme: dark;
  }
</style>
`;

content = content.replace(targetCSS, '');
fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', content, 'utf8');
