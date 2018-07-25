const db = require('../../../server/db/mapping')
const env = require('./testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => {
  env.cleanup(testDb)
})

test('addPin inserts a new pin object', () => {
  const pin = {
    name: 'test',
    emotionType: 1,
    comment: 'this is test',
    areaId: 1,
    lat: -36.51319,
    long: 174.38107
  }
  return db.addPin(pin, testDb)
    .then(resp => {
      expect(typeof (resp)).toBe('number') // return newPinId
    })
})
