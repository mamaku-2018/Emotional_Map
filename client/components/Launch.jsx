import React from 'react'
import {Route} from 'react-router-dom'

import About from './About'
import LaunchButtons from './LaunchButtons'
import ViewAreas from './ViewAreas'

const Launch = () => {
  return (

    <div className='jumbotron'>
      <Route path='/' component={About} />
      <Route path='/' component={LaunchButtons} />
      <ViewAreas />
    </div>

  )
}

export default Launch
