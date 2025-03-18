const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!fullname || !email || !password || !confirmPassword) {
    messageDiv.textContent = 'All fields are required.';
    messageDiv.style.color = 'red';
    return;
  }

  if (password !== confirmPassword) {
    messageDiv.textContent = 'Passwords do not match.';
    messageDiv.style.color = 'red';
    return;
  }

  messageDiv.style.color = 'green';
  messageDiv.textContent = 'Registration successful!';
  
  form.reset(); 
});
