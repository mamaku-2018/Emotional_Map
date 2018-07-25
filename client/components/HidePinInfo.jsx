import React from 'react'
import {connect} from 'react-redux'
import {removeOnePin} from '../actions/pins'

class HidePinInfo extends React.Component {
  constructor (props) {
    super(props)
    this.hidePin = this.hidePin.bind(this)
  }
  hidePin () {
    this.props.dispatch(removeOnePin())
  }
  render () {
    return (
      <div>
        <button className='hidepin' onClick={this.hidePin}>Close</button>
      </div>
    )
  }
}
export default connect()(HidePinInfo)
