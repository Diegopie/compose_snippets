import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

console.log(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5173;

app.use(express.static("public"));

app.get('/', (request, response) => {
  response.sendFile('/views/index.html', {root: path.join(__dirname)})
});

app.get('/home', (request, response) => {
  response.sendFile('/views/home.html', {root: path.join(__dirname)})
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});