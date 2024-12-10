'use strict'

const difference = (array1, array2) => {
  const bigger = array1.length > array2.length ? array1 : array2;
  const smaller = array1.length < array2.length ? array1 : array2;
  const set = new Set(bigger).difference(new Set(smaller));
  return Array.from(set);
};

const arr1 = [7, -2, 10, 5, 0];
const arr2 = [0, 10];
const res = difference(arr2, arr1);
console.log(res);

const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);
