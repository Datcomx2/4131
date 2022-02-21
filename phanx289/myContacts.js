

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
    document.getElementById('row').innerHTML = "";
    
    for (i = 0; i < row.length; i++) {
        var objCells = row.item(i);
        row.innerHTML = info.innerHTML + " " + objCells;
    }
}