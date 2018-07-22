import L from 'leaflet'

export function getIcons (id) {
  id = parseInt(id)
  const myIcon = L.icon({
    iconSize: [30, 38],
    iconAnchor: [22, 94],
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
