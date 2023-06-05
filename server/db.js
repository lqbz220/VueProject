import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: 'new-postgres-postgresql.default.svc.cluster.local',
  port: 5432,
  database: 'artporfolio',
  password: 'FIkkexv5qX'
})

export default pool;
