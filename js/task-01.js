// Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде 
// і виведе в консоль текст заголовку елемента (тегу <h2>) і 
// кількість елементів в категорії 
// (усіх <li>, вкладених в нього).


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



const categoriesRef = document.querySelectorAll('#categories .item');

// console.log(categoriesRef);

console.log('Number of categories: ', categoriesRef.length);

categoriesRef.forEach(el => {
  console.log('Category: ', el.querySelector('h2').textContent);
  console.log('Elements: ', el.querySelectorAll('li').length);
});









