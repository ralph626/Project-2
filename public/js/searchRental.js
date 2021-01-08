
//ajax variables=================================
const rentalURL =
  "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?";
const apiKey = "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2";

$(document).ready(function () {
  $("#homeSearch").on("click", function (event) {
    event.preventDefault();
    // let searchCriteria = {
    let address = $("#address").val();
    let bedrooms = $("#beds").val();
    let bathrooms = $("#baths").val();
    let propertyType = $("#propType").val();
    let squareFootage = $("#sqft").val();
    let compCount = $("#comps").val();
    // };

    //jQuery call=====================================
    const settings = {
      async: true,
      crossDomain: true,
      url:
        rentalURL +
        "compCount=" +
        compCount +
        "&" +
        "squareFootage=" +
        squareFootage +
        "&" +
        "bathrooms=" +
        bathrooms +
        "&" +
        "address=" +
        address +
        "&" +
        "bedrooms=" +
        bedrooms +
        "&" +
        "propertyType=" +
        propertyType,
      method: "GET",
      headers: {
        "x-rapidapi-key": "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2",
        "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log("The AJAX was successfull", response);
      //   function to fill out listing data===================
      listingData(response);
      saveSearchHistory({address, bedrooms, bathrooms, property_type:propertyType, square_footage: squareFootage});
    });
  });

//post the rental search data and store the search history============================

async function saveSearchHistory(data) {
    const response = await fetch("/api/projects/rentsearch", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
        console.log(response);
    if (response.ok) {
      console.log("Search Data has been posted!");
    } else {
      alert(response.statusText);
    }
  }

//calling function for listing data=================
function listingData(result) {
  console.log(result);
  //variables for the function call from the json of the rental api
  let listRent = result.rent;
  let rentRangeLow = result.rentRangeLow;
  let rentRangeHigh = result.rentRangeHigh;
  //for loop variables==========================================
  let address = result.listings[0].formattedAddress;
  let price = result.listings[0].price;
  let bedrooms = result.listings[0].bedrooms;
  let bathrooms = result.listings[0].bathrooms;
  let propType = result.listings[0].propertyType;
  let sqrfootage = result.listings[0].squareFootage;
  //targets in the div to be filled with the data
// =======
$("#listRent").html("Listing estimate is: $" + listRent);
$("#rentRangeLow").html("The Lowest comparable unit is listed at: $" + rentRangeLow);
$("#rentRangeHigh").html("The Highest comprable unit is listed at: $" + rentRangeHigh);
$("#address").html("Address is: "+address);
$("#price").html("Rent is: $" + price);
$("#nmbr-beds").html("Bedrooms: "+bedrooms);
$("#nmbr-baths").html("Bathrooms: "+bathrooms);
$("#prop-type").html("Property Type is: "+propType);
$("#sqft-property").html("Square footage: "+sqrfootage + "ft");
  



}
});
