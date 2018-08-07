const mapboxgl = require('mapbox-gl')

const buildMarker = (type, arrLngLat) => {
 
  let typeMarker
  switch (type) {
    case 'hotel':
      typeMarker = 'url(http://i.imgur.com/D9574Cu.png)'
      break
    case 'activity':
      typeMarker = 'url(http://i.imgur.com/WbMOfMl.png)'
      break
    case 'restaurant':
      typeMarker = 'url(http://i.imgur.com/cqR6pUI.png)'
      break
    default:
      typeMarker = 'url(http://i.imgur.com/WbMOfMl.png)'
  }

  const markerDomEl = document.createElement('div')
  markerDomEl.style.width = '32px'
  markerDomEl.style.height = '39px'
  markerDomEl.style.backgroundImage = typeMarker
  const newMap = new mapboxgl.Marker(markerDomEl).setLngLat(arrLngLat)

  return newMap
}

module.exports = buildMarker
