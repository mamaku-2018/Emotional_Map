import React from 'react'
import {Route, Link} from 'react-router-dom'

import About from './About'
import LaunchButtons from './LaunchButtons'

const Launch = () => {
  return (

    <div className='about'>
      <div className="jumbotron">
        <h1 className="display-3">Meet Native Speaker</h1>
        <p className="lead">Most people fail to get a high speaking score in IELTS because they could not find proper native speakers Join us and Find speaking mentor</p>

        <Route path='/' component={About} />
        <Route path='/' component={LaunchButtons} />
      </div>

    </div>
  )
}

export default Launch
