'use strict'

const range = (start, end) => {
  let array = [];
  let n = 0;
  for(let i = start; i <= end; i++) {
    array[n++] = i;
  }
  return array;
};


console.log(range(15, 30));
