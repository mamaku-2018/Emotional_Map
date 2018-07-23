import React from 'react'
import {connect} from 'react-redux'
import {Map, TileLayer, Marker} from 'react-leaflet'
import {getpins, getOnePin} from '../actions/pins'
import {getIcons} from '../lib/getIcons'
import L from 'leaflet'

class ViewPinMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showPinInfo: false
    }
    this.pullPin = this.pullPin.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getpins())
  }

  pullPin (pin) {
    let id = pin.pin_id
    this.props.dispatch(getOnePin(id))
  }

  render () {
    return (
      <div className='viewMap'>
        <Map className ="map"
          center= {[-36.8484, 174.7622]}
          zoom={13}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {this.props.pinInfo.map(pin => {
            return <Marker key={pin.pin_name} onClick={() => { this.pullPin(pin) }} icon={getIcons(pin.emotion_type)} position={[pin.pin_lat, pin.pin_long]} />
          })}
        </Map>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  if (state.pinInfo.length > 0) {
    return {pinInfo: state.pinInfo
    }
  } else {
    return {pinInfo: []}
  }
}

export default connect(mapStateToProps)(ViewPinMap)
