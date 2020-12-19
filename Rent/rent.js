var apiKey = "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2";
var rentURL = "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice";

//=============RETRIEVING THE ARRAY OF INFO FROM THE RENT API===========//
$("#compRent").on("click", function rental() {
    rentAddress = $("#address").val().toLowerCase();
    rentPropType = $("#rentalProp").val().toLowerCase();
    rentBed = $("#bedroom").val().parseInt();
    rentBath = $("#rentBath").val().parseInt();
    rentSqFt = $("#rentSqFt").val().parseInt();
    compProp = $("#compProp").val().parseInt();
    console.log(rentURL + rentAddress + "&"+rentBed+ "&"+rentBath+ "&"+rentPropType+ "&"+rentSqFt+ "&"+compProp+ "")
})

const settings = {
	"async": true,
	"crossDomain": true,
    "url": `https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?address=${encodeURIComponent(address)}&bedrooms=${encodeURIComponent(rentBed)}&bathrooms=${encodeURIComponent(rentBath)}&propertyType=${encodeURIComponent(rentPropType)}&squareFootage=${encodeURIComponent(rentSqFt)}&compCount=${encodeURIComponent(compProp)}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2",
		"x-rapidapi-host": "realtymole-rental-estimate-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
