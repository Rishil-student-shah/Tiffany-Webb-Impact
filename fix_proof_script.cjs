const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', 'utf8');

// 1. Fix the mapping for author-role
const oldMappingRegex = /\{\(test\.subtitle \|\| test\.content_html\) && \([\s\S]*?<span class="author-role">Client<\/span>[\s\S]*?\)\}/;
const newMapping = `{test.subtitle && (
                      <span class="author-role">{test.subtitle}</span>
                    )}`;
content = content.replace(oldMappingRegex, newMapping);

// 2. Add Autoplay to the Script
// Find the end of the script and inject the setInterval logic
const targetScript = `
      nextBtn.addEventListener('click', () => {
        let newIndex = currentIndex + 1 >= totalSlides ? 0 : currentIndex + 1;
        updateSlider(newIndex);
      });
`;

const autoplayScript = `
      nextBtn.addEventListener('click', () => {
        let newIndex = currentIndex + 1 >= totalSlides ? 0 : currentIndex + 1;
        updateSlider(newIndex);
        resetAutoplay();
      });

      // Autoplay Logic
      let autoplayInterval;
      
      function startAutoplay() {
        autoplayInterval = setInterval(() => {
          let newIndex = currentIndex + 1 >= totalSlides ? 0 : currentIndex + 1;
          updateSlider(newIndex);
        }, 5000);
      }

      function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
      }

      startAutoplay();
`;

content = content.replace(targetScript, autoplayScript);

// Also reset autoplay on prevBtn
content = content.replace(
  `      prevBtn.addEventListener('click', () => {
        let newIndex = currentIndex - 1 < 0 ? totalSlides - 1 : currentIndex - 1;
        updateSlider(newIndex);
      });`,
  `      prevBtn.addEventListener('click', () => {
        let newIndex = currentIndex - 1 < 0 ? totalSlides - 1 : currentIndex - 1;
        updateSlider(newIndex);
        resetAutoplay();
      });`
);


fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', content, 'utf8');
