function toggleNav() {
  let toggleBtn = document.querySelector('.hanburger-menu');
  let links = document.querySelector('.links');
  toggleBtn.classList.toggle('cross');
  links.classList.toggle('show');
}
