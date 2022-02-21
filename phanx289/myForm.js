let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.9727, lng: -93.2296267 },
    zoom: 16,
  });
}