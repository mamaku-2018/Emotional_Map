import {REMOVE_PIN_FORM} from '../actions/pins'
function removePinForm (state = {}, action) {
  switch (action.type) {
    case REMOVE_PIN_FORM:
      return action.showAddInfo
    default:
      return state
  }
}

export default removePinForm
