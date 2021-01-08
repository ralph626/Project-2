
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

  $("#listRent").html("Listing estimate is: $" + listRent);
  $("#rentRangeLow").html("The Lowest comparable unit is listed at: $" + rentRangeLow);
  $("#rentRangeHigh").html("The Highest comprable unit is listed at: $" + rentRangeHigh);

  //Set 0==========================================
  let address = result.listings[0].formattedAddress;
  let price = result.listings[0].price;
  let bedrooms = result.listings[0].bedrooms;
  let bathrooms = result.listings[0].bathrooms;
  let propType = result.listings[0].propertyType;
  let sqrfootage = result.listings[0].squareFootage;
  //targets for set 0
// =======
  $("#address").html("Address is: "+address);
  $("#price").html("Rent is: $" + price);
  $("#nmbr-beds").html("Bedrooms: "+bedrooms);
  $("#nmbr-baths").html("Bathrooms: "+bathrooms);
  $("#prop-type").html("Property Type is: "+propType);
  $("#sqft-property").html("Square footage: "+sqrfootage + "ft");

  //Set 1==========================================
  let address1 = result.listings[1].formattedAddress;
  let price1 = result.listings[1].price;
  let bedrooms1 = result.listings[1].bedrooms;
  let bathrooms1 = result.listings[1].bathrooms;
  let propType1 = result.listings[1].propertyType;
  let sqrfootage1 = result.listings[1].squareFootage;
  //targets for set 1
// =======
  $("#address1").html("Address is: "+address1);
  $("#price1").html("Rent is: $" + price1);
  $("#nmbr-beds1").html("Bedrooms: "+bedrooms1);
  $("#nmbr-baths1").html("Bathrooms: "+bathrooms1);
  $("#prop-type1").html("Property Type is: "+propType1);
  $("#sqft-property1").html("Square footage: "+sqrfootage1 + "ft");

  //Set 2==========================================
  let address2 = result.listings[2].formattedAddress;
  let price2 = result.listings[2].price;
  let bedrooms2 = result.listings[2].bedrooms;
  let bathrooms2 = result.listings[2].bathrooms;
  let propType2 = result.listings[2].propertyType;
  let sqrfootage2 = result.listings[2].squareFootage;
  //targets for set 2
// =======
  $("#address2").html("Address is: "+address2);
  $("#price2").html("Rent is: $" + price2);
  $("#nmbr-beds2").html("Bedrooms: "+bedrooms2);
  $("#nmbr-baths2").html("Bathrooms: "+bathrooms2);
  $("#prop-type2").html("Property Type is: "+propType2);
  $("#sqft-property2").html("Square footage: "+sqrfootage2 + "ft");

  //Set 3==========================================
  let address3 = result.listings[3].formattedAddress;
  let price3 = result.listings[3].price;
  let bedrooms3 = result.listings[3].bedrooms;
  let bathrooms3 = result.listings[3].bathrooms;
  let propType3 = result.listings[3].propertyType;
  let sqrfootage3 = result.listings[3].squareFootage;
  //targets for set 3
// =======
  $("#address3").html("Address is: "+address3);
  $("#price3").html("Rent is: $" + price3);
  $("#nmbr-beds3").html("Bedrooms: "+bedrooms3);
  $("#nmbr-baths3").html("Bathrooms: "+bathrooms3);
  $("#prop-type3").html("Property Type is: "+propType3);
  $("#sqft-property3").html("Square footage: "+sqrfootage3 + "ft");

  //Set 4==========================================
  let address4 = result.listings[4].formattedAddress;
  let price4 = result.listings[4].price;
  let bedrooms4 = result.listings[4].bedrooms;
  let bathrooms4 = result.listings[4].bathrooms;
  let propType4 = result.listings[4].propertyType;
  let sqrfootage4 = result.listings[4].squareFootage;
  //targets for set 4
// =======
  $("#address4").html("Address is: "+address4);
  $("#price4").html("Rent is: $" + price4);
  $("#nmbr-beds4").html("Bedrooms: "+bedrooms4);
  $("#nmbr-baths4").html("Bathrooms: "+bathrooms4);
  $("#prop-type4").html("Property Type is: "+propType4);
  $("#sqft-property4").html("Square footage: "+sqrfootage4 + "ft");

  //Set 5==========================================
  let address5 = result.listings[5].formattedAddress;
  let price5 = result.listings[5].price;
  let bedrooms5 = result.listings[5].bedrooms;
  let bathrooms5 = result.listings[5].bathrooms;
  let propType5 = result.listings[5].propertyType;
  let sqrfootage5 = result.listings[5].squareFootage;
  //targets for set 5
// =======
  $("#address5").html("Address is: "+address5);
  $("#price5").html("Rent is: $" + price5);
  $("#nmbr-beds5").html("Bedrooms: "+bedrooms5);
  $("#nmbr-baths5").html("Bathrooms: "+bathrooms5);
  $("#prop-type5").html("Property Type is: "+propType5);
  $("#sqft-property5").html("Square footage: "+sqrfootage5 + "ft");

  //Set 6==========================================
  let address6 = result.listings[6].formattedAddress;
  let price6 = result.listings[6].price;
  let bedrooms6 = result.listings[6].bedrooms;
  let bathrooms6 = result.listings[6].bathrooms;
  let propType6 = result.listings[6].propertyType;
  let sqrfootage6 = result.listings[6].squareFootage;
  //targets for set 6
// =======
  $("#address6").html("Address is: "+address6);
  $("#price6").html("Rent is: $" + price6);
  $("#nmbr-beds6").html("Bedrooms: "+bedrooms6);
  $("#nmbr-baths6").html("Bathrooms: "+bathrooms6);
  $("#prop-type6").html("Property Type is: "+propType6);
  $("#sqft-property6").html("Square footage: "+sqrfootage6 + "ft");

  //Set 7==========================================
  let address7 = result.listings[7].formattedAddress;
  let price7 = result.listings[7].price;
  let bedrooms7 = result.listings[7].bedrooms;
  let bathrooms7 = result.listings[7].bathrooms;
  let propType7 = result.listings[7].propertyType;
  let sqrfootage7 = result.listings[7].squareFootage;
  //targets for set 7
// =======
  $("#address7").html("Address is: "+address7);
  $("#price7").html("Rent is: $" + price7);
  $("#nmbr-beds7").html("Bedrooms: "+bedrooms7);
  $("#nmbr-baths7").html("Bathrooms: "+bathrooms7);
  $("#prop-type7").html("Property Type is: "+propType7);
  $("#sqft-property7").html("Square footage: "+sqrfootage7 + "ft");

  //Set 8==========================================
  let address8 = result.listings[8].formattedAddress;
  let price8 = result.listings[8].price;
  let bedrooms8 = result.listings[8].bedrooms;
  let bathrooms8 = result.listings[8].bathrooms;
  let propType8 = result.listings[8].propertyType;
  let sqrfootage8 = result.listings[8].squareFootage;
  //targets for set 8
// =======
  $("#address8").html("Address is: "+address8);
  $("#price8").html("Rent is: $" + price8);
  $("#nmbr-beds8").html("Bedrooms: "+bedrooms8);
  $("#nmbr-baths8").html("Bathrooms: "+bathrooms8);
  $("#prop-type8").html("Property Type is: "+propType8);
  $("#sqft-property8").html("Square footage: "+sqrfootage8 + "ft");

  //Set 9==========================================
  let address9 = result.listings[9].formattedAddress;
  let price9 = result.listings[9].price;
  let bedrooms9 = result.listings[9].bedrooms;
  let bathrooms9 = result.listings[9].bathrooms;
  let propType9 = result.listings[9].propertyType;
  let sqrfootage9 = result.listings[9].squareFootage;
  //targets for set 9
// =======
  $("#address9").html("Address is: "+address9);
  $("#price9").html("Rent is: $" + price9);
  $("#nmbr-beds9").html("Bedrooms: "+bedrooms9);
  $("#nmbr-baths9").html("Bathrooms: "+bathrooms9);
  $("#prop-type9").html("Property Type is: "+propType9);
  $("#sqft-property9").html("Square footage: "+sqrfootage9 + "ft");


}
});
