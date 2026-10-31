// clock.js - button that shows the current time (index page)
const timeBtn = document.getElementById('time-btn');
const timeOutput = document.getElementById('time-output');

timeBtn.addEventListener('click', function () {
  timeOutput.textContent = new Date().toLocaleTimeString();
});
