// const { response } = require("express");

//=======VARIABLES TO HOLD API KEY AND URL===========//

const key = "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2";
const url = "mailcheck.p.rapidapi.com";

// const { rules } = require("eslint-config-prettier");
async function newSignUp(event) {
  event.preventDefault();
  //VARIABLES TO HOLD USER DATA==============
  const username = document.querySelector("#user-name").value.trim();
const email = document.querySelector("#signup-email").value.trim();
const password = document.querySelector("#password").value.trim();
  
  if (username && email && password) {
    const response = await fetch("/signup", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/login");
    } else {
      err;
    }
  }
}
document.querySelector(".signup-div").addEventListener("submit", newSignUp);
// console.log(response);
//=========API CALL TO VERIFY THAT EMAIL IS A GOOD DOMAIN AND NOT SPAM==========//
fetch("https://mailcheck.p.rapidapi.com/?domain=" + `${email}`, {
  method: "GET",
  headers: {
    "x-rapidapi-key": key,
    "x-rapidapi-host": url,
  },
})
  .then((response) => {
    // console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
