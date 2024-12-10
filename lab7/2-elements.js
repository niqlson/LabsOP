'use strict'

const removeEls = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeEls(numbers, 5, 1, 6);
console.log(numbers);

const cities = ['Kiev', 'Beijing', 'Lima', 'Tokyo'];
removeEls(cities, 'Lima', 'Berlin', 'Kiev');
console.log(cities);
