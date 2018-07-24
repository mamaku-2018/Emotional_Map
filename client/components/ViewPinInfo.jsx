import React from 'react'
import {connect} from 'react-redux'
import {emotionReturn} from '../lib/emotionReturn'
class ViewPinInfo extends React.Component {
  render () {
    const emotInfo = emotionReturn(this.props.onePinInfo.emotion_type)
    return (
      <div className='ViewPinInfo'>
        <h3>{this.props.onePinInfo.pin_name}</h3>
        {/* <p>{this.props.onePinInfo.pin_name}</p> */}
        <p>{this.props.onePinInfo.last_updated_date}</p>
        <img src={emotInfo.path} alt={emotInfo.name}/>
        <p>{emotInfo.name}</p>
        {/* <p>{this.props.onePinInfo.emotion_type}</p> */}
        <p>{this.props.onePinInfo.comment}</p>
        <button className='closeButton'

        >
          Close
        </button>
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
