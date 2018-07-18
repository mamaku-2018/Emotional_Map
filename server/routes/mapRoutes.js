const express = require('express')
// const db = require('../db/')
const router = express.Router()

router.get('/', (req, res) => {
  db.getAllEmotions()
    .then(emotions => {
      res.json(emotions)
    })
    .catch(err => {
    // eslint-disable-next-line
    console.log(err)
      res.status(500).send('Unable to find emotion')
    })
})

module.exports = router
