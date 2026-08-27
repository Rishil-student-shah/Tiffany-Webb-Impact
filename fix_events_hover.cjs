const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

// 1. Revert the empty state HTML to pull the footer link back OUTSIDE the dashed box,
// and revert the button back to using classes (plus an ID for targeted styling)
const oldEmptyStateBlock = `<div style="display: flex; gap: 2rem; align-items: center; margin-top: 1.5rem;">
          <a href="/work-with-tiffany" class="btn-outline-ivory" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.95rem 2.2rem; background: transparent; color: var(--color-ivory); border: 1.5px solid rgba(251, 246, 234, 0.45); border-radius: 100px; font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: all 0.3s;">
            Work with Tiffany
          </a>
          <a href="/impact" class="text-link" style="color: var(--color-ivory); font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; display: inline-flex; align-items: center; gap: 0.75rem;">
            See the full picture <span class="arrow">&rarr;</span>
          </a>
        </div>`;

const newEmptyStateBlock = `<a href="/work-with-tiffany" class="btn btn-outline-ivory mt-4" id="empty-state-btn">Work with Tiffany</a>`;

content = content.replace(oldEmptyStateBlock, newEmptyStateBlock);

// 2. Put the footer link back below the entire component unconditionally
const oldFooterCondition = `{events.length > 0 && (
      <div class="events-footer reveal-up" style="transition-delay: 0.2s;">
        <a href="/impact" class="text-link">See the full picture <span class="arrow">&rarr;</span></a>
      </div>
    )}`;

const newFooterUnconditional = `<div class="events-footer reveal-up" style="transition-delay: 0.2s;">
      <a href="/impact" class="text-link">See the full picture <span class="arrow">&rarr;</span></a>
    </div>`;

content = content.replace(oldFooterCondition, newFooterUnconditional);

// 3. Inject highly specific CSS for the button into the <style> block to guarantee hover works
const styleInjection = `
  /* Hardcoded specific button style to guarantee hover effect bypassing cache */
  #empty-state-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.95rem 2.2rem;
    background: transparent;
    color: var(--color-ivory) !important;
    border: 1.5px solid rgba(251, 246, 234, 0.45);
    border-radius: 100px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease;
    margin-top: 1.5rem;
  }
  
  #empty-state-btn:hover {
    background: rgba(251, 246, 234, 0.14);
    border-color: var(--color-ivory);
    transform: translateY(-3px);
  }
`;

content = content.replace('</style>', styleInjection + '\n</style>');

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
