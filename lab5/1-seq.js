'use strict'

const seq = (f) => {
  return (g) => {
    if (typeof g === 'number') {
      return f(g);
    }
    if (typeof g === 'function') {
      return seq(y => f(g(y)));
    }
  }
};
const x = seq(y => y + 14)(y => y / 2)(y => y - 5)(23);
console.log(x);
