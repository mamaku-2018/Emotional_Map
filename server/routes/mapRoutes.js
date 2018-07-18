const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => {
  db.getAllCompanies()
    .then(companies => {
      res.json(companies)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Errorr occurred')
    })
})

module.exports = router
