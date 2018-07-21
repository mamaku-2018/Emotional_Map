import React from 'react'
import {connect} from 'react-redux'
import ViewPinMap from './ViewPinMap'
import {Route} from 'react-router'
class ViewPins extends React.Component {


  render () {
    return (
      <div>
        <ViewPinMap/>
  
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    onePinInfo: state.onePinInfo
  }
}

export default connect(mapStateToProps)(ViewPins)
