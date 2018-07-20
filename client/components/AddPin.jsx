import React from 'react'
import {connect} from 'react-redux'

import AddPinForm from './AddPinForm'
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
        <AddPinForm />
      </div>
    )
  }
}

export default AddPin
