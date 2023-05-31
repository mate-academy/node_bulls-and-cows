'use strict';

const { generateSecretNumber } = require('./generateSecretNumber');
const secretNumber = generateSecretNumber().toString();

function countBullAndCow(numberFromUser) {
  if (secretNumber === numberFromUser) {
    return [0, 0, true];
  }

  const digitsOfSecretNumber = secretNumber.split('');
  const digitsOfUserNumber = numberFromUser.split('');

  let bull = 0;
  let cow = 0;

  digitsOfSecretNumber.forEach((num, index) => {
    if (num === digitsOfUserNumber[index]) {
      digitsOfSecretNumber[index] = '';
      bull++;
    }
  });

  digitsOfUserNumber.forEach((num, index) => {
    if (digitsOfSecretNumber.slice(index).includes(num)) {
      cow++;
    }
  });

  return [bull, cow, false];
}

module.exports = {
  countBullAndCow,
};
