import * as turf from '@turf/turf'

export function isPolygon (lat, long, polygons) {
  var count = 0
  var point = [lat, long]
  for (var i = 0; i < polygons.length(); i++) {
    var polygon = polygons[i]
    var ptsWithin = turf.pointsWithinPolygon(point, polygon)
    if (ptsWithin === true) {
      return count
    } else { count += 1 }
  }
}
