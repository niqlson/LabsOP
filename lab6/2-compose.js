'use strict'

const compose = (...fns) => {
  const errors = [];

  const composedFn = (...args) => {
    try {
      return fns.reduceRight((result, fn) => [fn(...result)], args)[0]
    } catch (e) {
        errors.forEach((handler) => handler(e));
          return undefined;
      }
  };

  composedFn.on = (event, handler) => {
    if (event === 'error') errors.push(handler);
  };
  return composedFn;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);
f.on('error', e => console.error('Error:', e.message));
const x = f(5);
console.log(x);
