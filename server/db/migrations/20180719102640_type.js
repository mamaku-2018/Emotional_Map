exports.up = (knex, Promise) => {
  return knex.schema.createTable('type', table => {
    table.increments('type_id').primary()
    table.string('type_name')
    table.string('category')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('type')
}
