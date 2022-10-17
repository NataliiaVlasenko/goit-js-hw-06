// Напиши скрипт, який під час набору тексту в інпуті
//  input#name-input (подія input), підставляє його поточне
//   значення в span#name-output. Якщо інпут
// порожній, у спані повинен відображатися рядок "Anonymous".

const inputRef = document.querySelector("#name-input");

const spanRef = document.querySelector("#name-output");

const inputTextInsert = () => {
  // console.dir(inputRef.value);
  if (inputRef.value === " " || inputRef.value == "") {
    spanRef.textContent = "Anonymous";
  } else {
    spanRef.textContent = inputRef.value;
  }

  // console.log(text);
};

inputRef.addEventListener("input", inputTextInsert);
