'use strict';

const calculatingBullsAndCows = (randomNumber, guessedNumber) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < randomNumber.length; i++) {
    if (guessedNumber[i] === randomNumber[i]) {
      bulls++;
    } else if (randomNumber.split('').some(el => el === guessedNumber[i])) {
      cows++;
    }
  }

  console.log(`The result is ${bulls} 'bulls' and ${cows} 'cows'`);

  return bulls;
}

module.exports = { calculatingBullsAndCows };
