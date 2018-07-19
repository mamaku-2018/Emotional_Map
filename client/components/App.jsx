import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Launch from './Launch'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import AddPinForm from './AddPinForm'
import ViewMap from './ViewMap'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <ErrorMessage />
        <WaitIndicator />
        <div className='main-conatiner'>
          <Route exact path='/' component={Launch} />
          <Route path='/view' component={ViewMap}/>
          <Route path='/add' component={AddPinForm} />
        </div>
      </div>
    </Router>
  )
}

export default App
