import L from 'leaflet'

export function getIcons () {
  const myIcon = L.icon({
    iconUrl: '',
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  })
  myIcon.options.iconUrl = '/images/cool.png'
  return myIcon
}
