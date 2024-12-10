'use strict'

function iterate(object, callback) {
  for (let key in object) {
      if (object.hasOwnProperty(key)) callback(key, object[key], object);
  }
};

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});
