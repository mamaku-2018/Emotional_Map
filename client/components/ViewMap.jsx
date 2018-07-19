import React from 'react'
import {connect} from 'react-redux'
import {Map, TileLayer} from 'react-leaflet'

class ViewMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <Map className ="Map" center= {[-36.8485, 174.7633]} zoom={12}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </Map>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    areaInfo: state.areaInfo
  }
}

export default connect(mapStateToProps)(ViewMap)
