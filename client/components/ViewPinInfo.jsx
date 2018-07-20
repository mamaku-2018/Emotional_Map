import React from 'react'
import {connect} from 'react-redux'

class ViewPinInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className='ViewPinInfo'>
        <h3>Pin info</h3>
        <div className='PinInfo'>
          <p>{this.state.name}</p>
          <p>{this.state.emotion}</p>
          <p>{this.state.comment}</p>
          <p>{this.state.date}</p>

        </div>
      </div>
    )
  }
}
export default ViewPinInfo
