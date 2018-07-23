import {RECIEVE_ONE_PIN} from '../actions/pins'
import {REMOVE_ONE_PIN} from '../actions/pins'

function onePinInfo (state = {}, action) {
  switch (action.type) {
    case RECIEVE_ONE_PIN:
      return (state.onePin = action.pinInfo[0])
    case REMOVE_ONE_PIN:
      return state.onePin = {}
    default:
      return state
  }
}

export default onePinInfo
