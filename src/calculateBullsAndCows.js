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
      if (numbers[+guess[i]] > 0) {
        cows++;
      }

      if (numbers[+randomNumber[i]] < 0) {
        cows++;
      }

      numbers[+randomNumber[i]]++;
      numbers[+guess[i]]--;
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
