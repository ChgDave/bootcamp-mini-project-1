"use strict";

//buttonAdult buttonBaby and image
const buttonA = document.querySelector("#buttonAdult");
const buttonB = document.querySelector("#buttonBaby");
const buttonS = document.querySelector("#buttonSend");
const image = document.querySelector(".picture");
const message = document.querySelector(".message");

buttonA.addEventListener("click", function () {
  image.src = `./assets/images/BroskiBeach.jpeg`;
  console.log("adult");
});

buttonB.addEventListener("click", function () {
  image.src = `./assets/images/BroskiBaby.jpeg`;
  console.log("baby");
});

buttonS.addEventListener("click", function () {
  message.textContent = `Thank you for folloing Me 🐶🐶🐶🐶`;
  message.style.color = "#b835c2";
});
