import React from 'react'
import {connect} from 'react-redux'
import {Map, TileLayer, Marker, Polygon} from 'react-leaflet'
import {getpins, getOnePin} from '../actions/pins'
import {getAreas} from '../actions/areas'
import {getIcons} from '../lib/getIcons'

export class ViewPinMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showPinInfo: false
    }
    this.pullPin = this.pullPin.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getpins())
    this.props.dispatch(getAreas())
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
          style={{height: '100vh'}}
          zoom={13}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://api.mapbox.com/styles/v1/caitlynbayley/cjjz5qbg30rno2sp1672pkjun/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FpdGx5bmJheWxleSIsImEiOiJjamp6Mm54ajYwMnp1M2tvOW1hOXFpOGQ2In0.jPESzZHHCsCCNOJka8GAlQ'
          />
          {this.props.pinInfo.map(pin => {
            return <Marker key={pin.pin_id} onClick={() => { this.pullPin(pin) }} icon={getIcons(pin.emotion_type)} position={[pin.pin_lat, pin.pin_long]} />
          })}

          { this.props.area.map(area => {
            return <Polygon key={area.area_id} positions={area.positions} />
          }) }
        </Map>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  var tmpArea = []
  let tmpPinInfo = []
  if (state.areasInfo.length > 0 && state.pinInfo.length > 0) {
    return {
      area: state.areasInfo,
      pinInfo: state.pinInfo
    }
  } else {
    return {
      area: tmpArea,
      pinInfo: tmpPinInfo
    }
  }
}

export default connect(mapStateToProps)(ViewPinMap)
