'use strict'

const inc = (num) => {
  num += 1;
  return num;
};

const a = 5;
const b = inc(a);
console.dir({a, b});
