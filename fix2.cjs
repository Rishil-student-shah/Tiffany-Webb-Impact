const fs = require('fs');

const content = ---
import Waveform from './Waveform.astro';
import Eyebrow from './Eyebrow.astro';
import Button from './Button.astro';
import { Image } from 'astro:assets';
import aboutImg from '../assets/tiffany_about_new.jpg';

const { content = {} } = Astro.props;

// Fallbacks
const eyebrow = content.eyebrow || "MEET TIFFANY";
const title1 = content.title_line_1 || "";
const title2 = content.title_line_2 || "Chicago Heart \u00D7 Louisiana Soul";
const p1 = content.paragraph_1 || "I came to this work through behavioral health, but I stayed because I kept meeting families who had never been given language for what was happening to them.";
const p2 = content.paragraph_2 || "A father who couldn't explain where the money went. A student who thought a betting app was just a game. A wife who assumed she was the only one.";
const p3 = content.paragraph_3 || "Today, my work extends beyond prevention into how organizations reach people at all.";
const btn = content.button_text || "More about me \u2192";
---

<section class="meet-tiffany theme-ink reveal-up">
  <Waveform opacity={0.06} flipX={true} variant="B" />
  <div class="meet-container">
    <div class="meet-grid">
      <div class="meet-content">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 class="section-title meet-title">
          {title1} <span class="italic-accent">{title2}</span>
        </h2>
        
        <div class="meet-prose">
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>
        
        <div class="meet-cta">
          <Button href="/about" variant="secondary" className="magnetic-btn">{btn}</Button>
        </div>
      </div>
      
      <div class="meet-image-col">
        <div class="meet-image-glass-offset"></div>
        <div class="meet-image-wrap">
          {content.image ? (
            <img src={content.image} alt="Tiffany Webb editorial portrait" class="meet-img" />
          ) : (
            <Image src={aboutImg} alt="Tiffany Webb editorial portrait" class="meet-img" />
          )}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .meet-tiffany {
    padding: var(--sp-24) 0;
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .meet-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--sp-6);
  }

  .meet-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--sp-12);
    align-items: center;
  }

  @media (min-width: 1024px) {
    .meet-grid {
      grid-template-columns: 1.1fr 0.9fr;
      gap: var(--sp-16);
    }
  }
  
  .meet-title {
    font-size: clamp(3rem, 5vw, 4.5rem); 
    line-height: 1.1; 
    margin-bottom: var(--sp-8);
  }

  .meet-prose {
    margin-bottom: var(--sp-8);
    display: flex;
    flex-direction: column;
    gap: var(--sp-4);
  }
  
  .meet-prose p {
    font-size: 1.15rem;
    color: #e7e0cf;
    font-weight: 400;
    line-height: 1.66;
    max-width: 52ch;
  }
  
  .meet-cta {
    margin-top: var(--sp-8);
  }

  /* Soft-cornered arch frame */
  .meet-image-col {
    position: relative;
    padding: 20px; 
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
  }
  
  .meet-image-wrap {
    width: 100%;
    max-width: 440px;
    aspect-ratio: 3.5/5;
    border-radius: 300px 300px 16px 16px; /* Arch frame */
    overflow: hidden;
    position: relative;
    border: 1px solid var(--color-gold);
    z-index: 2;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .meet-image-glass-offset {
    position: absolute;
    top: 40px;
    left: calc(50% - 200px); 
    width: 100%;
    max-width: 440px;
    aspect-ratio: 3.5/5;
    background: rgba(20, 18, 14, 0.3);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 300px 300px 16px 16px; /* Echoes the arch */
    z-index: 1;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.8s ease;
  }

  @media (min-width: 1024px) {
    .meet-image-glass-offset {
      left: 10%; 
    }
  }

  .meet-image-col:hover .meet-image-wrap {
    transform: translate(-15px, -15px) rotate(-1.5deg);
  }
  
  .meet-image-col:hover .meet-image-glass-offset {
    transform: translate(15px, 15px) rotate(2deg);
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  }
  
  .meet-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
  }
  
  .meet-image-col:hover .meet-img {
    transform: scale(1.08);
  }
</style>
;
fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MeetTiffany.astro', content, 'utf8');
