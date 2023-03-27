/*****  ROUTES  *****/
import express from "express";
import pool from '../db';

const router = express.Router();

export default router;

// GET all images
router.get('/', async (req, res) => {
    try {
      const data = await pool.query("SELECT * FROM art")
      const allArts = data.rows;
      res.status(200).json(allArts)
    } catch (err) {
      console.error('ERROR IN GET ARTS: ', err.message)
    }
  })

  // Add an image
  router.post('/', async (req, res) => {
    try {
      const { description, imageurl } = req.body

      const newImage = await pool.query("INSERT INTO arts (description, imageurl) VALUES($1, $2) RETURNING *",
      [ description, imageurl ]
      )
      console.log(newImage, 'new image from route')
      res.status(200).json(newImage.rows)
    } catch (err) {
      console.error('ERROR IN GET ART: ', err.message)
    }
  })

  // UPDATE an art
  router.put('/:id', async (req, res) => {
    try {
      const description = req.body.text;
      const { id } = req.params

      await pool.query("UPDATE art SET description = $1 WHERE id = $2",
        [ description, id ]
      )
      res.json("Description updated!")
    } catch (err) {
      console.error('ERROR IN PUT ART: ', err.message)
    }
  })

  // DELETE an art
  router.delete('/:id', async (req, res) => {
    try {
      console.log(req.params,'req params');
      const { id } = req.params

      await pool.query("DELETE FROM art WHERE id = $1",
        [ id ]
      )
      res.json("Image deleted.")
    } catch (err) {
      console.error('ERROR IN DELETE ART: ', err.message)
    }
  })
