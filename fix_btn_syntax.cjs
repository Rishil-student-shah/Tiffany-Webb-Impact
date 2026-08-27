const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', 'utf8');

// Fix button HTML
const badHTML = `<button type="submit" class="submit-btn magnetic-btn">{content.btn_submit || "Submit Request +'"} &rarr;</button>`;
const goodHTML = `<button type="submit" class="submit-btn magnetic-btn">{content.btn_submit || "Submit Request &rarr;"}</button>`;
content = content.replace(badHTML, goodHTML);

// Fix JS script occurrences
const badJS1 = `submitBtn.innerHTML = '{content.btn_submit || "Submit Request +'"} &rarr;';`;
const goodJS1 = 'submitBtn.innerHTML = "Submit Request &rarr;";'; // In JS, just revert to default string or hardcode since it's client-side reset
content = content.replace(badJS1, goodJS1);
content = content.replace(badJS1, goodJS1); // two occurrences usually

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', content, 'utf8');
