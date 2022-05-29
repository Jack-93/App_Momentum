// navigator -> position, etc

const API_KEY = "72e0a34cdd3a9350bc5014f5b7aee68b";

function onGeoPosition(position) {
  const lati = position.coords.latitude;
  const longi = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}`;
  // ask to server, then wait for response
  fetch(url)
    .then((respon) => respon.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");
      //   const uvindex = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = `\n${data.weather[0].main}\n${data.main.temp}`;
    });
}
function onGeoError() {
  alert("There is not weather");
}

navigator.geolocation.getCurrentPosition(onGeoPosition, onGeoError);
