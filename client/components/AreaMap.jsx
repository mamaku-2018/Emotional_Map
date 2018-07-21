import React from 'react'
import {Polygon, Map, TileLayer} from 'react-leaflet'

class AreaMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      positions: [
        [-36.848461, 174.763336],
        [-36.908461, 174.903336],
        [-36.748461, 174.883336],
        [-36.848461, 174.763336]
      ]
    }
  }

  addMarker (e) {
    this.setState({
      lat: e.latlng.lat,
      lng: e.latlng.lng
    })
  }

  render () {
    return (
      <div id='addPage'>
        <Map className="map"
          center={[-36.8484, 174.7622]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />

          <Polygon positions={this.state.positions} />

        </Map>

      </div>

    )
  }
}
export default (AreaMap)
