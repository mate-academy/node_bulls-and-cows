'use strict';

const { randomizer } = require('./randomizer');
const randomNumber = randomizer();

const game = (userNumber) => {
  const checkUserNumber = [...new Set(userNumber)];

  if (checkUserNumber.length < 4 || checkUserNumber.length > 4) {
    return 'Please, enter 4 different numbers';
  }

  let cows = 0;
  let bulls = 0;
  const secretDigitCount = {};
  const guessDigitCount = {};

  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] === +userNumber[i]) {
      bulls++;
    } else {
      secretDigitCount[randomNumber[i]]
        = (secretDigitCount[randomNumber[i]] || 0) + 1;

      guessDigitCount[userNumber[i]]
        = (guessDigitCount[userNumber[i]] || 0) + 1;
    }
  }

  for (const digit in secretDigitCount) {
    cows += Math.min(secretDigitCount[digit], (guessDigitCount[digit] || 0));
  }

  if (bulls === 4) {
    return true;
  }

  return `Bull = ${bulls}, Cow = ${cows}`;
};

module.exports = {
  game,
};
