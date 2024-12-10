'use strict'

const range = (start, end) => {
  let array = [];
  let n = 0;
  for(let i = start; i <= end; i++) {
    if(i % 2 !== 0) array[n++] = i;
  }
  return array;
};


console.log(range(15, 30));
