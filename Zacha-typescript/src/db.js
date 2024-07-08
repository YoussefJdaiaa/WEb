const { Pool } = require('pg');

// Configurer la connexion à PostgreSQL
const pool = new Pool({
  user: 'postgres', // Remplacez par votre nom d'utilisateur PostgreSQL
  host: 'localhost',
  database: 'Zacka_web', // Remplacez par le nom de votre base de données
  password: 'douidadouida', // Remplacez par votre mot de passe PostgreSQL
  port: 5432,
});

module.exports = pool;
