import request from 'superagent'

import {showError} from './index'

export const REQUEST_AREAS_INFO = 'REQUEST_AREAS_INFO'


export const requestAreasInfo = () => {
  return {
    type: REQUEST_AREAS_INFO
  }
}

export const recieveAreasInfo = (areaInfo) => {
  return {
    type: RECIEVE_AREAS_INFO,
    areasInfo
  }
}