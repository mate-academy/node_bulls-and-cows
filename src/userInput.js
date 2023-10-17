'use strict';

function userInput() {
  const numberRegex = /^\d+$/;

  const prompt = require('prompt-sync')();

  let userNumber = prompt('Guess and write number:  ');

  while (userNumber.length !== 4 || !numberRegex.test(userNumber)) {
    // eslint-disable-next-line no-console
    console.log('Incorrect number');
    userNumber = prompt('Guess and write number:  ');
    // eslint-disable-next-line no-console
  }

  return userNumber;
}
module.exports = { userInput };
