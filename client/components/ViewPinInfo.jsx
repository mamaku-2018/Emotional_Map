import React from 'react'
import {connect} from 'react-redux'
import HidePinInfo from './HidePinInfo'
import {emotionReturn} from '../lib/emotionReturn'

class ViewPinInfo extends React.Component {
  render () {
    const emotInfo = emotionReturn(this.props.onePinInfo.emotion_type)
    return (
      <div className='ViewPinInfo'>
        <h3>{this.props.onePinInfo.pin_name}</h3>
        {/* <p>{this.props.onePinInfo.pin_name}</p> */}
        <p>{this.props.onePinInfo.last_updated_date}</p>
        <img className='viewEmo' src={emotInfo.path} alt={emotInfo.name}/>
        {/* <p>{this.props.onePinInfo.emotion_type}</p> */}
        <p className='commentsView'>{this.props.onePinInfo.comment}</p>
        <div className='PinInfo'>
          <HidePinInfo />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    onePinInfo: state.onePinInfo
  }
}

export default connect(mapStateToProps)(ViewPinInfo)
