// // Створи змінну counterValue, в якій буде зберігатися
//  поточне значення лічильника та ініціалізуй її значенням 0.
// // Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
// // Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const valueRef = document.querySelector("#value");

const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]'
);


const handleIncrClick = () => {
 
  counterValue += 1;

  valueRef.textContent = counterValue;
};

incrementButtonRef.addEventListener("click", handleIncrClick);

const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]'
);


const handleDecrClick = () => {
  // console.log("decrementButton was clicked");
  counterValue -= 1;

  valueRef.textContent = counterValue;
};

decrementButtonRef.addEventListener("click", handleDecrClick);
