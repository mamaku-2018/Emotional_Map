import React from 'react'
import {connect} from 'react-redux'
import {removeOnePin} from '../actions/pins'

const HidePinInfo = (props) => {
  function hidePin () {
    this.props.dispatch(removeOnePin())
  }
  return (
    <div>
      <img src="/images/DownArrow.png" alt="Hide Pin" onClick={hidePin}/>
    </div>
  )
}

export default connect()(HidePinInfo)
