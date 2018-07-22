import React from 'react'
import {connect} from 'react-redux'

import {Polygon, Map, TileLayer} from 'react-leaflet'
import {getAreas} from '../actions/areas'


class AreaMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.componentDidMount () {
      this.props.dispatch(getAreas())
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
const mapStateToProps = (state) => {
  state.map(areasInfo => {
    return {
      area_id: state.area_id,
      area_name: state.area_name,
       positions: state.positions
    }
  })
  
   
  
}
export default connect(mapStateToProps)(AreaMap)
