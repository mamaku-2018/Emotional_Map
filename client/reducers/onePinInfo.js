import {RECIEVE_ONE_PIN, REMOVE_ONE_PIN, REMOVE_PIN_FORM} from '../actions/pins'

function onePinInfo (state = {}, action) {
  switch (action.type) {
    case RECIEVE_ONE_PIN:
      return (state.onePin = action.pinInfo[0])
    case REMOVE_ONE_PIN:
      return (state.onePin = {})
    case REMOVE_PIN_FORM:
      return (state.onePin = {})
    default:
      return state
  }
}

export default onePinInfo
