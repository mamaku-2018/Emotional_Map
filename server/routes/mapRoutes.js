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

router.get('/view', (req, res) => {
  console.log ('ffffffffffffffffffffffffffff')
  db.getAllPins()
    .then(allPins => {
      res.json(allPins)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find all pins')
    })
})

router.get('/view/:pinId', (req, res) => {
  const pinId = Number(req.params.pinId)
  db.getPinById(pinId)
    .then(pin => {
      res.json(pin)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find pin by pin-id')
    })
})

router.get('/view/:areaId', (req, res) => {
  const areaId = Number(req.params.areaId)
  db.getPinsByArea(areaId)
    .then(pinsByAreas => {
      res.json(pinsByAreas)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find pins by area-id')
    })
})

module.exports = router
