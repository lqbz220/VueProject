import express, { json } from 'express';
import homepageRouter from "./homepageRouter.js";
import cors from 'cors';
import api from './api/index.js';
import { join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

// middleware
app.use(cors())
app.use(json())
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// api routes
app.use('/api', api);

app.use(homepageRouter);

app.listen(PORT, () => {
  console.log('Some awesome arts are on port 8000...')
})


