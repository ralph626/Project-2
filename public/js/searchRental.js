$(document).ready(function () {
$("#firstSearch").on("click", function(event) {
    event.preventDefault();
    console.log("CALLING API");
    // EXAMPLE SEARCH CRITERIA
    // params: {
    // compCount: '5',
    // squareFootage: '1600',
    // bathrooms: '2',
    // address: '5500 Grand Lake Drive, San Antonio, TX',
    // bedrooms: '4',
    // propertyType: 'Single Family'
    let searchCriteria = {
        address: $("#address").val(),
        beds: $("#beds").val(),
    };
    const options = {
        method: 'GET',
        url: 'https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice',
        params: searchCriteria,
        headers: {
          'x-rapidapi-key': 'b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2',
          'x-rapidapi-host': 'realtymole-rental-estimate-v1.p.rapidapi.com'
        }

    }



});

// FORMAT FROM GET REQUEST
// https://realty-mole-property-api.p.rapidapi.com/rentalPrice?compCount:=5&  squareFootage:=16&bathroom=2&bedroom=2&address=5500 Grand Lake Drive, San Antonio, TX&propertyType=single family//