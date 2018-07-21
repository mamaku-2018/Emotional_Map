import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
import pinInfo from './pinInfo'
import onePinInfo from './onePinInfo'
import pinPosition from './pinPosition'

export default combineReducers({
  errorMessage,
  waiting,
  pinInfo,
  onePinInfo,
  pinPosition
})
