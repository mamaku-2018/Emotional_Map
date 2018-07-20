import React from 'react'
import {connect} from 'react-redux'
import {sendPinPosition} from '../actions/pins'
import {Map, TileLayer, Marker} from 'react-leaflet'

class RealMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: '',
      lng: ''
    }
    this.addMarker = this.addMarker.bind(this)
  }

  addMarker (e) {
    this.setState({
      lat: e.latlng.lat,
      lng: e.latlng.lng
    })
    this.props.dispatch(sendPinPosition(this.state))
  }

  render () {
    return (

      <Map className="map"
        center={[-36.8484, 174.7622]}
        onClick={this.addMarker}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={this.state} />

      </Map>

    )
  }
}
// export default RealMap
export default connect()(RealMap)
