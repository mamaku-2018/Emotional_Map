import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
      <div className="row">
        <div className="col-md-12">

          <Link to='/'><img className='nav-icon' id='home-icon' src='/images/homeicon.png' /></Link>

          <Link to='/add'><img className='nav-icon' src='/images/pinicon.png' /></Link>

          <Link to='/view'><img className='nav-icon' src='/images/exploreicons.png' /></Link>

          <Link to='/area'><img className='nav-icon' id='areas-icon' src='/images/areasicon.png' /></Link>
        </div>
      </div>

    </div>
  )
}
export default Nav
