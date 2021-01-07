const axios = require("axios");

$(document).ready(function () {
$("#homeSearch").on("click", function(event) {
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
      }).catch(function (error) {
          console.error(error);
      });
    });
});
    
