exports.up = (knex, Promise) => {
  return knex.schema.createTable('pins', table => {
    table.increments('pin_id').primary()
    table.string('pin_name')
    table.string('pin_info')
    table.string('area_id')
    table.string('emotion_type')
    table.string('comment')
    table.date('last_update_date')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('pins')
}
