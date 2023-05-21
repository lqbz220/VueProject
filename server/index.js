import express, { json } from 'express';
import homepageRouter from "./homepageRouter.js";
import cors from 'cors';
import api from './api/index.js';
// import arts from './api/arts';
const app = express();
const PORT = 8000;

// middleware
app.use(cors())
app.use(json())
// app.set('view engine', 'ejs');
// api routes
app.use('/api', api);
// app.get("/api/v1/hello", (_req, res) => {
//   res.json({ message: "Hello, world!" });
// });

app.use(homepageRouter);

app.listen(PORT, () => {
  console.log('Some awesome arts are on port 8000...')
})


