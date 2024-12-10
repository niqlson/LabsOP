'use strict'

const fn = () => {
const constObj = { name : 'Marcus' };
let letObj = { name : 'Seneca' };

constObj.name = 'Trajan';
letObj.name = 'Cesar';
 
console.log(constObj);
console.log(letObj);
}

fn();
