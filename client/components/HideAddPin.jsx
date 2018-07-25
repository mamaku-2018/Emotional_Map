import React from 'react'
import {connect} from 'react-redux'
import {removePinForm} from '../actions/pins'

class HideAddPin extends React.Component {
  constructor (props) {
    super(props)
    this.hidePinForm = this.hidePinForm.bind(this)
  }

  hidePinForm () {
    this.props.dispatch(removePinForm())
  }

  render () {
    return (
      <div>
        <button className='hidepin' onClick={this.hidePinForm}>Close</button>
      </div>
    )
  }
}
export default connect()(HideAddPin)
