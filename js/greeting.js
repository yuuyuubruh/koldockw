// greeting.js - greeting by time of day + name from the input (index page)
const greeting = document.getElementById('greeting');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');

// returns a greeting text depending on the hour
function getGreeting() {
  const hour = new Date().getHours();
  let part;
  if (hour < 12) {
    part = 'morning';
  } else if (hour < 18) {
    part = 'afternoon';
  } else {
    part = 'evening';
  }

  switch (part) {
    case 'morning':
      return 'Good morning';
    case 'afternoon':
      return 'Good afternoon';
    default:
      return 'Good evening';
  }
}

greeting.textContent = getGreeting() + '!';

nameForm.addEventListener('submit', function (event) {
  event.preventDefault();               // do not reload the page
  const name = nameInput.value.trim();
  if (name === '') {
    greeting.textContent = getGreeting() + '!';
  } else {
    greeting.textContent = getGreeting() + ', ' + name + '!';
  }
});
