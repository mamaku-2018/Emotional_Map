import React from 'react'
import {Hashrouter as Router} from 'react-router-dom'

import ErrorMessage from './ErrorMessage'

const App = () => {
  return (
    <Router>
      <div container='container'>
        <ErrorMessage />
        <div className='container-main'>
          <h1> Hello </h1>
        </div>
      </div>
    </Router>
  )
}

export default App
