import React from 'react'
import {connect} from 'react-redux'
import ViewPinMap from './ViewPinMap'
import {getpins} from '../actions/pins'

import AddButton from './AddButton'
import ViewPinInfo from './ViewPinInfo'

class ViewPins extends React.Component {
  componentDidMount () {
    this.props.dispatch(getpins())
  }

  render () {
    return (
      <div>
        <ViewPinMap/>
        <ViewPinInfo/>
        <AddButton/>
      </div>

    )
  }
}

export default connect()(ViewPins)
