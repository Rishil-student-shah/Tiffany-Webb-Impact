const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', 'utf8');

const regex = /\.slider-slide\s*\{[\s\S]*?\}\s*\.slider-slide\.active\s*\{[\s\S]*?\}/;

const newCSS = `.slider-slide {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      z-index: 1;
      visibility: hidden; 
      transform: translateY(20px) scale(0.98);
      filter: blur(8px);
      transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
  
    .slider-slide.active {
      opacity: 1;
      pointer-events: auto;
      z-index: 2;
      visibility: visible;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }`;

content = content.replace(regex, newCSS);
fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', content, 'utf8');
