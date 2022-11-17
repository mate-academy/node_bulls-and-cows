/* eslint-disable no-console */
'use strict';

const calculateBullsAndCows = (randomNumber, guess) => {
  const numbers = Array(10);

  numbers.fill(0);

  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < guess.length; i++) {
    if (randomNumber[i] === guess[i]) {
      bulls++;
    } else {
      if (randomNumber.includes(guess[i])) {
        cows++;
      }
    }
  }

  if (bulls === 4) {
    console.log('Well done! You won!');

    return true;
  } else {
    console.log(`Bulls: ${bulls}, cows: ${cows}\nTry again!`);

    return false;
  }
};

module.exports = { calculateBullsAndCows };
