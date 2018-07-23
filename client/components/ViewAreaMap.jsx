import React from 'react'
import {connect} from 'react-redux'

import {Polygon, Map, TileLayer} from 'react-leaflet'
import {getAreas, receiveAreaId} from '../actions/areas'
import ViewAreaInfo from './ViewAreaInfo'

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
    this.props.dispatch(receiveAreaId(area.area_id))
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
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          { this.props.area.map(area => {
            return <Polygon key={area.area_id} positions={area.positions} onClick={() => { this.showInfo(area) }} />
          })

          }
        </Map>
        {this.state.showinfo ? <ViewAreaInfo /> : null}

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
