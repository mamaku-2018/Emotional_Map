exports.seed = (knex, Promise) => {
  return knex('type').del()
    .then(() => {
      return knex('type').insert([
        {type_id: 1, type_name: 'bad', category: 'emotion'},
        {type_id: 2, type_name: 'good', category: 'emotion'},
        {type_id: 3, type_name: 'execllent', category: 'emotion'},
        {type_id: 4, type_name: 'audion', category: 'media'},
        {type_id: 5, type_name: 'image', category: 'media'}
      ])
    })
}
