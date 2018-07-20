import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
// import pinList from './pinList'
import pinInfo from './pinInfo'

export default combineReducers({
  errorMessage,
  waiting,
  pinInfo
})
