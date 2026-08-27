const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

const oldEmptyState = `{events.length === 0 ? (
      /* EMPTY STATE */
      <div class="events-empty-state reveal-up">
        <p class="empty-text">Next dates announced soon.</p>
        <a href="/work-with-tiffany" class="btn btn-outline-ivory mt-4">Work with Tiffany</a>
      </div>
    ) : (`;

const newEmptyState = `{events.length === 0 ? (
      /* EMPTY STATE */
      <div class="events-empty-state reveal-up">
        <p class="empty-text">Next dates announced soon.</p>
        <div style="display: flex; gap: 2rem; align-items: center; margin-top: 1.5rem;">
          <a href="/work-with-tiffany" class="btn-outline-ivory" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.95rem 2.2rem; background: transparent; color: var(--color-ivory); border: 1.5px solid rgba(251, 246, 234, 0.45); border-radius: 100px; font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: all 0.3s;">
            Work with Tiffany
          </a>
          <a href="/impact" class="text-link" style="color: var(--color-ivory); font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; display: inline-flex; align-items: center; gap: 0.75rem;">
            See the full picture <span class="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    ) : (`;

content = content.replace(oldEmptyState, newEmptyState);

// Remove the standalone footer if we are in empty state, but keep it for populated state
const oldFooter = `<div class="events-footer reveal-up" style="transition-delay: 0.2s;">
      <a href="/impact" class="text-link">See the full picture <span class="arrow">&rarr;</span></a>
    </div>`;

const newFooter = `{events.length > 0 && (
      <div class="events-footer reveal-up" style="transition-delay: 0.2s;">
        <a href="/impact" class="text-link">See the full picture <span class="arrow">&rarr;</span></a>
      </div>
    )}`;

content = content.replace(oldFooter, newFooter);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
