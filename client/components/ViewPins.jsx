import React from 'react'
import {connect} from 'react-redux'
import ViewPinMap from './ViewPinMap'
import {getpins} from '../actions/pins'
import ViewPinInfo from './ViewPinInfo'
import {Route} from 'react-router'
class ViewPins extends React.Component {
  componentDidMount () {
    this.props.dispatch(getpins())
  }

  render () {
    return (
      <div>
        <ViewPinMap/>
        <Route path="view/:id" component={ViewPinInfo}/>
      </div>

    )
  }
}

export default connect()(ViewPins)
