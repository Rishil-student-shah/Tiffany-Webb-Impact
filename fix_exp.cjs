const fs = require('fs');
let code = fs.readFileSync('D:\\FREELANCE\\TIFFANY WEB\\Landing Page Work\\tiffany-webb-astro\\src\\components\\Expertise.astro', 'utf8');
code = code.replace(/href="\/speaking"/g, 'href="/services/speaking-topics"');
fs.writeFileSync('D:\\FREELANCE\\TIFFANY WEB\\Landing Page Work\\tiffany-webb-astro\\src\\components\\Expertise.astro', code);
console.log('Fixed expertise link');
