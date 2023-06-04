'use strict'
const { random } = require('./random');

function countPoints(numberFromUser) {
  if (random === numberFromUser) {
    return [0, 0, true];
  }

  const digitsOfSecretNumber = random.split('');
  const digitsOfUserNumber = numberFromUser.split('');

  let bull = 0;
  let cow = 0;
  const isWiner = bull === 4;

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

  return [bull, cow, isWiner];
}

module.exports = {
 countPoints,
}
