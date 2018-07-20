import React from 'react'

import AddPinInfo from './AddPinInfo'
import AddPinMap from './AddPinMap'

class AddPin extends React.Component {
  constructor () {
    super()
    this.state = {
      AddPinInfoVis: false
    }
  }
  render () {
    return (
      <div>
        <AddPinMap />
      </div>
    )
  }
}

export default AddPin
