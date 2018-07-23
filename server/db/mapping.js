const config = require('./knexfile').development
const knex = require('knex')(config)

module.exports = {
  addPin,
  getAllPins,
  getPinById,
  getAllAreas
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

function getAllPins (db = knex) {
  return db('pins')
    .select('pin_id', 'pin_name', 'pin_lat', 'pin_long', 'area_id', 'emotion_type', 'comment', 'last_update_date')
    // .orderBy('pin_lat', 'asc')
}

function getPinById (pinId, db = knex) {
  return db('pins')
    .where('pin_id', pinId)
    .select('pin_name', 'pin_lat', 'pin_long', 'area_id', 'emotion_type', 'comment', 'last_update_date')
}

function getAllAreas (db = knex) {
  return db('areas')
    .select('area_id', 'area_name', 'positions')
}
function getAreaById (areaId, db = knex) {
  return db('areas')
    .where('area_id', areaId)
    .select('area_id')
}
