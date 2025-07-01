'use strict';

// Variable Declarations

const inputNumber = document.querySelector('.input_number');
const clearButton = document.querySelector('.clear_all');
const rowCategoriesBtn = document.querySelector('.row_categories');
const categoriesTable = document.querySelector('.categories_table_body');

// Implement functionality row categories button
rowCategoriesBtn.addEventListener('click', function () {
  if (inputNumber.value == 0) {
    prompt('Please add a number grater than 0');
  } else {
    inputNumber.value;
  }
});

// implement functionality for clear button
clearButton.addEventListener('click', function () {
  inputNumber.value = '';
});
