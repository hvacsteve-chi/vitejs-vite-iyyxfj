//get the style of a element example
getComputedStyle(element).getPropertyValue(--foo);
//toggle function with button/block elements
const menuBtn = document.querySelector('#menuBtn');
const navBackDrop = document.querySelector('#navBackDrop');
const navigationBlock = document.querySelector('#navigationBlock');
const closeNav = document.querySelector('#closeNav');

function toggleNav() {
  if (navigationBlock.style.display === 'block') {
    navBackDrop.style.display = 'none';
    navigationBlock.style.display = 'none';
  } else {
    navBackDrop.style.display = 'block';
    navigationBlock.style.display = 'block';
  }
}
menuBtn.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav);
navBackDrop.addEventListener('click', toggleNav);
