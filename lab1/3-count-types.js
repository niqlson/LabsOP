'use strict'

//first method
const array = [true, 'hello', 15, 23, -123, true, false, 'word', NaN, undefined, {n : 23}];
const hash = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,  
};
for(const item of array) {
  const type = typeof item;
  if(type in hash) {
      hash[type] += 1;
  } else {
      hash[type] = 1;
  }
}
console.dir(hash)

//second method
const arr = [true, 'hello', 15, 23, -123, true, false, 'word', NaN, undefined, {n : 23}];
const hash1 = {};
for(const item of array) {
    const type = typeof item;
    if(type in hash1) {
        hash1[type] += 1;
    } else {
        hash1[type] = 1;
    }
}
console.dir(hash1)
