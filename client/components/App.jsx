import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Launch from './Launch'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import RealMap from './Map'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <ErrorMessage />
        <WaitIndicator />
        <div className='main-conatiner'>
          <Route exact path='/' component={Launch} />
          <Route exact path='/view' component={RealMap} />
        </div>
      </div>
    </Router>
  )
}

export default App
