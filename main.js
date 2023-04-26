const navEmail = document.querySelector('.navbar-email');
const menuDestock = document.querySelector('.menu-desktop');

navEmail.addEventListener('click', toggleMenuDestock);

function toggleMenuDestock() {
  menuDestock.classList.toggle('inactive'); /*en los parentesis va la clase*/
}
