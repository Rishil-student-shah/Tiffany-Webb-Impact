const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MeetTiffany.astro', 'utf8');

// Add class to meet-content
content = content.replace('<div class="meet-content">', '<div class="meet-content meet-glass-card">');

// Add CSS for glass card before .meet-title
const cssToAdd = `
  /* Text Glass Card */
  .meet-glass-card {
    background: rgba(20, 18, 14, 0.45);
    backdrop-filter: blur(16px) saturate(120%);
    -webkit-backdrop-filter: blur(16px) saturate(120%);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: var(--sp-12);
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
    position: relative;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease;
    transform-style: preserve-3d;
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: transform, backdrop-filter;
  }
  
  .meet-glass-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2);
    border: 1px solid rgba(255,255,255,0.2);
  }
`;

content = content.replace('  .meet-title {', cssToAdd + '\n  .meet-title {');

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MeetTiffany.astro', content, 'utf8');
