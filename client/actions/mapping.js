import request from 'superagent'

import {showerror, showError} from './index'

export const RECIEVE_PIN = 'RECIEVE_PINS'
export const REQUEST_PINS = 'REQUEST_PINS'

export const requestPins = () => {
  return { 
    type: REQUEST_PIN_INFO,
  }
}

export const recievePins = () => {
  return {
    type: RECIEVE_PIN_INFO,
    pininfo
  }
}


export const getpins = () => {
  return (dispatch) => {
    dispatch(requestPins())
    return request
    .get('api/v1/map')
    .then (res => {
      dispatch(recievePins(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}