const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', 'utf8');

// Give the button an ID
content = content.replace(
  'class="btn mt-4"',
  'id="populated-book-btn" class="btn mt-4"'
);

// Add the hover CSS directly to the style block
content = content.replace(
  '</style>',
  `
  #populated-book-btn:hover {
    background: #E5C354 !important;
    border-color: #E5C354 !important;
    transform: translateY(-3px);
  }
</style>`
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/EventsImpact.astro', content, 'utf8');
