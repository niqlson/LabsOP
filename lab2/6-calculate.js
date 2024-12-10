'use strict'

const average = (a, b) => (a + b) / 2;

const square = (x) => x * x;

const cube = (x) => x * x * x;

const calculate = () => {
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    arr.push(average(square(i), cube(i)));
  }
  return arr;
} 

console.log(calculate());
