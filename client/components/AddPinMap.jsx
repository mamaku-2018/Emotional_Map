import React from 'react'
// import connect from 'react-redux'
import {Map, TileLayer, Marker} from 'react-leaflet'
// const {Map, TileLayer, Marker} = window.ReactLeaflet

class RealMap extends React.Component {
  constructor () {
    super()
    this.state = {
      lat: '',
      lng: ''
    }
    this.addMarker = this.addMarker.bind(this)
  }

  addMarker (e) {
    // const markers = this.state.markers
    // markers.push(e.latlng)
    // console.log(markers)
    this.setState({
      lat: e.latlng.lat,
      lng: e.latlng.lng
    })
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
export default RealMap
