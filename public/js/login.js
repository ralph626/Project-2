
async function loginFormHandler(event) {
  event.preventDefault();

  // Get the email and password
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}
  
let el = document.querySelector('.login-form');
el.addEventListener('submit', loginFormHandler);

// 

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);

// // const { doc } = require("prettier");

// const loginFormHandler = async (event) => {
//   // Stop the browser from submitting the form so we can do so with JavaScript
//   event.preventDefault();

//   // Gather the data from the form elements on the page
//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     // Send the e-mail and password to the server
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log in');
//     }
//   }
// };

// const signupFormHandler = async (event) => {
//   // Stop the browser from submitting the form so we can do so with JavaScript
//   event.preventDefault();

//   // Gather the data from the form elements on the page
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();
//   const name = document.querySelector('#name-signup').value.trim();


//   if (email && password && name) {
//     // Send the e-mail and password to the server
//     const response = await fetch('/api/users/', {
//       method: 'POST',
//       body: JSON.stringify({ email, password, name }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log in');
//     }
//   }
// };