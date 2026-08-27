const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

const target = `<div class="events-footer reveal-up" style="transition-delay: 0.2s;">
      <a href="/impact" class="text-link">See the full picture <span class="arrow">&rarr;</span></a>
    </div>`;

const newFooter = `<div class="events-footer reveal-up" style="transition-delay: 0.2s; display: flex; flex-direction: column; align-items: center; gap: 2rem; margin-top: 3rem;">
      <a href={btnLink} id="populated-book-btn" class="btn mt-4" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.95rem 2.2rem; background: var(--color-gold); color: var(--color-ink); border: 1.5px solid var(--color-gold); border-radius: 100px; font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: all 0.3s ease;">
        {btnText}
      </a>
      <a href="/impact" class="text-link" style="color: var(--color-ivory); font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; display: inline-flex; align-items: center; gap: 0.75rem;">
        See the full picture <span class="arrow">&rarr;</span>
      </a>
    </div>`;

content = content.replace(target, newFooter);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
