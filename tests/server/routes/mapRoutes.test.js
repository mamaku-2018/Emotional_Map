const request = require('supertest')
const server = require('../../../server/server')

test('POST /api/v1/map/add ', () => {
  return request(server)
    .post('/api/v1/map/add')
    .send({
      name: 'test',
      emotionType: 1,
      comment: 'this is test',
      areaId: 1,
      lat: -36.51319,
      long: 174.38107
    })
    .expect(200)
})

test('GET /api/v1/map/view', () => {
  return request(server)
    .get('/api/v1/map/view')
    .expect('Content-Type', /json/)
    .expect(200)
    // .then(res => {
    //   expect(res.body.length).toBe(29)
    // })
})

test('GET /api/v1/map/view/:pinId', () => {
  const pinId = 1000
  return request(server)
    .get(`/api/v1/map/view/${pinId}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(1)
    })
})

test('GET /api/v1/map/viewArea', () => {
  return request(server)
    .get(`/api/v1/map/viewArea`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
})

// WE NEED TO CHECK THE ROUTE .get(`api/v1/map/viewArea/${id}`)
// No one does not use the route. It was only defined in areas.js
// But any componet does not call this.

// test('GET /api/v1/map/viewArea/:id', () => {
//   const id = 1
//   return request(server)
//     .get(`/api/v1/map/viewArea/${id}`)
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .then(res => {
//       expect(res.body.length).toBe(1)
//     })
// })
