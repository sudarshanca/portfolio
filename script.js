function toggleNav() {
  let toggleBtn = document.querySelector('.hanburger-menu');
  let links = document.querySelector('.links');
  toggleBtn.classList.toggle('cross');
  links.classList.toggle('show');
}


window.onscroll = function() {scrollFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;

function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function handleScrollAnimation() {
  var elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation); // Also check on initial load
