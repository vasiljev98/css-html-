var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/инструктор.jpg') {
      myImage.setAttribute ('src','images/инструктор2.jpg');
    } else {
      myImage.setAttribute ('src','images/инструктор.jpg');
    }
}