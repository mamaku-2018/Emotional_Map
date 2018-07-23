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
        <img src="/images/DownArrow.png" alt="Hide Pin" onClick={this.hidePin}/>
      </div>
    )
  }
}
export default connect()(HidePinInfo)
