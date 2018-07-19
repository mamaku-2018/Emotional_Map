exports.up = (knex, Promise) => {
  return knex.schema.createTable('media', table => {
    table.increments('media_id').primary()
    table.string('media_name')
    table.integer('pin_id')
    table.integer('media_type')
    table.string('url')
    table.date('last_update_date')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('media')
}
