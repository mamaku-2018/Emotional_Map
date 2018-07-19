import request from 'superagent'

import {showError} from './index'

export function addPin (pin) {
  return (dispatch) => {
    return request.post('/api/v1/add')
      .send(pin)
      .then(res => {
        dispatch(requestPinInfo(res.body.newId))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestPinInfo = () => {
  return {
    type: REQUEST_PIN_INFO
  }
}

export const receivePinInfo = (pinInfo) => {
  return {
    type: RECEIVE_PIN_INFO,
    pinInfo
  }
}