import React from 'react'
import {Route} from 'react-router-dom'

import Nav from './Nav'
import Logo from './Logo'
import About from './About'

const Launch = () => {
  return (

    <div className='launch-page'>
      <Route path='/' component={Logo}/>
      <Route path='/' component={About} />
      <Route path='/' component={Nav} />
    </div>

  )
}

export default Launch
