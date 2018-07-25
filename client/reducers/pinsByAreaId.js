import {RECEIVE_PINS_BYAREA, REMOVE_PINS_BYAREA} from '../actions/areas'

function pinsByAreaId (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PINS_BYAREA:
      return action.pinsByArea
    case REMOVE_PINS_BYAREA:
      return {}

    default:
      return state
  }
}

export default pinsByAreaId
