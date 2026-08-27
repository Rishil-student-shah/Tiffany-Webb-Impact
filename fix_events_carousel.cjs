const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

// 1. Force the massive padding on the main container so it never touches the edges
content = content.replace(
  '<div class="container relative z-10">',
  '<div class="container-narrow relative z-10" style="padding-left: 5vw; padding-right: 5vw; max-width: 1300px; margin: 0 auto;">'
);

// 2. Change the carousel to a centered, wrapping flex container so cards clump in the middle
content = content.replace(
  'class="events-carousel"',
  'class="events-carousel" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; width: 100%;"'
);

// 3. Remove the width constraints from CSS that forced horizontal scrolling
content = content.replace(
  'width: max-content;',
  '/* width: max-content; removed to allow wrapping */'
);

// 4. Extract btn text from CRM
content = content.replace(
  'const headline = content.headline || "Where the work has taken me.";',
  'const headline = content.headline || "Where the work has taken me.";\nconst btnText = content.btn_text || "BOOK TIFFANY";\nconst btnLink = content.btn_link || "/work-with-tiffany";'
);

// 5. Inject the button into the populated state footer (events-footer)
const oldFooter = `{events.length > 0 && (
      <div class="events-footer reveal-up" style="transition-delay: 0.2s;">
        <a href="/impact" class="text-link">See the full picture <span class="arrow">&rarr;</span></a>
      </div>
    )}`;

const newFooter = `{events.length > 0 && (
      <div class="events-footer reveal-up" style="transition-delay: 0.2s; display: flex; flex-direction: column; align-items: center; gap: 2rem; margin-top: 3rem;">
        <a href={btnLink} class="btn mt-4" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.95rem 2.2rem; background: var(--color-gold); color: var(--color-ink); border: 1.5px solid var(--color-gold); border-radius: 100px; font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: all 0.3s ease;">
          {btnText}
        </a>
        <a href="/impact" class="text-link" style="color: var(--color-ivory); font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; display: inline-flex; align-items: center; gap: 0.75rem;">
          See the full picture <span class="arrow">&rarr;</span>
        </a>
      </div>
    )}`;

content = content.replace(oldFooter, newFooter);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
