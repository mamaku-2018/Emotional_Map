import React from 'react'
import connect from 'react-redux'
import L from 'leaflet'
class ViewMap extends React.Component {
  componentDidMount () {
    // create map
    this.map = L.map('map', {
      center: [-36.8484, 174.7622],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    })
    this.marker = L.marker(this.props.markerPosition).addTo(this.map)
  }

  render () {
    return <div className="Map" id="map">xx</div>
  }
}

export default ViewMap
