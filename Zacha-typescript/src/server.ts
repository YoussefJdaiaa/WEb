import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import pool from './db.js';  // Notez le .js

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Route pour récupérer tous les clients
app.get('/api/clients', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM client');
    res.json(result.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Erreur du serveur');
  }
});

// Route pour ajouter un nouveau client
app.post('/api/clients', async (req, res) => {
  try {
    const { nom, prenom, sexe, age } = req.body;
    const result = await pool.query(
      'INSERT INTO client (nom, prenom, sexe, age) VALUES ($1, $2, $3, $4) RETURNING *',
      [nom, prenom, sexe, age]
    );
    res.json(result.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Erreur du serveur');
  }
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
