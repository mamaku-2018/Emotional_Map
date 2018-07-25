exports.seed = (knex, Promise) => {
  return knex('pins').del()
    .then(() => {
      return knex('pins').insert([
        {pin_id: 1000, pin_name: 'Mountain climbing with mates', pin_lat: -36.82671662, pin_long: 174.7988853, area_id: 0, emotion_type: 1, comment: 'Skipped school and climbed up Mt Vic', last_update_date: '15-07-2018'},
        {pin_id: 1001, pin_name: 'Fun in the sun', pin_lat: -36.85474823, pin_long: 174.7904003, area_id: 3, emotion_type: 1, comment: 'my daughter was conceived here', last_update_date: '15-07-2018'},
        {pin_id: 1002, pin_name: 'Yarns with nan ', pin_lat: -36.84439205, pin_long: 174.7354031, area_id: 13, emotion_type: 3, comment: 'Nan and I dont get to spend much time together, she took me to this spot to visit the house she grew up in', last_update_date: '15-07-2018'},
        {pin_id: 1003, pin_name: 'Endorphins kick in', pin_lat: -36.84576579, pin_long: 174.758749, area_id: 2, emotion_type: 1, comment: 'Went for a massive run around the harbour, loved the view of Rangitoto and the ocean', last_update_date: '15-07-2018'},
        {pin_id: 1004, pin_name: 'eden park08', pin_lat: -36.878742, pin_long: 174.762717, area_id: 2, emotion_type: 2, comment: 'so so place', last_update_date: '15-07-2018'},
        {pin_id: 1005, pin_name: 'eden river', pin_lat: -36.815864, pin_long: 174.641069, area_id: 2, emotion_type: 1, comment: 'quite bad place', last_update_date: '15-07-2018'},
        {pin_id: 1006, pin_name: 'marinaview school', pin_lat: -36.860759, pin_long: 174.777760, area_id: 3, emotion_type: 3, comment: 'lovely place', last_update_date: '15-07-2018'},
        {pin_id: 1007, pin_name: 'marin reserve', pin_lat: -36.865009, pin_long: 174.804785, area_id: 3, emotion_type: 2, comment: 'good place', last_update_date: '15-07-2018'}
      ])
    })
}
