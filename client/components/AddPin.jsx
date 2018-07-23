import React from 'react'

import Logo from './Logo'
import AddPinMap from './AddPinMap'

class AddPin extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render () {
    return (
      <div id='addMap'>
        <AddPinMap />
      </div>
    )
  }
}

export default AddPin
