import React from 'react'
import {connect} from 'react-redux'
import {sendPinPosition} from '../actions/pins'
import {Map, TileLayer, Marker} from 'react-leaflet'
import AddPinInfo from './AddPinInfo'

class RealMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: '',
      lng: '',
      showAddInfo: false
    }
    this.addMarker = this.addMarker.bind(this)
  }

  addMarker (e) {
    this.setState({
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      showAddInfo: true
    })
    this.props.dispatch(sendPinPosition(this.state))
  }

  render () {
    return (
      <div>
        <Map className="map"
          center={[-36.8484, 174.7622]}
          onClick={this.addMarker}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={this.state} />

        </Map>
        {this.state.showAddInfo ? <AddPinInfo /> : null}
      </div>

    )
  }
}
// export default RealMap
export default connect()(RealMap)
