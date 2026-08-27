import mysql from 'mysql2/promise';

export const onRequest = async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  
  // Skip internal paths and assets
  if (pathname.startsWith('/_') || pathname.startsWith('/api') || pathname.startsWith('/cms') || pathname.match(/\.(png|jpg|jpeg|svg|css|js|ico|woff|woff2|ttf)$/)) {
    return next();
  }

  // Get slug
  let slug = pathname.replace(/^\//, '').replace(/\/$/, '');
  if (slug === '') slug = 'home';
  
  // If it's the 404 page itself, let it through
  if (slug === '404') return next();

  let pageIsActive = true;

  try {
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '@rishil8124shah',
      database: 'tiffany_crm',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
    
    const [rows] = await pool.query('SELECT is_active FROM website_pages WHERE slug = ?', [slug]);
    await pool.end();
    
    if (rows.length > 0) {
      pageIsActive = rows[0].is_active === 1;
    }
  } catch (e) {
    console.error('Middleware DB Error:', e);
  }

  if (!pageIsActive) {
    return context.redirect('/404');
  }

  return next();
};
