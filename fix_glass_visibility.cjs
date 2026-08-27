const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MeetTiffany.astro', 'utf8');

const oldCss = `  /* Text Glass Card */
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
  }`;

const newCss = `  /* Text Glass Card */
  .meet-glass-card {
    background: rgba(255, 255, 255, 0.04); /* Light frosted background so it pops */
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 24px;
    padding: var(--sp-12);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.2);
    position: relative;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease, border-color 0.6s ease;
    transform-style: preserve-3d;
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: transform, backdrop-filter;
  }
  
  .meet-glass-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 32px 70px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(217, 162, 58, 0.4); /* Subtle gold rim on hover */
  }`;

content = content.replace(oldCss, newCss);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MeetTiffany.astro', content, 'utf8');
