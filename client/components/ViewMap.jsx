import React from 'react'
import connect from 'react-redux'
const { Map, TileLayer, Marker } = window.ReactLeaflet

class ViewMap extends React.Component {
  constructor() {
    super()
    this.state = {
      markers: [[-36.8484, 174.7622]]
    }
  }

  addMarker = (e) => {
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
  }

  render() {
    return (
      <Map 
        center={[-36.8484, 174.7622]} 
        onClick={this.addMarker}
        zoom={13} 
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position} />
    
        
        )}
      </Map>
    )
  }

export default ViewMap





// componentDidMount () {
//   // create map
//   this.map = L.map('map', {
//     center: [-36.8484, 174.7622],
//     zoom: 16,
//     layers: [
//       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       })
//     ]
//   })
//   // add marker
//   this.marker = L.marker([-36.8484, 174.7622]).addTo(this.map)
//   this.marker = L.marker([-36.8482, 174.7622]).addTo(this.map)
//   this.marker = L.marker([-36.8470, 174.7628]).addTo(this.map)

// }

// render () {
//   return <div className="Map" id="map">xx</div>
// }
// }