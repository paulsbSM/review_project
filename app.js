import express from 'express';
   import { fileURLToPath } from 'url';
   import path from 'path';
   import { greet, describe } from './utils.js'

   const appName = "My Web App";

   console.log(greet(appName));
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

   
const extension = {
  name: "FIT",
  version: "1.4.0",
  target: "flickr.com"
};
console.log(describe(extension));

const pages = ["home", "about", "admin"];
pages.forEach((page) => {
  console.log(`Page: ${page}`);
});

const userRole = "user";
if (userRole === "admin") {
  console.log("Full access granted");
} else if (userRole === "moderator") {
  console.log("Limited access granted");
} else {
  console.log("Access denied");
}