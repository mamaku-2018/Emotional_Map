const express = require('express')
const router = express.Router()
const db = require('../db/mapping')
router.get('/getPins', (req, res) => {
    db.getPins()
    .then(pins => {
      req.json(pins)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to get pins')
    })
})

router.get('/getAreas', (req,res) => {
  db.getAreas()
  .then(areas => {
    res.json(areas)
  })
  .catch(err => {
    // eslint-disable-next-line
    console.log(err)
    res.status(500).send('Unable to get pins')
  })
})

module.exports = router

function getDate () {
  const date = new Date()
  const dd = date.getDate()
  const mm = date.getMonth() + 1
  const yyyy = date.getFullYear()
  const datestr = `${yyyy}-${mm}-${dd}`
  return datestr
}