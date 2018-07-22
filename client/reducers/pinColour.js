import {RECEIVE_PIN_COLOUR} from '../actions/pins'

function pinColour (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PIN_COLOUR:
      return (action.pinColour)

    default:
      return state
  }
}
export default pinColour
