exports.seed = (knex, Promise) => {
  return knex('areas').del()
    .then(() => {
      return knex('areas').insert(
        {area_id: 1,
          area_name: 'mt eden',
          positions: [
            [-36.867847, 174.759383],
            [-36.867818, 174.768261],
            [-36.874631, 174.766384],
            [-36.877980, 174.767106],
            [-36.900534, 174.759828],
            [-36.894807, 174.739922],
            [-36.877137, 174.745627],
            [-36.874758, 174.737494],
            [-36.867621, 174.757461]
          ]
        },
      {area_id:  2})
    })
}
