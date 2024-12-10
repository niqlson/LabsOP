'use strict';

const methods = (iface) => {
  const names = [];
  for (const key in iface) {
    const func = iface[key];
    if (typeof func === 'function') {
      names.push([key, func.length]);
    }
  }
  return names;
};

const iface = {
  m1: x => [x],
  m2: function (x, y) {
      return [x, y];
  },
  m3(x, y, z) {
      return [x, y, z];
  }
}

console.log(methods(iface));