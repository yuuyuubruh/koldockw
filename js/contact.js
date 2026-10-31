// contact.js - send the form without reloading the page (contact page)
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');
const resetBtn = document.getElementById('reset-btn');

// sends data to the server; onSuccess and onError are callback functions
function sendMessage(data, onSuccess, onError) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(function (response) { return response.json(); })
    .then(onSuccess)
    .catch(onError);
}

function clearInputs() {
  document.querySelectorAll('input, textarea').forEach(function (field) {
    field.value = '';
  });
}

function showSuccess(result) {
  message.textContent = 'Thank you! Your message was sent (id: ' + result.id + ').';
  message.className = 'success';
  clearInputs();
  playSound('success');
}

function showError() {
  message.textContent = 'Something went wrong. Please try again.';
  message.className = 'error';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const data = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim()
  };

  if (data.name === '' || data.email === '' || data.message === '') {
    message.textContent = 'Please fill in all fields.';
    message.className = 'error';
    return;
  }
  message.textContent = 'Sending...';
  message.className = '';
  sendMessage(data, showSuccess, showError);
});

resetBtn.addEventListener('click', clearInputs);
