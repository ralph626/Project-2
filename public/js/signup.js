
//=======VARIABLES TO HOLD API KEY AND URL===========//

const key = "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2";
const url = "mailcheck.p.rapidapi.com";


async function newUser(event) {
  event.preventDefault();

  // Get the username, email and password
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      credentials: 'include',  //was /api/users
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
        
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/rentsearch');  //was /dashboard/
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', newUser);
// console.log(response);
//=========API CALL TO VERIFY THAT EMAIL IS A GOOD DOMAIN AND NOT SPAM==========//
// fetch("https://mailcheck.p.rapidapi.com/?domain=" + `${email}`, {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": key,
//     "x-rapidapi-host": url,
//   },
// })
//   .then((response) => {
//     // console.log(response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


