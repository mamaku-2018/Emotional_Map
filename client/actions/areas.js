import request from 'superagent'

import {showError} from './index'

export const REQUEST_AREAS_INFO = 'REQUEST_AREAS_INFO'
export const RECEIVE_AREAS_INFO = 'RECIEVE_AREAS_INFO'
export const REQUEST_AREA_ID = 'REQUEST_AREA_ID'
export const RECEIVE_AREA_ID = 'RECEIVE_AREA_ID'
export const requestAreasInfo = () => {
  return {
    type: REQUEST_AREAS_INFO
  }
}

export const receiveAreasInfo = (areasInfo) => {
  return {
    type: RECEIVE_AREAS_INFO,
    areasInfo
  }
}
export const getAreas = () => {
  return (dispatch) => {
    dispatch(requestAreasInfo())
    return request
      .get('api/v1/map/viewArea')
      .then(res => {
        dispatch(receiveAreasInfo(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestAreaId = () => {
  return {
    type: REQUEST_AREA_ID
  }
}
export const receiveAreaId = (id) => {
  return {
    type: RECEIVE_AREA_ID,
    id

  }
}
export const getAreaId = () => {
  return (dispatch) => {
    dispatch(requestAreaId())
    return request
    .then(res => {
      dispatch(receiveAreaId(res.body.area_id))
    })
  }
}
