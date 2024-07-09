import pkg from 'pg';
const { Pool } = pkg;

// Configurer la connexion à PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Zacka_web',
  password: 'douidadouida', // Assurez-vous que ce mot de passe est correct
  port: 5432,
});

export default pool;
