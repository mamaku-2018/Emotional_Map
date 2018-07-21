import React from 'react'
import {Polygon, Map, TileLayer} from 'react-leaflet'

class AreaMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      area_id: 1,
      area_name: 'mt eden',
      positions: [
        [-36.867847, 174.759383],
        [-36.867818, 174.768261],
        [-36.874631, 174.766384],
        [-36.877980, 174.767106],
        [-36.900534, 174.759828],
        [-36.894807, 174.739922],
        [-36.877137, 174.745627],
        [-36.874758, 174.737494],
        [-36.867621, 174.757461]

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
