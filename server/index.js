import express, { json } from 'express';
import cors from 'cors';
import api from './api/index.js';

const app = express();
const PORT = 8000;

// middleware
app.use(cors())
app.use(json())

// api routes
app.use('/api', api);

app.listen(PORT, () => {
  console.log('Some awesome arts are on port 8000...')
})


