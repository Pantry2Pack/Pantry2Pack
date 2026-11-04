// Loads .env so process.env.DATABASE_URL is available
import 'dotenv/config';
import pg from 'pg';

// Shared connection pool: reuses connections instead of opening one per query
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

export default pool;