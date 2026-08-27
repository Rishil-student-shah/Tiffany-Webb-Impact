const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', 'utf8');

// There are three instances of submitBtn.innerHTML assignment. Let's just blindly replace the entire try/catch block if we have to, or just use string replace for the specific lines.
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('submitBtn.innerHTML =')) {
    if (lines[i].includes('content.btn_submit') || lines[i].includes('Processing')) {
      // Keep Processing
      if (lines[i].includes('Processing')) {
        continue;
      }
      lines[i] = '              submitBtn.innerHTML = "Submit Request &rarr;";';
    }
  }
}
content = lines.join('\n');

// Also, let's fix the button itself in the HTML which might STILL be broken!
const htmlRegex = /<button type="submit" class="submit-btn magnetic-btn">[\s\S]*?<\/button>/;
const goodHTML = `<button type="submit" class="submit-btn magnetic-btn">{content.btn_submit || "Submit Request &rarr;"}</button>`;
content = content.replace(htmlRegex, goodHTML);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', content, 'utf8');
