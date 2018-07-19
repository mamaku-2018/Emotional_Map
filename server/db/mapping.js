const config = require('./knexfile').development
const knex = require('knex')(config)

module.exports = {
  addPin
}

function addPin (pin, db = knex) {
  return db('pins')
    .insert({
      pin_name: pin.name,
      pin_lat: pin.lat,
      pin_long: pin.long,
      area_id: pin.areaId,
      emotion_type: pin.emotionType,
      comment: pin.comment,
      last_update_date: knex.fn.now()
    })
    .then(newPinId => newPinId[0])
}
