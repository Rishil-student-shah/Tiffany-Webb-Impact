const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', 'utf8');

const oldCSS = `.slider-slide {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    visibility: hidden; 
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }

  .slider-slide.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 2;
    visibility: visible;
  }`;

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
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .slider-slide.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 2;
    visibility: visible;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }`;

content = content.replace(oldCSS, newCSS);

// Also wait, is the old CSS exactly like that? 
// Let's use a more robust replace by targeting just the class block
