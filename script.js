// red/////////////////////////////////////////
let red1 = document.querySelector(".red");

setTimeout(() => {
  red1.classList.toggle("red1");
  setTimeout(() => {
    red1.classList.toggle("red1");
  }, 3000);
}, 3000);
// yellow/////////////////////////////////////////////
let yellow1 = document.querySelector(".yellow");

setTimeout(() => {
  yellow1.classList.toggle("yellow1");
  setTimeout(() => {
    yellow1.classList.toggle("yellow1");
  }, 1000);
}, 3000);

// green///////////////////////////////////////////
let green1 = document.querySelector(".green");
setTimeout(() => {
  green1.classList.toggle("green1");
  setTimeout(() => {
    green1.classList.toggle("green1");
  }, 2000);
}, 4000);
// car/////////////////////////////////////////
let car = document.querySelector(".car");

let timeoutId = setTimeout(() => {
  car.classList.add("car1");
}, 5000);

setTimeout(function () {
  confirm("Moshina yursinmi😁");
}, 4500);