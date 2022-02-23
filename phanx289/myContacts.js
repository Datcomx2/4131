

function thumbnailToggle(img, id) {
    var imag = document.getElementById(id);
    var myimg = imag.getElementsByTagName('img')[0];
    myimg.src = img;
    myimg.style.display = 'block';
    myimg.style.height = '100px';
    myimg.style.width = '100px';
}

function hideImg(id) {
    var imag = document.getElementById(id);
    var myimg = imag.getElementsByTagName('img')[0];
    myimg.src = "";
    myimg.style.display = 'none';
}
function chgimg(name, txt) {
        var theimage = document.getElementById('standard');
        theimage.src = name;
        theimage.alt = txt;
}
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.9727, lng: -93.2296267 },
    zoom: 16,
  });
}

var marker = new google.maps.Marker({
    position:{lat:"something,",lng:"something"},
    map: map,
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
})


function showTableDat(row) {
    var tablerow = document.getElementById(row);
    return tablerow[2];
}
var address = [];
address.push(showTableDat('row1'));
address.push(showTableDat('row2'));
address.push(showTableDat('row3'));
address.push(showTableDat('row4'));
address.push(showTableDat('row5'));

var geocoder;
var map;
function init() {
    geocoder = new google.maps.Geocoder();
}

function codeAddress() {
    for(var i = 0; i < 4; i++){
        var addresses = address[i];
        geocoder.geocode( { 'address': addresses}, function(results, status) {
            if (status == 'OK') {
              map.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
                  map: map,
                  position: results[0].geometry.location,
                  icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
              });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });
    }
  }
