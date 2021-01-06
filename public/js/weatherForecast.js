const apiKey = "6d0e27a1bde81971c768423d4c6f86f7";
const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const cityName = $("#cityName").val();

// RETRIEVING THE ARRAY OF INFORMATION FROM THE WEATHER API
$("#homeSearch").on("click", function weather() {
  cityName = $("#cityName").val().toLowerCase();
  console.log(weatherURL + cityName + "&units=imperial" + "&appid=" + apiKey);
  $.ajax({
    type: "GET",
    url: weatherURL + cityName + "&units=imperial" + "&appid=" + apiKey,
    success: function (result) {
      console.log("The Request was successfull", result);
      let lattitude = result.city.coord.lat;
      let longitude = result.city.coord.lon;
       getUVIndex(lattitude, longitude);
      //APPENDING A DIV TO THE WEBSITE THAT CONTAINS THE WEATHER
      currentWeatherData(result);
      dayOneWeatherData(result);
      dayTwoWeatherData(result);
      dayThreeWeatherData(result);
      dayFourWeatherData(result);
      dayFiveWeatherData(result);

//FUNCTION TO APPEND THE CURRENT DAYS WEATHER DATA
function currentWeatherData(response){
  console.log(response);
  
  let searchName = response.city.name;
  let todaysDate = response.list[0].dt_txt;
  //OPEN WEATHER ICON LOCATION
  let weatherIcon = response.list[0].weather[0].icon; 
  let todaysTemp = response.list[0].main.temp;
  let todaysHumidity = response.list[0].main.humidity;
  let todaysWindSpeed = response.list[0].wind.speed;  
  //OPEN WEATHER ICON URL
  let iconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
  //  COMMANDS TO APPEND TO THE CURRENT DAYS WEATHER
   $("#city").html(searchName);
   $("#date").html(todaysDate);
   $("#icon").attr('src', iconURL);
   $("#temp").html("Current Tempurature: "+ todaysTemp+ " Degrees Fahrenheit");
   $("#humid").html("Current Humidity is "+todaysHumidity+"%");
   $("#speed").html("With a wind speed of "+todaysWindSpeed+"mph");
   
}
// FUNCTION TO LOAD UP THE NEXT DAYS WEATHER
function dayOneWeatherData(response){
  
  let dateOne = response.list[8].dt_txt;
  let weatherIconOne = response.list[8].weather[0].icon;
  let tempOne = response.list[8].main.temp;
  let humidOne = response.list[8].main.humidity;
  let iconURL = "http://openweathermap.org/img/w/" + weatherIconOne + ".png";

  $("#dateOne").html("On "+dateOne);
  $("#iconOne").attr('src',iconURL);
  $("#tempOne").html(tempOne+" Degrees Fahrenheit");
  $("#humidOne").html(humidOne+"%");
}
// FUNCTION TO LOAD DAY TWO DATA
function dayTwoWeatherData(response){
  let dateTwo = response.list[16].dt_txt;
  let weatherIconTwo = response.list[16].weather[0].icon;
  let tempTwo = response.list[16].main.temp;
  let humidTwo = response.list[16].main.humidity;
  let iconURL = "http://openweathermap.org/img/w/" + weatherIconTwo + ".png";

  $("#dateTwo").html("On "+dateTwo);
  $("#iconTwo").attr('src',iconURL);
  $("#tempTwo").html(tempTwo+" Degrees Fahrenheit");
  $("#humidTwo").html(humidTwo+"%");

}
//FUNCTION TO LOAD DAY THREE DATA
function dayThreeWeatherData(response){
  let dateThree = response.list[24].dt_txt;
  let weatherIconThree = response.list[24].weather[0].icon;
  let tempThree = response.list[24].main.temp;
  let humidThree = response.list[24].main.humidity;
  let iconURL = "http://openweathermap.org/img/w/" + weatherIconThree + ".png";

  $("#dateThree").html("On "+dateThree);
  $("#iconThree").attr('src',iconURL);
  $("#tempThree").html(tempThree+" Degrees Fahrenheit");
  $("#humidThree").html(humidThree+"%");

}
//FUNCTION TO LOAD DAY FOUR DATA
function dayFourWeatherData(response){
  let dateFour = response.list[32].dt_txt;
  let weatherIconFour = response.list[32].weather[0].icon;
  let tempFour = response.list[32].main.temp;
  let humidFour = response.list[32].main.humidity;
  let iconURL = "http://openweathermap.org/img/w/" + weatherIconFour + ".png";

  $("#dateFour").html("On "+dateFour);
  $("#iconFour").attr('src',iconURL);
  $("#tempFour").html(tempFour+" Degrees Fahrenheit");
  $("#humidFour").html(humidFour+"%");
}
//FUNCTION TO LOAD DAY FIVE DATA
function dayFiveWeatherData(response){
  let dateFive = response.list[39].dt_txt;
  let weatherIconFive = response.list[39].weather[0].icon;
  let tempFive = response.list[39].main.temp;
  let humidFive = response.list[39].main.humidity;
  let iconURL = "http://openweathermap.org/img/w/" + weatherIconFive + ".png";

  $("#dateFive").html("On "+dateFive);
  $("#iconFive").attr('src',iconURL);
  $("#tempFive").html(tempFive+" Degrees Fahrenheit");
  $("#humidFive").html(humidFive+"%");
}
    }
});
});

