// rotate Animation

var rotateDegre = document.querySelector('.container__line');
var randomNumber;

function handleLoad (){

  function handleRotate() {

    randomNumber= Math.floor(Math.random() * Math.floor(360))
    rotateDegre.style.transform ='rotate('+randomNumber+'deg)'; 
  }

setInterval(handleRotate,2000);

}

window.addEventListener('load', handleLoad);
