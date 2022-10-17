// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input) і змінює 
// інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, 
// буде змінюватися розмір тексту.

const inputRef = document.querySelector("#font-size-control");

const spanRef = document.querySelector ("#text");

const changeTextSize = () => {

spanRef.setAttribute("style", `font-size: ${inputRef.value}px`);

// console.log(spanRef.getAttribute("style"));

};

inputRef.addEventListener("input", changeTextSize);

