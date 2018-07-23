import React from 'react'
import {connect} from 'react-redux'

import {Polygon, Map, TileLayer} from 'react-leaflet'
import {getAreas} from '../actions/areas'
import ViewAreaInfo from './ViewAreaInfo'

class ViewAreaMap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showInfo: false,
      area_id: []
    }
  }
  componentDidMount () {
    this.props.dispatch(getAreas())
  }

  showinfo (id) {
    
    this.setState({
      showInfo: true,
      area_id: id
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
          { this.props.area.map(area => {
            return <Polygon key={area.area_id} positions={area.positions} onlcick={this.showInfo} />
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
