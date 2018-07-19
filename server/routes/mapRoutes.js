const express = require('express')
const router = express.Router()
const db = require('../db/mapping')

// router.get('/map', (req, res) => {
//   db.getPins()
//     .then(pins => {
//       res.json(pins)
//     })
// }

router.post('/add', (req, res) => {
  const {name, emotionType, comment, areaId, lat, long} = req.body
  // eslint-disable-next-line
  console.log(req.body)
  const pin = {
    name: name,
    emotionType: emotionType,
    comment: comment,
    areaId: areaId,
    lat: lat,
    long: long
  }
  db.addPin(pin)
    .then(id => {
      res.json({newPinId: id})
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to save newpin')
    })
})

module.exports = router
