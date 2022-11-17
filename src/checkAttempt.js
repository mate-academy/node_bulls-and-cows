'use strict';

function calc(randomNumber, playerNumber) {
  let bulls = 0;
  let cows = 0;
  const secretNumber = randomNumber.split('');

  const checkingNumber = playerNumber.split('');

  for (let i = 0; i < secretNumber.length; i++) {
    if (secretNumber[i] === checkingNumber[i]) {
      bulls++;
    }
  }

  for (let j = 0; j < secretNumber.length; j++) {
    if (checkingNumber.includes(secretNumber[j])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
};

module.exports = { calc };
