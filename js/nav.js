// nav.js - keyboard navigation in the menu with arrow keys (all pages)
const menuLinks = document.querySelectorAll('#menu a');
let currentIndex = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % menuLinks.length;   // next link, after the last go to the first
    menuLinks[currentIndex].focus();
  }
  if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + menuLinks.length) % menuLinks.length; // previous link
    menuLinks[currentIndex].focus();
  }
});
