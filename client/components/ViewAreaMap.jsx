import React from 'react'
import {connect} from 'react-redux'

import {Polygon, Map, TileLayer} from 'react-leaflet'
import {getAreas} from '../actions/areas'

class ViewAreaMap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount () {
    this.props.dispatch(getAreas())
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
          { this.props.area.map(area => {
            return <Polygon key={area.area_id} positions={area.positions} />
          })

          }
        </Map>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  if (state.areasInfo.length > 0) {
    return {
      area: (state.areasInfo)
    }
  } else {
    return {
      area: []
    }
  }
}
export default connect(mapStateToProps)(ViewAreaMap)
