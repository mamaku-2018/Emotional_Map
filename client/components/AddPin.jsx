import React from 'react'

import AddPinInfo from './AddPinInfo'
import AddPinMap from './AddPinMap'

class AddPin extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <AddPinMap />
        <AddPinInfo />
      </div>
    )
  }
}

export default AddPin
