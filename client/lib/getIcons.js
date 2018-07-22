import L from 'leaflet'

export function getIcons (id) {
  const myIcon = L.icon({
    iconUrl: '',
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  })
  switch (id) {
    case 1:
      myIcon.options.iconUrl = '/images/Dark.png'
      break
    case 2:
      myIcon.options.iconUrl = '/images/Indigo.png'
      break
    case 3:
      myIcon.options.iconUrl = '/images/Pink.png'
      break
    case 4:
      myIcon.options.iconUrl = '/images/Purple.png'
      break
    case 5:
      myIcon.options.iconUrl = '/images/Red.png'
      break
    case 6:
      myIcon.options.iconUrl = '/images/Yellow.png'
      break
  }
  return myIcon
}
