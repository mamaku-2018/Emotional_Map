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

        {/* Modal Button to raise instruction bar */}
        {/* Need to convert to an onClick event rather than button */}

        <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.updateAll}>
             Click
          </button>
        </div>

        {/* <!-- Modal --> */}
        {/* Need to change focus of background */}

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Information notice</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input className="form-control" type="text" id="staticMsg" value="" readOnly/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
// export default RealMap
export default connect()(RealMap)
