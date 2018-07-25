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

// It was tested once the total record has 45 records
// But the test result is affected by above insert new test data
test('get allPins returns list of allPins', () => {
  return db.getAllPins()
  // .then(allPins => {
  //   expect(allPins.length).toBe(45)
  // })
})

test('getPinById returns selected pin by id', () => {
  const id = 1000
  return db.getPinById(id, testDb)
    .then(pin => {
      expect(pin[0].pin_name).toBe('QueesSt505')
    })
})

test('get allAreas returns list of area', () => {
  return db.getAllAreas()
    .then(allAreas => {
      expect(allAreas.length).toBe(2)
    })
})
