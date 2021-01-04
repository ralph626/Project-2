// const { rules } = require("eslint-config-prettier");
async function newSignUp(event){
	event.preventDefault();

const key = "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2";
const url = "mailcheck.p.rapidapi.com";
//=======VARIABLES TO HOLD USER DATA===========//
const uName = document.querySelector("#user-name").value.trim();
const email = document.querySelector("#signup-email").value.trim();
const password = document.querySelector("#password").value.trim();

if (uName && email && password) {
	const response = await fetch('/signup', {
		method: 'post',
		body: JSON.stringify({
			uName,
			email,
			password
		}),
		headers: { 'Content-Type': 'application/json'}
	});

	if (response.ok){
		document.location.replace('/login');
	} else {
		(err);
	}
}


//=========API CALL TO VERIFY THAT EMAIL IS A GOOD DOMAIN AND NOT SPAM==========//
fetch("https://mailcheck.p.rapidapi.com/?domain="+ `${email}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2",
		"x-rapidapi-host": "mailcheck.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

}

document.querySelector("signup-form").addEventListener("submit", newSignUp);


