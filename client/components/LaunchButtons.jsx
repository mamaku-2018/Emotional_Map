import React from 'react'
import {Link} from 'react-router-dom'

const LaunchButtons = () => {
  return (
    <div className='launchbuttons'>
      <Link to='/add' className='button' id='launchShareButt'>
        <button type='button'>
        share
        </button>
      </Link>

      <Link to='/view' className='button' id='launchExploreButt'>
        <button type='button'>
        explore
        </button>
      </Link>
    </div>
  )
}

export default LaunchButtons
