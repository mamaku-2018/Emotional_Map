import React from 'react'
import {Route} from 'react-router-dom'

import About from './About'
import LaunchButtons from './LaunchButtons'

const Launch = () => {
  return (

    <div className='about'>
      <Route path='/' component={About} />
      <Route path='/' component={LaunchButtons} />
    </div>
  )
}

export default Launch
