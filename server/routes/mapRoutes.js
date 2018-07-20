const express = require('express')
const router = express.Router()
const db = require('../db/mapping')

router.post('/add', (req, res) => {
  const {name, emotionType, comment, areaId, lat, long} = req.body
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

module.exports = router
