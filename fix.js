const fs = require('fs');
const file = 'D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MeetTiffany.astro';
let content = fs.readFileSync(file, 'utf8');

const replacement = // Fallbacks
const eyebrow = content.eyebrow || \"MEET TIFFANY\";
const title1 = content.title_line_1 || \"\";
const title2 = content.title_line_2 || \"Chicago Heart × Louisiana Soul\";
const p1 = content.paragraph_1 || \"I came to this work through behavioral health, but I stayed because I kept meeting families who had never been given language for what was happening to them.\";
const p2 = content.paragraph_2 || \"A father who couldn't explain where the money went. A student who thought a betting app was just a game. A wife who assumed she was the only one.\";
const p3 = content.paragraph_3 || \"Today, my work extends beyond prevention into how organizations reach people at all.\";
const btn = content.button_text || \"More about me →\";;

content = content.replace(/\/\/ Fallbacks[\s\S]*?(?=\n---)/, replacement);
fs.writeFileSync(file, content, 'utf8');
