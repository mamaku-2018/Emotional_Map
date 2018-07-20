exports.seed = (knex, Promise) => {
  return knex('areas').del()
    .then(() => {
      return knex('areas').insert([
        {area_id: 1, area_name: 'city center', area_lat1: -36.848461, area_long1: 174.763336, area_lat2: -36.908461, area_long2: 174.903336, area_lat3: -36.748461, area_long3: 174.883336, area_lat4: -36.848461, area_long4: 174.763336, last_update_date: '19-07-2018'}
      ])
    })
}
