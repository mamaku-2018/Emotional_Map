import React from 'react'
import {connect} from 'react-redux'
import {Map, TileLayer} from 'react-leaflet'

class ViewPinMap extends React.Component {
  componentDidMount() {
    // this.props.dispatch(getPinLocation())
  }
  render () {
    return (

      <Map className ="map" center= {[-36.8485, 174.7633]} zoom={12}>

        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </Map>
    )
  }

}

export default connect () (ViewPinMap)
