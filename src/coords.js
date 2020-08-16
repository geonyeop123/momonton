"use strict";
const weather = document.querySelector(".js-weather");
const API_KEY = "714b8c086836c95889b94ab8b27d162d";
const COORDS_LS = "coords";

function getWeather(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((weather) => weather.json())
    .then((json) => (weather.innerText = `${json.main.temp}ºC ${json.name}`));
}

function saveCoord(Obj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(Obj));
}

function coordSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordObj = {
    latitude,
    longitude,
  };
  saveCoord(coordObj);
  getWeather(latitude, longitude);
}

function getCoords() {
  navigator.geolocation.getCurrentPosition(coordSuccess, (error) =>
    console.log(error)
  );
}

function init() {
  const currentCoords = localStorage.getItem(COORDS_LS);
  if (!currentCoords) {
    getCoords();
  } else {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

init();
