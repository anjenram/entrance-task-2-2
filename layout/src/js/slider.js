(function () {
const devices = document.querySelector('.devices')
const slider = devices.querySelector('.device__control');
const sliderOverflow = devices.querySelector('.list__device');
const sliderLeft = slider.querySelector('.arrow__left');
const sliderRight = slider.querySelector('.arrow__right');
const script = document.querySelector('.scripts')
const sliderScript = script.querySelector('.script__control');
const sliderScriptOverflow = script.querySelector('.list__script');
const sliderScriptLeft = sliderScript.querySelector('.arrow__left');
const sliderScriptRight = sliderScript.querySelector('.arrow__right');

function animateScrollLeft( element, distance, duration ) {
  var steps = (Math.abs(distance)/duration)*60;
  var tick = distance/steps;
  function step() {
    element.scrollLeft = element.scrollLeft + tick;
    if(steps-- > 0) {
        window.requestAnimationFrame(step);      
    }
  }
  window.requestAnimationFrame(step);
}
function animateScrollTop( element, distance, duration ) {
    var steps = (Math.abs(distance)/duration)*100;
    var tick = distance/steps;
    function step() {
        element.style.marginBottom = steps + 'px'
      if(steps-- > 0) {
          window.requestAnimationFrame(step);      
      }
    }
    element.style.marginTop = step + 'px'
    
    window.requestAnimationFrame(step);
  }
function animateScrollBottom( element, distance, duration ) {
    var steps = (Math.abs(distance)/duration)*100;
    var tick = distance/steps;
    console.log( )
    steps = steps + 100
    function step() {
        
        element.style.marginBottom = -steps  + 'px'
      if(steps-- < 0) {
          window.requestAnimationFrame(step);      
      }
    }
    element.style.marginBottom = -step + 'px'
    
    window.requestAnimationFrame(step);
  }
sliderRight.addEventListener('click', function(){
  var slideOffset = 100 + (parseInt(window.getComputedStyle(sliderOverflow).marginLeft) * 2);
  var goTo = slideOffset;
  animateScrollLeft( sliderOverflow, goTo, 3000 );
});

sliderLeft.addEventListener('click', function(){
  var slideOffset = 100 - (parseInt(window.getComputedStyle(sliderOverflow).marginLeft) * 2);
  var goTo = slideOffset * -1;
  animateScrollLeft( sliderOverflow, goTo, 3000 );
});
sliderScriptRight.addEventListener('click', function(){ 
    var slideOffset = 100 + (parseInt(window.getComputedStyle(sliderScriptOverflow).marginLeft) * 2);
    var goTo = slideOffset;
    animateScrollLeft( sliderScriptOverflow, goTo, 3000 );
  });
  
sliderScriptLeft.addEventListener('click', function(){
    var slideOffset = 100 - (parseInt(window.getComputedStyle(sliderScriptOverflow).marginLeft) * 2);
    var goTo = slideOffset * -1;
    animateScrollLeft( sliderScriptOverflow, goTo, 3000 );
  });



const Bitmap = document.querySelector('.bitmap__list');


const bitmapSlider = Bitmap.querySelector('.list__device')
const elBitmapSlider = bitmapSlider.querySelector('.list__device__item')


}());