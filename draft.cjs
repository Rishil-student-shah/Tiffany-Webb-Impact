const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

const oldCss = `  .audience-title {
    color: var(--color-ivory);
    font-size: 1.35rem;
    font-family: var(--font-serif);
    line-height: 1.25;
    font-weight: 400;
  }`;

const newCss = `  .audience-title {
    color: var(--color-ivory);
    font-size: 1.35rem;
    font-family: var(--font-serif);
    line-height: 1.25;
    font-weight: 400;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  
  .audience-item:hover .audience-title {
    color: var(--color-gold);
  }
  
  /* Also softly highlight the number slash on hover */
  .num-slash {
    color: rgba(217, 162, 58, 0.4);
    font-size: 0.65rem;
    transition: color 0.3s ease;
  }
  
  .audience-item:hover .num-slash {
    color: var(--color-gold);
  }
  
  /* Make the item feel interactive */
  .audience-item {
    cursor: default;
    transition: background-color 0.3s ease;
  }`;

content = content.replace(oldCss, newCss);

// Wait, I need to make sure I don't break the existing .num-slash and .audience-item rules.
// It's safer to just append the hover rules to the very end of the <style> block!
