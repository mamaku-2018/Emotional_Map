import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Launch from './Launch'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import AddPinInfo from './AddPinInfo'
import ViewMap from './ViewMap'
import AddPin from './AddPin'
import ViewPins from './ViewPins'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <ErrorMessage />
        <WaitIndicator />
        <div className='main-conatiner'>
          <Route exact path='/' component={Launch} />
          {/* The routes on lines 22 and 23 will be removed once the parent components for each page
has been set and only 24 and 25 will apply */}
          <Route path='/view' component={ViewMap}/>
          <Route path='/add' component={AddPinInfo} />
          {/* <Route exact path='/add' component={AddPin} />
          <Route exact path='/view' component={ViewPins} /> */}

        </div>
      </div>
    </Router>
  )
}

export default App
