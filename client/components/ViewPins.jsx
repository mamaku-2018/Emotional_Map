import React from 'react'
import {connect} from 'react-redux'
import ViewPinMap from './ViewPinMap'
import ViewPinInfo from './ViewPinInfo'
import {Route} from 'react-router'
class ViewPins extends React.Component {


  render () {

    return (
      <div>
        <ViewPinMap/>
        {typeof this.props.onePinInfo.pin_name === 'string' && <ViewPinInfo/>}
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
