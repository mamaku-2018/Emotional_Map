import {
  getpins,
  REQUEST_PIN_INFO
} from '../../../client/actions/pins'
import {SHOW_ERROR} from '../../../client/actions'

jest.mock('superagent', () => {
  return {
    get: (url) => {
      if (url.split('/')[1] === 'api') {
        return Promise.resolve({body: [
          {pin: {
            name: 'test', emotionType: '2', comment: 'test comment'
          }}
        ]})
      } else {
        return Promise.reject(new Error('File not found'))
      }
    }
  }
})

test('getPin gets the correct actions', () => {
  const dispatch = jest.fn()
  return getpins('/api/v1/map/view')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_PIN_INFO)
    })
})

test('get pins returns an error with incorrect url', () => {
  const dispatch = jest.fn()
  return getpins('/view')(dispatch)
    .catch(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
    })
})
