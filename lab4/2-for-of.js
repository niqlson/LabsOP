'use strict'

const sum = (...args) => {
  let result = 0;
  for (let number of args) {
      result += number;
  }
  return result;
};

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));
