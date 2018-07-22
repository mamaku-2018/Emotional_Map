exports.up = (knex, Promise) => {
  return knex.schema.createTable('areas', table => {
    table.increments('area_id').primary()
    table.string('area_name')
    table.integer('positions')
    
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('areas')
}
