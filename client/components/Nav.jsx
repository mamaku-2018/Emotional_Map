import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>

      <div className="row">
        <div className="col-md-12">
          <Link to='/view'><img className='nav-icon' src='/images/exploreicons.png' /></Link>
          <Link to='/area'><img className='nav-icon' src='/images/areasicon.png' /></Link>
          <Link to='/add'><img className='nav-icon' src='/images/pinicon.png' /></Link>
          <Link to='/'><img className='nav-icon' src='/images/homeicon.png' /> </Link>
        </div>
      </div>

      {/* <ul>
        <li><Link to='/view'><img className='nav-icon' src='/images/exploreicons.png' /></Link></li>
        <li><Link to='/area'><img className='nav-icon' src='/images/areasicon.png' /></Link></li>
        <li><Link to='/add'><img className='nav-icon' src='/images/pinicon.png' /></Link></li>
        <li><Link to='/'><img className='nav-icon' src='/images/homeicon.png' /> </Link></li>
      </ul> */}
    </div>
  )
}
export default Nav
