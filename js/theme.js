// theme.js - Day / Night switch (all pages)
const themeBtn = document.getElementById('theme-btn');

// set the button text depending on the current theme
function updateButtonText() {
  if (document.body.classList.contains('night')) {
    themeBtn.textContent = 'Day mode';
  } else {
    themeBtn.textContent = 'Night mode';
  }
}

// remember the theme from the last visit
if (localStorage.getItem('theme') === 'night') {
  document.body.classList.add('night');
}
updateButtonText();

themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('night');
  localStorage.setItem('theme', document.body.classList.contains('night') ? 'night' : 'day');
  updateButtonText();
});
