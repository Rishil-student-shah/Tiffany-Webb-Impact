const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

// 1. Fix the Carousel Layout
// Make it scroll horizontally again but with flex-start so they align left, not center.
content = content.replace(
  'style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; width: 100%;"',
  'style="display: flex; gap: 2rem; width: max-content;"'
);

// We also need to remove the wrapper restriction if any, or just make sure the cards are grouped properly.
// The user said: "space is the goal from the website touching corner"
// They just want a gap. The container-narrow with 5vw padding provides that gap. 
// If it's max-content, it will scroll inside the padded container.

// 2. Inject the Button (Foolproof Regex replacement)
const footerRegex = /\{events\.length > 0 && \([\s\S]*?<div class="events-footer[\s\S]*?<\/div>[\s\S]*?\)\}/;

const newFooter = `{events.length > 0 && (
      <div class="events-footer reveal-up" style="transition-delay: 0.2s; display: flex; flex-direction: column; align-items: center; gap: 2rem; margin-top: 3rem;">
        <a href={btnLink} id="populated-book-btn" class="btn mt-4" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.95rem 2.2rem; background: var(--color-gold); color: var(--color-ink); border: 1.5px solid var(--color-gold); border-radius: 100px; font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: all 0.3s ease;">
          {btnText}
        </a>
        <a href="/impact" class="text-link" style="color: var(--color-ivory); font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; display: inline-flex; align-items: center; gap: 0.75rem;">
          See the full picture <span class="arrow">&rarr;</span>
        </a>
      </div>
    )}`;

content = content.replace(footerRegex, newFooter);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
