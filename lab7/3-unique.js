'use strict'

const unique = (array) => {
  const res = [];
  for (const item of array) {
    if (!res.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

const uniqueNums = unique([2, 1, 1, 3, 2]);
console.log(uniqueNums);

const uniqueSides = unique(['top', 'bottom', 'top', 'left']);
console.log(uniqueSides);
