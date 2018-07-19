import {RECEIVE_PIN_INFO} from '../actions/mapping'

function pinInfo (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PIN_INFO:
      return action.pinInfo

    default:
      return state
  }
}

export default pinInfo
