'use strict'

const contacts = [
  { name : 'Kravchuk', phone : '+3800962223148' },
  { name : 'Kuchma', phone : '+3800975791405' },
];

const findPhone = (name) => {
  for(const person of contacts) {
    if(person.name === name) {
      return person.phone;
    }
  }
};

console.log(findPhone('Kuchma'));
