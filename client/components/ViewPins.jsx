import React from 'react'
import {connect} from 'react-redux'
import ViewPinMap from './ViewPinMap'
import {getpins} from '../actions/pins'

class ViewPins extends React.Component {
  componentDidMount () {
    this.props.dispatch(getpins())
  }

  render () {
    return (
      <div>
        <ViewPinMap/>
      </div>

    )
  }
}

export default connect()(ViewPins)
