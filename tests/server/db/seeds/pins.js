exports.seed = (knex, Promise) => {
  return knex('pins').del()
    .then(() => {
      return knex('pins').insert([
        {pin_id: 1000, pin_name: 'Mountain climbing with mates', pin_lat: -36.82671662, pin_long: 174.7988853, area_id: 0, emotion_type: 1, comment: 'Skipped school and climbed up Mt Vic', last_update_date: '15-07-2018'},
        {pin_id: 1001, pin_name: 'Fun in the sun', pin_lat: -36.85474823, pin_long: 174.7904003, area_id: 3, emotion_type: 1, comment: 'my daughter was conceived here', last_update_date: '15-07-2018'},
        {pin_id: 1002, pin_name: 'Yarns with nan ', pin_lat: -36.84439205, pin_long: 174.7354031, area_id: 13, emotion_type: 1, comment: 'Nan and I dont get to spend much time together, she took me to this spot to visit the house she grew up in', last_update_date: '15-07-2018'},
        {pin_id: 1003, pin_name: 'Endorphins kick in', pin_lat: -36.84576579, pin_long: 174.758749, area_id: 2, emotion_type: 1, comment: 'Went for a massive run around the harbour, loved the view of Rangitoto and the ocean', last_update_date: '15-07-2018'},
        {pin_id: 1004, pin_name: 'Explored mt eden', pin_lat: -36.87306918, pin_long: 174.7651644, area_id: 1, emotion_type: 1, comment: 'Felt lonely so went for a walk up beautiful Mt Eden. In awe of this beautiful city', last_update_date: '15-07-2018'},
        {pin_id: 1005, pin_name: 'Lonely walk home', pin_lat: -36.85869019, pin_long: 174.7534306, area_id: 11, emotion_type: 2, comment: 'My partner and I used to walk home from work together every night. We used to love looking at the pink path and taking our time', last_update_date: '15-07-2018'},
        {pin_id: 1006, pin_name: 'Grey lynn blues', pin_lat: -36.860759, pin_long: 174.7408131, area_id: 7, emotion_type: 2, comment: 'I used to live in grey lynn back in the golden days. Now wandering around I feel like its way too gentrified', last_update_date: '15-07-2018'},
        {pin_id: 1007, pin_name: 'Wanting help ', pin_lat: -36.84740292, pin_long: 174.7721541, area_id: 2, emotion_type: 2, comment: 'I see a lot of beggars around Queen St and feel like our govt needs to step up to help ', last_update_date: '15-07-2018'},
        {pin_id: 1008, pin_name: 'Raining relentlessly', pin_lat: -36.85240601, pin_long: 174.7476685, area_id: 11, emotion_type: 2, comment: 'Forgot my umbrella and took shelter under the huge trees', last_update_date: '15-07-2018'},
        {pin_id: 1009, pin_name: 'Overwhelmed ', pin_lat: -36.86866922, pin_long: 174.7527838, area_id: 5, emotion_type: 2, comment: 'Cant find my way home ', last_update_date: '15-07-2018'},
        {pin_id: 1010, pin_name: 'Argument over nothing ', pin_lat: -36.84495817, pin_long: 174.7460397, area_id: 12, emotion_type: 3, comment: 'Reminder of how unfit I am', last_update_date: '15-07-2018'},
        {pin_id: 1011, pin_name: 'Hill too steep', pin_lat: -36.84754303, pin_long: 174.745692, area_id: 12, emotion_type: 3, comment: 'Living in Auckland sucks get me out of this traffic', last_update_date: '15-07-2018'},
        {pin_id: 1012, pin_name: 'Traffic jam rage', pin_lat: -36.86911554, pin_long: 174.7391796, area_id: 6, emotion_type: 3, comment: 'Felt lonely so went for a walk up beautiful Mt Eden. In awe of this beautiful city', last_update_date: '15-07-2018'},
        {pin_id: 1013, pin_name: 'Fell over ', pin_lat: -36.84986968, pin_long: 174.7649503, area_id: 2, emotion_type: 3, comment: 'Heel broke and tripped over grrrr', last_update_date: '15-07-2018'},
        {pin_id: 1014, pin_name: 'Gross beaches with too many people', pin_lat: -36.85144448, pin_long: 174.7230109, area_id: 9, emotion_type: 3, comment: 'Want to chill at Sentinel beach but its wall to wall people', last_update_date: '15-07-2018'},
        {pin_id: 1015, pin_name: 'Too dark', pin_lat: -36.85870004, pin_long: 174.7545151, area_id: 2, emotion_type: 4, comment: 'Trying to walk home but super scared', last_update_date: '15-07-2018'},
        {pin_id: 1016, pin_name: 'Think Im being followed ', pin_lat: -36.85144448, pin_long: 174.7230109, area_id: 9, emotion_type: 4, comment: 'Down the allyway', last_update_date: '15-07-2018'},
        {pin_id: 1017, pin_name: 'Saw a clown ', pin_lat: -36.87488321, pin_long: 174.7520542, area_id: 1, emotion_type: 4, comment: 'Gee whiz whatyaknow ', last_update_date: '15-07-2018'},
        {pin_id: 1018, pin_name: 'Lurking at school', pin_lat: -36.87488321, pin_long: 174.7520542, area_id: 4, emotion_type: 4, comment: 'Want to skip exams but my teacher is watching ', last_update_date: '15-07-2018'},
        {pin_id: 1019, pin_name: 'Climbing the bridge ', pin_lat: -36.87488321, pin_long: 174.7520542, area_id: 2, emotion_type: 4, comment: 'Scary but fun moment', last_update_date: '15-07-2018'},
        {pin_id: 1020, pin_name: 'Drove alone for the first time ', pin_lat: -36.86717573, pin_long: 174.7639203, area_id: 3, emotion_type: 5, comment: 'Thrilling experience', last_update_date: '15-07-2018'},
        {pin_id: 1021, pin_name: 'Reveling in a great book', pin_lat: -36.84655086, pin_long: 174.7547078, area_id: 4, emotion_type: 5, comment: 'Amazing spot for reading ', last_update_date: '15-07-2018'},
        {pin_id: 1022, pin_name: 'Having an adult conversation with your parents', pin_lat: -36.84655086, pin_long: 174.7547078, area_id: 11, emotion_type: 5, comment: 'Bonding moment', last_update_date: '15-07-2018'},
        {pin_id: 1023, pin_name: 'Best place to have a picnic by yourself', pin_lat: -36.87902377, pin_long: 174.765019, area_id: 1, emotion_type: 5, comment: 'Its exhilarating to know that you dont need anyone else. Enjoy your own company when you get the chance.', last_update_date: '15-07-2018'}
      ])
    })
}
