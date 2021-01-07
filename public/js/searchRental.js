// const axios = require("axios");

$(document).ready(function () {
$("#homeSearch").on("click", function(event) {
    console.log("https://realty-mole-property-api.p.rapidapi.com/rentalPrice" + searchCriteria);
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
    let searchCriteria = {
        address: $("#address").val(),
        bedrooms: $("#beds").val(),
        bathrooms: $("#baths").val(),
        propertyType:$("#propType").val(),
        squareFootage:$("#sqft").val(),
        compCount:$("#comps").val()

    };
    const options = {
        method: 'GET',
        url: 'https://realty-mole-property-api.p.rapidapi.com/rentalPrice',
        params: searchCriteria,
        headers: {
          'x-rapidapi-key': 'b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2',
          'x-rapidapi-host': 'realty-mole-property-api.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
        //   function to fill out listing data===================
          listingData(result);
          // axios failed option================
      }).catch(function (error) {
          console.error(error);
      });
    });

//calling function for listing data=================
listingData = (response) => {
    let listRent = response.rent;
    let rentRangeHigh = response.rentRangeHigh;
    let rentRangeLow = response.rentRangeLow;
    let address = response.listings[0].formattedAddress;
    let price = response.listings[0].price;
    let bedrooms = response.listings[0].bedrooms;
    let bathrooms =response.listings[0].bathrooms;
    let propType =response.listings[0].propertyType;
    let sqrfootage = response.listings[0].squareFootage;
};

});
    
