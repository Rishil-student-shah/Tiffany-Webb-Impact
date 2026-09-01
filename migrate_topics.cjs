const fs = require('fs');

const servicesPath = 'D:\\FREELANCE\\TIFFANY WEB\\Landing Page Work\\tiffany-webb-astro\\src\\pages\\services.astro';
const topicsPath = 'D:\\FREELANCE\\TIFFANY WEB\\Landing Page Work\\tiffany-webb-astro\\src\\pages\\services\\speaking-topics.astro';

let servicesContent = fs.readFileSync(servicesPath, 'utf8');

const startMarker = '<!-- 4. The Tracks (No-JS Scannable Grid) -->';
const endMarker = '<!-- 5. Timeline -->';

const startIndex = servicesContent.indexOf(startMarker);
const endIndex = servicesContent.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find markers in services.astro');
  process.exit(1);
}

// 1. Extract the HTML block
let tracksHtml = servicesContent.substring(startIndex, endIndex);

// 2. Fix the third-person copy
tracksHtml = tracksHtml.replace(
  'Every topic below is one she actively delivers.',
  'Every topic below is one I actively deliver.'
);

// 3. Remove the block from services.astro
let newServicesContent = servicesContent.substring(0, startIndex) + servicesContent.substring(endIndex);
fs.writeFileSync(servicesPath, newServicesContent);
console.log('Removed tracks section from services.astro');

// 4. Extract the CSS block from services.astro
const styleStart = servicesContent.indexOf('<style>');
const styleEnd = servicesContent.lastIndexOf('</style>') + 8;
const styleBlock = servicesContent.substring(styleStart, styleEnd);

// 5. Build the new speaking-topics.astro
const newTopicsContent = `---
import Layout from '../../layouts/Layout.astro';
import Eyebrow from '../../components/Eyebrow.astro';
import Waveform from '../../components/Waveform.astro';
---

<Layout title="Speaking Topics | Tiffany Webb" theme="dark">
  <main class="page-content bg-ink" style="padding-top: 8rem;">
    
    ${tracksHtml}

  </main>
</Layout>

${styleBlock}
`;

fs.writeFileSync(topicsPath, newTopicsContent);
console.log('Created speaking-topics.astro with extracted content and styles');
