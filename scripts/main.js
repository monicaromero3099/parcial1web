// rotate Animation

var rotateDegre = document.querySelector('.container__line');
var randomNumber;
var text = document.querySelector('.container__deg');

function handleLoad (){

  function handleRotate() {

    randomNumber= Math.floor(Math.random() * Math.floor(360))
    rotateDegre.style.transform ='rotate('+randomNumber+'deg)'; 

    text.textContent = randomNumber+ ' deg';
  }

setInterval(handleRotate,2000);

}

window.addEventListener('load', handleLoad);
