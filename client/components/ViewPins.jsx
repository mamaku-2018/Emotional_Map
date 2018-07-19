import React from 'react'
<<<<<<< HEAD
import L from 'leaflet'
class ViewMap extends React.Component {
  componentDidMount () {
    this.map()
  }
  map () {
    var map = L.map('map').setView([-36.848460, 174.763332], 12)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  }
  render () {
    return <div className="Map" id="map">xx</div>
  }
}

export default ViewMap
=======

const ViewPins = () => {
  return (
    <div className='view-container'>
      <h1>view pins</h1>
    </div>
  )
}

export default ViewPins
>>>>>>> 8b96a5edebfd7300cfaa06dee317a023bafe4369
