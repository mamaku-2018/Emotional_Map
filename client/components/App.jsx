import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Launch from './Launch'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import AddPin from './AddPin'
import ViewPins from './ViewPins'
import Nav from './Nav'
import ViewAreas from './ViewAreas'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <ErrorMessage />
        <WaitIndicator />
        <div className='launch-container'>
          <Route path='/' component={Nav}/>
          <Route exact path='/' component={Launch} />
        </div>
        <div className='view-container'>
          {/* <Route exact path='/view' component={Nav}/> */}
          <Route path='/view' component={ViewPins}/>
        </div>
        <div className='add-container'>
          <Route path='/add' component={AddPin} />
          <Route path='/area' component={ViewAreas} />
        </div>
      </div>
    </Router>
  )
}

export default App
