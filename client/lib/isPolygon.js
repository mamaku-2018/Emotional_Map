import * as turf from '@turf/turf'

export function isPolygon (lat, long, polygons) {
  if (polygons.length === 0) { return [] }
  var polygonArr = polygons.map(polygon => {
    return polygon.positions
  })
  var count = 1
  var endCount = 0
  var point = turf.point([lat, long])
  polygonArr.map(polygon => {
    var polygonTmp = []
    polygonTmp.push(polygon)

    var poly = turf.polygon(polygonTmp)
    var ptsWithin = turf.booleanPointInPolygon(point, poly)
    if (ptsWithin === true) {
      endCount = count
    } else { count += 1 }
  })
  return endCount
}
