import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
import mapping from './mapping'

export default combineReducers({
  errorMessage,
  waiting,
  mapping
})
