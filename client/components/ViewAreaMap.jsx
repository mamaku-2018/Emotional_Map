import React from 'react'
import {connect} from 'react-redux'

import {Polygon, Map, TileLayer} from 'react-leaflet'
import {getAreas, receiveAreaId} from '../actions/areas'
import ViewAreaInfo from './ViewAreaInfo'

export class ViewAreaMap extends React.Component {
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
          style={{height: '100vh'}}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://api.mapbox.com/styles/v1/caitlynbayley/cjjz5qbg30rno2sp1672pkjun/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FpdGx5bmJheWxleSIsImEiOiJjamp6Mm54ajYwMnp1M2tvOW1hOXFpOGQ2In0.jPESzZHHCsCCNOJka8GAlQ'
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
