import React from 'react'
import {Link} from 'react-router-dom'

const LaunchButtons = () => {
  return (
    <div className='launchbuttons'>
      <p> <Link to='/add' className='btn btn-lg btn-success'>Drop Pin</Link> </p>
      <p> <Link to='/view' className='btn btn-lg btn-success'>View Map</Link> </p>
    </div>
  )
}

export default LaunchButtons
