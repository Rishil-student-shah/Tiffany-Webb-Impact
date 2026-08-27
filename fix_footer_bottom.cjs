const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Footer.astro', 'utf8');

const oldBottomRule = `<div class="bottom-rule">
      <span>&copy; {year} Tiffany Webb</span>
      <div style="display: flex; gap: 1rem;">
        <a href="/privacy" class="footer-link">Privacy Policy</a>
        <span>&middot;</span>
        <a href="/terms" class="footer-link">Terms of Use</a>
      </div>
    </div>`;

const newBottomRule = `<div style="margin-top: 3rem; padding-bottom: 2rem; display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-family: var(--font-sans); font-size: 0.85rem; color: rgba(255,255,255,0.45); width: 100%; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
      <span>&copy; {year} Tiffany Webb</span>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <a href="/privacy" style="color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.3s ease;">Privacy Policy</a>
        <span>&middot;</span>
        <a href="/terms" style="color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.3s ease;">Terms of Use</a>
      </div>
    </div>`;

content = content.replace(oldBottomRule, newBottomRule);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Footer.astro', content, 'utf8');
