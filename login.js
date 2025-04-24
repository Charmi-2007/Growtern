// login.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // prevent actual form submission
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // You can add actual login validation here
      if (email && password) {
        // Redirect to the tech form page
        window.location.href = 'techform.html';
      } else {
        alert('Please fill in both email and password.');
      }
    });
  });
  