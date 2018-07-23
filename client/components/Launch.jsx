import React from 'react'
import {Route} from 'react-router-dom'

import Logo from './Logo'
import About from './About'
import LaunchButtons from './LaunchButtons'

const Launch = () => {
  return (

    <div className='launch-page'>
      <Route path='/' component={Logo}/>
      <Route path='/' component={About} />
      <Route path='/' component={LaunchButtons} />
    </div>

  )
}

export default Launch
