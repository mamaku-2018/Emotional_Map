import L from 'leaflet'

export function getIcons (id) {
  id = parseInt(id)
  const myIcon = L.icon({
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [-3, -76]
  })
  switch (id) {
    case 1:
      myIcon.options.iconUrl = '/images/Happy.png'
      break
    case 2:
      myIcon.options.iconUrl = '/images/Sad.png'
      break
    case 3:
      myIcon.options.iconUrl = '/images/Mad.png'
      break
    case 4:
      myIcon.options.iconUrl = '/images/Scared.png'
      break
    case 5:
      myIcon.options.iconUrl = '/images/Powerful.png'
      break
    case 6:
      myIcon.options.iconUrl = '/images/Peaceful.png'
      break
    default:
      myIcon.options.iconUrl = '/images/Happy.png'
  }
  return myIcon
}

export function setPolyColor (id) {
  id = parseInt(id)
  let polyColor = ''

  switch (id) {
    case 1:
      polyColor = 'red'
      break
    case 2:
      polyColor = 'blue'
      break
    case 3:
      polyColor = 'white'
      break
    case 4:
      polyColor = 'yellow'
      break
    case 5:
      polyColor = 'orange'
      break
    case 6:
      polyColor = 'navy'
      break
    case 7:
      polyColor = 'black'
      break
    case 8:
      polyColor = 'navy'
      break

    default: polyColor = 'gray'
  }
  return polyColor
}
