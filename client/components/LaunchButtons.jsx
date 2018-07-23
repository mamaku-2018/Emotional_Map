import React from 'react'
import {Link} from 'react-router-dom'

const LaunchButtons = () => {
  return (
    <div className='launchbuttons'>
      <button><Link to='/add' className='launchShareButt'>SHARE</Link> </button>
      <button><Link to='/view' className='launchExploreButt'>EXPLORE</Link> </button>
    </div>
  )
}

export default LaunchButtons
