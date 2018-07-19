const config = require('./knexfile').development
const knex = require('knex')(config)

module.exports = {
  getPins
}

function getPins(db = knex) {
  return db('pins')
    .select('pin_lat as pinLat', 'pin_long as pinLong' )

}
