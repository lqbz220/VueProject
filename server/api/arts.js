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

  // GET an image
  router.get('/arts/:id', async (req, res) => {
    try {
      const { id } = req.params

      const art = await pool.query("SELECT * FROM art WHERE id = $1",
        [ id ]
      )
      res.status(200).json(art.rows)
    } catch (err) {
      console.error('ERROR IN GET ART: ', err.message)
    }
  })

  // UPDATE an art
  router.put('/arts/:id', async (req, res) => {
    try {
      const { description } = req.body
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
  router.delete('/arts/:id', async (req, res) => {
    try {
      const { id } = req.params

      await pool.query("DELETE FROM art WHERE id = $1",
        [ id ]
      )
      res.json("Image deleted.")
    } catch (err) {
      console.error('ERROR IN DELETE ART: ', err.message)
    }
  })
