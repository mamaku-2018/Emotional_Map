import React from 'react'
import connect from 'react-redux'

class Map extends React.Component {
  componentDidMount(){
    this.map()
  }
  map () {
    var map  = L.map('map').setView([-36, 174], 13)
  }
  render () {
    return <div id="map">xx</div>
  }
}

export default Map