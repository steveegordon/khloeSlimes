// Test Animation

document.addEventListener('scroll', function (e) {
  var top = window.pageYOffset + window.innerHeight,
  isVisible = top > document.querySelector('#test > div').offsetTop;

  if (isVisible) {
    document.getElementById('test').classList.add('animate');
  }
});