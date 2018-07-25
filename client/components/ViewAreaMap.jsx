import React from 'react'
import {connect} from 'react-redux'

import {Polygon, Map, TileLayer, Marker} from 'react-leaflet'
import {getAreas, getPinsByAreaId, removePinsByAreaId, receiveAreaId} from '../actions/areas'
import ViewAreaInfo from './ViewAreaInfo'
import {getIcons} from '../lib/getIcons'

class ViewAreaMap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showInfo: false

    }
  }
  componentDidMount () {
    this.props.dispatch(getAreas())
  }

  showInfo (area) {
    // this.props.dispatch(receiveAreaId(area.area_id))
    this.props.dispatch(getPinsByAreaId(area.area_id))
    this.setState = {
      area_id: area.area_id,
      showInfo: true
    }
  }

  render () {
    return (
      <div id='addPage'>
        <Map className="map"
          center={[-36.8484, 174.7622]}
          style={{height: '100vh'}}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://api.mapbox.com/styles/v1/caitlynbayley/cjjz5qbg30rno2sp1672pkjun/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FpdGx5bmJheWxleSIsImEiOiJjamp6Mm54ajYwMnp1M2tvOW1hOXFpOGQ2In0.jPESzZHHCsCCNOJka8GAlQ'
          />
          {this.props.pinInfo.map(pin => {
            return <Marker key={pin.pin_id} onClick={() => { this.pullPin(pin) }} icon={getIcons(pin.emotion_type)} position={[pin.pin_lat, pin.pin_long]} />
          })}
          { this.props.area.map(area => {
            return <Polygon key={area.area_id} positions={area.positions} onClick={() => { this.showInfo(area) }} />
          }) }
        </Map>
        {this.state.showinfo ? <ViewAreaInfo /> : null}

      </div>
    )
  }

  componentWillUnmount () {
    this.props.dispatch(removePinsByAreaId())
  }
}

const mapStateToProps = (state) => {
  var tmpArea = []
  let tmpPinInfo = []
  if (state.areasInfo.length > 0) {
    tmpArea = state.areasInfo
  }

  if (state.pinsByAreaId.length > 0) {
    tmpPinInfo = state.pinsByAreaId
  }

  return {
    area: tmpArea,
    pinInfo: tmpPinInfo
  }
}

export default connect(mapStateToProps)(ViewAreaMap)
