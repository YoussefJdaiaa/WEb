import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import pool from './db.js';  // Notez le .js

// Configurer __dirname pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Route pour récupérer tous les clients
app.get('/api/clients', async (_req: Request, res: Response) => {  // Utilisation de _req
  try {
    const result = await pool.query('SELECT * FROM client');
    res.json(result.rows);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send('Erreur du serveur');
    } else {
      console.error('Unknown error', err);
      res.status(500).send('Erreur inconnue du serveur');
    }
  }
});

// Route pour ajouter un nouveau client
app.post('/api/clients', async (req: Request, res: Response) => {
  try {
    const { nom, prenom, sexe, age } = req.body;
    const result = await pool.query(
      'INSERT INTO client (nom, prenom, sexe, age) VALUES ($1, $2, $3, $4) RETURNING *',
      [nom, prenom, sexe, age]
    );
    res.json(result.rows[0]);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send('Erreur du serveur');
    } else {
      console.error('Unknown error', err);
      res.status(500).send('Erreur inconnue du serveur');
    }
  }
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
