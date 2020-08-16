"use strict";
const body = document.querySelector("body");
const IMGNUMBER = 9;
const IMG_CN = "images";
const hello = "hello";
function showImg(imgNumber) {
  const image = new Image();
  image.src = `src/images/${imgNumber + 1}.jpg`;
  body.appendChild(image);
  image.classList.add(IMG_CN);
}

function makerandomNumber() {
  return Math.floor(Math.random() * IMGNUMBER);
}

function init() {
  const randomNumber = makerandomNumber();
  showImg(randomNumber);
}

init();
