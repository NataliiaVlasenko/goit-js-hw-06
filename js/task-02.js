const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");
let newList = [];

ingredients.forEach(element => {

  const liEl = document.createElement("li");
  liEl.textContent = [element];
  liEl.classList.add("item");
  
  newList.push(liEl);

  
});

ingredientsRef.append(...newList);
// console.log(...newList);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>.
//  Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію 
// у список ul#ingredients.