let searchInput = document.querySelector('.searchInput');

let temp = document.querySelector('.temp');
let wind = document.querySelector('.wind');
let humid = document.querySelector('.humid');


let city = "baku";
searchInput.addEventListener( "keyup", function (e) {
    city= e.target.value;
})

let apiKey = "55589aad896342d3bad0dc0c64f9c3a0";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let info = data;

    console.log(info.main.temp);

    temp.innerHTML= "Temperatur: " + Math.round(info.main.temp) + "°C"

  })
  .catch(function(error) {
    console.log(error);
  });