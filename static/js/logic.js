// Create a map centered on a geographical area (e.g., [37.09, -95.71] for the US)
let myMap = L.map("map").setView([37.09, -95.71], 2);

// Add a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(myMap);

// URL for the earthquake data
let earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Fetch earthquake data using D3
d3.json(earthquakeUrl).then(function(data) {
    // Function to set marker size based on magnitude
    function markerSize(magnitude) {
        return magnitude * 4;
    }

    // Function to set marker color based on depth using named colors
    function markerColor(depth) {
        return depth > 90 ? "red" :
               depth > 70 ? "orange" :
               depth > 50 ? "gold" :
               depth > 30 ? "yellow" :
               depth > 10 ? "greenyellow" :
                            "green";
    }

    // Add GeoJSON layer to the map
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng, {
                radius: markerSize(feature.properties.mag),
                fillColor: markerColor(feature.geometry.coordinates[2]),
                color: "#000",
                weight: 0.5,
                opacity: 1,
                fillOpacity: 0.8
            });
        },
        // Add popups
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]} km</p>`);
        }
    }).addTo(myMap);
});

// Add legend to the map
let legend = L.control({ position: "bottomright" });
legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    let depths = [-10, 10, 30, 50, 70, 90];
    let colors = ["green", "greenyellow", "yellow", "gold", "orange", "red"];
    
    // Loop through the depths and generate a label with a colored square for each interval
    for (let i = 0; i < depths.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
    }
    return div;
};
legend.addTo(myMap);
