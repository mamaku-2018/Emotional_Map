import request from 'superagent'

import {showError} from './index'

export const REQUEST_PIN_INFO = 'REQUEST_PIN_INFO'
export const RECEIVE_PIN_INFO = 'RECEIVE_PIN_INFO'
export const SEND_PIN_POSITION = 'SEND_PIN_POSITION'
export const REQUEST_ONE_PIN = 'REQUEST_PIN_INFO'
export const RECIEVE_ONE_PIN = 'RECIEVE_ONE_PIN'

export const sendPinPosition = (position) => {
  return {
    type: SEND_PIN_POSITION,
    position
  }
}

export function addPin (pin) {
  return (dispatch) => {
    return request
      .post('/api/v1/map/add')
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

export const getpins = () => {
  return (dispatch) => {
    dispatch(requestPinInfo())
    return request
      .get('api/v1/map/view')
      .then(res => {
        dispatch(receivePinInfo(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestOnePin = () => {
  return {
    type: REQUEST_ONE_PIN
  }
}
export const recieveOnePin = (pinInfo) => {
  return {
    type: RECIEVE_ONE_PIN,
    pinInfo
  }

}

export const getOnePin = (id) =>  {
  return (dispatch) => {
    dispatch(requestOnePin())
    return request
      .get(`/api/v1/map/view/${id}`)
      .then(res => {
        dispatch(recieveOnePin(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
    }
  }

