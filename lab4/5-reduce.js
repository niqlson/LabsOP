'use strict'

const sumReduce = (...args) => {
  return args.reduce((x, y) => x + y, 0);
};

console.log(sumReduce(1, 2, 3));
console.log(sumReduce(0));
console.log(sumReduce());
console.log(sumReduce(1, -1, 1));
console.log(sumReduce(10, -1, -1, -1));
