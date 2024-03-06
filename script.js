function toggleNav() {
  let toggleBtn = document.querySelector('.toggle-button');
  let links = document.querySelector('.links');
  toggleBtn.classList.toggle('cross');
  links.classList.toggle('show');
}
