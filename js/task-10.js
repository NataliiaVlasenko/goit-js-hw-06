// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим
//  і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону 
// у форматі HEX. Використовуй готову функцію getRandomHexColor 
// для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberInput = document.querySelector('#controls input');

console.log(numberInput.value);


const boxRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('[data-create]');

const destroyBtnRef = document.querySelector('[data-destroy]');


createBtnRef.addEventListener('click', () => { createBoxes(numberInput.value); }  );
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes (boxes) {

  boxRef.innerHTML = '';

  for (let i = 1; i <= boxes; i += 1) {
    const box = document.createElement('div');
    box.style.width = 20 + i * 10 + 'px';
    box.style.height = 20 + i * 10 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxRef.append(box);
  }
};

function destroyBoxes () {
  boxRef.innerHTML = '';
  numberInput.value = '';
};

