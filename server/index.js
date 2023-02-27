const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const PORT = 8000;

// middleware
app.use(cors())
app.use(express.json())

/*****  ROUTES  *****/

// GET all images
app.get('/arts', async (req, res) => {
  try {
    const allArts = await pool.query("SELECT * FROM art")  // response OBJECT
    res.status(200).json(allArts.rows)
  } catch (err) {
    console.error('ERROR IN GET ARTS: ', err.message)
  }
})

// GET a image
app.get('/arts/:id', async (req, res) => {
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

// UPDATE ana art
app.put('/arts/:id', async (req, res) => {
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
app.delete('/arts/:id', async (req, res) => {
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

app.listen(PORT, () => {
  console.log('Some awesome arts are on port 8000...')
})


