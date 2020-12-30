const router = require('express').Router();
const axios = require('axios');

const apiKey = "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2";
const rentURL = "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice";


// $(document).ready(function(){
// //=============RETRIEVING THE ARRAY OF INFO FROM THE RENT API===========//
// $("#compRent").on("click", function rental(event) {
//     event.preventDefault()
// address = $("#address").val().toLowerCase();
// propertyType = $("#rentalProp").val().toLowerCase();
// bedrooms = parseInt($("#bedroom").val());
// bathrooms = parseInt($("#rentBath").val());
// squareFootage = parseInt($("#rentSqFt").val());
// compCount = parseInt($("#compProp").val());


//==============NEEDS TO BE MOVED TO A DIFFERENT FILE NOT IN ROUTER===========//
// const settings = {
// 	"async": true,
//     "crossDomain": true,
    
//     "url": `https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?address=${encodeURIComponent(address)}&bedrooms=${encodeURIComponent(bedrooms)}&bathrooms=${encodeURIComponent(bathrooms)}&propertyType=${encodeURIComponent(propertyType)}&squareFootage=${encodeURIComponent(squareFootage)}&compCount=${encodeURIComponent(compCount)}`,
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2",
// 		"x-rapidapi-host": "realtymole-rental-estimate-v1.p.rapidapi.com"
// 	}
// };
// $.ajax(settings).done(function (response) {
//     console.log(response);
// });
//=======================================================
// })


//================GET REQUEST TO USE THE API==============//

router.post( '/rentSearch', function(req, res){

// step 1 : Build Axios 'GET' to 'realty-mole' based on data passed in as part of request
    //post request body obj - 
    // address: '5500 Grand Lake Drive, San Antonio, TX',
    // bedrooms: '4',
    // bathrooms: '2',
    // propertyType: 'Single Family',
    // squareFootage: '1600',
    // compCount: '5'
const options = {
  method: 'GET',
  url: 'https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice',
  params: req.body,
  headers: {
    'x-rapidapi-key': 'b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2',
    'x-rapidapi-host': 'realtymole-rental-estimate-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
	console.error(error);
});
        
// step 2 : Executting the axios post and getting data back

// step 3 : write what we will re-direct the user to with the correct data

});



module.exports = router;