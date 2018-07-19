exports.seed = (knex, Promise) => {
  return knex('pins').del()
    .then(() => {
      return knex('pins').insert([
        {pin_id: 1000, pin_name: 'QueesSt505', pin_lat: -36.848461, pin_long: 174.763336, area_id: 1, emotion_type: 1, comment: 'so bad place', last_update_date: '15-07-2018'},
        {pin_id: 1001, pin_name: 'Kstreet101', pin_lat: -36.848462, pin_long: 174.763337, area_id: 1, emotion_type: 2, comment: 'good place', last_update_date: '15-07-2018'},
        {pin_id: 1002, pin_name: 'AUT Road95', pin_lat: -36.848463, pin_long: 174.763338, area_id: 1, emotion_type: 3, comment: 'execellent place', last_update_date: '15-07-2018'},
        {pin_id: 1003, pin_name: 'eden ave77', pin_lat: -36.848468, pin_long: 174.763340, area_id: 2, emotion_type: 2, comment: 'not bad place', last_update_date: '15-07-2018'},
        {pin_id: 1004, pin_name: 'eden park08', pin_lat: -36.848469, pin_long: 174.763342, area_id: 2, emotion_type: 2, comment: 'so so place', last_update_date: '15-07-2018'},
        {pin_id: 1005, pin_name: 'eden river', pin_lat: -36.848470, pin_long: 174.763344, area_id: 2, emotion_type: 1, comment: 'quite bad place', last_update_date: '15-07-2018'},
        {pin_id: 1006, pin_name: 'marinaview school', pin_lat: -36.848471, pin_long: 174.763342, area_id: 3, emotion_type: 3, comment: 'lovely place', last_update_date: '15-07-2018'},
        {pin_id: 1007, pin_name: 'marin reserve', pin_lat: -36.848472, pin_long: 174.763343, area_id: 3, emotion_type: 2, comment: 'good place', last_update_date: '15-07-2018'}
      ])
    })
}
