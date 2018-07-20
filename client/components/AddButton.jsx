import React from 'react'
import {Link} from 'react-router-dom'

const AddButton = () => {
  return (
    <div className='addButton'>
      <Link to='/add' className='addButton'>Add Pin</Link>
    </div>
  )
}
export default AddButton
