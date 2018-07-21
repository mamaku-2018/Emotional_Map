import {RECEIVE_PIN_INFO} from '../actions/pins'

function pinInfo (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PIN_INFO:
      console.log(action.pinInfo)
      return action.pinInfo

    
    default:
      return state
  }
}

export default pinInfo
