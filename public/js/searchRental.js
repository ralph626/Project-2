// const axios = require("axios");
//ajax variables=================================
const rentalURL =
  "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?";
const apiKey = "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2";

$(document).ready(function () {
  $("#homeSearch").on("click", function (event) {
    event.preventDefault();
    //     event.preventDefault();
    //     console.log("CALLING API");
    // EXAMPLE SEARCH CRITERIA
    // params: {
    // compCount: '5',
    // squareFootage: '1600',
    // bathrooms: '2',
    // address: '5500 Grand Lake Drive, San Antonio, TX',
    // bedrooms: '4',
    // propertyType: 'Single Family'
    //}
    // let searchCriteria = {
      let address = $("#address").val();
      let bedrooms = $("#beds").val();
      let bathrooms = $("#baths").val();
      let propertyType =$("#propType").val();
      let squareFootage = $("#sqft").val();
      let compCount = $("#comps").val();
    // };
    //ajax call======================================

    // $.ajax({
    //   type: "GET",
    //   url: rentalURL +  + ""&"appid=" + apiKey,
    //   success: function (result) {
    //     console.log("Request Successfull", result);
    //     //   function to fill out listing data===================
    //     listingData(result);
    //   },
    // });

    //jQuery call=====================================
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": rentalURL +  compcount + "&" + squareFootage + "&" + bathrooms + "&" + "&" + bedrooms + "&" + propertyType,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2",
            "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        //   function to fill out listing data===================
        listingData(result);
    });

    //axios call======================================
    // const options = {
    //   method: "GET",
    //   url: "https://realty-mole-property-api.p.rapidapi.com/rentalPrice",
    //   params: searchCriteria,
    //   headers: {
    //     "x-rapidapi-key": "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2",
    //     "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //     //   function to fill out listing data===================
    //     listingData(result);
    //     // axios failed option================
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  });
});
//calling function for listing data=================
listingData = (response) => {
  console.log(response);
  //variables for the function call from the json of the rental api
  let listRent = response.rent;
  let rentRangeLow = response.rentRangeLow;
  let rentRangeHigh = response.rentRangeHigh;
  let address = response.listings[0].formattedAddress;
  let price = response.listings[0].price;
  let bedrooms = response.listings[0].bedrooms;
  let bathrooms = response.listings[0].bathrooms;
  let propType = response.listings[0].propertyType;
  let sqrfootage = response.listings[0].squareFootage;
  //targets in the div to be filled with the data
  $("#listRent").html("$" + listRent);
  $("#rentRangeLow").html("$" + rentRangeLow);
  $("#rentRangeHigh").html("$" + rentRangeHigh);
  $("#address").html(address);
  $("#price").html("$" + price);
  $("#nmbr-beds").html(bedrooms);
  $("#nmbr-baths").html(bathrooms);
  $("#prop-type").html(propType);
  $("#sqft-property").html(sqrfootage + "ft");
};
