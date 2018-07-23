import {RECEIVE_AREAS_INFO} from '../actions/areas'

function areasInfo (state = {}, action) {
  switch (action.type) {
    case RECEIVE_AREAS_INFO:
      return action.areasInfo

    default:
      return state
  }
}

export default areasInfo
