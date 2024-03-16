const form = document.querySelector('#login-form form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const message = document.querySelector('#login-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = xhr.responseText.trim();
        if (response === 'error') {
          message.textContent = 'Nom d\'utilisateur ou mot de passe invalide';
        } else if (response === 'success') {
          message.textContent = 'Bienvenue ' + username.value + ' !';
        }
      } else {
        console.error('Error: ' + xhr.status);
      }
    }
  };
  xhr.open('POST', '/htbin/login.py', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send('username=' + encodeURIComponent(username.value) + '&password=' + encodeURIComponent(password.value));
});

// permet la soumission du formulaire en appuyant sur "Entrée"
document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter' && event.target.matches('#password')) {
    event.preventDefault();
    form.dispatchEvent(new Event('submit'));
  }
});
