import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
import pinInfo from './pinInfo'
import onePinInfo from './onePinInfo'
import pinPosition from './pinPosition'
import keepPinsInfo from './keepPinsInfo'
import pinColour from './pinColour'
import areasInfo from './areasInfo'
import areaId from './areaId'
import pinsByAreaId from './pinsByAreaId'
import removePinForm from './removePinForm'

export default combineReducers({
  errorMessage,
  waiting,
  pinInfo,
  pinColour,
  onePinInfo,
  pinPosition,
  keepPinsInfo,
  areasInfo,
  areaId,
  pinsByAreaId,
  removePinForm
})
