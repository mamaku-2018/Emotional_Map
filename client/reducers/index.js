import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
import pinList from './pinList'

export default combineReducers({
  errorMessage,
  waiting
})

