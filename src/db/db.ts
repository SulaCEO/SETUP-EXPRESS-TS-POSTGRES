import pg from 'pg';
const Pool = pg.Pool;

const pool = new Pool({
    user: 'sultan',
    password: '',
    host: 'localhost',
    port: 5433,
    database: 'db name my',
});

export default pool;
