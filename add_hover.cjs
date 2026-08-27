const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', 'utf8');

const hoverCss = `
  /* Interactive Hover Effects */
  .audience-title {
    transition: color 0.25s ease, transform 0.25s ease;
  }
  
  .audience-item {
    transition: border-color 0.25s ease;
  }

  .audience-item:hover .audience-title {
    color: var(--color-gold);
    transform: translateX(4px);
  }
  
  .audience-item:hover .num-slash {
    color: var(--color-gold);
    opacity: 0.8;
  }
</style>`;

content = content.replace('</style>', hoverCss);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/WhereSheWorks.astro', content, 'utf8');
