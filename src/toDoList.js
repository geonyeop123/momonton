"use strict";
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODO_LS = "toDos";
let toDos = [];
function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function clickHandler(event) {
  event.preventDefault();
  const btn = event.target;
  const li = btn.parentElement;
  const clearToDos = toDos.filter((toDo) => toDo.id !== parseFloat(li.id));
  toDos = clearToDos;
  toDoList.removeChild(li);
  saveToDo();
}

function showToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const toDoId = Math.random();
  span.innerText = text;
  span.style.marginRight = "3px";
  delBtn.innerText = "X";
  delBtn.addEventListener("click", clickHandler);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = toDoId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: toDoId,
  };
  toDos.push(toDoObj);
  saveToDo();
}

function submitHandler(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  showToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  const currentToDo = JSON.parse(localStorage.getItem(TODO_LS));
  if (currentToDo) {
    currentToDo.filter((obj) => showToDo(obj.text));
  }
  toDoForm.addEventListener("submit", submitHandler);
}

init();
