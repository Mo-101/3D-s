mapboxgl.accessToken = 'pk.eyJ1IjoiYWthbmltbzEiLCJhIjoiY2xkN2xhcnNsMDgzZDN1cWQwd254dDZsdiJ9.urWYf-S87cN_NaGRzRqknw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/akanimo1/clw5v46tv018i01pf5rsed2ko',
    center: [37.95309411, 0.689918232], // Nairobi
    zoom: 3,
    pitch: 45
});

const data = [
    { source: [37.95309411, 0.689918232, 0], target: [-9.258988935, 6.520129794, 0] }, // Nairobi to Liberia
    { source: [37.95309411, 0.689918232, 0], target: [27.75521363, -13.16283295, 0] }, // Nairobi to Zambia
    { source: [37.95309411, 0.689918232, 0], target: [-11.45992003, 9.93288216, 0] }, // Nairobi to Guinea
    { source: [37.95309411, 0.689918232, 0], target: [35.20857703, -17.52523031, 0] }, // Nairobi to Mozambique
    { source: [37.95309411, 0.689918232, 0], target: [14.87973285, -0.72943916, 0] }, // Nairobi to Congo Brazzaville
    { source: [37.95309411, 0.689918232, 0], target: [10.42545667, 1.595464394, 0] }, // Nairobi to Equatorial Guinea
    { source: [37.95309411, 0.689918232, 0], target: [37.4100337, -4.48570951, 0] }, // Nairobi to Comoros
    { source: [37.95309411, 0.689918232, 0], target: [-23.98864515, 16.0231238, 0] }, // Nairobi to Cabo Verde
    { source: [37.95309411, 0.689918232, 0], target: [32.34371768, 1.282172922, 0] }, // Nairobi to Uganda
    { source: [37.95309411, 0.689918232, 0], target: [-15.38338039, 13.42861796, 0] }, // Nairobi to Gambia
    { source: [37.95309411, 0.689918232, 0], target: [-15.2892117, 11.7007734, 0] }, // Nairobi to Guinea Bissau
    { source: [37.95309411, 0.689918232, 0], target: [59.01901617, -15.42574413, 0] }, // Nairobi to Mauritius
    { source: [37.95309411, 0.689918232, 0], target: [31.46277335, -26.517661, 0] }, // Nairobi to Eswatini
    { source: [37.95309411, 0.689918232, 0], target: [8.86863247, 17.08105392, 0] }, // Nairobi to Niger
    { source: [37.95309411, 0.689918232, 0], target: [11.8394109, -0.62844846, 0] }, // Nairobi to Gabon
    { source: [37.95309411, 0.689918232, 0], target: [24.68706875, -22.34278452, 0] }, // Nairobi to Botswana
    { source: [37.95309411, 0.689918232, 0], target: [6.84570896, 0.24103452, 0] }, // Nairobi to Sao Tome And Principe
    { source: [37.95309411, 0.689918232, 0], target: [29.91943968, -2.01468746, 0] }, // Nairobi to Rwanda
    { source: [37.95309411, 0.689918232, 0], target: [12.94847414, 6.294168487, 0] }, // Nairobi to Cameroon
    { source: [37.95309411, 0.689918232, 0], target: [20.52074342, 6.331390034, 0] }, // Nairobi to Central African Republic
    { source: [37.95309411, 0.689918232, 0], target: [30.38518569, 7.657782042, 0] }, // Nairobi to South Sudan
    { source: [37.95309411, 0.689918232, 0], target: [29.88518228, -3.261251993, 0] }, // Nairobi to Burundi
    { source: [37.95309411, 0.689918232, 0], target: [21.730006, -4.033516, 0] }, // Nairobi to DRC
    { source: [37.95309411, 0.689918232, 0], target: [8.660743038, 0.899085757, 0] }, // Nairobi to Togo
    { source: [37.95309411, 0.689918232, 0], target: [8.42228531, -11.83748596, 0] }, // Nairobi to Sierra Leone
    { source: [37.95309411, 0.689918232, 0], target: [17.16814621, -4.346399842, 0] }, // Nairobi to Mali
    { source: [37.95309411, 0.689918232, 0], target: [34.81832206, -6.35579444, 0] }, // Nairobi to Tanzania
    { source: [37.95309411, 0.689918232, 0], target: [7.945304672, -1.219233363, 0] }, // Nairobi to Ghana
    { source: [37.95309411, 0.689918232, 0], target: [9.2609029, -6.23439017, 0] }, // Nairobi to Guinea Conakry
    { source: [37.95309411, 0.689918232, 0], target: [39.38101199, -6.099972, 0] }, // Nairobi to Zanzibar
    { source: [37.95309411, 0.689918232, 0], target: [9.5030132, 2.305714529, 0] }, // Nairobi to Benin
    { source: [37.95309411, 0.689918232, 0], target: [28.23346985, -29.62318995, 0] }, // Nairobi to Lesotho
    { source: [37.95309411, 0.689918232, 0], target: [7.46647918, -5.5475192, 0] }, // Nairobi to Côte d'Ivoire
    { source: [37.95309411, 0.689918232, 0], target: [30.25399485, 15.69090937, 0] }, // Nairobi to Sudan
    { source: [37.95309411, 0.689918232, 0], target: [46.3036839, 5.24736197, 0] }, // Nairobi to Somalia
    { source: [37.95309411, 0.689918232, 0], target: [45.1557827, -12.80654985, 0] }, // Nairobi to Mayotte
];

const deckLayer = new deck.MapboxLayer({
    id: 'arc-layer',
    type: deck.ArcLayer,
    data: data,
    getSourcePosition: d => d.source,
    getTargetPosition: d => d.target,
    getSourceColor: [246, 250, 10],
    getTargetColor: [10, 250, 178],
    getWidth: 3,
    greatCircle: true,
    greatcurve: false,
    getTilt: 60, // Adjusted tilt for natural curve
    getHeight: d => d.height || 0.6, // Use dynamic height property
    extrude: true,
    getDashArray: [5, 5] // Dash pattern [dash length, gap length]
});

map.on('load', function () {
    map.addLayer(deckLayer);

    let startTime;
    const duration = 10000;

    const frame = (time) => {
        if (!startTime) startTime = time;
        const animationPhase = (time - startTime) / duration;

        const animatedData = data.map(d => {
            const [sourceLng, sourceLat] = d.source;
            const [targetLng, targetLat] = d.target;

            const interpolatedLng = sourceLng + (targetLng - sourceLng) * animationPhase;
            const interpolatedLat = sourceLat + (targetLat - sourceLat) * animationPhase;

            return {
                ...d,
                target: [
                    interpolatedLng,
                    interpolatedLat,
                    animationPhase < 1 ? 10 * animationPhase : 10 // Animate height
                ]
            };
        });

        deckLayer.setProps({ data: animatedData });

        if (animationPhase < 1) {
            window.requestAnimationFrame(frame);
        } else {
            startTime = time; // Continue looping without delay
            window.requestAnimationFrame(frame);
        }
    };

    window.requestAnimationFrame(frame);
});
