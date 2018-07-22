import React from 'react'
import {connect} from 'react-redux'

import {Polygon, Map, TileLayer} from 'react-leaflet'
import {getAreas} from '../actions/areas'


class AreaMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
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
