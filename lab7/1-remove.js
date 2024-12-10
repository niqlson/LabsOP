'use strict'

const removeEl = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeEl(numbers, 5);
removeEl(numbers, 23);
console.log(numbers);

const cities = ['Kiev', 'Beijing', 'Lima', 'Tokyo'];
removeEl(cities, 'Lima'); 
removeEl(cities, 'Berlin'); 
console.log(cities);
