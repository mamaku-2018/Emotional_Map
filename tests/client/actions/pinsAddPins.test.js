import {
  addPin,
  REQUEST_PIN_INFO
} from '../../../client/actions/pins'
import {SHOW_ERROR} from '../../../client/actions'

jest.mock('superagent', () => {
  return {
    post: (url) => {
      if (url.split('/')[1] === 'api') {
        return {send: (pin) => {
          return Promise.resolve({body: {id: 1}})
        }}
      } else {
        return Promise.reject(new Error('File not found'))
      }
    }
  }
})

test('add pin gets the correct actions', () => {
  const dispatch = jest.fn()
  const pin = {
    name: 'test',
    emotionType: '2',
    comment: 'test comment'
  }
  return addPin('/api/v1/map/add', pin)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_PIN_INFO)
    })
})

test('add pin returns an error with incorrect url', () => {
  const dispatch = jest.fn()
  return addPin('/add')(dispatch)
    .catch(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
    })
})
