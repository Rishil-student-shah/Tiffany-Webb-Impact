---
import Layout from '../../layouts/Layout.astro';
import Eyebrow from '../../components/Eyebrow.astro';
import Waveform from '../../components/Waveform.astro';
import mysql from 'mysql2/promise';

let dbContent = {};
let dbCollections = {};
try {
  const pool = mysql.createPool({ host: 'localhost', user: 'root', password: '@rishil8124shah', database: 'tiffany_crm' });
  
  const [rows] = await pool.query("SELECT section, key_name, content_value FROM website_content JOIN website_pages ON website_content.page_id = website_pages.id WHERE website_pages.slug = 'speaking-topics'");
  rows.forEach(row => {
    if (!dbContent[row.section]) dbContent[row.section] = {};
    dbContent[row.section][row.key_name] = row.content_value;
  });

  const [colRows] = await pool.query("SELECT section_name, title, subtitle, content_html, sort_order FROM website_collections JOIN website_pages ON website_collections.page_id = website_pages.id WHERE website_pages.slug = 'speaking-topics' ORDER BY sort_order ASC");
  colRows.forEach(row => {
    if (!dbCollections[row.section_name]) dbCollections[row.section_name] = [];
    dbCollections[row.section_name].push(row);
  });

  await pool.end();
} catch (e) {
  console.error("DB Error in speaking-topics:", e);
}

const hero = dbContent.hero || {};
const tracks = dbContent.tracks || {};
const tracksList = dbCollections.tracks_list || [];
---

<Layout title="Speaking Topics | Tiffany Webb" theme="dark">
  <main class="page-content bg-ink" style="padding-top: 8rem;">
    
    <section class="spk-section relative overflow-hidden" id="topics">
      <Waveform opacity={0.04} variant="A" />
      <div class="spk-container relative z-10">
        
        <div class="spk-section-header text-center">
          {hero.eyebrow && <Eyebrow className="justify-center">{hero.eyebrow}</Eyebrow>}
          <h2 class="spk-h2" set:html={tracks.headline || 'Twenty topics. <br/><span class="italic-accent">Four tracks.</span>'}></h2>
          <p class="spk-subtitle" set:html={tracks.subtitle || 'Every topic below is one I actively deliver. Built for specific audiences and actionable outcomes.'}></p>
        </div>

        <div class="spk-tracks-grid">
          {tracksList.map(track => (
            <div class="spk-track-card">
              <div class="track-header">
                <h3 class="track-title">{track.title}</h3>
                <p class="track-subtitle">{track.subtitle}</p>
              </div>
              <div class="track-list" set:html={track.content_html}></div>
            </div>
          ))}
        </div>
      </div>
    </section>

  </main>
</Layout>
