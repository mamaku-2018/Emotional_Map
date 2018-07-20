import {SEND_PIN_POSITION} from '../actions/pins'

function pinPosition (state = {}, action) {
  switch (action.type) {
    case SEND_PIN_POSITION:
      return action.position

    default:
      return state
  }
}

export default pinPosition
