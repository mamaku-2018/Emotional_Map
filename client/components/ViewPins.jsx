import React from 'react'
import {connect} from 'react-redux'
import ViewPinMap from './ViewPinMap'
import ViewPinInfo from './ViewPinInfo'
import {removeOnePin} from '../actions/pins'

class ViewPins extends React.Component {
  render () {
    return (
      <div id='viewPins'>
        <ViewPinMap/>
        {typeof this.props.onePinInfo.pin_name === 'string' && <ViewPinInfo/>}
      </div>
    )
  }
  componentWillUnmount () {
    this.props.dispatch(removeOnePin())
  }
}

const mapStateToProps = (state) => {
  return {
    onePinInfo: state.onePinInfo
  }
}

export default connect(mapStateToProps)(ViewPins)
