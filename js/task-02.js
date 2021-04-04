const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')
console.log(ingredientsList)

 const ingredientsItems = ingredients.map(ingredient => {
  const prod = document.createElement('li');
   prod.textContent = ingredient;
   return prod;
})

ingredientsList.append(...ingredientsItems);



