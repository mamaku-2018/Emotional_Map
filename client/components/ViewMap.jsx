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
    // add marker
    this.marker = L.marker([-36.8484, 174.7622]).addTo(this.map)
    this.marker = L.marker([-36.8482, 174.7622]).addTo(this.map)
    this.marker = L.marker([-36.8470, 174.7628]).addTo(this.map)



  }

  render () {
    return <div className="Map" id="map">xx</div>
  }
}

export default ViewMap
