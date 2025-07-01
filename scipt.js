'use strict';

// Variable Declarations

const inputNumber = document.querySelector('.input_number');
const clearButton = document.querySelector('.clear_all');
const rowCategoriesBtn = document.querySelector('.row_categories');
const categoriesTable = document.querySelector('.categories_table_body');

rowCategoriesBtn.addEventListener('click', function () {
  const inputNumberValue = inputNumber.value;
  console.log(inputNumberValue);
});
