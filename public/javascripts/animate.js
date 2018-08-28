///////////// Animation //////////

// Grab all elements by trigger ClassName
var setTriggers = function(trigger) {
var elements = document.getElementsByClassName(trigger);
  return elements;
};

// Set scroll listener, load trigger objects, and set trigger points
function animateListener(setTriggers) {
document.addEventListener('scroll', function (e) {
  var top = window.pageYOffset + window.innerHeight;
  for (var i = 0; i < setTriggers.length; i++) {
    if (setTriggers[i].offsetTop < top) {
      setTriggers[i].classList.add('animate');
    }
  }
});
}




