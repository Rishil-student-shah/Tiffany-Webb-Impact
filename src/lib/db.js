import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool = null;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '@rishil8124shah',
      database: process.env.DB_NAME || 'tiffany_crm',
      port: Number(process.env.DB_PORT) || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0
    });
  }
  return pool;
}

export async function query(sql, params = []) {
  try {
    const p = getPool();
    const [rows] = await p.query(sql, params);
    return rows;
  } catch (err) {
    console.warn(`[DB] Query failed for "${sql.slice(0, 40)}...":`, err.message);
    return null;
  }
}
