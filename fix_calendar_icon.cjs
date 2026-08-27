const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', 'utf8');

// Inject the CSS directly into the date input to flip the calendar icon color
// I'll add a <style> block just before the </section> to ensure it targets the calendar icon.

content = content.replace(
  '</section>',
  `<style>
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
</section>`
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', content, 'utf8');
