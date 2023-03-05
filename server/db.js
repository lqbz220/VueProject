import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'artporfolio',
  host: 'localhost',
  port: 5432,
  database: 'artporfolio'
})

export default pool;
