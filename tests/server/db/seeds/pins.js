exports.seed = (knex, Promise) => {
  return knex('pins').del()
    .then(() => {
      return knex('pins').insert([
        {pin_id: 1000, pin_name: 'QueesSt505', pin_lat: -36.851071, pin_long: 174.764608, area_id: 1, emotion_type: 1, comment: 'so bad place', last_update_date: '15-07-2018'},
        {pin_id: 1001, pin_name: 'Kstreet101', pin_lat: -36.857635, pin_long: 174.758493, area_id: 1, emotion_type: 2, comment: 'good place', last_update_date: '15-07-2018'},
        {pin_id: 1002, pin_name: 'AUT Road95', pin_lat: -36.887415, pin_long: 174.767331, area_id: 1, emotion_type: 3, comment: 'execellent place', last_update_date: '15-07-2018'},
        {pin_id: 1003, pin_name: 'eden ave77', pin_lat: -36.874018, pin_long: 174.746484, area_id: 2, emotion_type: 2, comment: 'not bad place', last_update_date: '15-07-2018'},
        {pin_id: 1004, pin_name: 'eden park08', pin_lat: -36.878742, pin_long: 174.762717, area_id: 2, emotion_type: 2, comment: 'so so place', last_update_date: '15-07-2018'},
        {pin_id: 1005, pin_name: 'eden river', pin_lat: -36.815864, pin_long: 174.641069, area_id: 2, emotion_type: 1, comment: 'quite bad place', last_update_date: '15-07-2018'},
        {pin_id: 1006, pin_name: 'marinaview school', pin_lat: -36.860759, pin_long: 174.777760, area_id: 3, emotion_type: 3, comment: 'lovely place', last_update_date: '15-07-2018'},
        {pin_id: 1007, pin_name: 'marin reserve', pin_lat: -36.865009, pin_long: 174.804785, area_id: 3, emotion_type: 2, comment: 'good place', last_update_date: '15-07-2018'}
      ])
    })
}
