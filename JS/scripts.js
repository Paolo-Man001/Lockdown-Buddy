
// ------------------------------------------- //
// Weather API
// ------------------------------------------- //

// window.onload = function () {
//   weatherBalloon("Wellington");
// };

function submitLocation() {
  // alert("Hello!");
  let city = document.getElementById("cityName").value;
  weatherBalloon(city);
}

// API-KEY: 7b0894cd04c9e2e3e53e9d4b07464879
function weatherBalloon(cityName) {
  var key = "7b0894cd04c9e2e3e53e9d4b07464879";
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key)
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      console.log(data);
      var x = document.getElementById("weather");
      if (x.style.display === "none") {
        x.style.display = "block";
      }
      drawWeather(data);
    })
    .catch(function () {
      // catch any errors
      document.getElementById("weather").style.display = "none";
      alert("City Not Found!\nPlease Try Again...");
    });
}

//----------------------------------------------//
function drawWeather(data) {
  var celcius = Math.round(parseFloat(data.main.temp) - 273.15);
  var fahrenheit = Math.round((parseFloat(data.main.temp) - 273.15) * 1.8 + 32);

  document.getElementById("description").innerHTML = data.weather[0].description;
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("location").innerHTML = data.name;
}


// ------------------------------------------- //
// Map API
// ------------------------------------------- //

var mymap = L.map('map).setView([-41.28664, 174.77557], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY3J1bmNoeXBhbmNha2VzIiwiYSI6ImNrM25temk0YzFzMjMzcHM3bWdocXZuOXgifQ.m6zMp4CxLPXi5xp-zB1kkg'
}).addTo(mymap);

