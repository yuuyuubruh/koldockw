// sound.js - sound effects (all pages)
const sounds = {
  click: new Audio('sounds/click.wav'),
  star: new Audio('sounds/star.wav'),
  success: new Audio('sounds/success.wav')
};

function playSound(name) {
  const sound = sounds[name];
  sound.pause();
  sound.currentTime = 0;   // start from the beginning, so sounds do not overlap
  sound.play().catch(function () {});  // browser can block sound before the first click
}

// every button on the site makes a click sound
document.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    playSound('click');
  }
});
