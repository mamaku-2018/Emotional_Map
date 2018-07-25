import {RECEIVE_AREA_ID, REMOVE_AREA_ID} from '../actions/areas'

function areaId (state = {}, action) {
  switch (action.type) {
    case RECEIVE_AREA_ID:
      return action.areaId
    case REMOVE_AREA_ID:
      return {}
    default:
      return state
  }
}
export default areaId
