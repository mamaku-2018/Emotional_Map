import React from 'react'
import {connect} from 'react-redux'
import {emotionReturn} from '../lib/emotionReturn'
import {getpins} from '../actions/pins'
import {removeAreaId} from '../actions/areas'

class ViewAreaInfo extends React.Component {
  componentDidMount () {
    this.props.dispatch(getpins())
  }
  componentWillUnmount () {
    this.props.dispatch(removeAreaId())
  }
  render () {
    let pinArr = this.props.pinInfo.filter(pin => {
      return pin.area_id === this.props.areaId
    })
    return (
      <div>
        <h3> Area Information </h3>
        {pinArr.map(pin => {
          return (
            <div key={pin.pin_id}>
              <h4> pin name </h4>
              <p> {pin.pin_name} </p>
              <img src={emotionReturn(pin.emotion_type)}/>
              <h4>Comments</h4>
              <p> {pin.comment} </p>
            </div>
          )
        })}
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  if (state.pinInfo.length > 0) {
    return {
      pinInfo: state.pinInfo,
      areaId: state.areaId

    }
  } else {
    return {
      pinInfo: [],
      areaId: 0
    }
  }
}
export default connect(mapStateToProps)(ViewAreaInfo)
