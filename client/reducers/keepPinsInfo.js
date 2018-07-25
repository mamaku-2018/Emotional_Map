import {RECEIVE_KEEP_PININFO} from '../actions/pins'

function keepPinsInfo (state = {}, action) {
  switch (action.type) {
    case RECEIVE_KEEP_PININFO:
      return action.keepPinsInfo

    default:
      return state
  }
}

export default keepPinsInfo
