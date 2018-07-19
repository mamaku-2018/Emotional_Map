import React from 'react'
import {Route} from 'react-router-dom'

import AddEmoteMap from './AddEmoteMap'
import Footer from './Footer'
import AddInst from './AddInst'

const AddEmote = () => {
  return (

    <div className='add-emote'>
      <Route path='/add' component={AddEmoteMap} />
      <Route path='/add' component={Footer} />
      <Route path='/add' component={AddInst} />
    </div>
  )
}

export default AddEmote
