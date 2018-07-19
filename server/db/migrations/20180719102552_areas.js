exports.up = (knex, Promise) => {
  return knex.schema.createTable('areas', table => {
    table.increments('area_id').primary()
    table.string('area_name')
    table.integer('area_lat1')
    table.integer('area_long1')
    table.integer('area_lat2')
    table.integer('area_long2')
    table.integer('area_lat3')
    table.integer('area_long3')
    table.integer('area_lat4')
    table.integer('area_long4')
    table.date('last_update_date')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('areas')
}
