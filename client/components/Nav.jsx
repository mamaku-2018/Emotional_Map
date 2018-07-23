import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to='/view'>EXPLORE</Link></li>
        <li><Link to='/viewarea'>AREAS</Link></li>
        <li><Link to='/add'>SHARE</Link></li>
      </ul>
    </div>
  )
}
export default Nav
