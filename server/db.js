import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  port: process.env.MY_POSTGRES_POSTGRESQL_PORT_5432_TCP_PORT,
  database: 'artporfolio',
  password: process.env.POSTGRES_PASSWORD
})

export default pool;
