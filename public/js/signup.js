

fetch("https://mailcheck.p.rapidapi.com/?domain=mailinator.com", {
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