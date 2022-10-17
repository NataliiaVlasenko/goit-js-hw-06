// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector(".color");


buttonRef.addEventListener("click", changeBodyColor);

function changeBodyColor () {

  spanRef.textContent = getRandomHexColor();

  bodyRef.style.backgroundColor = getRandomHexColor();

  
};