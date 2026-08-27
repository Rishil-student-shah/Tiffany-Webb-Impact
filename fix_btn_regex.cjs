const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', 'utf8');

// Replace everything after submitBtn.innerHTML = ... until the semicolon
content = content.replace(/submitBtn\.innerHTML = '[^;]*';/g, 'submitBtn.innerHTML = "Submit Request &rarr;";');

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', content, 'utf8');
