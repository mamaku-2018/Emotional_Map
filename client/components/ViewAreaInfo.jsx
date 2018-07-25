import React from 'react'
import {connect} from 'react-redux'
import {emotionReturn} from '../lib/emotionReturn'
import {getpins} from '../actions/pins'
import {removeAreaId} from '../actions/areas'
import HideAreaInfo from './HideAreaInfo'
import {getPercentage} from '../lib/getPercentage'

export class ViewAreaInfo extends React.Component {
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
    let percentInfo = getPercentage(pinArr)
    return (
      <div>
        <div>
          {percentInfo.pinTotals.map(pin => {
            return (
              <div key ={pin.key} >
                <h5>%{((pin.total / percentInfo.total) * 100).toFixed(1)}</h5>
                <p>{pin.emotion}</p>
              </div>
            )
          })}
        </div>
        <div className='viewInfo'>
          <div className='ViewAreaInfo'>
            <HideAreaInfo />
            {pinArr.map(pin => {
              return (
                <div key={pin.pin_id}>
                  <p className='pinName'> {pin.pin_name} </p>
                  <img className='areaEmo' src={emotionReturn(pin.emotion_type, true)}/>
                  <p className='comments'> {pin.comment} </p>
                </div>
              )
            })}
          </div>
        </div>
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
