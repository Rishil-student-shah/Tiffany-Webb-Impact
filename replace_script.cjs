const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', 'utf8');

const oldScriptRegex = /<script>[\s\S]*?<\/script>/;

const newScript = `<script>
    document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.slider-slide');
      const nextBtn = document.querySelector('.next-btn');
      const prevBtn = document.querySelector('.prev-btn');
      const progressBar = document.querySelector('.progress-bar');
      
      if(!slides.length || !nextBtn || !prevBtn) return;

      let currentIndex = 0;
      const totalSlides = slides.length;

      function updateSlider(newIndex) {
        if(newIndex === currentIndex) return;
        
        slides[currentIndex].classList.remove('active');
        slides[newIndex].classList.add('active');
        
        currentIndex = newIndex;
        updateProgress();
      }
      
      function updateProgress() {
        const percentage = ((currentIndex + 1) / totalSlides) * 100;
        if(progressBar) {
          progressBar.style.width = \`\${percentage}%\`;
        }
      }

      function goNext() {
        const newIndex = (currentIndex + 1) % totalSlides;
        updateSlider(newIndex);
      }

      function goPrev() {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider(newIndex);
      }

      // Autoplay Logic
      let autoplayInterval;
      
      function startAutoplay() {
        autoplayInterval = setInterval(goNext, 6000);
      }

      function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
      }

      nextBtn.addEventListener('click', () => {
        goNext();
        resetAutoplay();
      });

      prevBtn.addEventListener('click', () => {
        goPrev();
        resetAutoplay();
      });
      
      updateProgress();
      startAutoplay();
    });
  </script>`;

content = content.replace(oldScriptRegex, newScript);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', content, 'utf8');
