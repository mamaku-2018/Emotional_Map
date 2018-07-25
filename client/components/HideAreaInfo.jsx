import React from 'react'
import {connect} from 'react-redux'
import {removeAreaId} from '../actions/areas'

class HideAreaInfo extends React.Component {
  constructor (props) {
    super(props)
    this.hidePin = this.hidePin.bind(this)
  }
  hidePin () {
    this.props.dispatch(removeAreaId())
  }
  render () {
    return (
      <div>
        <button className='hidearea' onClick={this.hidePin}>Close</button>
      </div>
    )
  }
}
export default connect()(HideAreaInfo)
