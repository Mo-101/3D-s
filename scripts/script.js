document.addEventListener("DOMContentLoaded", () => {
    const mapboxToken = 'pk.eyJ1IjoiYWthbmltbzEiLCJhIjoiY2xkN2xhcnNsMDgzZDN1cWQwd254dDZsdiJ9.urWYf-S87cN_NaGRzRqknw';
    const mapboxStyle = 'mapbox://styles/akanimo1/clw5v46tv018i01pf5rsed2ko';
// Initialize the Mapbox map
        mapboxgl.accessToken = mapboxToken;
        const map = new mapboxgl.Map({
            container: 'map-container',
            style: mapboxStyle,
            center: [20.0, 10.0], // Center of the map, can be adjusted as needed
            zoom: 2, // Zoom level, can be adjusted as needed
            pitch: 45 // Tilt the map for a 3D effect
        });

        fetch('data/figma.json')
            .then(response => response.json())
            .then(data => {
                processJsonData(data, map);
            })
            .catch(error => console.error('Error loading JSON:', error));
    });

    function processJsonData(data, map) {
        map.on('load', () => {
            map.addSource('figma-data', {
                'type': 'geojson',
                'data': data
            });

            map.addLayer({
                'id': '3d-buildings',
                'type': 'fill-extrusion',
                'source': 'figma-data',
                'paint': {
                    'fill-extrusion-color': ['get', 'color'],
                    'fill-extrusion-height': ['get', 'height'],
                    'fill-extrusion-base': 0,
                    'fill-extrusion-opacity': 0.9
                }
            });
        });
    }
