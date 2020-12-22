const router = require('express').Router();
const sequelize = require('../config/connection');

var apiKey = "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2";
var rentURL = "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice";


$(document).ready(function(){
//=============RETRIEVING THE ARRAY OF INFO FROM THE RENT API===========//
$("#compRent").on("click", function rental(event) {
    event.preventDefault()
address = $("#address").val().toLowerCase();
propertyType = $("#rentalProp").val().toLowerCase();
bedrooms = parseInt($("#bedroom").val());
bathrooms = parseInt($("#rentBath").val());
squareFootage = parseInt($("#rentSqFt").val());
compCount = parseInt($("#compProp").val());

const settings = {
	"async": true,
    "crossDomain": true,
    
    "url": `https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?address=${encodeURIComponent(address)}&bedrooms=${encodeURIComponent(bedrooms)}&bathrooms=${encodeURIComponent(bathrooms)}&propertyType=${encodeURIComponent(propertyType)}&squareFootage=${encodeURIComponent(squareFootage)}&compCount=${encodeURIComponent(compCount)}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2",
		"x-rapidapi-host": "realtymole-rental-estimate-v1.p.rapidapi.com"
	}
};
$.ajax(settings).done(function (response) {
    console.log(response);
});
   
})
// VAR FOR PULLING THE CORRECT INFORMATION TO THE LISTING CARDS
 var searchRent = response.rent;
 var rentRangeLow = response.rentRangeLow;
 var rentRangeHigh = response.rentRangeHigh;
 //LISTING VARIABLES
 var listAddress = response.listings[0].formattedAddress;
 var listCity = response.listings[0].city;
 var listRent = response.listings[0].price;
 var listBed = response.listings[0].bedrooms;
 var listBath = response.listings[0].bathrooms;
 //======================RESEARCH HOW TO ADD THE PHOTO'S=============
 var listPhoto = response.listings[0].photo;
 //=========================PHOTO ADDING TO A RESPONSE===============
 var listProp = response.listings[0].propertyType;
 var listSqFt = response.listings[0].squareFootage;

 


})



module.exports = router;