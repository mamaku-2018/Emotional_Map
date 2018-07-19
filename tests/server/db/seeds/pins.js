exports.seed = (knex, Promise) => {
  return knex('pins').del()
    .then(() => {
      return knex('pins').insert([
        {pin_id: 1000, pin_name: 'QueesSt505', pin_lat: -36.505540, pin_long: 174.455620, area_id: 1, emotion_type: 1, comment: 'so bad place', last_update_date: '15-07-2018'},
        {pin_id: 1001, pin_name: 'Kstreet101', pin_lat: -36.512810, pin_long: 174.453620, area_id: 1, emotion_type: 2, comment: 'good place', last_update_date: '15-07-2018'},
        {pin_id: 1002, pin_name: 'AUT Road95', pin_lat: -36.511090, pin_long: 174.460200, area_id: 1, emotion_type: 3, comment: 'execellent place', last_update_date: '15-07-2018'},
        {pin_id: 1003, pin_name: 'eden ave77', pin_lat: -36.520450, pin_long: 174.453230, area_id: 2, emotion_type: 2, comment: 'not bad place', last_update_date: '15-07-2018'},
        {pin_id: 1004, pin_name: 'eden park08', pin_lat: -36.521350, pin_long: 174.452180, area_id: 2, emotion_type: 2, comment: 'so so place', last_update_date: '15-07-2018'},
        {pin_id: 1005, pin_name: 'eden river', pin_lat: -36.521560, pin_long: 174.454020, area_id: 2, emotion_type: 1, comment: 'quite bad place', last_update_date: '15-07-2018'},
        {pin_id: 1006, pin_name: 'marinaview school', pin_lat: -36.485450, pin_long: 174.382750, area_id: 3, emotion_type: 3, comment: 'lovely place', last_update_date: '15-07-2018'},
        {pin_id: 1007, pin_name: 'marin reserve', pin_lat: -36.483860, pin_long: 174.384040, area_id: 3, emotion_type: 2, comment: 'good place', last_update_date: '15-07-2018'}
      ])
    })
}
