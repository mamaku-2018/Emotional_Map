import React from 'react'
import {connect} from 'react-redux'
import {emotionReturn} from '../lib/emotionReturn'

class ViewAreaInfo extends React.Component {
  render () {
    let pinArr = this.props.pinInfo.filter(pin => {
      return pinInfo.area_id === this.props.areaId
    })
    return (
      <div>
        <h3> Area Information </h3>
        {pinArr.map(pin => {
          <div key={pin.pin_id}>
            <h4> pin name </h4>
            <p> {pin.pin_name} </p>
            <img src={emotionReturn(pin.emotion_type)}/>
            <h4>Comments</h4>
            <p> {pin.comment} </p>
          </div>
        })}
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    pinInfo: state.pinInfo,
    areaId: state.areaId
  }
}

export default connect(mapStateToProps)(ViewAreaInfo)
