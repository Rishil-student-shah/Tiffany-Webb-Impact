import mysql from 'mysql2/promise';

async function updateDb() {
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@rishil8124shah',
    database: 'tiffany_crm'
  });

  await pool.query("UPDATE website_content SET content_value = 'START A CONVERSATION' WHERE section = 'events' AND key_name = 'btn_text'");
  await pool.query("UPDATE website_content SET content_value = 'START A CONVERSATION' WHERE section = 'booking' AND key_name = 'eyebrow'");
  await pool.query("UPDATE website_content SET content_value = 'Start a Conversation →' WHERE section = 'hero' AND key_name = 'primary_cta_text'");
  
  console.log('✅ Database updated successfully to "Start a Conversation"');
  await pool.end();
}

updateDb().catch(e => {
  console.log('Database not accessible or error:', e.message);
});
