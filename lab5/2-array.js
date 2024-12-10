'use strict'

const array = () => {
  const dataArr = [];
  const get = (i) => dataArr[i];
  get.push = (x) => dataArr.push(x);
  get.pop = () => dataArr.pop();
  return get;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop());
