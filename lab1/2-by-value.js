'use strict'

const incObj = (num) => (num.n+=1);

const obj = {
  n : 22
};

incObj(obj)
console.dir(obj)
