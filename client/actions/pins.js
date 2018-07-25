import request from 'superagent'

import {showError} from './index'

export const REQUEST_PIN_INFO = 'REQUEST_PIN_INFO'
export const RECEIVE_PIN_INFO = 'RECEIVE_PIN_INFO'
export const SEND_PIN_POSITION = 'SEND_PIN_POSITION'
export const SEND_EMOTION_FILTER = 'SEND_EMOTION_FILTER'
export const REQUEST_KEEP_PININFO = 'REQUEST_KEEP_PININFO'
export const RECEIVE_KEEP_PININFO = 'RECEIVE_KEEP_PININFO'
export const REQUEST_ONE_PIN = 'REQUEST_PIN_INFO'
export const RECIEVE_ONE_PIN = 'RECIEVE_ONE_PIN'
export const RECEIVE_PIN_COLOUR = 'RECEIVE_PIN_COLOUR'
export const REMOVE_ONE_PIN = 'REMOVE_ONE_PIN'
export const REMOVE_PIN_COLOUR = 'REMOVE_PIN_COLOUR'

export const sendPinPosition = (position) => {
  return {
    type: SEND_PIN_POSITION,
    position
  }
}

export const setFileterEmotion = (filteredList) => {
  return {
    type: SEND_EMOTION_FILTER,
    filteredList
  }
}

export const requestKeepPinsInfo = () => {
  return {
    type: REQUEST_KEEP_PININFO
  }
}

export const receiveKeepPinsInfo = (keepPinsInfo) => {
  return {
    type: RECEIVE_KEEP_PININFO,
    keepPinsInfo
  }
}

export const keepPins = () => {
  return (dispatch) => {
    dispatch(requestKeepPinsInfo())
    return request
      .get('api/v1/map/view')
      .then(res => {
        dispatch(receiveKeepPinsInfo(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
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

export const getOnePin = (id) => {
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

export const receivePinColour = (pinColour) => {
  return {
    type: RECEIVE_PIN_COLOUR,
    pinColour
  }
}

export  const removeOnePin = () => {
  return {
    type: REMOVE_ONE_PIN
  }
}

export const removePinColour = () => {
  return {
    type: REMOVE_PIN_COLOUR
  }
}