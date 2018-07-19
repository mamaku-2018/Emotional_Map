import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
<<<<<<< HEAD
import mapping from './mapping'
=======
// import pinList from './pinList'
import pinInfo from './pinInfo'
>>>>>>> 8b96a5edebfd7300cfaa06dee317a023bafe4369

export default combineReducers({
  errorMessage,
  waiting,
<<<<<<< HEAD
  mapping
=======
  pinInfo
>>>>>>> 8b96a5edebfd7300cfaa06dee317a023bafe4369
})
