import React from 'react'
import {Polygon, Map, TileLayer} from 'react-leaflet'

class AreaMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      area_id: 2,
      area_name: 'City Center',
      positions: [
        [-36.860136, 174.762389],
        [-36.847523, 174.782921],
        [-36.840277, 174.782792],
        [-36.835856, 174.758227],
        [-36.843996, 174.750073],
        [-36.857595, 174.755265],
        [-36.859277, 174.752648],
        [-36.861887, 174.754965],
        [-36.859312, 174.759257]
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
