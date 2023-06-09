import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: import.meta.env.POSTGRES_USER,
  host: import.meta.env.POSTGRES_HOST,
  port: import.meta.env.MY_POSTGRES_POSTGRESQL_PORT_5432_TCP_PORT,
  database: 'artporfolio',
  password: import.meta.env.POSTGRES_PASSWORD
})

export default pool;
