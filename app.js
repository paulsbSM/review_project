import express from 'express';
   import { fileURLToPath } from 'url';
   import path from 'path';

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);

   const app = express();

   app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });

   app.get('/about', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'about.html'));
   });

   app.listen(3000, () => {
     console.log('Server running at http://localhost:3000');
   });