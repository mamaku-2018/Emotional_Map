import React from 'react'
import {Link} from 'react-router-dom'

const LaunchButtons = () => {
  return (
    <div className='launchbuttons'>
      <Link to='/add' className='launchShareButt'>share</Link>
      <Link to='/view' className='launchExploreButt'>explore</Link>
    </div>
  )
}

export default LaunchButtons
