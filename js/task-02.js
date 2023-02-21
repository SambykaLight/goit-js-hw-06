const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);
let ulList = document.getElementById("ingredients")
const elements = ingredients.map(option =>{
  // const vegEl = ingredients[i];
  
  const itemLi = document.createElement('li');
  itemLi.classList.add ('item');
itemLi.textContent = option;
return itemLi;
});

console.log(elements);
ulList.append(...elements);

