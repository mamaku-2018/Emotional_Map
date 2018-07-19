import React from 'react'
import connect from 'react-redux'
import getPinInfo from '../actions/mapping'
import {Map, TileLayer, Marker,Popup} from 'react-leaflet'

class ViewAreas extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
      }
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    areaInfo: state.areaInfo
  }
}

export default connect(mapStateToProps) (ViewAreas)