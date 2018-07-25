import React from 'react'
import {connect} from 'react-redux'
import {sendPinPosition, removePinColour, removePinForm} from '../actions/pins'
import {Map, TileLayer, Marker} from 'react-leaflet'
import AddPinInfo from './AddPinInfo'
import {getIcons} from '../lib/getIcons'

export class RealMap extends React.Component {
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
      lng: e.latlng.lng
    })
    this.props.dispatch(sendPinPosition(this.state))
    this.props.dispatch(removePinForm(false))
  }
z
  render () {
    return (
      <div className='addMap'>
        <Map className="map"
          center={[-36.8484, 174.7622]}
          style={{height: '100vh'}}
          onClick={this.addMarker}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://api.mapbox.com/styles/v1/caitlynbayley/cjjz5qbg30rno2sp1672pkjun/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FpdGx5bmJheWxleSIsImEiOiJjamp6Mm54ajYwMnp1M2tvOW1hOXFpOGQ2In0.jPESzZHHCsCCNOJka8GAlQ'
          />
          <Marker position={this.state} icon={getIcons(this.props.pinColour)}/>

        </Map>

        {!this.props.removePinForm ? <AddPinInfo /> : null}

      </div>

    )
  }

  componentWillUnmount () {
    this.props.dispatch(removePinColour())
  }
}

const mapStateToProps = (state) => {
  return {
    removePinForm: state.removePinForm,
    pinColour: state.pinColour

  }
}
// export default RealMap
export default connect(mapStateToProps)(RealMap)
