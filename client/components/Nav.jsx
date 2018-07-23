import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to='/view'><img className='nav-icon' src='/images/exploreicons.png' /></Link></li>
        <li><Link to='/area'><img className='nav-icon' src='/images/areasicon.png' /></Link></li>
        <li><Link to='/add'><img className='nav-icon' src='/images/pinicon.png' /></Link></li>
        <li><Link to='/'><img className='nav-icon' src='/images/homeicon.png' /> </Link></li>
      </ul>
    </div>
  )
}
export default Nav
