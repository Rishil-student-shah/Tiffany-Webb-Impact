const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MediaBand.astro', 'utf8');

// Inject the specific button css
const newCss = `
  .media-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    padding: 0.85rem 1.8rem;
    white-space: nowrap;
    background: transparent;
    color: var(--color-ivory) !important;
    border: 1.5px solid rgba(251, 246, 234, 0.45);
    border-radius: 100px;
    font-family: var(--font-mono);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .media-btn:hover {
    background: rgba(251, 246, 234, 0.14);
    border-color: var(--color-ivory);
    transform: translateY(-3px);
  }
`;

content = content.replace(
  `  .media-btn {
    font-size: 0.8rem;
    padding: 0.85rem 1.8rem;
    white-space: nowrap;
  }`,
  newCss
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MediaBand.astro', content, 'utf8');
