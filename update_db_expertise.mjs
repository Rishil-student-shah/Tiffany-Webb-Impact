import mysql from 'mysql2/promise';

async function updateExpertise() {
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@rishil8124shah',
    database: 'tiffany_crm'
  });

  const [pages] = await pool.query("SELECT id FROM website_pages WHERE slug = 'home' LIMIT 1");
  const homeId = pages[0]?.id || 1;

  // Clear existing expertise collections on home page
  await pool.query("DELETE FROM website_collections WHERE page_id = ? AND section_name = 'expertise'", [homeId]);

  // Insert 6 distinct format cards with dedicated SVG icons and distinct colors
  const formats = [
    {
      slug: 'keynote-speaking',
      title: 'Keynote Speaking',
      subtitle: 'Main Stage · 45–60 Minutes',
      badge: '01 // KEYNOTE',
      link: '/work-with-tiffany?format=Keynote+Speaking',
      desc: 'High-energy, narrative-driven keynote that deconstructs stigma, bridges lived understanding with clinical rigor, and inspires collective action across large audiences.',
      sort: 1,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line><line x1="8" y1="22" x2="16" y2="22"></line></svg>'
    },
    {
      slug: 'conference-breakout',
      title: 'Conference & Breakout Sessions',
      subtitle: 'Breakout & Deep Dive · 60–90 Minutes',
      badge: '02 // BREAKOUT',
      link: '/work-with-tiffany?format=Conference+%26+Breakout+Sessions',
      desc: 'Targeted educational breakout tailored to specific clinical tracks, prevention disciplines, or community health strategies with interactive Q&A.',
      sort: 2,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="14" x="3" y="3" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="m9 8 2 2 4-4"></path></svg>'
    },
    {
      slug: 'interactive-workshops',
      title: 'Interactive Workshops',
      subtitle: 'Hands-on Cohort · Half-Day to Full-Day',
      badge: '03 // WORKSHOP',
      link: '/work-with-tiffany?format=Interactive+Workshops',
      desc: 'Interactive, skills-focused workshop built for frontline workers, healthcare teams, and community leaders with scenario practice and screening tools.',
      sort: 3,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>'
    },
    {
      slug: 'professional-training',
      title: 'Professional Training',
      subtitle: 'Clinical & Frontline · Multi-Session',
      badge: '04 // TRAINING',
      link: '/work-with-tiffany?format=Professional+Training',
      desc: 'In-depth professional development for clinicians, counselors, and social workers covering evidence-based screening protocols (NODS-CLiP), motivational interviewing, and linkage to care.',
      sort: 4,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>'
    },
    {
      slug: 'school-university-youth',
      title: 'School, University & Youth Programs',
      subtitle: 'Campus-Wide · Half-Day / Full-Day',
      badge: '05 // YOUTH & CAMPUS',
      link: '/work-with-tiffany?format=School%2C+University+%26+Youth+Programs',
      desc: 'Two-part structured delivery: student-focused awareness session addressing sports-betting apps and digital gaming risk, followed by a faculty and counselor workshop.',
      sort: 5,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>'
    },
    {
      slug: 'panels-moderated-conversations',
      title: 'Panels & Moderated Conversations',
      subtitle: 'Panelist or Moderator · 45–75 Minutes',
      badge: '06 // DIALOGUE',
      link: '/work-with-tiffany?format=Panels+%26+Moderated+Conversations',
      desc: 'Dynamic panelist or skilled moderator bringing frontline specificity, health equity lens, and collaborative dialogue to complex behavioral health and civic issues.',
      sort: 6,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
    }
  ];

  for (const fmt of formats) {
    await pool.query(
      "INSERT INTO website_collections (page_id, section_name, item_slug, title, subtitle, badge, link_url, content_html, icon_svg, sort_order, is_active) VALUES (?, 'expertise', ?, ?, ?, ?, ?, ?, ?, ?, 1)",
      [homeId, fmt.slug, fmt.title, fmt.subtitle, fmt.badge, fmt.link, fmt.desc, fmt.icon, fmt.sort]
    );
  }

  console.log('✅ Database successfully updated with 6 distinct formats, distinct colors & logo icons');
  await pool.end();
}

updateExpertise().catch(e => console.error('Error updating expertise in DB:', e.message));
