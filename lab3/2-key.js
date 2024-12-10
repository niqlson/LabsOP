'use strict'

const generateKey = (length, chars) => {
  const range = chars.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * range);
    key += chars[index];
  }
  return key;
};

const characters = 'SDGS@RGLKJ:fds20-50-9))@#%*@';
const key = generateKey(12, characters);
console.log(key);
