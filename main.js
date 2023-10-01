let searchInput = document.querySelector('.searchInput');

let cityName = document.querySelector('h1');
let temp = document.querySelector('.temp');
let wind = document.querySelector('.wind');
let humid = document.querySelector('.humid');
let button = document.querySelector('.searchButton');


let city='baku';
let apiKey = "55589aad896342d3bad0dc0c64f9c3a0";


function takeData() {

  if (searchInput.value) {
    city = searchInput.value;
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let info = data;

    console.log(info);

    cityName.innerHTML= info.name;
    temp.innerHTML= "Temperatur: " + Math.round(info.main.temp) + "°C";
    wind.innerHTML= "Külək: " + Math.round(info.wind.speed) + " km/saat";
    humid.innerHTML= "Rütubət: " + Math.round(info.main.humidity) + "%";

  })
  .catch(function(error) {
    cityName.innerHTML= "Şəhər tapılmadı";
    temp.innerHTML=  "Şəhər tapılmadı";
    wind.innerHTML= "Şəhər tapılmadı";
    humid.innerHTML=  "Şəhər tapılmadı";
  });
}

document.addEventListener('DOMContentLoaded', () => { takeData() })
button.addEventListener('click', () => { takeData() })