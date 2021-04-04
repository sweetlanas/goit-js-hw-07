const categoriesItem = document.querySelectorAll('.item');
console.log( `В списке ${categoriesItem.length} категории.`);


categoriesItem.forEach(category => {
console.log(`Категория: ${category.firstElementChild.textContent}
Количество элементов: ${category.lastElementChild.children.length}`)
})



