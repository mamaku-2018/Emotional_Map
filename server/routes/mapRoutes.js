const express = require('express')
const router = express.Router()
const db = require('../db/mapping')
router.get('/map', (req, res) => {
  db.getPins()
    .then(pins => {
      res.json(pins)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to get pins')
    })
})
module.exports = router
