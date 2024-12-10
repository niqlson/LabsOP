'use strict'

const contacts = {
  Kravchuk : '+3800962223148',
  Kuchma : '+3800975791405',
};

const findPhoneByName = (name) => contacts[name];

console.log(findPhoneByName('Kravchuk'));
