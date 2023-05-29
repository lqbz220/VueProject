import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'artporfolio',
  host: 'my-postgres-postgresql.default.svc.cluster.local',
  port: 5432,
  database: 'artporfolio',
  password: ''
})

export default pool;
