const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

// Replace the grid CSS to create a massive gap in the middle and better proportions
const oldGridCss = `    @media (min-width: 1024px) {
      .works-grid {
        grid-template-columns: 0.9fr 1.1fr;
        gap: 6rem;
        align-items: center; /* Vertically centers the left text with the right list */
      }
    }`;

const newGridCss = `    @media (min-width: 1024px) {
      .works-grid {
        grid-template-columns: 0.75fr 1.25fr;
        gap: 8vw; /* Massive gap between left and right hands */
        align-items: center;
      }
    }`;

content = content.replace(oldGridCss, newGridCss);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
