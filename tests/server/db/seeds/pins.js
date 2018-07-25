exports.seed = (knex, Promise) => {
  return knex('pins').del()
    .then(() => {
      return knex('pins').insert([
        {pin_id: 1030, pin_name: 'Happy Place', pin_lat: -36.8546944795243, pin_long: 174.758920669556, area_id: 2, emotion_type: 1, comment: 'I had just finished eating a beautiful meal and found a seat nearby to relax and observe people coming in and out of the restaurant', last_update_date: '15-07-2018'},
        {pin_id: 1031, pin_name: 'Lonely Here', pin_lat: -36.8554150608181, pin_long: 174.748033583164, area_id: 11, emotion_type: 2, comment: 'There was no one around and the only people were visable from the building, I didn’t have anyone to connect with', last_update_date: '15-07-2018'},
        {pin_id: 1032, pin_name: 'Hurt Myself', pin_lat: -36.8572199717827, pin_long: 174.74725574255, area_id: 7, emotion_type: 3, comment: 'Went for a long walk and tripped on a raised tile on the pavement, it really hurt and I was immediately mad', last_update_date: '15-07-2018'},
        {pin_id: 1033, pin_name: 'Climbed Mountain', pin_lat: -36.8404767674025, pin_long: 174.740517362952, area_id: 0, emotion_type: 5, comment: 'Spent the good part of the morning walking around the city and finished at the top of a mountain, it was so beautiful', last_update_date: '15-07-2018'},
        {pin_id: 1050, pin_name: 'Great Spot', pin_lat: -36.851071, pin_long: 174.764608, area_id: 1, emotion_type: 1, comment: 'Great sunny spot here! Lots of lovely plants around', last_update_date: '15-07-2018'},
        {pin_id: 1034, pin_name: 'Very Sad ', pin_lat: -36.8594932190276, pin_long: 174.777344763279, area_id: 3, emotion_type: 2, comment: 'I was unhappy and spent some time in this spot to just observe my mood', last_update_date: '15-07-2018'},
        {pin_id: 1035, pin_name: 'No Pedestrian Crossing', pin_lat: -36.8658973284871, pin_long: 174.735152944922, area_id: 7, emotion_type: 3, comment: 'No pedestrian crossing and I nearly got ran over by the traffic', last_update_date: '15-07-2018'},
        {pin_id: 1036, pin_name: 'Ran 15k!', pin_lat: -36.8545410264876, pin_long: 174.732095897198, area_id: 7, emotion_type: 5, comment: 'My first time running this distance! Im so proud of myself', last_update_date: '15-07-2018'},
        {pin_id: 1037, pin_name: 'Lovely Moment', pin_lat: -36.8628190022385, pin_long: 174.789193421602, area_id: 0, emotion_type: 1, comment: 'I smelt some amazing plants', last_update_date: '15-07-2018'},
        {pin_id: 1038, pin_name: 'Good Spot to Cry', pin_lat: -36.8522783632605, pin_long: 174.725547283888, area_id: 9, emotion_type: 2, comment: 'Here is a lovely private spot that gave me comfort when I had to cry', last_update_date: '15-07-2018'},
        {pin_id: 1039, pin_name: 'Annoying Layout', pin_lat: -36.8632101035449, pin_long: -36.8632101035449, area_id: 5, emotion_type: 3, comment: 'Who designed this space?? So hard to navigate. Dont recommend coming to this part of town', last_update_date: '15-07-2018'},
        {pin_id: 1040, pin_name: 'Broke Up With Someone', pin_lat: -36.8692448272779, pin_long: 174.758945479989, area_id: 1, emotion_type: 5, comment: 'I broke up with the worse person and Im finally free, weeee!', last_update_date: '15-07-2018'},
        {pin_id: 1041, pin_name: 'Cool', pin_lat: -36.8629295194087, pin_long: 174.746263995767, area_id: 7, emotion_type: 1, comment: 'Coolest cafes, music and people. Will definitely be coming back to hang out!', last_update_date: '15-07-2018'},
        {pin_id: 1042, pin_name: 'Missing Someone', pin_lat: -36.9336813132995, pin_long: 174.736366644502, area_id: 0, emotion_type: 2, comment: 'I miss my brother a lot, the bicycle reminded me of him', last_update_date: '15-07-2018'},
        {pin_id: 1043, pin_name: 'Feeling Angry!', pin_lat: -36.8659461472317, pin_long: 174.721282571554, area_id: 8, emotion_type: 3, comment: 'Had a terrible day and got stuck talking to someone from Greenpeace here', last_update_date: '15-07-2018'},
        {pin_id: 1044, pin_name: 'Watched a Storm Coming', pin_lat: -36.8596015949513, pin_long: 174.71520870924, area_id: 8, emotion_type: 5, comment: 'Great outlook to watch a storm coming in from the south! Big grey clouds on the horizon and spotted the lightening', last_update_date: '15-07-2018'},
        {pin_id: 1045, pin_name: 'Special Spot', pin_lat: -36.8797611347599, pin_long: 174.779697060585, area_id: 1, emotion_type: 1, comment: 'Specail little nook! I don’t know if many people come here but I really loved it. Stand by the large tree facing North!', last_update_date: '15-07-2018'},
        {pin_id: 1046, pin_name: 'Isolated', pin_lat: -36.8952349870038, pin_long: 174.748666584492, area_id: 1, emotion_type: 2, comment: 'This concreted part of town with no humans or signs of life in sight', last_update_date: '15-07-2018'},
        {pin_id: 1047, pin_name: 'Bad Driving', pin_lat: -36.8961670078523, pin_long: 174.73243586719, area_id: 0, emotion_type: 3, comment: 'Terrible driving around this corner and people take it too fast. Very risky', last_update_date: '15-07-2018'},
        {pin_id: 1048, pin_name: 'Biker', pin_lat: -36.8590790284379, pin_long: 174.776718467474, area_id: 3, emotion_type: 5, comment: 'Biking around here and it felt so good going down this hill', last_update_date: '15-07-2018'},
        {pin_id: 1049, pin_name: 'Swam In Winter', pin_lat: -36.8995222959142, pin_long: 174.787817448378, area_id: 0, emotion_type: 6, comment: 'A brisk swim in the middle of winter and I feel like a new person!', last_update_date: '15-07-2018'}
      ])
    })
}
