

function thumbnailToggle(img, id) {
    var imag = document.getElementById(id);
    var myimg = imag.getElementsByTagName('img')[0];
    console.log("hi");
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