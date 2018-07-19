exports.seed = (knex, Promise) => {
  return knex('media').del()
    .then(() => {
      return knex('media').insert([
        {media_id: 1, media_name: 'queen street img', pin_id: '1000', media_type: 5, url: 'https://www.google.co.nz/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2d%2FQueen_Street%252C_Midtown.jpg%2F250px-Queen_Street%252C_Midtown.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FQueen_Street%2C_Auckland&docid=yi9jnS4Ux3hB3M&tbnid=V5KZQeY5DlcnvM%3A&vet=10ahUKEwjRvNH756ncAhUEpJQKHXTKDX4QMwg6KAEwAQ..i&w=250&h=141&bih=700&biw=1396&q=queen%20street&ved=0ahUKEwjRvNH756ncAhUEpJQKHXTKDX4QMwg6KAEwAQ&iact=mrc&uact=8', last_update_date: '23-07-2018'},
        {media_id: 2, media_name: 'song of silence', pin_id: '1000', media_type: 4, url: 'https://www.google.co.nz/imgres?imgurl=https%3A%2F%2Fmodworkshop.net%2Fmydownloads%2Fpreviews%2Fpreview_6701_1466764987_1b9f64e5224553a4ff12a2855c857313.jpg&imgrefurl=https%3A%2F%2Fmodworkshop.net%2Fmydownloads.php%3Faction%3Dview_down%26did%3D16641&docid=i_-wu5pGwtpi2M&tbnid=2Pd775iXiVWz2M%3A&vet=10ahUKEwis-uOW-KncAhUDQd4KHRFxB9QQMwg6KAMwAw..i&w=802&h=767&bih=700&biw=1396&q=NO%20MUSIC&ved=0ahUKEwis-uOW-KncAhUDQd4KHRFxB9QQMwg6KAMwAw&iact=mrc&uact=8', last_update_date: '22-07-2018'},
        {media_id: 3, media_name: 'kstreet image', pin_id: '1000', media_type: 5, url: 'https://www.google.co.nz/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FDCJ4J4%2Fqueen-street-mall-brisbane-DCJ4J4.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fbrisbane-queen-street.html&docid=79hRLla6ukFTDM&tbnid=jlAONo9NZRdrPM%3A&vet=10ahUKEwjRvNH756ncAhUEpJQKHXTKDX4QMwhCKAkwCQ..i&w=1300&h=953&bih=700&biw=1396&q=queen%20street&ved=0ahUKEwjRvNH756ncAhUEpJQKHXTKDX4QMwhCKAkwCQ&iact=mrc&uact=8', last_update_date: '23-07-2018'}
      ])
    })
}
