import React from 'react'
// import connect from 'react-redux'
import {Map, TileLayer, Marker} from 'react-leaflet'
// const {Map, TileLayer, Marker} = window.ReactLeaflet

class RealMap extends React.Component {
  constructor () {
    super()
    this.state = {
      markers: [[-36.8484, 174.7622]]
    }
    this.addMarker = this.addMarker.bind(this)
  }

  addMarker (e) {
    const markers = this.state.markers
    markers.push(e.latlng)
    console.log(markers)
    this.setState({markers})
  }

  render () {
    return (
      <div id="Map">
        <Map id="map"
          center={[-36.8484, 174.7622]}
          onClick={this.addMarker}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {this.state.markers.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position} />

          )}
        </Map>
        {this.state.Marker}
      </div>

    )
  }
}
export default RealMap
