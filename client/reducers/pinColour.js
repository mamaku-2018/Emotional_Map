import {RECEIVE_PIN_COLOUR} from '../actions/pins'
import {REMOVE_PIN_COLOUR} from '../actions/pins'

function pinColour (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PIN_COLOUR:
      return (action.pinColour)
    case REMOVE_PIN_COLOUR:
      return state = "1"
    default:
      return state
  }
}
export default pinColour
