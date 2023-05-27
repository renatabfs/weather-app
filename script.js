const key = "c62b37d660ae50d948e21be3764cd65b";

function inputData(data) {
    document.querySelector(".city").innerHTML = "Tempo em "+ data.name;
    document.querySelector(".temp").innerHTML = " Temperatura: "+ Math.floor(data.main.temp) + "°C";
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = "   Umidade: "+data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "     Vento: "+data.wind.speed + "km/h";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "-.png";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.name}')`
}

async function apiSearch(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());
  console.log(data);
  inputData(data);
}

function searchCity() {
  const city = document.querySelector(".search-bar").value;
  apiSearch(city);
}
