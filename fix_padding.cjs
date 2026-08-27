const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

const cssToReplace = `  /* Left Column */
  .works-title {
    font-size: clamp(3.5rem, 5.5vw, 5.5rem); 
    line-height: 1.05; 
    margin-bottom: 2.5rem;
    letter-spacing: -0.01em;
  }`;

const newCss = `  /* Left Column Spacing Fixes */
  .works-content {
    display: flex;
    flex-direction: column;
    padding-right: 2rem; /* Extra breathing room horizontally */
  }

  .works-content :global(.eyebrow) {
    margin-bottom: 2rem !important; /* Push headline down from eyebrow */
    font-size: 0.85rem;
    letter-spacing: 0.15em;
  }

  .works-title {
    font-size: clamp(3.5rem, 5.5vw, 5.5rem); 
    line-height: 1.05; 
    margin-bottom: 3rem; /* Push paragraph down from headline */
    letter-spacing: -0.01em;
  }`;

content = content.replace(cssToReplace, newCss);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
