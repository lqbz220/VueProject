import express from "express";
import arts from './arts';

const router = express.Router();

export default router;

router.use('/', arts);

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
