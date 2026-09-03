import mysql from 'mysql2/promise';

async function updateAudiences() {
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@rishil8124shah',
    database: 'tiffany_crm'
  });

  const p1Text = "Communities most affected by gambling harm can also be among the hardest for traditional prevention efforts to reach. Tiffany's work is built to help close that gap — with cultural fluency, frontline experience, creativity, and evidence-informed strategies that make prevention easier to understand, access, and act on.";
  
  // Update body_1
  await pool.query("UPDATE website_content SET content_value = ? WHERE section = 'who_can_benefit' AND key_name = 'body_1'", [p1Text]);

  // Find home page id
  const [pages] = await pool.query("SELECT id FROM website_pages WHERE slug = 'home' LIMIT 1");
  const homeId = pages[0]?.id || 1;

  // Clear existing who_can_benefit collections
  await pool.query("DELETE FROM website_collections WHERE page_id = ? AND section_name = 'who_can_benefit'", [homeId]);

  // Insert 10 authentic audience groups
  const audiences = [
    ['conferences-associations', 'Conferences & Professional Associations', 'Keynotes & Summits', '01 // CONFERENCES', '/work-with-tiffany?audience=Conferences', 'Keynotes, breakout sessions, and expert panels for national summits, annual conferences, and professional associations.', 1],
    ['schools-youth', 'Schools & Youth Organizations', 'Youth & Schools', '02 // YOUTH & SCHOOLS', '/work-with-tiffany?audience=Schools', 'Age-appropriate youth prevention, interactive workshops, and family engagement around digital risk and healthy choices.', 2],
    ['colleges-universities', 'Colleges & Universities', 'Higher Education', '03 // HIGHER ED', '/work-with-tiffany?audience=Colleges', 'Campus-wide wellness activations, athletic department sessions, student affairs programming, and Greek life dialogues.', 3],
    ['healthcare-hospitals', 'Healthcare & Hospital Systems', 'Clinical Networks', '04 // HEALTHCARE', '/work-with-tiffany?audience=Healthcare', 'Hospitals, primary care networks, clinical teams, and health systems integrating validated gambling screening protocols.', 4],
    ['government-public-health', 'Government & Public Health', 'Public Health', '05 // PUBLIC HEALTH', '/work-with-tiffany?audience=Government', 'Municipal health agencies, public health departments, county boards, and prevention policy task forces.', 5],
    ['behavioral-health', 'Behavioral Health Providers', 'Clinicians & Counselors', '06 // CLINICIANS', '/work-with-tiffany?audience=Behavioral+Health', 'Clinicians, addiction counselors, social workers, and mental health frontline teams managing co-occurring risks.', 6],
    ['recovery-networks', 'Recovery Networks', 'Peer Support & RCOs', '07 // RECOVERY', '/work-with-tiffany?audience=Recovery+Networks', 'Peer-support organizations, recovery community organizations (RCOs), and grassroots harm-reduction initiatives.', 7],
    ['rosc-coalitions', 'Community Coalitions & ROSC Councils', 'ROSC & Prevention', '08 // COALITIONS', '/work-with-tiffany?audience=ROSC+Councils', 'Recovery Oriented Systems of Care (ROSC) councils, prevention coalitions, and regional cross-sector partnerships.', 8],
    ['community-nonprofits', 'Community Organizations & Nonprofits', 'Nonprofits & Health Centers', '09 // NONPROFITS', '/work-with-tiffany?audience=Community+Nonprofits', 'Mission-driven neighborhood groups, civic organizations, and community health centers serving local families.', 9],
    ['faith-communities', 'Faith Communities', 'Churches & Ministries', '10 // FAITH', '/work-with-tiffany?audience=Faith+Communities', 'Churches, ministries, faith networks, and faith-based community outreach programs offering compassionate support.', 10]
  ];

  for (const aud of audiences) {
    await pool.query(
      "INSERT INTO website_collections (page_id, section_name, item_slug, title, subtitle, badge, link_url, content_html, sort_order, is_active) VALUES (?, 'who_can_benefit', ?, ?, ?, ?, ?, ?, ?, 1)",
      [homeId, aud[0], aud[1], aud[2], aud[3], aud[4], aud[5], aud[6]]
    );
  }

  console.log('✅ Database successfully updated with 10 authentic audience groups and Folder 0.6 text');
  await pool.end();
}

updateAudiences().catch(e => console.error('Error updating audiences in DB:', e.message));
