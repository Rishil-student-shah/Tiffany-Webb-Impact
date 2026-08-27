const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

content = content.replace(
  "const formattedHeadline = headline.replace(\"rethink what's possible.\", `<br/><span class=\"italic-accent\">rethink what's possible.</span>`);",
  "const formattedHeadline = \"For leaders ready<br/>to <span class=\\\"italic-accent\\\">rethink what's</span><br/><span class=\\\"italic-accent\\\">possible.</span>\";"
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
