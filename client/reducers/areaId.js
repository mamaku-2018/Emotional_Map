import {RECEIVE_AREA_ID} from '../actions/areas'

function areaId (state = {}, action) {
  switch (action.type) {
    case RECEIVE_AREA_ID:
      return action.areaId

    default:
      return state
  }
}
export default areaId
