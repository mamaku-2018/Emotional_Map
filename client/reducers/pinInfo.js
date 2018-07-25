import {RECEIVE_PIN_INFO, SEND_EMOTION_FILTER} from '../actions/pins'

function pinInfo (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PIN_INFO:
      return action.pinInfo
    case SEND_EMOTION_FILTER:
      return action.filteredList

    default:
      return state
  }
}

export default pinInfo
