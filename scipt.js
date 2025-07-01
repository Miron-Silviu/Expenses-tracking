'use strict';

// Variable Declarations

const inputNumber = document.querySelector('.input_number');
const clearButton = document.querySelector('.clear_all');
const rowCategoriesBtn = document.querySelector('.row_categories');
const categoriesTable = document.querySelector('.categories_table_body');

// Implement functionality row categories button
rowCategoriesBtn.addEventListener('click', function () {
  inputNumber.value;
});

// implement functionality for clear button
clearButton.addEventListener('click', function () {
  inputNumber.value = '';
});
