import React from 'react'
import {connect} from 'react-redux'
import ViewAreaMap from './ViewAreaMap'

class ViewAreas extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <ViewAreaMap />
    )
  }
}

export default ViewAreas
