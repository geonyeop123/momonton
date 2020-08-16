"use strict";
const userForm = document.querySelector(".js-userNameForm");
const userInput = userForm.querySelector("input");
const userName = document.querySelector(".js-userName");

const USER_LS = "userName";
const SHOW_CN = "showing";

function showName(user) {
  userName.classList.add(SHOW_CN);
  userForm.classList.remove(SHOW_CN);
  userName.innerText = `Welcome ${user}!!`;
}

function saveName(user) {
  localStorage.setItem(USER_LS, user);
}

function submitHandler(event) {
  event.preventDefault();
  const currentValue = userInput.value;
  showName(currentValue);
  saveName(currentValue);
}

function getName() {
  userForm.classList.add(SHOW_CN);
  userForm.addEventListener("submit", submitHandler);
}

function init() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser) {
    showName(currentUser);
  } else {
    getName();
  }
}

init();
