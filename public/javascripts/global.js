// Test Animation

document.addEventListener('scroll', function (e) {
  var top = window.pageYOffset + window.innerHeight,
  // isVisible = top > document.querySelector('#test > div').offsetTop;
  isVisible0 = top > document.querySelector('.card-deck > div').offsetTop,
  isVisible1 = top > document.querySelector('.portfolio > div').offsetTop;
  if (isVisible0) {
    document.getElementsByClassName('card-deck')[0].classList.add('animate');
  }
  if (isVisible1) {
    document.getElementsByClassName('portfolio')[0].classList.add('animate');
  }
});

