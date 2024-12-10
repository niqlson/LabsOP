'use strict'

const contract = (fn, ...types) => (...args) => {
  args.forEach((arg, i) => {
    const type = types[i].name.toLowerCase()
    if (typeof arg !== type) {
      throw new TypeError(`Argument ${i} must be of type ${type}`);
    }
  });
  const res = fn(...args);
  const def = types[types.length - 1];
  const name = def.name.toLowerCase();
  if (typeof res !== name) {
    throw new TypeError(`Res type ${name} needed`);
  }
  return res;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res1 = concatStrings('Hello ', 'world!');
console.dir(res1);
