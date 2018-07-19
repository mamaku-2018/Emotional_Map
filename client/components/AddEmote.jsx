import React from 'react'
import {Route} from 'react-router-dom'

import AddEmoteMap from './AddEmoteMap'
import InputPin from './InputPin'
import Footer from './Footer'

const AddEmote = () => {
  return (

    <div className='add-emote'>
      <h1>Testing add emote page</h1>
      <Route path='/add' component={AddEmoteMap} />
      <Route path='/add' component={InputPin} />
      <Route path='/add' component={Footer} />
    </div>
  )
}

export default AddEmote
