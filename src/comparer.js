'use strict';

const compare = (secretNumber, guessedNumber) => {
  let cows = 0;
  let bulls = 0;

  for (let index = 0; index < secretNumber.length; index++) {
    if (guessedNumber.includes(secretNumber[index])) {
      if (index === guessedNumber.indexOf(secretNumber[index])) {
        bulls += 1;
      } else {
        cows += 1;
      }
    }
  }

  return `${bulls} ${
    bulls !== 1
      ? 'bulls'
      : 'bull'
  } and ${cows} ${
    cows !== 1
      ? 'cows'
      : 'cow'
  }\nTry again: `;
};

module.exports = {
  compare,
};
