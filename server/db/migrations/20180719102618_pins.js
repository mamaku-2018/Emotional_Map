exports.up = (knex, Promise) => {
  return knex.schema.createTable('pins', table => {
    table.increments('pin_id').primary()
    table.string('pin_name')
    table.decimal('pin_lat')
    table.decimal('pin_long')
    table.integer('area_id')
    table.integer('emotion_type')
    table.string('comment')
    table.date('last_update_date')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('pins')
}
