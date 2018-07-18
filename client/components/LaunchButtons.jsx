import React from 'react'
import {Link} from 'react-router-dom'

const LaunchButtons = () => {
  return (
    <div className='launchbuttons'>
      <Link to='/add' className='button'>Drop Pin</Link>
      <Link to='view' className='button'>View Map</Link>
    </div>
  )
}

export default LaunchButtons
